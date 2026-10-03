import { Strategy } from 'passport-jwt';
import { Rol } from '../generated/prisma/client';
type JwtPayload = {
    sub: number;
    email: string;
    rol: Rol;
};
declare const JwtStrategy_base: new (...args: [opt: import("passport-jwt").StrategyOptionsWithRequest] | [opt: import("passport-jwt").StrategyOptionsWithoutRequest]) => Strategy & {
    validate(...args: any[]): unknown;
};
export declare class JwtStrategy extends JwtStrategy_base {
    constructor();
    validate(payload: JwtPayload): {
        id: number;
        email: string;
        rol: Rol;
    };
}
export {};
