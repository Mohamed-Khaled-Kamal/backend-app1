const yargs = require("yargs");

const data1 = require("./data1");

/////////////////////////////////////////
//// ADD COMMAND

yargs.command({
  command: "add",
  describe: "to add an item",
  builder: {
    id: {
      describe: "Identity For Each Person",
      demandOption: true,
      type: Number,
    },
    FName: {
      discribe: "Fist Name For Each Person",
      demandOption: true,
      type: "string",
    },
    LName: {
      discribe: "Last Name For Each Person",
      demandOption: true,
      type: "string",
    },
  },
  handler: (x) => {
    data1.addperson(x.id, x.FName, x.LName, x.City, x.Age);
  },
});

/////////////////////////////////////////
//// DELETE COMMAND

yargs.command({
  command: "delete",
  describe: " To Delete An Item",
  handler: (x) => {
    data1.deleteData(x.id);
  },
});

///////////////////////////////////////
//// READ COMMAND

yargs.command({
  command: "read",
  describe: " To Read An Item",
  builder: {
    id: {
      describe: "To Define id To Read",
      demandOption: true,
      type: "string",
    },
  },
  handler: (x) => {
    data1.readData(x.id);
  },
});

////////////////////////////////////////
//// LIST COMMAND

yargs.command({
  command: "list",
  describe: " To List Data",
  handler: () => {
    data1.listData();
  },
});

/////////////////////////////////////////////////

yargs.parse();
