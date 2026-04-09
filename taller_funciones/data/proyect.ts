import type { Proyecto } from "../interface.js";
import {bug1,bug2,bug3,bug4,bug5} from "./bugs.js"
import { pr1, pr2, pr3, pr4 } from "./pull_request.js";

const proyecto: Proyecto = {
  id: 1,
  nombre: "DevTrack Platform",
  repositorio: "https://github.com/devteam/devtrack",
  stack: ["TypeScript", "React", "Node.js", "PostgreSQL", "Docker"],
  bugs: [bug1, bug2, bug3, bug4, bug5],
  pullRequests: [pr1, pr2, pr3, pr4]
};