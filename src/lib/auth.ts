// src/lib/auth.ts
import { writable } from 'svelte/store';

interface Usuario {
    nombre: string;
    rol: string;
    email: string;
}

const storedUser = typeof window !== 'undefined' ? localStorage.getItem('usuario_activo') : null;

export const usuarioActivo = writable<Usuario | null>(storedUser ? JSON.parse(storedUser) : null);

export function iniciarSesionSimulada(usuario: Usuario) {
    localStorage.setItem('usuario_activo', JSON.stringify(usuario));
    usuarioActivo.set(usuario);
}

export function cerrarSesion() {
    localStorage.removeItem('usuario_activo');
    usuarioActivo.set(null);
}