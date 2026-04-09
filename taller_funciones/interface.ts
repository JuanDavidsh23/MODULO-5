export type Rol = "frontend" | "backend" | "fullstack" | "QA" | "DevOps";
export type Nivel = "junior" | "mid" | "senior" | "lead";
export type EstadoBug = "abierto" | "en revisión" | "resuelto" | "cerrado";
export type Prioridad = "baja" | "media" | "alta" | "crítica";
export type EstadoPR = "borrador" | "abierto" | "aprobado" | "mergeado" | "rechazado";

export interface Desarrollador {
  readonly id: number;
  nombre: string;
  rol: Rol;
  nivel: Nivel;
  stack: string[];
  disponible: boolean;
  email: string;
}

export interface  Bug {
  readonly id: number;
  titulo: string;
  descripcion: string;
  prioridad: Prioridad;
  estado: EstadoBug;
  idAsignado: number;
  fechaReporte: [number, number, number] | string;
  reproducible: boolean;
  ambiente: "desarrollo" | "staging" | "producción";
}

export interface PullRequest {
  readonly id: number;
  titulo: string;
  rama: string;
  estado: EstadoPR;
  idAutor: number;
  lineasAgregadas: number;
  lineasEliminadas: number;
  archivosModificados: number;
  revisores: number[];
}

export interface Proyecto {
  readonly id: number;
  nombre: string;
  repositorio: string;
  stack: string[];
  bugs: Bug[];
  pullRequests: PullRequest[];
}

export interface ResumenDev {
  nombre: string;
  rol: Rol;
  nivel: Nivel;
  bugsAsignados: number;
  bugsResueltos: number;
  prsAbiertos: number;
  disponible: boolean;
}