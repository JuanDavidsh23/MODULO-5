import type { Bug } from "./interface.js";
import type { Desarrollador } from "./interface.js";
import { bug1,bug2, bug3, bug4, bug5 } from "./data/bugs.ts";
import {dev1,dev2,dev3,dev4 } from "./data/developer.ts"

// 1.1 DECLARATIVE FUNCTION TO GET THE DATE WITH OTHER FORMAT 
function formatearFecha(fecha: [number, number, number]): string {
  const [dia, mes, año] = fecha;

  const meses = [
    "enero", "febrero", "marzo", "abril", "mayo", "junio",
    "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
  ];

  return `${dia} de ${meses[mes - 1]} de ${año}`;
}

const bugs: Bug[] = [bug1, bug2, bug3, bug4, bug5]

function bug(){
for (const i of bugs) {
  if (Array.isArray(i.fechaReporte)) {
    i.fechaReporte = formatearFecha(i.fechaReporte);
    console.table(i)
  }
}
}


//DECLARATIVE FUNCTION TO SHOW THE DEVELOPERS INFO
function getDev(id: number ){
  const  deve: Desarrollador[] = [dev1, dev2, dev3, dev4]
  for(const i of deve){
    if(id === i.id){
      console.log(i)
      return
    }
    else{
      return console.log("id no encontrado")
    }
  }
}

//BUG AND RETURN TRUE 
function bugsTrue(bug: number){
  for(const i of bugs){
    if(bug === i.id){
      if(i.prioridad === "alta" || i.prioridad == "crítica" || i.estado === "en revisión" || i.estado === "abierto" || i.ambiente === "staging" || i.ambiente ==="producción" ){
        return true
      }else{
        return false
      }
    }
  }
  return console.log("id no encontrado")
}

console.log(bugsTrue(104))



