import type { Desarrollador } from "../interface.js";

const dev1: Desarrollador = {
  id: 1,
  nombre: "Valentina Torres",
  rol: "fullstack",
  nivel: "senior",
  stack: ["TypeScript", "React", "Node.js", "PostgreSQL"],
  disponible: true,
  email: "v.torres@devteam.co"
};

const dev2: Desarrollador = {
  id: 2,
  nombre: "Sebastián Molina",
  rol: "backend",
  nivel: "mid",
  stack: ["Node.js", "Express", "MongoDB", "Docker"],
  disponible: false,
  email: "s.molina@devteam.co"
};

const dev3: Desarrollador = {
  id: 3,
  nombre: "Camila Ríos",
  rol: "frontend",
  nivel: "junior",
  stack: ["TypeScript", "React", "CSS"],
  disponible: true,
  email: "c.rios@devteam.co"
};

const dev4: Desarrollador = {
  id: 4,
  nombre: "Andrés Peña",
  rol: "QA",
  nivel: "lead",
  stack: ["Cypress", "Jest", "Postman", "TypeScript"],
  disponible: true,
  email: "a.pena@devteam.co"
};

export {dev1, dev2, dev3, dev4 }
