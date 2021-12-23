const { db } = require("../../connect");
const app = require("express");

const filterController = async (req, res) => {

  const hostels = await getHostels(req.body);
  console.log("🚀 ~ file: FilterController.js ~ line 7 ~ filterController ~ req.body", req.body)
  console.log("🚀 ~ file: FilterController.js ~ line 7 ~ filterController ~ hostels", hostels)
  console.log("🚀 ~ file: FilterController.js ~ line 7 ~ filterController ~ hostels", hostels.hostels.length)

  res.json({
    message: "success",
    hostels
  })
};

const getHostels = async (data) => {
  var result = null;

  const getResult = (rows) => (result = rows);
  
  if (!data.priceUnit) {
    if (!data.city) {
          if (!data.price) {
            if (!data.area) {
              await db
                .promise()
                .query(`SELECT * FROM hostels`)
                .then(([rows]) => getResult(rows));
  
              return { hostels: result };
            } else {
              await db
                .promise()
                .query(`SELECT * FROM hostels WHERE area > '${data.area}' - 25 AND area < '${data.area}' + 25`)
                .then(([rows]) => getResult(rows));
  
              return { hostels: result };
            }
          } else {
            if (!data.area) {
              await db
                .promise()
                .query(`SELECT * FROM hostels WHERE price > '${data.price}' - 5 AND price < '${data.price}' + 5`)
                .then(([rows]) => getResult(rows));
  
              return { hostels: result };
            } else {
              await db
                .promise()
                .query(
                  `SELECT * FROM hostels WHERE price > '${data.price}' - 5 AND price < '${data.price}' + 5 AND area > '${data.area}' - 25 AND area < '${data.area}' + 25`
                )
                .then(([rows]) => getResult(rows));
  
              return { hostels: result };
            }
          }
    } else {
      if (!data.district) {
          if (!data.price) {
            if (!data.area) {
              await db
                .promise()
                .query(`SELECT * FROM hostels WHERE city_id = '${data.city}'`)
                .then(([rows]) => getResult(rows));
  
              return { hostels: result };
            } else {
              await db
                .promise()
                .query(
                  `SELECT * FROM hostels WHERE city_id = '${data.city}' AND area > '${data.area}' - 25 AND area < '${data.area}' + 25`
                )
                .then(([rows]) => getResult(rows));
  
              return { hostels: result };
            }
          } else {
            if (!data.area) {
              await db
                .promise()
                .query(
                  `SELECT * FROM hostels WHERE city_id = '${data.city}' AND price > '${data.price}' - 5 AND price < '${data.price}' + 5`
                )
                .then(([rows]) => getResult(rows));
  
              return { hostels: result };
            } else {
              await db
                .promise()
                .query(
                  `SELECT * FROM hostels WHERE city_id = '${data.city}' AND price > '${data.price}' - 5 AND price < '${data.price}' + 5 AND area > '${data.area}' - 25 AND area < '${data.area}' + 25`
                )
                .then(([rows]) => getResult(rows));
  
              return { hostels: result };
            }
          }
        
      } else {
        if (!data.street) {
          if (!data.price) {
            if (!data.area) {
              await db
                .promise()
                .query(
                  `SELECT * FROM hostels WHERE city_id = '${data.city}' AND district_id = '${data.district}'`
                )
                .then(([rows]) => getResult(rows));
  
              return { hostels: result };
            } else {
              await db
                .promise()
                .query(
                  `SELECT * FROM hostels WHERE city_id = '${data.city}' AND district_id = '${data.district}' AND area > '${data.area}' - 25 AND area < '${data.area}' + 25`
                )
                .then(([rows]) => getResult(rows));
  
              return { hostels: result };
            }
          } else {
            if (!data.area) {
              await db
                .promise()
                .query(
                  `SELECT * FROM hostels WHERE city_id = '${data.city}' AND district_id = '${data.district}' AND price > '${data.price}' - 5 AND price < '${data.price}' + 5`
                )
                .then(([rows]) => getResult(rows));
  
              return { hostels: result };
            } else {
              await db
                .promise()
                .query(
                  `SELECT * FROM hostels WHERE city_id = '${data.city}' AND district_id = '${data.district}' AND price > '${data.price}' - 5 AND price < '${data.price}' + 5 AND area > '${data.area}' - 25 AND area < '${data.area}' + 25`
                )
                .then(([rows]) => getResult(rows));
  
              return { hostels: result };
            }
          }
        } else {
          if (!data.price) {
            if (!data.area) {
              await db
                .promise()
                .query(
                  `SELECT * FROM hostels WHERE city_id = '${data.city}' AND district_id = '${data.district}' AND street_id = '${data.street}'`
                )
                .then(([rows]) => getResult(rows));
  
              return { hostels: result };
            } else {
              await db
                .promise()
                .query(
                  `SELECT * FROM hostels WHERE city_id = '${data.city}' AND district_id = '${data.district}' AND street_id = '${data.street}' AND area > '${data.area}' - 25 AND area < '${data.area}' + 25`
                )
                .then(([rows]) => getResult(rows));
  
              return { hostels: result };
            }
          } else {
            if (!data.area) {
              await db
                .promise()
                .query(
                  `SELECT * FROM hostels WHERE city_id = '${data.city}' AND district_id = '${data.district}' AND street_id = '${data.street}' AND price > '${data.price}' - 5 AND price < '${data.price}' + 5`
                )
                .then(([rows]) => getResult(rows));
  
              return { hostels: result };
            } else {
              await db
                .promise()
                .query(
                  `SELECT * FROM hostels WHERE city_id = '${data.city}' AND district_id = '${data.district}' AND street_id = '${data.street}' AND price > '${data.price}' - 5 AND price < '${data.price}' + 5 AND area > '${data.area}' - 25 AND area < '${data.area}' + 25`
                )
                .then(([rows]) => getResult(rows));
  
              return { hostels: result };
            }
          }
        }
      }
    }
  } else {
    if (!data.city) {
          if (!data.price) {
            if (!data.area) {
              await db
                .promise()
                .query(`SELECT * FROM hostels WHERE priceUnit = '${data.priceUnit}'`)
                .then(([rows]) => getResult(rows));
  
              return { hostels: result };
            } else {
              await db
                .promise()
                .query(`SELECT * FROM hostels WHERE area > '${data.area}' - 25 AND area < '${data.area}' + 25 AND priceUnit = '${data.priceUnit}'`)
                .then(([rows]) => getResult(rows));
  
              return { hostels: result };
            }
          } else {
            if (!data.area) {
              await db
                .promise()
                .query(`SELECT * FROM hostels WHERE price > '${data.price}' - 5 AND price < '${data.price}' + 5 AND priceUnit = '${data.priceUnit}'`)
                .then(([rows]) => getResult(rows));
  
              return { hostels: result };
            } else {
              await db
                .promise()
                .query(
                  `SELECT * FROM hostels WHERE price > '${data.price}' - 5 AND price < '${data.price}' + 5 AND area > '${data.area}' - 25 AND area < '${data.area}' + 25 AND priceUnit = '${data.priceUnit}'`
                )
                .then(([rows]) => getResult(rows));
  
              return { hostels: result };
            }
          }
    } else {
      if (!data.district) {
          if (!data.price) {
            if (!data.area) {
              await db
                .promise()
                .query(`SELECT * FROM hostels WHERE city_id = '${data.city}' AND priceUnit = '${data.priceUnit}'`)
                .then(([rows]) => getResult(rows));
  
              return { hostels: result };
            } else {
              await db
                .promise()
                .query(
                  `SELECT * FROM hostels WHERE city_id = '${data.city}' AND area > '${data.area}' - 25 AND area < '${data.area}' + 25 AND priceUnit = '${data.priceUnit}'`
                )
                .then(([rows]) => getResult(rows));
  
              return { hostels: result };
            }
          } else {
            if (!data.area) {
              await db
                .promise()
                .query(
                  `SELECT * FROM hostels WHERE city_id = '${data.city}' AND price > '${data.price}' - 5 AND price < '${data.price}' + 5 AND priceUnit = '${data.priceUnit}'`
                )
                .then(([rows]) => getResult(rows));
  
              return { hostels: result };
            } else {
              await db
                .promise()
                .query(
                  `SELECT * FROM hostels WHERE city_id = '${data.city}' AND price > '${data.price}' - 5 AND price < '${data.price}' + 5 AND area > '${data.area}' - 25 AND area < '${data.area}' + 25 AND priceUnit = '${data.priceUnit}'`
                )
                .then(([rows]) => getResult(rows));
  
              return { hostels: result };
            }
          }
        
      } else {
        if (!data.street) {
          if (!data.price) {
            if (!data.area) {
              await db
                .promise()
                .query(
                  `SELECT * FROM hostels WHERE city_id = '${data.city}' AND district_id = '${data.district}'  AND priceUnit = '${data.priceUnit}'`
                )
                .then(([rows]) => getResult(rows));
  
              return { hostels: result };
            } else {
              await db
                .promise()
                .query(
                  `SELECT * FROM hostels WHERE city_id = '${data.city}' AND district_id = '${data.district}' AND area > '${data.area}' - 25 AND area < '${data.area}' + 25  AND priceUnit = '${data.priceUnit}'`
                )
                .then(([rows]) => getResult(rows));
  
              return { hostels: result };
            }
          } else {
            if (!data.area) {
              await db
                .promise()
                .query(
                  `SELECT * FROM hostels WHERE city_id = '${data.city}' AND district_id = '${data.district}' AND price > '${data.price}' - 5 AND price < '${data.price}' + 5 AND priceUnit = '${data.priceUnit}'`
                )
                .then(([rows]) => getResult(rows));
  
              return { hostels: result };
            } else {
              await db
                .promise()
                .query(
                  `SELECT * FROM hostels WHERE city_id = '${data.city}' AND district_id = '${data.district}' AND price > '${data.price}' - 5 AND price < '${data.price}' + 5 AND area > '${data.area}' - 25 AND area < '${data.area}' + 25 AND priceUnit = '${data.priceUnit}'`
                )
                .then(([rows]) => getResult(rows));
  
              return { hostels: result };
            }
          }
        } else {
          if (!data.price) {
            if (!data.area) {
              await db
                .promise()
                .query(
                  `SELECT * FROM hostels WHERE city_id = '${data.city}' AND district_id = '${data.district}' AND street_id = '${data.street}' AND priceUnit = '${data.priceUnit}'`
                )
                .then(([rows]) => getResult(rows));
  
              return { hostels: result };
            } else {
              await db
                .promise()
                .query(
                  `SELECT * FROM hostels WHERE city_id = '${data.city}' AND district_id = '${data.district}' AND street_id = '${data.street}' AND area > '${data.area}' - 25 AND area < '${data.area}' + 25 AND priceUnit = '${data.priceUnit}'`
                )
                .then(([rows]) => getResult(rows));
  
              return { hostels: result };
            }
          } else {
            if (!data.area) {
              await db
                .promise()
                .query(
                  `SELECT * FROM hostels WHERE city_id = '${data.city}' AND district_id = '${data.district}' AND street_id = '${data.street}' AND price > '${data.price}' - 5 AND price < '${data.price}' + 5 AND priceUnit = '${data.priceUnit}'`
                )
                .then(([rows]) => getResult(rows));
  
              return { hostels: result };
            } else {
              await db
                .promise()
                .query(
                  `SELECT * FROM hostels WHERE city_id = '${data.city}' AND district_id = '${data.district}' AND street_id = '${data.street}' AND price > '${data.price}' - 5 AND price < '${data.price}' + 5 AND area > '${data.area}' - 25 AND area < '${data.area}' + 25 AND priceUnit = '${data.priceUnit}'`
                )
                .then(([rows]) => getResult(rows));
  
              return { hostels: result };
            }
          }
        }
      }
    }
  }
};

module.exports = filterController;
