// src/classes/AdminUsuario.ts

import { UsuarioClass } from "./UsuarioClass";

export class AdminUsuario extends UsuarioClass {
  constructor(
    id: number,
    nombre: string,
    edad: number,
    email: string,
    activo: boolean,
    public permisos: string[]
  ) {
    super(id, nombre, edad, email, activo);
  }
}
