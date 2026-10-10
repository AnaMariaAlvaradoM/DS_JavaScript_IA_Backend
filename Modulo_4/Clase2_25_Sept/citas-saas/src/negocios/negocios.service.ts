import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Rol } from '../generated/prisma/client';
import { CrearNegocioDto } from './dto/crear-negocio.dto';

@Injectable()
export class NegociosService {
  constructor(private readonly prisma: PrismaService) {}

  // Al crear el negocio: nace con configuración y suscripción FREE por defecto,
  // y su creador pasa de CLIENTE a DUENO (ambas cosas en una transacción).
  async crear(dto: CrearNegocioDto, duenoId: number) {
    const [negocio] = await this.prisma.$transaction([
      this.prisma.negocio.create({
        data: {
          nombre: dto.nombre,
          descripcion: dto.descripcion,
          telefono: dto.telefono,
          direccion: dto.direccion,
          duenoId,
          configuracion: { create: {} },
          suscripcion: { create: {} },
        },
        include: { configuracion: true, suscripcion: true },
      }),
      this.prisma.usuario.update({
        where: { id: duenoId },
        data: { rol: Rol.DUENO },
      }),
    ]);
    return negocio;
  }

  obtenerMios(duenoId: number) {
    return this.prisma.negocio.findMany({
      where: { duenoId },
      orderBy: { id: 'asc' },
    });
  }

  // Catálogo PÚBLICO de un negocio: lo que un cliente ve para poder reservar.
  // No exige login ni propiedad: es la vitrina del negocio.
  async catalogo(negocioId: number) {
    const negocio = await this.prisma.negocio.findUnique({
      where: { id: negocioId },
      select: { id: true, nombre: true, descripcion: true },
    });
    if (!negocio) {
      throw new NotFoundException('El negocio no existe');
    }

    const servicios = await this.prisma.servicio.findMany({
      where: { negocioId, activo: true },
      select: { id: true, nombre: true, duracionMin: true, precio: true },
      orderBy: { id: 'asc' },
    });

    const profesionales = await this.prisma.profesional.findMany({
      where: { negocioId, activo: true },
      select: {
        id: true,
        nombre: true,
        especialidad: true,
        servicios: { select: { servicioId: true } },
      },
      orderBy: { id: 'asc' },
    });

    return {
      negocio,
      servicios,
      profesionales: profesionales.map((p) => ({
        id: p.id,
        nombre: p.nombre,
        especialidad: p.especialidad,
        servicioIds: p.servicios.map((s) => s.servicioId),
      })),
    };
  }

  async obtenerUno(id: number, duenoId: number) {
    const negocio = await this.prisma.negocio.findUnique({
      where: { id },
      include: { configuracion: true, suscripcion: true },
    });

    if (!negocio) {
      throw new NotFoundException('El negocio no existe');
    }

    if (negocio.duenoId !== duenoId) {
      throw new ForbiddenException('Este negocio no es tuyo');
    }

    return negocio;
  }
}
