import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

type CrearUsuarioInput = {
  nombre: string;
  email: string;
};

type ActualizarUsuarioInput = {
  nombre?: string;
  email?: string;
};

@Injectable()
export class UsuariosService {
  constructor(private readonly prisma: PrismaService) {}

  crear(datos: CrearUsuarioInput) {
    return this.prisma.usuario.create({
      data: datos,
    });
  }

  obtenerTodos() {
    return this.prisma.usuario.findMany({
      orderBy: { id: 'asc' },
    });
  }

  obtenerPorId(id: number) {
    return this.prisma.usuario.findUnique({
      where: { id },
    });
  }

  actualizar(id: number, datos: ActualizarUsuarioInput) {
    return this.prisma.usuario.update({
      where: { id },
      data: datos,
    });
  }

  eliminar(id: number) {
    return this.prisma.usuario.delete({
      where: { id },
    });
  }
}
