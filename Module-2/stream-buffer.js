const fs = require("fs");

const readableStream = fs.createReadStream(__dirname + "/read.txt", "utf-8");

const writeableStream = fs.createWriteStream(__dirname + "/write.txt", "utf-8");

readableStream.on("data", (data) => {
  writeableStream.write(data, (err) => {
    if (err) {
      throw new Error(err);
    }
  });
});
