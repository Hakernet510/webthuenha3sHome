$(document).ready(async () => {
  var res = await getHostels();
  await loadHostels(res.hostels);
  await search(
    res.districtsHCM,
    res.districtsHaNoi,
    res.districtsDaNang,
    res.streetHCM,
    res.streetHaNoi,
    res.streetDaNang
  );
});

const search = async (
  districtsHCM,
  districtsHaNoi,
  districtsDaNang,
  streetHCM,
  streetHaNoi,
  streetDaNang
) => {
  $("#city").change(async () => {
    $("#district").html(`<option>--District--</option>`);
    $("#street").html(`<option>--Street--</option>`);

    if ($("#city").val() == "TP.HCM") {
      $.each(districtsHCM.districts, (index, value) => {
        const { name } = value;
        var child = `
            <option value="${name}">${name}</option>`;

        $("#district").append(child);
      });
    } else {
      if ($("#city").val() == "HaNoi") {
        $.each(districtsHaNoi.districts, (index, value) => {
          const { name } = value;
          var child = `
          <option value="${name}">${name}</option>`;

          $("#district").append(child);
        });
      } else {
        if ($("#city").val() == "DaNang") {
          $.each(districtsDaNang.districts, (index, value) => {
            const { name } = value;
            var child = `
                  <option value="${name}">${name}</option>`;

            $("#district").append(child);
          });
        } else {
          var child = ``;
        }
      }
    }
    $("#district").append(child);
    if ($("#city").val() == "TP.HCM") {
      $("#district").change(async () => {
        $("#street").html(`<option>--Street--</option>`);
        for (let i = 0; i < districtsHCM.districts.length; i++) {
          if ($("#district").val() == districtsHCM.districts[i].name) {
            $.each(streetHCM[i].street, (index, value) => {
              const { name } = value;
              var kid = `
                <option value="${name}">${name}</option>`;

              $("#street").append(kid);
            });
          }
        }
      });
    }
    if ($("#city").val() == "HaNoi") {
      $("#district").change(async () => {
        $("#street").html(`<option>--Street--</option>`);
        for (let i = 0; i < districtsHaNoi.districts.length; i++) {
          if ($("#district").val() == districtsHaNoi.districts[i].name) {
            $.each(streetHaNoi[i].street, (index, value) => {
              const { name } = value;
              var kid = `
                <option value="${name}">${name}</option>`;

              $("#street").append(kid);
            });
          }
        }
      });
    }
    if ($("#city").val() == "DaNang") {
      $("#district").change(async () => {
        $("#street").html(`<option>--Street--</option>`);
        for (let i = 0; i < districtsDaNang.districts.length; i++) {
          if ($("#district").val() == districtsDaNang.districts[i].name) {
            $.each(streetDaNang[i].street, (index, value) => {
              const { name } = value;
              var kid = `
                <option value="${name}">${name}</option>`;

              $("#street").append(kid);
            });
          }
        }
      });
    }
  });
};

const getHostels = async () => {
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
  
  $.each(hostelList.hostels, (index, value) => {
    const {
      hostel_id,
      Title,
      area,
      address,
      city,
      description,
      name,
      email,
      phone_number,
      district,
      price,
      street,
      url,
      priceUnit,
    } = value;

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
            <input style="background-color: red;" type="submit" value="delete" />
            </form>          
          </div>
  
          <div class="location">
            <span> 
            <i class="glyphicon glyphicon-map-marker"></i>
            <b>${address}, ${street}, ${district}, ${city}</b>
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
  });
};
