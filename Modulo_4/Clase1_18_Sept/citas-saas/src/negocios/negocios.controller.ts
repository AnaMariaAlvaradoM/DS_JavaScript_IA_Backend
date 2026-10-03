import {
	Body,
	Controller,
	Get,
	Param,
	ParseIntPipe,
	Post,
	UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import {
	UsuarioActual,
	UsuarioAutenticado,
} from '../auth/usuario-actual.decorator';
import { CrearNegocioDto } from './dto/crear-negocio.dto';
import { NegociosService } from './negocios.service';

@ApiTags('negocios')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('negocios')
export class NegociosController {
	constructor(private readonly negociosService: NegociosService) {}

	@Post()
	crear(
		@Body() dto: CrearNegocioDto,
		@UsuarioActual() usuario: UsuarioAutenticado,
	) {
		return this.negociosService.crear(dto, usuario.id);
	}

	@Get()
	obtenerMios(@UsuarioActual() usuario: UsuarioAutenticado) {
		return this.negociosService.obtenerMios(usuario.id);
	}

	@Get(':id')
	obtenerUno(
		@Param('id', ParseIntPipe) id: number,
		@UsuarioActual() usuario: UsuarioAutenticado,
	) {
		return this.negociosService.obtenerUno(id, usuario.id);
	}
}
