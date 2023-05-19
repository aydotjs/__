const fs = require("fs");
const path = require("path");

const folderPaths = ["./data/data-1", "./data/data-2", "./data/data-3"];
folderPaths.forEach((eachFolder) => {
  fs.readdir(eachFolder, (err, files) => {
    if (err) {
      console.error(`Error reading folder: ${err}`);
      return;
    }

    const jsonFiles = files.filter(
      (file) => path.extname(file).toLowerCase() === ".json"
    );
    jsonFiles.forEach((file) => {
      const filePath = path.join(eachFolder, file);

      fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
          console.error(`Error reading file ${filePath}: ${err}`);
          return;
        }

        console.log(`Contents of file ${filePath}:`);
        fs.writeFile("./all.json", data, (err) => {
          console.log("file written");
        });
      });
    });
  });
});
