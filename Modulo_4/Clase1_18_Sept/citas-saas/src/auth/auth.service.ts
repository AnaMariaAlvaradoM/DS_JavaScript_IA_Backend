import {
	ConflictException,
	Injectable,
	UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { Rol } from '../generated/prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
	constructor(
		private readonly prisma: PrismaService,
		private readonly jwtService: JwtService,
	) {}

	async register(dto: RegisterDto) {
		const existente = await this.prisma.usuario.findUnique({
			where: { email: dto.email },
		});
		if (existente) {
			throw new ConflictException('El email ya está registrado');
		}

		const password = await bcrypt.hash(dto.password, 10);
		const usuario = await this.prisma.usuario.create({
			data: {
				nombre: dto.nombre,
				email: dto.email,
				password,
				rol: Rol.DUENO,
			},
		});

		return {
			id: usuario.id,
			nombre: usuario.nombre,
			email: usuario.email,
			rol: usuario.rol,
		};
	}

	async login(dto: LoginDto) {
		const usuario = await this.prisma.usuario.findUnique({
			where: { email: dto.email },
		});
		if (!usuario || !(await bcrypt.compare(dto.password, usuario.password))) {
			throw new UnauthorizedException('Credenciales inválidas');
		}

		const access_token = await this.jwtService.signAsync({
			sub: usuario.id,
			email: usuario.email,
			rol: usuario.rol,
		});

		return { access_token };
	}
}
