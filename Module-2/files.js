const fs = require("fs");

// synchronous way of file reading/writing
const read = fs.readFileSync(__dirname + "/read.txt", "utf-8");
console.log(read);

const text = "Write in File";
fs.writeFileSync("write.txt", text);
console.log("Successfully written");

console.log("\n\n");

// asynchronous way of file reading/writing
console.log("I am number 1");
fs.readFile(__dirname + "/read.txt", "utf-8", (err, data) => {
  if (err) {
    throw new Error("Error during reading file");
  }
  console.log(data);
});

console.log("I am number 2");

fs.writeFile(
  __dirname + "/write.txt",
  "This is written in asynchronous method",
  (err) => {
    if (err) {
      throw new Error("Error during writing file");
    }
  }
);
