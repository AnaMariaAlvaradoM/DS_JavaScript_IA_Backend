# AgendaFácil — `citas-saas` · Cómo poner a correr el proyecto

Proyecto backend del Módulo 4 (NestJS 11 + Prisma 7 + PostgreSQL).
Sigue estos pasos **en orden**, en una terminal, dentro de la carpeta del proyecto.

> Requisitos: **Node 22+** y **PostgreSQL** instalados y corriendo.

---

## 1) Entrar a la carpeta del proyecto

```bash
cd citas-saas
```

## 2) Instalar las dependencias

```bash
npm install
```

## 3) Configurar la conexión a la base de datos

Abre el archivo `.env` y confirma la línea `DATABASE_URL`.
Cambia `postgres:postgres` si tu usuario/contraseña de PostgreSQL son distintos:

```
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/citas_saas"
JWT_SECRET="dev_secret_solo_para_pruebas_locales"
PORT=3000
```

## 4) Crear la base de datos (una vez)

Con psql:

```bash
psql -U postgres -c "CREATE DATABASE citas_saas;"
```

(o créala desde pgAdmin / tu herramienta, con el nombre `citas_saas`.)

## 5) Aplicar las migraciones (crea las tablas)

```bash
npx prisma migrate dev
```

## 6) Generar el cliente de Prisma

```bash
npx prisma generate
```

## 7) Arrancar el servidor

```bash
npm run start:dev
```

## 8) Probar

Abre en el navegador: **http://localhost:3000/docs**
Ahí está Swagger con todos los endpoints para probar registro, login, negocios, servicios, profesionales, la relación N:M y la reserva de citas.

---

## Flujo de prueba sugerido (en Swagger)

1. `POST /auth/register` → nace **CLIENTE**.
2. `POST /auth/login` → copia el `access_token` y pégalo en **Authorize** (botón candado).
3. `POST /negocios` → crea el negocio (te vuelves **DUEÑO**; vuelve a hacer login para refrescar el token).
4. `POST /negocios/1/servicios` → crea un servicio (ej. Corte, 30 min).
5. `POST /negocios/1/profesionales` → crea un profesional (ej. Luis).
6. `POST /profesionales/1/servicios` con `{ "servicioId": 1 }` → Luis ofrece Corte (relación N:M).
7. Registra otro usuario (cliente), inicia sesión con él, y `POST /negocios/1/citas` con `{ "servicioId": 1, "profesionalId": 1, "fecha": "2026-10-01T15:00:00.000Z" }` → **reserva**.
8. Intenta otra cita que se cruce en horario → **409**. Reserva un servicio que el profesional no ofrece → **400**.

---

## 9) Abrir el front (panel de pruebas)

Con el servidor del paso 7 **corriendo**, abre en el navegador el archivo:

```
frontend/index.html
```

(doble clic sobre el archivo, o arrástralo al navegador). Ahí puedes probar TODO el flujo con clics:

- **Registrarte / iniciar sesión** (naces CLIENTE).
- **Mi negocio (dueño):** crear negocio, horarios, servicios, profesionales, asignar qué servicio hace cada profesional (N:M) y ver la agenda.
- **Reservar (cliente):** escribe el N° de negocio, carga su catálogo, elige servicio + profesional + fecha y reserva.
- **Mis citas:** las que reservaste.

> Si el front dice "No se pudo conectar con el backend", revisa que el servidor esté corriendo y que la URL de arriba diga `http://localhost:3000`. El puntito verde al lado de "API" indica conexión.

---

## 10) Pagos e IA (Clase 3) — opcional para probar PRO

**Stripe (pagos):**
1. Crea cuenta en `dashboard.stripe.com` en **modo prueba** y copia tu `sk_test_...` de `Desarrolladores → Claves de API`.
2. Pégala en `.env` → `STRIPE_SECRET_KEY`.
3. Instala el Stripe CLI: `npm install -g @stripe/cli`, luego `stripe login`.
4. En otra terminal (con el server corriendo): `stripe listen --forward-to localhost:3000/webhooks/stripe`.
5. Copia el `whsec_...` que imprime y pégalo en `.env` → `STRIPE_WEBHOOK_SECRET`. **Reinicia** el server.
6. En el front, pestaña "Mi negocio" → **Hazte PRO** → paga con `4242 4242 4242 4242` (fecha futura, CVC y código postal cualquiera). El plan sube a PRO.

**IA (Gemini) — opcional:**
- Key gratis en `aistudio.google.com/apikey` → pégala en `.env` → `GEMINI_API_KEY`.
- Si la dejas vacía, la IA funciona en **modo simulado** (plantilla), sin trabar nada.
- Ya como PRO, en la agenda del negocio usa **✨ Mensaje** en cualquier cita.

---

## Si algo falla

- **Los `import` de `../generated/prisma/client` salen en rojo** → falta el paso 6 (`npx prisma generate`).
- **Error de conexión al arrancar** → PostgreSQL apagado, la base `citas_saas` no existe, o la contraseña en `.env` no coincide.
- **Una ruta responde 404** → revisa que su módulo esté en `imports` de `src/app.module.ts`.

---

© 2026 Ana Alvarado · Educadora Tech & Desarrolladora Full Stack
