import type { PullRequest } from "../interface.js";
const pr1: PullRequest = {
  id: 201,
  titulo: "feat: autenticación con Google OAuth",
  rama: "feature/google-oauth",
  estado: "abierto",
  idAutor: 1,
  lineasAgregadas: 320,
  lineasEliminadas: 45,
  archivosModificados: 8,
  revisores: [2, 4]
};

const pr2: PullRequest = {
  id: 202,
  titulo: "fix: corregir paginación en tabla de usuarios",
  rama: "fix/paginacion-usuarios",
  estado: "aprobado",
  idAutor: 3,
  lineasAgregadas: 28,
  lineasEliminadas: 15,
  archivosModificados: 2,
  revisores: [1]
};

const pr3: PullRequest = {
  id: 203,
  titulo: "refactor: optimizar queries de reportes",
  rama: "refactor/queries-reportes",
  estado: "borrador",
  idAutor: 2,
  lineasAgregadas: 180,
  lineasEliminadas: 210,
  archivosModificados: 5,
  revisores: []
};

const pr4: PullRequest = {
  id: 204,
  titulo: "chore: actualizar dependencias Q1 2025",
  rama: "chore/deps-q1",
  estado: "rechazado",
  idAutor: 4,
  lineasAgregadas: 12,
  lineasEliminadas: 12,
  archivosModificados: 1,
  revisores: [1, 2]
};

export {pr1, pr2, pr3, pr4}