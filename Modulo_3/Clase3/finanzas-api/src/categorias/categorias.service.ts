import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CrearCategoriaDto } from './dto/crear-categoria.dto';
import { ActualizarCategoriaDto } from './dto/actualizar-categoria.dto';

@Injectable()
export class CategoriasService {
  constructor(private readonly prisma: PrismaService) {}

  crear(dto: CrearCategoriaDto) {
    return this.prisma.categoria.create({ data: dto });
  }

  obtenerTodas() {
    return this.prisma.categoria.findMany({ orderBy: { id: 'asc' } });
  }

  obtenerUna(id: number) {
    return this.prisma.categoria.findUniqueOrThrow({ where: { id } });
  }

  actualizar(id: number, dto: ActualizarCategoriaDto) {
    return this.prisma.categoria.update({ where: { id }, data: dto });
  }

  eliminar(id: number) {
    return this.prisma.categoria.delete({ where: { id } });
  }
}