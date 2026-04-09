Lo que deben implementar

A partir de aquí todo es suyo. Implementen cada función respetando la firma indicada. No pueden cambiar los tipos de los parámetros ni del retorno.

Bloque 1 — Funciones de utilidad

Usar: function declaration

1.1

Recibe una fecha como tupla [día, mes, año] y retorna un string con formato legible.

1.2

Recibe un Desarrollador y retorna un string con su presentación:

Nivel en mayúsculas
Nombre
Rol
Estado de disponibilidad
1.3

Recibe un Bug y retorna true si:

Prioridad es alta o crítica
Estado no es resuelto ni cerrado
Ambiente es staging o producción
1.4

Recibe un PullRequest y clasifica su tamaño:

Pequeño
Mediano
Grande
Bloque 2 — Búsqueda y filtrado

Usar: arrow functions con llaves {}

2.1

Filtrar desarrolladores disponibles.

2.2

Filtrar bugs por estado.

2.3

Obtener bugs asignados a un desarrollador por id.

2.4

Obtener pull requests sin revisores.

2.5

Buscar desarrolladores por tecnología en su stack.

Bloque 3 — Arrow functions de una línea

Sin llaves y sin return

3.1

Retornar true si el desarrollador es senior o lead.

3.2

Retornar título en mayúsculas si el bug es crítico, si no normal.

3.3

Retornar true si el PR está aprobado y tiene revisores.

3.4

Retornar el nombre de un desarrollador por id o un mensaje si no existe.

Bloque 4 — Construcción y cálculo

Libre (justificar elección)

4.1

Construir un ResumenDev con:

Datos básicos
Cantidad de bugs asignados
Bugs resueltos
PRs abiertos
Disponibilidad
4.2

Contar bugs por estado:

abiertos
enRevision
resueltos
cerrados
4.3

Obtener todas las tecnologías del equipo sin repetir.

4.4

Imprimir un reporte del proyecto en consola con:

Información general
Lista de bugs
Lista de pull requests

Debe reutilizar funciones ya creadas.

Bloque 5 — Auditoría
5.1

Generar alertas sobre bugs:

Bugs críticos abiertos en producción
Bugs no reproducibles abiertos
Desarrolladores con muchos bugs abiertos
Bugs en revisión con dev no disponible
5.2

Generar alertas sobre pull requests:

PRs abiertos sin revisores
PRs aprobados muy grandes
PRs cuyo autor no está disponible

Restricciones
No usar any
Todo debe estar tipado
Respetar tipo de función por bloque
Reutilizar lógica existente
Proyecto debe compilar y ejecutar sin errores