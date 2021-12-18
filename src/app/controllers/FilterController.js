const { db } = require("../../connect");
const app = require("express");

const filterController = async (req, res) => {

  // const hostels = getHostels(req.body);

  res.json({
    message: "success",
    // hostels
  })
};

const getHostels = async (data) => {
  var result = null;

  const getResult = (rows) => (result = rows);

  if (!data.street) {
    if (!data.district) {
      if (!data.city) {
        if (!data.price) {
          if (!data.area) {
            await db
              .promise()
              .query(`SELECT * FROM landlords`)
              .then(([rows]) => getResult(rows));

            return result;
          } else {
            await db
              .promise()
              .query(`SELECT * FROM landlords WHERE area = '${data.area}'`)
              .then(([rows]) => getResult(rows));

            return result;
          }
        } else {
          if (!data.area) {
            await db
              .promise()
              .query(`SELECT * FROM landlords WHERE price = '${data.price}'`)
              .then(([rows]) => getResult(rows));

            return result;
          } else {
            await db
              .promise()
              .query(
                `SELECT * FROM landlords WHERE price = '${data.price}' AND area = '${data.area}'`
              )
              .then(([rows]) => getResult(rows));

            return result;
          }
        }
      } else {
        if (!data.price) {
          if (!data.area) {
            await db
              .promise()
              .query(`SELECT * FROM landlords WHERE city = '${data.city}'`)
              .then(([rows]) => getResult(rows));

            return result;
          } else {
            await db
              .promise()
              .query(
                `SELECT * FROM landlords WHERE city = '${data.city}' area = '${data.area}'`
              )
              .then(([rows]) => getResult(rows));

            return result;
          }
        } else {
          if (!data.area) {
            await db
              .promise()
              .query(
                `SELECT * FROM landlords WHERE city = '${data.city}' price = '${data.price}'`
              )
              .then(([rows]) => getResult(rows));

            return result;
          } else {
            await db
              .promise()
              .query(
                `SELECT * FROM landlords WHERE city = '${data.city}' price = '${data.price}' AND area = '${data.area}'`
              )
              .then(([rows]) => getResult(rows));

            return result;
          }
        }
      }
    } else {
      if (!data.city) {
        if (!data.price) {
          if (!data.area) {
            await db
              .promise()
              .query(
                `SELECT * FROM landlords WHERE district = '${data.district}'`
              )
              .then(([rows]) => getResult(rows));

            return result;
          } else {
            await db
              .promise()
              .query(
                `SELECT * FROM landlords WHERE district = '${data.district}' area = '${data.area}'`
              )
              .then(([rows]) => getResult(rows));

            return result;
          }
        } else {
          if (!data.area) {
            await db
              .promise()
              .query(
                `SELECT * FROM landlords WHERE district = '${data.district}' price = '${data.price}'`
              )
              .then(([rows]) => getResult(rows));

            return result;
          } else {
            await db
              .promise()
              .query(
                `SELECT * FROM landlords WHERE district = '${data.district}' price = '${data.price}' AND area = '${data.area}'`
              )
              .then(([rows]) => getResult(rows));

            return result;
          }
        }
      } else {
        if (!data.price) {
          if (!data.area) {
            await db
              .promise()
              .query(
                `SELECT * FROM landlords WHERE district = '${data.district}' city = '${data.city}'`
              )
              .then(([rows]) => getResult(rows));

            return result;
          } else {
            await db
              .promise()
              .query(
                `SELECT * FROM landlords WHERE district = '${data.district}' city = '${data.city}' area = '${data.area}'`
              )
              .then(([rows]) => getResult(rows));

            return result;
          }
        } else {
          if (!data.area) {
            await db
              .promise()
              .query(
                `SELECT * FROM landlords WHERE district = '${data.district}' city = '${data.city}' price = '${data.price}'`
              )
              .then(([rows]) => getResult(rows));

            return result;
          } else {
            await db
              .promise()
              .query(
                `SELECT * FROM landlords WHERE district = '${data.district}' city = '${data.city}' price = '${data.price}' AND area = '${data.area}'`
              )
              .then(([rows]) => getResult(rows));

            return result;
          }
        }
      }
    }
  } else {
    if (!data.district) {
      if (!data.city) {
        if (!data.price) {
          if (!data.area) {
            await db
              .promise()
              .query(`SELECT * FROM landlords WHERE street = '${data.street}'`)
              .then(([rows]) => getResult(rows));

            return result;
          } else {
            await db
              .promise()
              .query(
                `SELECT * FROM landlords WHERE street = '${data.street}' area = '${data.area}'`
              )
              .then(([rows]) => getResult(rows));

            return result;
          }
        } else {
          if (!data.area) {
            await db
              .promise()
              .query(
                `SELECT * FROM landlords WHERE street = '${data.street}' price = '${data.price}'`
              )
              .then(([rows]) => getResult(rows));

            return result;
          } else {
            await db
              .promise()
              .query(
                `SELECT * FROM landlords WHERE street = '${data.street}' price = '${data.price}' AND area = '${data.area}'`
              )
              .then(([rows]) => getResult(rows));

            return result;
          }
        }
      } else {
        if (!data.price) {
          if (!data.area) {
            await db
              .promise()
              .query(
                `SELECT * FROM landlords WHERE street = '${data.street}' city = '${data.city}'`
              )
              .then(([rows]) => getResult(rows));

            return result;
          } else {
            await db
              .promise()
              .query(
                `SELECT * FROM landlords WHERE street = '${data.street}' city = '${data.city}' area = '${data.area}'`
              )
              .then(([rows]) => getResult(rows));

            return result;
          }
        } else {
          if (!data.area) {
            await db
              .promise()
              .query(
                `SELECT * FROM landlords WHERE street = '${data.street}' city = '${data.city}' price = '${data.price}'`
              )
              .then(([rows]) => getResult(rows));

            return result;
          } else {
            await db
              .promise()
              .query(
                `SELECT * FROM landlords WHERE street = '${data.street}' city = '${data.city}' price = '${data.price}' AND area = '${data.area}'`
              )
              .then(([rows]) => getResult(rows));

            return result;
          }
        }
      }
    } else {
      if (!data.city) {
        if (!data.price) {
          if (!data.area) {
            await db
              .promise()
              .query(
                `SELECT * FROM landlords WHERE street = '${data.street}' district = '${data.district}'`
              )
              .then(([rows]) => getResult(rows));

            return result;
          } else {
            await db
              .promise()
              .query(
                `SELECT * FROM landlords WHERE street = '${data.street}' district = '${data.district}' area = '${data.area}'`
              )
              .then(([rows]) => getResult(rows));

            return result;
          }
        } else {
          if (!data.area) {
            await db
              .promise()
              .query(
                `SELECT * FROM landlords WHERE street = '${data.street}' district = '${data.district}' price = '${data.price}'`
              )
              .then(([rows]) => getResult(rows));

            return result;
          } else {
            await db
              .promise()
              .query(
                `SELECT * FROM landlords WHERE street = '${data.street}' district = '${data.district}' price = '${data.price}' AND area = '${data.area}'`
              )
              .then(([rows]) => getResult(rows));

            return result;
          }
        }
      } else {
        if (!data.price) {
          if (!data.area) {
            await db
              .promise()
              .query(
                `SELECT * FROM landlords WHERE street = '${data.street}' district = '${data.district}' city = '${data.city}'`
              )
              .then(([rows]) => getResult(rows));

            return result;
          } else {
            await db
              .promise()
              .query(
                `SELECT * FROM landlords WHERE street = '${data.street}' district = '${data.district}' city = '${data.city}' area = '${data.area}'`
              )
              .then(([rows]) => getResult(rows));

            return result;
          }
        } else {
          if (!data.area) {
            await db
              .promise()
              .query(
                `SELECT * FROM landlords WHERE street = '${data.street}' district = '${data.district}' city = '${data.city}' price = '${data.price}'`
              )
              .then(([rows]) => getResult(rows));

            return result;
          } else {
            await db
              .promise()
              .query(
                `SELECT * FROM landlords WHERE street = '${data.street}' district = '${data.district}' city = '${data.city}' price = '${data.price}' AND area = '${data.area}'`
              )
              .then(([rows]) => getResult(rows));

            return result;
          }
        }
      }
    }
  }
};

module.exports = filterController;
