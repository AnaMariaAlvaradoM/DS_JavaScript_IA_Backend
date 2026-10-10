import { AsistenteIaService } from './asistente-ia.service';
export declare class AsistenteIaController {
    private readonly asistenteIaService;
    constructor(asistenteIaService: AsistenteIaService);
    generar(negocioId: number, citaId: number): Promise<{
        modo: string;
        mensaje: string;
    }>;
}
