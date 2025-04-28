// src/interfaces.ts

export interface Usuario {
    id: number;
    nombre: string;
    edad: number;
    email: string;
    activo: boolean;
  }
  
  export type UsuarioType = {
    id: number;
    nombre: string;
    edad: number;
    email: string;
    activo: boolean;
  }
  
  /*
  Diferencia entre interfaces y types:
  - Interfaces se pueden extender, combinar.
  - Types son más flexibles para combinaciones de tipos, pero no se pueden extender tan fácil.
  */
  