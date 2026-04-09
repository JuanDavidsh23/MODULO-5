import type{ Bug } from "../interface.js";

const bug1: Bug = {
  id: 101,
  titulo: "Login falla en Safari móvil",
  descripcion: "El botón de login no responde en Safari versión 16 en iOS",
  prioridad: "crítica",
  estado: "abierto",
  idAsignado: 1,
  fechaReporte: [12, 3, 2025],
  reproducible: true,
  ambiente: "producción"
};

const bug2: Bug = {
  id: 102,
  titulo: "Tabla de usuarios no pagina correctamente",
  descripcion: "Al pasar de la página 3 en adelante los datos se repiten",
  prioridad: "alta",
  estado: "en revisión",
  idAsignado: 3,
  fechaReporte: [18, 3, 2025],
  reproducible: true,
  ambiente: "staging"
};

const bug3: Bug = {
  id: 103,
  titulo: "Timeout en endpoint /api/reportes",
  descripcion: "El endpoint demora más de 30 segundos con más de 500 registros",
  prioridad: "alta",
  estado: "abierto",
  idAsignado: 2,
  fechaReporte: [20, 3, 2025],
  reproducible: false,
  ambiente: "producción"
};

const bug4: Bug = {
  id: 104,
  titulo: "Typo en mensaje de confirmación",
  descripcion: "Dice 'guardardo' en vez de 'guardado'",
  prioridad: "baja",
  estado: "cerrado",
  idAsignado: 3,
  fechaReporte: [22, 3, 2025],
  reproducible: true,
  ambiente: "desarrollo"
};

const bug5: Bug = {
  id: 105,
  titulo: "Memory leak en dashboard de métricas",
  descripcion: "El componente no libera suscripciones al desmontar",
  prioridad: "crítica",
  estado: "abierto",
  idAsignado: 1,
  fechaReporte: [25, 3, 2025],
  reproducible: true,
  ambiente: "producción"
};

export {bug1, bug2, bug3, bug4, bug5}



