import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AsistenteIaService {
  constructor(private readonly prisma: PrismaService) {}

  async generarMensajeCita(negocioId: number, citaId: number) {
    const cita = await this.prisma.cita.findUnique({
      where: { id: citaId },
      include: {
        cliente: { select: { nombre: true } },
        servicio: { select: { nombre: true, duracionMin: true } },
        profesional: { select: { nombre: true } },
        negocio: { select: { nombre: true } },
      },
    });

    if (!cita || cita.negocioId !== negocioId) {
      throw new NotFoundException('La cita no existe en este negocio');
    }

    const fecha = new Date(cita.fecha).toLocaleString('es-CO', {
      dateStyle: 'full',
      timeStyle: 'short',
    });

    const prompt =
      `Eres el asistente de la barbería/negocio "${cita.negocio.nombre}". ` +
      `Escribe un mensaje de WhatsApp corto (2 o 3 frases), cálido y en español colombiano neutro, ` +
      `para CONFIRMARLE la cita al cliente. Datos: cliente ${cita.cliente.nombre}, ` +
      `servicio "${cita.servicio.nombre}" (${cita.servicio.duracionMin} min) ` +
      `con ${cita.profesional.nombre}, el ${fecha}. ` +
      `No inventes datos que no te di. Puedes usar un emoji discreto.`;

    const texto = await this.llamarIA(prompt);
    if (texto) {
      return { modo: 'ia', mensaje: texto.trim() };
    }

    // Modo simulado: sin GEMINI_API_KEY, devolvemos una plantilla para que la
    // funcionalidad corra igual en clase.
    return {
      modo: 'simulado',
      mensaje:
        `¡Hola ${cita.cliente.nombre}! 👋 Te confirmamos tu cita en ${cita.negocio.nombre}: ` +
        `${cita.servicio.nombre} con ${cita.profesional.nombre}, el ${fecha}. ` +
        `¡Te esperamos!`,
    };
  }

  // Llama a la IA (Gemini) por HTTP. Si no hay API key, devuelve null → modo simulado.
  private async llamarIA(prompt: string): Promise<string | null> {
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      return null;
    }

    const model = process.env.GEMINI_MODEL || 'gemini-flash-latest';
    const url =
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${key}`;

    let res: Response;
    try {
      res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          // maxOutputTokens incluye los tokens de "pensamiento" del modelo.
          // Damos margen suficiente para que el mensaje salga COMPLETO (con la fecha).
          generationConfig: { temperature: 0.7, maxOutputTokens: 2048 },
        }),
      });
    } catch (e: any) {
      // Red de seguridad: si NO se pudo conectar con Gemini (red / firewall / TLS),
      // registramos el motivo real en los logs y devolvemos null → modo simulado.
      // Así la app nunca se cae por la IA; la demo siempre responde algo.
      console.error(`[IA] No se pudo conectar con Gemini: ${e?.message}`);
      return null;
    }

    if (!res.ok) {
      // Gemini respondió con error (key inválida, modelo inexistente, cuota...).
      // Lo dejamos en los logs para diagnosticar, y caemos a modo simulado.
      const detalle = await res.text();
      console.error(`[IA] Gemini respondió ${res.status}: ${detalle}`);
      return null;
    }

    const data: any = await res.json();
    const candidato = data?.candidates?.[0];

    // Si el modelo cortó la respuesta por límite de tokens, el mensaje saldría
    // incompleto: mejor caer a modo simulado (que sí trae el mensaje completo).
    if (candidato?.finishReason === 'MAX_TOKENS') {
      console.error('[IA] Gemini truncó el mensaje (MAX_TOKENS); uso modo simulado.');
      return null;
    }

    return candidato?.content?.parts?.[0]?.text ?? null;
  }
}
