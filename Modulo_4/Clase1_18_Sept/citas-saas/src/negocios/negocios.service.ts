import {
	ForbiddenException,
	Injectable,
	NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CrearNegocioDto } from './dto/crear-negocio.dto';

@Injectable()
export class NegociosService {
	constructor(private readonly prisma: PrismaService) {}

	crear(dto: CrearNegocioDto, duenoId: number) {
		return this.prisma.negocio.create({
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
		});
	}

	obtenerMios(duenoId: number) {
		return this.prisma.negocio.findMany({
			where: { duenoId },
			orderBy: { id: 'asc' },
		});
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
