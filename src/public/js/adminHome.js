$(document).ready(async () => {
  var res = await getData();
  await loadHostels(res.hostels);
  await search(res.city, res.district, res.streetA);
});

const search = async (city, district, streetA) => {
  $("#city").change(async () => {
    $("#district").html(`<option>--District--</option>`);
    $("#street").html(`<option>--Street--</option>`);
    for (let x = 0; x < city.city.length; x++) {
      if ($("#city").val() == city.city[x].id) {
        $.each(district[x].districts, (index, value) => {
          const { district_id, name } = value;
          var child = `
              <option value="${district_id}">${name}</option>`;

          $("#district").append(child);
        });
      }
    }
    $("#district").change(async () => {
      $("#street").html(`<option>--Street--</option>`);
          for (let i = 0; i < streetA.length; i++) {
            for (let f = 0; f < streetA[i].length; f++) {
                if (
                  $("#district").val() == streetA[i][f].street[0].district_id
                ) {
                  $.each(streetA[i][f].street, (index, value) => {
                    const { street_id, name } = value;
                    var kid = `
                    <option value="${street_id}">${name}</option>`;

                    $("#street").append(kid);
                  });
                
              }
            }
          }
        });
  });
};

const getData = async () => {
  var result = null;

  const getResult = (data) => {
    result = data;
  };

  await $.get({
    url: "loadData",
    dataType: "json",
    success: (res) => {
      getResult(res);
    },
  });

  return result;
};

const loadHostels = async (hostelList) => {
  console.log("🚀 ~ file: a.js ~ line 5 ~ $ ~ hostelList", hostelList);

  $("#post_parent").html(``);

  $.each(hostelList.hostels, async (index, value) => {
    const {
      hostel_id,
      city_id,
      district_id,
      street_id,
      Title,
      area,
      address,
      description,
      name,
      email,
      phone_number,
      price,
      url,
      priceUnit,
    } = value;
    var res = await getData();
    const street = res.street;
    const district = res.district;
    const city = res.city;
    for (let x = 0; x < city.city.length; x++) {
      if (city_id == city.city[x].id) {
        const Gcity = city.city[0].name;
        for (let i = 0; i < district[x].districts.length; i++) {
          if (district_id == district[x].districts[i].district_id) {
            const Gdistrict = district[x].districts[i].name;
            for (let f = 0; f < street.street.length; f++) {
              if (street_id == street.street[f].street_id) {
                const Gstreet = street.street[f].name;
                var children = ` <div class="left item" id="left1">
        <div class="img">
          <img class="picture" src="../image/${url}.png" alt="error">
        </div>

        <div class="text">
            <h4 class="title">
              ${Title}
            </h4>

            <div class="area">
              <span>
              <i class="fa fa-area-chart"></i>
               <b>${area} m²</b>
              </span>
              <form action="/switch" id="formUpdate" method="post">
              <input type="text" name="id" value="${hostel_id}" hidden>
              <input style="background-color: blue;" type="submit" value="edit" />
              </form>
              <form action="/delete" id="formDelete" method="post">
              <input type="text" name="id" value="${hostel_id}" hidden>
              <input type="text" name="image" value="${url}" hidden>
              <input style="background-color: red;" type="submit" value="delete" />
              </form>
            </div>

            <div class="location">
              <span>
              <i class="glyphicon glyphicon-map-marker"></i>
              <b>${address}, ${Gstreet}, ${Gdistrict}, ${Gcity}</b>
              </span>
          </div>

          <div class="money">
            <span>
            <i class="fa fa-money"></i>
            <b>${price} ${priceUnit}</b>
            </span>
          </div>

          <div class="rent">
            <span>
            <i class="fa fa-navicon"></i>
            <b>Cho thuê phòng trọ</b>
            </span>
          </div>

          <div class="contact">
            <span>
            <i class="glyphicon glyphicon-user"></i>
            <b>Liên hệ: ${name} - ${phone_number}</b>
            </span>
          </div>

          <div class="mail">
          <span>
            <i class="glyphicon glyphicon-envelope"></i>
            <b>Email: ${email}</b>
          </span>
          </div>

        </div>

    </div>`;

                $("#post_parent").append(children);
              }
            }
          }
        }
      }
    }

    // console.log(100000, district[0].districts);
    // console.log(200000, streetHCM[0].street);
    // console.log(300000, districtsHCM.districts[0]);
  });
};
