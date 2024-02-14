class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export default class LinkedList {
  constructor() {
    // head
    // null
    this.head = null;
    this.length = 0;
  }

  addToStart(value) {
    // create empty Node
    let newNode = new Node(value);
    // se enlaza newNode a head
    newNode.next = this.head;
    // se pone head en newNode
    this.head = newNode;
    // se actualiza la longitud de la lista
    this.length++;
  }

  addToEnd(value) {
    let newNode = new Node(value);

    if (this.head == null) {
      // si la lista está vacía
      // se apunta head al nuevo nodo
      this.head = newNode;
    } else {
      // de lo contrario, se recorre toda la lista hasta
      // encontrar el último elemento (el que tiene next = null)
      let current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      // al encontrarlo, se le pone newNode como siguiente
      current.next = newNode;
    }

    // se actualiza la longitud de la lista
    this.length++;
  }

  insertAt(index, value) {
    // validamos el valor de index
    if (index < 0 || index > this.length) {
      throw new Error("index sobrepasa los límites de la lista");
    }

    // se crea un nuevo nodo
    let newNode = new Node(value);

    if (index === 0) {
      // si index es 0, es un addToStart(value)
      this.addToStart(value);
    } else {
      // de lo contrario, nos tenemos que ubicar
      // en el nodo (index - 1)
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }
      // y hacer la insersión
      newNode.next = current.next;
      current.next = newNode;
    }

    this.length++;
  }

  at(index) {
    // validamos el valor de index
    if (index < 0 || index >= this.length) {
      throw new Error("index sobrepasa los límites de la lista");
    }

    // recorremos la lista "index" veces
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }

    // se retorna el elemento en la posición "index"
    return current;
  }

  clear() {
    this.head = null;
    this.length = 0;
  }

  isEmpty() {
    return this.length === 0;
  }

  size() {
    return this.length;
  }

  print() {
    // se recorre los elementos de la lista
    // y se imprime su valor mientras exista
    let current = this.head;
    while (current != null) {
      console.log(current.value);
      current = current.next;
    }
  }

  head() {
    return this.head;
  }

  tail() {
    let current = this.head;

    while (current.next != null) {
      current = current.next;
    }
    return current;
  }

  pop() {
    if (!this.head) return null;

    let previous = this.head;
    let current = previous.next;

    if (!current) {
      this.clear();
      return previous;
    }

    while (current.next !== null) {
      previous = current;
      current = current.next;
    }

    previous.next = null;
    return current;
  }

  contains(value) {
    if (!this.head) return false;

    let current = this.head;

    while (current.next !== null) {
      if (current.value === value) return true;
      current = current.next;
    }

    return false;
  }

  find(value) {
    if (!this.head) return null;

    let current = this.head;
    let index = 0;

    while (current !== null) {
      if (current.value === value) return index;
      current = current.next;
      index++;
    }

    return null;
  }

  toString() {
    if (!this.head) return null;

    let current = this.head;
    let string = this.head.value;

    current = current.next;

    while (current != null) {
      string = `${string} -> ${current.value}`;
      current = current.next;
    }

    console.log(string);
  }
}
