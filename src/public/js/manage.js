$(document).ready(async () => {
    var res = await getData();
    await loadHostels(res.Mhostels);
    await deleteHostel();
  });
  
  const getData = async () => {
    var result = null;
  
    const getResult = (data) => {
      result = data;
    };
  
    await $.get({
      url: "manage/api",
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
      const streetA = res.streetA;
      const district = res.district;
      const city = res.city;
      for (let x = 0; x < city.city.length; x++) {
        if (city_id == city.city[x].id) {
          const Gcity = city.city[x].name;
          for (let i = 0; i < district[x].districts.length; i++) {
            if (district_id == district[x].districts[i].district_id) {
              const Gdistrict = district[x].districts[i].name;
              for (let f = 0; f < streetA[x][i].street.length; f++) {
                if (street_id == streetA[x][i].street[f].street_id) {
                  const Gstreet = streetA[x][i].street[f].name;
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
  
  
  const deleteHostel = async () => {
    $("#post_parent").on("submit", "#formDelete",(event) => {
      event.preventDefault();
  
      $.post({
        url: "delete",
        dataType: "json",
        data: $("#formDelete").serialize(),
        success: (res) => {
          console.log("🚀 ~ file: adminHome.js ~ line 204 ~ $ ~ res", res);
          window.location.reload();
        },
      });
    });
  };
  