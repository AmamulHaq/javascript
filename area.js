const prompt = require("prompt-sync")();

while (true) {
  let r = parseInt(prompt("Enter radius of circle: "));
  console.log("The are of given circle is  ", 3.1415 * r * r);

  let continuePrompt = prompt("Do you want to continue? (yes/no): ");
  if (continuePrompt.toLowerCase() !== "yes") {
    break;
  }
}
