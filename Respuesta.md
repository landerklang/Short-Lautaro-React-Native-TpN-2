# A1. Conceptos

## a) ¿Que significa LIFO y FIFO ?¿Cual corresponde a la pila y cual a la cola?

_Rta: LIFO significa last in,first out coresponde a la pila mientras que el FIFO significa first in,first out y corresponde a una cola_

## b) ¿Por que extremo entra y porque extremo sale un elemento en cada estructura?

Rta: En una estructura LIFO los elementos que entra y sale son añadidos en el mismo extremo llamado cima, los elementos que sale son los ultimos que fueron añadidos en la estructura.
En una estructura FIFO los elementos que se añaden entra en un extremo que se llama final y los elementos que salen van a un extremo que se llama frente.

## c) Da un ejemplo de la vida real y otro de una aplicacion movil para cada uno

_Rta: Ejeplo de LIFO:
en la vida real: apilar platos sucio para luego pasarlo a plato limpio se agarra el ultio que fue añadido
en una aplicacion movil: cuando utilizar una red social esta va guardando las diferentes pantalla que el usuario recorre y si estes decide retrocerder la aplicacion lo devuelve a la penultima pantalla que se agrego.
Ejemplo de FIFO:
En la vida real: el mejor ejemplo que puedo hacer es la cola para retirar plata en el banco
en una aplicacion movil: el metodo de cola de reproduccion de videos en youtube_

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

_El # significa que esta declarando un campo o metodo privado y el problema que evita es el encapsulamiento que javascript no a tenido en mucho tiempo_

## b) La cola usa array.shift() para desencolar. ¿Qué problema de rendimiento tiene con colas muy grandes? ¿Cómo lo resuelven las colas “serias”?

_El metodo shift() elimina el primer elemento del arreglo el problema de rendimiento que esto provoca es que debe de mover todos los elementos de posicion especificamente una mas a la izquierda y si la cola muy grande debe de reordenar muchos elementos en colas serie se utiliza un metodo llamado indice de frente que consiste en no mover los elemento, y crean dos punto uno para el frente y otro para el final con esto cuando se quiere desencolar lo que hace es avanzar el puntero del frente_

## c) ¿Qué método de array usa la pila para sacar y cuál usa la cola? ¿Por qué no pueden usar el mismo?

_La pila utiliza el metodo pop() mientras que el metodo cola utiliza Shift(), Porque estaria rompiendo sus estructura es decir LIFO es que el ultimo en entrar es el primero en salir y si se utilizara el shift no se estaria aplicando su estructura lo mismo con FIFO y se utilizara pop no se estaria utilizando su estructura de primero en entrar es el primero en salir_

# A5. Programación: una cola eficiente

class Cola {
#items = [];
#frente = 0;
#final = 0;

encolar(elemento) {
this.#items[this.#final] = elemento;
this.#final++;
}

desencolar() {
if (this.#frente === this.#final) return null;
const elemento = this.#items[this.#frente];
this.#frente++;
return elemento;
}

Frente() {
return this.#items[this.#frente];
}

get Vacia() {
return this.#frente === this.#final;
}
get Tamaño() {
return this.#final - this.#frente;
}
}

const c = new Cola();
c.encolar("ana");
c.encolar("beto");
console.log(c.desencolar());
console.log(c.Frente());
console.log(c.Vacia);
console.log(c.Tamaño);

# A6. Pila y cola dentro de Expo Router

## a) ¿Qué estructura describe el historial de pantallas de un Stack? ¿Qué pantalla es la visible y qué operación hace “atrás”?

_El historia de pantalla describe una estructura tipo LIFO, la pantalla que es visible es la que esta en la cima del tome, atras utiiliza el metodo pop para colocar como visible al tenultima pantalla que esta en la cima_

## b) ¿Qué estructura usa Expo Router para las acciones de navegación? ¿Qué pasa si el usuario toca dos links muy rápido?

_Expo router utiliza una estrutura de tipo FIFO es decir que el sistema encola cada acciones que active el usuario deacuerdo a su orden de llegada y se procesan desde el frente, cuando el usario le da a dos link el sistema mostrara cual fue el primero en darle y luego seguira con el otro_

# B1. Del archivo a la URL

## Completá la tabla. Si el archivo no genera una pantalla, explicá qué hace. Si genera un problema,

indicalo.
Archivo URL que genera / función
src/app/(tabs)/index.tsx / Genera la Url / del grupo de tablas index es la pantalla principal de la aplicacion
src/app/acerca.tsx / Genera la Url /acerca es una pantalla de acerca de
src/app/(tabs)/perfil.tsx / Genera la Url /perfil del grupo de tablas es la pantalla que mostrar el perfil del usuario
src/app/(tabs)/productos/index.tsx / Genera la Url /productos/ del grupo de tablas es la pantalla que muestra todo los producto que tiene la aplicacion
src/app/(tabs)/productos/[id].tsx / Genera la Url /productos/:id del grupo de tablas es la pantalla que muestra informacion del producto seleccionado
src/app/docs/[...slug].tsx / Es una ruta cacth-all y se encargar de guardar todas las ruta que el usuario haya navegado desde docs
src/app/\_layout.tsx / No es una pantalla es una archivo que se encarga de envolver pantallas en su carpeta
src/app/+not-found.tsx / Es una funcion que se encargar de capturar cuando el usario entra a una url que no se encuentra en la aplicacion
src/app/Boton.tsx / Es una funcion que se encargar de colocar un boton no deberia de esta en carpeta de pantallas deberia de esta en la de componentes
