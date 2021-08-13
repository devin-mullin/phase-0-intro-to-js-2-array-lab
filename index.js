// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(){
cats.push("Ralph")
}
destructivelyAppendCat(cats)

cats

function destructivelyPrependCat(){
    cats.unshift("Bob")
}
destructivelyPrependCat(cats)

function destructivelyRemoveLastCat() {
    cats.pop()
  }
  destructivelyRemoveLastCat(cats)

function destructivelyRemoveFirstCat() {
    cats.shift()
  }
  destructivelyRemoveFirstCat(cats)

function appendCat(Broom) {
  
}