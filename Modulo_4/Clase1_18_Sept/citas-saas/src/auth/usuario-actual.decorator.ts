import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Rol } from '../generated/prisma/client';

export type UsuarioAutenticado = { id: number; email: string; rol: Rol };

export const UsuarioActual = createParamDecorator(
	(_data: unknown, context: ExecutionContext): UsuarioAutenticado => {
		const request = context
			.switchToHttp()
			.getRequest<{ user: UsuarioAutenticado }>();
		return request.user;
	},
);
