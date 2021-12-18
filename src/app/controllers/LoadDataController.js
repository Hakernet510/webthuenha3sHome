const { db } = require("../../connect");

const loadDataController = async (req, res) => {

  const hostels = await getHostels();

  const districtsHCM = await getDistrictHCM();

  const districtsHaNoi = await getDistrictHaNoi();

  const districtsDaNang = await getDistrictDaNang();

  const streetHCM = [];

  const streetHaNoi = [];

  const streetDaNang = [];

  for (let i = 0; i < districtsHCM.districts.length; i++) {
    streetHCM.push(await getStreet(districtsHCM.districts[i].district_id));
  }

  for (let i = 0; i < districtsHaNoi.districts.length; i++) {
    streetHaNoi.push(await getStreet(districtsHaNoi.districts[i].district_id));
  }

  for (let i = 0; i < districtsDaNang.districts.length; i++) {
    streetDaNang.push(await getStreet(districtsDaNang.districts[i].district_id));
  }

  console.log(10000000, streetHCM[0].street);
  console.log(10000000, streetHaNoi);
  console.log(10000000, streetDaNang);

  console.log(
    "🚀 ~ file: LoadDataController.js ~ line 13 ~ loadDataController ~ data: ", districtsHCM.districts
  );

  res.json({
    hostels,
    districtsHCM,
    districtsHaNoi,
    districtsDaNang,
    streetHCM,
    streetHaNoi,
    streetDaNang
  });
};

const getHostels = async () => {
  var result = null;

  const getResult = (rows) => (result = rows);

  await db
    .promise()
    .query(`SELECT * FROM hostels`)
    .then(([rows]) => getResult(rows));

  return { hostels: result };
};

const getDistrictHCM = async () => {
  var result = null;

  const getResult = (rows) => (result = rows);

  await db
    .promise()
    .query(`SELECT * FROM Districts WHERE city_id=1`)
    .then(([rows]) => getResult(rows));

  return { districts: result };
};

const getDistrictHaNoi = async () => {
  var result = null;

  const getResult = (rows) => (result = rows);

  await db
    .promise()
    .query(`SELECT * FROM Districts WHERE city_id=2`)
    .then(([rows]) => getResult(rows));

  return { districts: result };
};

const getDistrictDaNang = async () => {
  var result = null;

  const getResult = (rows) => (result = rows);

  await db
    .promise()
    .query(`SELECT * FROM Districts WHERE city_id=3`)
    .then(([rows]) => getResult(rows));

  return { districts: result };
};

const getStreet = async (data) => {
  var result = null;

  const getResult = (rows) => (result = rows);

  await db
    .promise()
    .query(`SELECT * FROM Street WHERE district_id=${data}`)
    .then(([rows]) => getResult(rows));

  return { street: result };
};

module.exports = loadDataController;
