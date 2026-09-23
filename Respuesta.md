# A1. Conceptos

## a) ¿Que significa LIFO y FIFO ?¿Cual corresponde a la pila y cual a la cola?
*Rta: LIFO significa last in,first out coresponde a la pila mientras que el FIFO significa first in,first out y corresponde a una cola*
## b) ¿Por que extremo entra y porque extremo sale un elemento en cada estructura?
Rta: En una estructura LIFO los elementos que entra y sale son añadidos en el mismo extremo llamado cima, los elementos que sale son los ultimos que fueron añadidos en la estructura.
En una estructura FIFO los elementos que se añaden entra en un extremo que se llama final y los elementos que salen van a un extremo que se llama frente.
## c) Da un ejemplo de la vida real y otro de una aplicacion movil para cada uno
*Rta: Ejeplo de LIFO:
en la vida real: apilar platos sucio para luego pasarlo a plato limpio se agarra  el ultio que fue añadido
en una aplicacion movil: cuando utilizar una red social esta va guardando las diferentes pantalla que el usuario recorre y si estes decide retrocerder la aplicacion lo devuelve a la penultima pantalla que se agrego.
Ejemplo de FIFO:
En la vida real: el mejor ejemplo que puedo hacer es la cola para retirar plata en el banco
en una aplicacion movil: el metodo de cola de reproduccion de videos en youtube*

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
1)Perfil
2)Perfil
3)Productos
4)false

# A3. Seguimiento de una pila

seguimiento-cola.js
const c = new Cola();
c.encolar('Ana');
c.encolar('Beto');
c.desencolar();
c.encolar('Caro');
c.encolar('Dani');
console.log(c.frente()); // (1)
console.log(c.desencolar()); // (2)
console.log(c.vacia); // (3)

A3.Respuestas:
1)Beto
2)Beto
3)false

# A4. Análisis de la implementación

## a) En las clases de clase, el array se declara como #items. ¿Qué significa el # y qué problema evita?
*El # significa que esta declarando un campo o metodo privado y el problema que evita es el encapsulamiento que javascript no a tenido en mucho tiempo*
## b) La cola usa array.shift() para desencolar. ¿Qué problema de rendimiento tiene con colas muy grandes? ¿Cómo lo resuelven las colas “serias”?
*El metodo shift() elimina el primer elemento del arreglo el problema de rendimiento que esto provoca es que debe de mover todos los elementos de posicion especificamente una mas a la izquierda y si la cola muy grande debe de reordenar muchos elementos *
## c) ¿Qué método de array usa la pila para sacar y cuál usa la cola? ¿Por qué no pueden usar el mismo?

