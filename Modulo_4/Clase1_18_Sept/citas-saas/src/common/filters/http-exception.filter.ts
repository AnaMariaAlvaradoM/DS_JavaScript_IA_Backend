import {
	ArgumentsHost,
	Catch,
	ExceptionFilter,
	HttpException,
	HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
	catch(exception: unknown, host: ArgumentsHost) {
		const context = host.switchToHttp();
		const response = context.getResponse<Response>();
		const request = context.getRequest<Request>();
		const isHttpException = exception instanceof HttpException;
		const statusCode = isHttpException
			? exception.getStatus()
			: HttpStatus.INTERNAL_SERVER_ERROR;

		let message: string | string[] = 'Error interno del servidor';
		if (isHttpException) {
			const body = exception.getResponse();
			if (typeof body === 'string') {
				message = body;
			} else if (typeof body.message === 'string' || Array.isArray(body.message)) {
				message = body.message;
			} else {
				message = exception.message;
			}
		} else {
			console.error(exception);
		}

		response.status(statusCode).json({
			statusCode,
			timestamp: new Date().toISOString(),
			path: request.url,
			message,
		});
	}
}
