import LinkedList from "./src/linked-list.js";

let list = new LinkedList();

list.addToEnd("Ana");
list.addToEnd("Bruno");
list.addToEnd("Carla");
list.addToEnd("Daniel");
list.addToStart("Zara");
list.addToStart("Pepe");
list.insertAt(6, "Yohan");

// let node = list.get(2)
// console.log(node.value)

//list.print();
list.toString();

const answer = list.find("Yohan");
console.log(answer);

list.removeAt(2);

list.toString();

// list.removeFromStart() //shift()
// list.removeFromEnd() // pop()
// list.removeAt(index) // splice(index, 1)

//list.isEmpty()
//list.clear()
//list.size()

// list.shuffle()
