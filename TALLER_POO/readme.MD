                                                        TIPOS DE ARQUITECTURA 

ARQUITECTURA MONOLÍTICA 

El estilo arquitectónico monolítico consiste en crear una aplicación autosuficiente que contenga absolutamente toda la funcionalidad necesaria para realizar la tarea para la cual fue diseñada, sin contar con dependencias externas que complementen su funcionalidad. En este sentido, sus componentes trabajan juntos, compartiendo los mismos recursos y memoria. En pocas palabras, una aplicación monolítica es una unidad cohesiva de código.

my-ts-app/
│
├── src/
│   ├── controllers/
│   ├── services/
│   ├── models/
│   ├── interfaces/
│   ├── data/
│   ├── utils/
│   ├── routes/
│   ├── config/
│   └── index.ts
│
├── dist/
├── node_modules/
├── package.json
└── tsconfig.json


ARQUITECTURA EN CAPAS

La Arquitectura en Capas (Layered Architecture) es uno de los patrones arquitectónicos más utilizados en el desarrollo de software. Su propósito principal es organizar el código en diferentes niveles de abstracción, separando las responsabilidades de cada parte del sistema y facilitando su mantenibilidad, escalabilidad y testabilidad. En este artículo exploraremos en qué consiste la Arquitectura en Capas, sus beneficios, estructura, mejores prácticas y una implementación sencilla en Node.js.


my-layered-app/
│
├── src/
│   ├── presentation/
│   │   ├── controllers/
│   │   └── routes/
│   │
│   ├── business/
│   │   └── services/
│   │
│   ├── data/
│   │   ├── repositories/
│   │   └── database/
│   │
│   ├── domain/
│   │   ├── models/
│   │   └── interfaces/
│   │
│   ├── utils/
│   └── index.ts
│
├── dist/
├── package.json
└── tsconfig.json

ARQUITECTURA MICROSERVICIOS

La arquitectura de microservicios es un enfoque moderno y flexible para el diseño de aplicaciones. En lugar de construir una sola aplicación monolítica, la descomponemos en pequeños servicios independientes. Cada servicio se centra en una tarea específica y se comunica con otros servicios a través de interfaces bien definidas.

microservices-app/
│
├── auth-service/
├── user-service/
├── payment-service/
└── gateway/ (opcional)


auth-service/
│
├── src/
│   ├── controllers/
│   ├── services/
│   ├── data/
│   ├── interfaces/
│   └── index.ts
│
├── package.json
└── tsconfig.json

ARQUITECTURA MVC

MVC (Modelo-Vista-Controlador) es un patrón en el diseño de software comúnmente utilizado para implementar interfaces de usuario, datos y lógica de control. Enfatiza una separación entre la lógica de negocios y su visualización. Esta "separación de preocupaciones" proporciona una mejor división del trabajo y una mejora de mantenimiento. Algunos otros patrones de diseño se basan en MVC, como MVVM (Modelo-Vista-modelo de vista), MVP (Modelo-Vista-Presentador) y MVW (Modelo-Vista-Whatever).

mvc-app/
│
├── src/
│   ├── models/
│   ├── views/
│   ├── controllers/
│   ├── data/
│   └── index.ts
│
├── dist/
├── package.json
└── tsconfig.json

ARQUITECTURA HEXAGONAL

La arquitectura hexagonal (también conocida como patrón de puertos y adaptadores) es un estilo de arquitectura de software propuesto por Alistair Cockburn en 2005 (Patrón de arquitectura hexagonal - AWS Guía prescriptiva). Su objetivo principal es lograr un bajo acoplamiento entre la lógica de negocio de una aplicación y los detalles de implementación de la infraestructura (bases de datos, interfaces de usuario, frameworks, etc.). En lugar de depender directamente de estas tecnologías externas, la aplicación central se comunica con ellas a través de interfaces bien definidas, llamadas puertos, y de implementaciones de esas interfaces, llamadas adaptadores.

hexagonal-app/
│
├── src/
│   ├── domain/          ← núcleo (reglas puras)
│   │   ├── models/
│   │   └── ports/
│   │
│   ├── application/     ← casos de uso
│   │   └── services/
│   │
│   ├── infrastructure/  ← cosas externas
│   │   ├── database/
│   │   └── adapters/
│   │
│   ├── interfaces/      ← entrada (controllers, CLI, API)
│   │   └── controllers/
│   │
│   └── index.ts
│
├── package.json
└── tsconfig.json


                                                 GENERICOS EN TYPESCRIPT     



Investiga qué son los genéricos (generics) en TypeScript y para qué sirven.

Los genéricos (Generics) son una característica que permite crear funciones, clases o interfaces reutilizables que trabajan con diferentes tipos de datos sin perder el tipado.

function identity(value: any): any {
  return value;
}

Problemas:

Se pierde el tipo original
No hay validación de TypeScript
Mayor riesgo de errores

Diferencia entre any y <T>
any	                                                     <T>
Pierde el tipo	                                  Mantiene el tipo
Sin validación	                                   Tipado seguro
Puede causar errores en ejecución	        Errores detectados en compilación
No recomendado	                                   Buena práctica


FUNCION
function nombreFuncion<T>(param: T): T {
  return param;
}


CLASE
class Box<T> {
  constructor(public value: T) {}

  getValue(): T {
    return this.value;
  }
}

const cajaNumero = new Box<number>(10);
const cajaTexto = new Box<string>("hola");


¿Qué son las constraints (<T extends ...>)?
Son restricciones que indican que el tipo genérico debe cumplir una condición.

function printName<T extends { name: string }>(obj: T) {
  console.log(obj.name);
}

printName({ name: "Juan" });        // sirve
printName({ name: "Ana", age: 20 }); // sirve
printName({ age: 20 });             //  error