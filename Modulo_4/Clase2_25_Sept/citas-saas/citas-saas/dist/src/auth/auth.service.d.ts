import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { Rol } from '../generated/prisma/client';
export declare class AuthService {
    private readonly prisma;
    private readonly jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    register(dto: RegisterDto): Promise<{
        id: number;
        nombre: string;
        email: string;
        rol: Rol;
    }>;
    login(dto: LoginDto): Promise<{
        access_token: string;
    }>;
}
