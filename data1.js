const fs = require("fs");

////////////////////////////////////////
//// ADDPERSON

const addperson = (id, FName, LName, City, Age) => {
  const allData = loadinfo();

  const DublicatedData = allData.filter((obj) => {
    return obj.id === id;
  });

  if (DublicatedData.length == 0) {
    allData.push({
      id: id,
      FName: FName,
      LName: LName,
      City: City,
      Age: Age,
    });

    savealldata(allData);
  } else {
    console.log("ERROR DUBLICATED DATA");
  }
};

/////////////////////////////////////////
//// LOADINFO

const loadinfo = () => {
  try {
    const datajson = fs.readFileSync("data1.json").toString();
    return JSON.parse(datajson);
  } catch {
    return [];
  }
};

/////////////////////////////////////////

const savealldata = (allData) => {
  const savealldatajson = JSON.stringify(allData);
  fs.writeFileSync("data1.json", savealldatajson);
};

///////////////////////////////
//// DELETE

const deleteData = (id) => {
  const allData = loadinfo();

  const datatoKeep = allData.filter((obj) => {
    return obj.id !== id;
  });

  savealldata(datatoKeep);
};

////////////////////////////
//// READDATA

const readData = (id) => {
  const allData = loadinfo();
  const NeededItem = allData.find((obj) => {
    return obj.id == id;
  });
  if (NeededItem) {
    console.log(NeededItem);
  } else {
    console.log("ID Not Found");
  }
};

////////////////////////////
//// LISTDATA

const listData = () => {
  const allData = loadinfo();
  allData.forEach((obj) => {
    console.log(obj.FName, obj.City, obj.Age);
  });
};

////////////////////////////
//// EXPORTS

module.exports = {
  addperson,
  deleteData,
  readData,
  listData,
};
