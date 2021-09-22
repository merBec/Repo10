var myPet = {
  species: "Poodle",
  name: "Lessie",
  legs: 4,
  friends: ["Charlie", "Teddy"]
}
function myFunction(myObj) {
  return myObj;
}
console.log(myFunction(myPet));
module.exports = { myPet, myFunction };