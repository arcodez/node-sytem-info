const si = require("systeminformation");
const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

// create get endpoint to say hello world

const getDataSytem = async () => {
  let dataFull = [];
  const dataOS = await si.osInfo();
  dataFull = [...dataFull, dataOS];

  const dataCpu = await si.cpu();
  dataFull = [...dataFull, dataCpu];

  const dataRam = await si.mem();
  dataFull = [...dataFull, dataRam];

  const dataGpu = await si.graphics();
  dataFull = [...dataFull, dataGpu.controllers[0]];
  dataFull = [...dataFull, dataGpu.displays[0]];

  console.log("Data OS");
  console.log(dataFull[0]);

  console.log("Data CPU");
  console.log(dataFull[1]);

  console.log("Data RAM");
  console.log(dataFull[2]);

  console.log("Data GPU");
  console.log(dataFull[3]);
};

app.get("/", (req, res) => {
  res.send("Get Data System Info Program!");
  getDataSytem();
});

app.listen(port, () => console.log(`Listening on port ${port}`));
