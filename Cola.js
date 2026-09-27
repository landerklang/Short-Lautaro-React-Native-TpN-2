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
