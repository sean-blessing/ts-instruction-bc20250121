import { Item } from "./item.class";

let readline = require("readline-sync");

let items: Item[] = [
  new Item(1, "wooden staff"),
  new Item(2, "wizard hat"),
  new Item(3, "cloth shoes"),
];

console.log("Welcome to the Wizard Inventory App!");

let command: string = "";
while (command != "exit") {
  // display menu
  displayMenu();
  // prompt command
  command = readline.question("Command: ");
  // do the command
  switch (command) {
    case "show":
      showItems();
      break;
    case "grab":
      grabItem();
      break;
    case "edit":
      editItem();
      break;
    case "drop":
      dropItem();
      break;
    case "exit":
      break;
  }
}

console.log("Bye");

function displayMenu(): void {
  console.log("COMMAND MENU:");
  console.log("show - show all items");
  console.log("grab - add an item");
  console.log("edit - edit an item");
  console.log("drop - delete an item");
  console.log("exit - exit the app");
  console.log("");
}
function showItems() {
  console.log("\nShow Items:");
  for (let item of items) {
    console.log(`${item.id}: ${item.name}`);
  }
  console.log("");
}

function grabItem() {
  console.log("\nGrab Item:");
  if (items.length == 4) {
    console.log("You can't carry anymore items. Please drop.");
  } else {
    let id: number = readline.questionInt("ID? ");
    let name: string = readline.question("Name? ");
    let item: Item = new Item(id, name);
    items.push(item);
    console.log(`${name} was added.`);
  }
}

function editItem() {
  console.log("\nEdit Item:");
  let id: number = readline.questionInt("Item ID? ");
  let item: Item = findItem(id);
  let newName: string = readline.question("New Name: ");
  item.name = newName;
  console.log(`Item ${id} was updated.`);
}

function dropItem() {
  console.log("\nDrop Item:");
  let id: number = readline.questionInt("Item ID? ");
  //   let idx: number = 0;
  //   let name: string = "";
  //   // find the item in the list that matches the id entered
  //   items.forEach((item, index) => {
  //     if (item.id == id) {
  //       idx = index;
  //       name = item.name;
  //     }
  //   });
  let item: Item = findItem(id);
  // remove that item
  let idx: number = items.indexOf(item);
  items.splice(idx, 1);
  console.log(`${item.name} was removed.`);
}

function findItem(id: number): Item {
  let item: Item = new Item();
  for (let i of items) {
    if (i.id == id) {
      item = i;
      break;
    }
  }
  return item;
}
