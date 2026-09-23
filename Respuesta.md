# A1. Conceptos

## a) ¿Que significa LIFO y FIFO ?¿Cual corresponde a la pila y cual a la cola?

## b) ¿Por que extremo entra y porque extremo sale un elemento en cada estructura?

## c) Da un ejemplo de la vida real y otro de una aplicacion movil para cada uno

# A2. Seguimiento de una pila

seguimiento-pila.js
const p = new Pila();
p.push('Inicio');
p.push('Productos');
p.push('Detalle 3');
p.pop();
p.push('Perfil');
console.log(p.tope()); // (1)
console.log(p.pop()); // (2)
console.log(p.tope()); // (3)
console.log(p.vacia); // (4)

A2.Respuestas:
