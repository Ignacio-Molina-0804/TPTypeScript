// src/main.ts

import { Usuario } from './interfaces';
import { UsuarioClass } from './classes/UsuarioClass';
import { AdminUsuario } from './classes/AdminUsuario';

// Parte 2: Array de usuarios
const usuarios: Usuario[] = [
  { id: 1, nombre: "Juan", edad: 25, email: "juan@mail.com", activo: true },
  { id: 2, nombre: "Ana", edad: 30, email: "ana@mail.com", activo: false },
  { id: 3, nombre: "Luis", edad: 22, email: "luis@mail.com", activo: true }
];

const usuariosActivos = usuarios.filter(usuario => usuario.activo);
console.log('Usuarios activos:', usuariosActivos);

// Parte 3: Clases y Objetos
const user1 = new UsuarioClass(1, "María", 28, "maria@mail.com", true);
const user2 = new UsuarioClass(2, "Pedro", 35, "pedro@mail.com", false);
console.log(user1);
console.log(user2);
user1.toggleActivo();
console.log('Después de toggleActivo:', user1);

const admin = new AdminUsuario(3, "Admin", 40, "admin@mail.com", true, ["crear", "editar", "eliminar"]);
console.log('Admin:', admin);

// Parte 4: Arrays de productos
const productos = [
  { id: 1, nombre: "Laptop", precio: 1000, stock: 5 },
  { id: 2, nombre: "Mouse", precio: 20, stock: 0 },
  { id: 3, nombre: "Teclado", precio: 50, stock: 10 },
];

const nombresProductos = productos.map(p => p.nombre);
console.log('Nombres de productos:', nombresProductos);

const productosConStock = productos.filter(p => p.stock > 0);
console.log('Productos en stock:', productosConStock);

productos.sort((a, b) => a.precio - b.precio);
console.log('Productos ordenados por precio:', productos);

productos.push({ id: 4, nombre: "Monitor", precio: 200, stock: 7 });
console.log('Después de push:', productos);

productos.pop();
console.log('Después de pop:', productos);

// Parte 5: Tipos Genéricos
function getRandomItem<T>(items: T[]): T {
  const randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

console.log('Random número:', getRandomItem([1, 2, 3, 4]));
console.log('Random string:', getRandomItem(["a", "b", "c"]));
console.log('Random usuario:', getRandomItem(usuarios));

interface Caja<T> {
  contenido: T;
}

class CajaClass<T> implements Caja<T> {
  constructor(public contenido: T) {}
}

const cajaNumero = new CajaClass<number>(123);
const cajaString = new CajaClass<string>("Hola Mundo");
const cajaUsuario = new CajaClass<Usuario>({ id: 1, nombre: "Mario", edad: 30, email: "mario@mail.com", activo: true });

console.log(cajaNumero, cajaString, cajaUsuario);

// Parte 6: Promesas y Async/Await
async function obtenerDatos(): Promise<{ id: number; nombre: string }[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, nombre: "Dato 1" },
        { id: 2, nombre: "Dato 2" },
        { id: 3, nombre: "Dato 3" },
      ]);
    }, 3000);
  });
}

async function mostrarDatos() {
  const datos = await obtenerDatos();
  console.log('Datos obtenidos:', datos);
}

mostrarDatos();

async function obtenerUsuariosAPI() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  console.log('Usuarios API:', data);
}

obtenerUsuariosAPI();

// Parte 7: Manipulación del DOM
function renderizarUsuarios(usuarios: { nombre: string; email: string }[]) {
  const lista = document.getElementById('lista-usuarios');
  if (lista) {
    lista.innerHTML = usuarios.map(usuario =>
      `<li>${usuario.nombre} - ${usuario.email}</li>`
    ).join('');
  }
}

document.getElementById('btn-cargar')?.addEventListener('click', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  const usuariosSimple = data.map((user: any) => ({
    nombre: user.name,
    email: user.email
  }));

  renderizarUsuarios(usuariosSimple);
});
