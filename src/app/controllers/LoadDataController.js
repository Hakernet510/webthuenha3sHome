const { get } = require("express/lib/response");
const { db } = require("../../connect");

const loadDataController = async (req, res) => {

  const hostels = await getHostels();

  const city = await getCity();

  const districtsHCM = await getDistrictHCM();

  const districtsHaNoi = await getDistrictHaNoi();

  const districtsDaNang = await getDistrictDaNang();

  const street = await getAllStreet();

  const streetA = [];

  const district = [];

  const streetHCM = [];

  const streetHaNoi = [];

  const streetDaNang = [];

  for (let i = 0; i < city.city.length; i++) {
    district.push(await getDistrict(city.city[i].id));
  }

  for (let i = 0; i < districtsHCM.districts.length; i++) {
    streetHCM.push(await getStreet(districtsHCM.districts[i].district_id));
  }

  for (let i = 0; i < districtsHaNoi.districts.length; i++) {
    streetHaNoi.push(await getStreet(districtsHaNoi.districts[i].district_id));
  }

  for (let i = 0; i < districtsDaNang.districts.length; i++) {
    streetDaNang.push(await getStreet(districtsDaNang.districts[i].district_id));
  }

  for (let i = 0; i < city.city.length; i++) {
    if (city.city[i].id == 1) {
    streetA.push(streetHCM)
    } else {
      if (city.city[i].id == 2) {
        streetA.push(streetHaNoi)
      } else {
        streetA.push(streetDaNang)
      }
    }
  }

  res.json({
    streetA,
    street,
    district,
    city,
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

const getCity = async () => {
  var result = null;

  const getResult = (rows) => (result = rows);

  await db
    .promise()
    .query(`SELECT * FROM cities`)
    .then(([rows]) => getResult(rows));

  return { city: result };
};

const getDistrict = async (data) => {
  var result = null;

  const getResult = (rows) => (result = rows);

  await db
    .promise()
    .query(`SELECT * FROM districts WHERE city_id=${data}`)
    .then(([rows]) => getResult(rows));

  return { districts: result };
};

const loadStreet = async (data) => {
  var result = null;

  const getResult = (rows) => (result = rows);

  await db
    .promise()
    .query(`SELECT * FROM street WHERE district_id=${data}`)
    .then(([rows]) => getResult(rows));

  return { street: result };
}

const getAllStreet = async () => {
  var result = null;

  const getResult = (rows) => (result = rows);

  await db
    .promise()
    .query(`SELECT * FROM street`)
    .then(([rows]) => getResult(rows));

  return { street: result };
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
