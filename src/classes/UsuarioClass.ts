// src/classes/UsuarioClass.ts

import { Usuario } from "../interfaces";

export class UsuarioClass implements Usuario {
  constructor(
    public id: number,
    public nombre: string,
    public edad: number,
    public email: string,
    public activo: boolean
  ) {}

  toggleActivo() {
    this.activo = !this.activo;
  }
}
