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
src/app/docs/[...slug].tsx / Es una ruta catch-all y se encarga de capturar cualquier url que se encuentre dentro de docs es para mostrar contenido segun la url
src/app/\_layout.tsx / No es una pantalla es una archivo que se encarga de envolver pantallas en su carpeta
src/app/+not-found.tsx / Es una pantalla especial que aparece cuando expo router no encuentra la ruta
src/app/Boton.tsx / Es un componente que se encargar de colocar un boton y esta esta en la carpeta de app generando una ruta llamada Boton lo cual no deberia de hacer eso.

# B2. De la URL al archivo

## Indicá qué archivo (ruta completa dentro de src/app) tenés que crear para que existan estas URLs:

/categorias/bebidas (y cualquier otra categoría) / src/app/categorias/[categorias].tsx
/buscar?q=mate&categoria=kiosco / src/app/buscar.tsx
/ayuda/pagos/tarjeta y /ayuda/horarios / src/app/ayuda/pagos/tarjeta.tsx y src/app/ayuda/horarios.tsx
/ayuda (con una pantalla propia) / src/app/ayuda/index.tsx

# B3. Verdadero o falso

## Indicá V o F y justificá las falsas.

## a) Con Expo Router, cada pantalla nueva se debe registrar en una tabla de configuración. F

Rta: Es falso en expo router utiliza file-based routing es decir que no es necesario configurar las tablas esta ya crea los archivos y automaticamente se convierte en rutas

## b) Los archivos \_layout.tsx son pantallas que el usuario puede visitar. F

Rta: Es falso Porque los \_layout.tsx no son pantallas son archivos que se encargan de envolver pantallas en su carpeta

## c) Una carpeta entre paréntesis, como (tabs), no aparece en la URL. V

## d) Para agregar una librería conviene usar npm install, porque siempre trae la última versión. F

Rta: Es falso porque el comando npm install lo que hace es instalar las dependencias que se encuentra en el package.json y esta le dice de forma exacta a npm que version instalar solamente si se colocar el mismo comando pero el nombre de la dependencia alado se instalara la ultima version.

## e) En package.json, "main": "expo-router/entry" reemplaza al viejo App.tsx. V

## f) La ruta /\_sitemap lista todas las rutas de la app y sirve para depurar. V

## g) Si existen docs/index.tsx y docs/[...slug].tsx, la URL /docs muestra docs/index.tsx. V

## h) En SDK 57, expo-router usa el mismo número de versión mayor que el SDK (57) V

# C1. Métodos de router

## Completá qué le hace cada método a la pila del Stack.

Método Qué le hace a la pila
router.push(href) | Este metodo lo que hace es añadirle encima a la pila
router.navigate(href) | Este metodo lo que hace es navega a la pantalla si existe en la pila vuelve a ella si no la agrega
router.replace(href) | Este metodo lo que hace es remplazar el elemento que se encuentre en la pila superior por la que esta ahora
router.back() | Este metodo lo que hace sacar un elemento de la pila y mostrar el que se encuentra debajo de la cima
router.dismissTo(href) | Este metodo lo que hace es descartar un numero de pantallas en la pila hasta llegar al href indicado
router.dismissAll() | Este metodo lo que hace es descartar todas las pantallas de la pila
router.canGoBack() | Este metodo lo que hace es validar si el usuario puede ir atras
router.setParams({...}) | Este metodo lo que hace es permitir cambiar los parametro de la pantalla actual sin cambiarlos

<!-- Link:navegacion declarativa,inicias por el usuario
router:Navegacion imperativa,decidido por el codigo -->
<!-- modal: son componentes de interfaz de usuario para mostrar en una ventaja emergente -->

# C3. ¿Link o router?

## Para cada situación, elegí <Link> o router e indicá el método o prop que usarías. Justificá.

## a) El usuario toca la tarjeta de un producto en una lista. Link

Rta:Es link porque el usuario toca la tarjeta. Es navegacion declarativa Se envuelve la tarjeta con
`Link href={\/productos/${id}`}`>`.

## b) Se guarda un formulario, la API responde OK y hay que mostrar la pantalla de éxito. Router

Rta: Es router porque el sistema debe de guardar el formulario y esperar a que la base de datos le responda con un ok para poder enviarle el mensaje al usuario `router.push(/exitos)`

## c) Botón “Cancelar” dentro de un modal. Router

Rta: Es un Router porque es una funcion que el sistema añadio que se muestre durante una ventana emergente `router.back()`

## d) Después de un login exitoso hay que ir a la pantalla principal. Router

Rta:Es un router porque el sistema una ves que haya recivido el formulario y lo haya validado se encargar de redirigir al usuario a la pantalla principal. `router.replace(/home)`

## e) Volver desde el detalle de un pedido directamente a la lista de pedidos, que quedó tres pantalla mas abajo Router

Rta: Es un Router porque es funcion que se encargar de ir un nuemor de pantallas hasta llegar al que el usuario eligio `router.dismissTo("/lista_pedidos")`

# C4. Escribí el código

## a) Un <Link> que abra el producto con id 8 usando href como objeto.

## b) Un <Link> a /perfil que siempre apile, aunque la pantalla ya exista.

## c) Un botón (Pressable) propio que funcione como link a /carrito usando asChild.

# C5. Pensar

## En una web, cada <Link> se convierte en un <a href> real. ¿Qué ventaja concreta tiene eso para el usuario? ¿Qué pasa en el celular, donde no hay barra de direcciones?

Rta: le da al usuario un control en la navegacion permitiendo decidir como abrir el link si quiere copiar la url, abrir en una nueva pestaña, y tambien ayuda para el SEO, en el celular esta funciones se pierden la navegacion depende del stack de pantallas y el boton "atras" el usuario no puede copiar la url ni abrir el link en paralelo.

# D1. Comparación

## Completá la tabla.

Stack|Tabs|Drawer
¿Apila pantallas? |Sí. Cada navegación agrega una pantalla encima (LIFO).|No. Las pantallas son hermanas, se alternan.|No. Es un menú lateral que se superpone.
¿Cómo cambia de pantalla el usuario? |Navegando hacia adelante (push) o hacia atrás (back / gesto).|Tocando las pestañas de la barra inferior.|Deslizando desde el borde o tocando el botón de menú.
¿Desde dónde se importa en SDK 57? |import { Stack } from 'expo-router'|import { Tabs } from 'expo-router'|import { Drawer } from 'expo-router/drawer'  
Un caso de uso típico |Lista → detalle (ej: productos → producto). Flujo jerárquico.|Navegación principal (Inicio, Perfil, Configuración).|App con muchas secciones (ej: menú lateral de configuración).
