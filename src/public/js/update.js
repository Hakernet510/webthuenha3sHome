$(document).ready(async () => {
  var hostelList = await getHostels();
  var res = await getData();
  await search(res.city, res.district, res.streetA);
  console.log("🚀 ~ file: a.js ~ line 5 ~ $ ~ hostelList", hostelList);
  await loadData(hostelList);
  await resUI();
});

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

const getHostels = async () => {
  var result = null;

  const getResult = (data) => {
    result = data;
  };

  await $.get({
    url: "update/api",
    dataType: "json",
    success: (res) => {
      getResult(res);
    },
  });

  return result;
};

const loadData = async (hostelList) => {
  console.log("🚀 ~ file: a.js ~ line 5 ~ $ ~ hostelList", hostelList);

  $("#post_parent").html(``);

  $.each(hostelList.hostels, async (index, value) => {
    const {
      hostel_id,
      Title,
      Category,
      area,
      address,
      city_id,
      description,
      name,
      email,
      phone_number,
      district_id,
      price,
      street_id,
      url,
      priceUnit,
    } = value;
    var res = await getData();
    const streetA = res.streetA;
    const street = res.street;
    const district = res.district;
    const city = res.city;
    for (let x = 0; x < city.city.length; x++) {
      if (city_id == city.city[x].id) {
        const Gcity = city.city[x].name;
        for (let i = 0; i < district[x].districts.length; i++) {
          if (district_id == district[x].districts[i].district_id) {
            console.log(
              "🚀 ~ file: update.js ~ line 78 ~ $.each ~ district[x].districts",
              district[2].districts
            );
            const Gdistrict = district[x].districts[i].district_id;
            for (let z = 0; z < streetA[x][i].street.length; z++) {
              if (street_id == streetA[x][i].street[z].street_id) {
                const Gstreet = streetA[x][i].street[z].street_id;
                var resTitle = `<label for="usr">Title</label>
                <input
                  class="input"
                  type="text"
                  name="title"
                  class="form-control"
                  id="usr"
                  value="${Title}"
                  required
                />`;
                if (Category == "Room for rent") {
                  var resCategory = `
                <option value="${Category}">${Category}</option>
                <option value="shared room">Tìm ở ghép</option>
                `;
                } else {
                  var resCategory = `
                  <option value="${Category}">${Category}</option>
                  <option value="Room for rent">Cho thuê phòng trọ</option>
                `;
                }
                if (city_id == 1) {
                  var resCity = `
                  <option value="">--City--</option>
                  <option value="${city_id}" selected>${Gcity}</option>
                  <option value="2">HaNoi</option>
                  <option value="3">DaNang</option>`;
                } else {
                  if (city_id == 2) {
                    var resCity = `
                    <option value="">--City--</option>
                    <option value="1">TP.HCM</option>
                    <option value="${city_id}" selected>${Gcity}</option>
                    <option value="3">DaNang</option>`;
                  } else {
                    var resCity = `
                    <option value="">--City--</option>
                    <option value="1">TP.HCM</option>
                    <option value="2">HaNoi</option>
                    <option value="${city_id}" selected>${Gcity}</option>`;
                  }
                }
                $.each(district[x].districts, async (index, value) => {
                  const { district_id, name } = value;
                  if (district_id == Gdistrict) {
                    var resDistrict = `<option value="${district_id}" selected>${name}</option>`;
                  } else {
                    var resDistrict = `<option value="${district_id}">${name}</option>`;
                  }
                  $("#district").append(resDistrict);
                });

                if (priceUnit == "Million/month") {
                  var resPriceUnit = `
                  <option value="${priceUnit}">${priceUnit}</option>
                  <option value="Million/year">Triệu/năm</option>
                `;
                } else {
                  var resPriceUnit = `
                  <option value="${priceUnit}">${priceUnit}</option>
                  <option value="">Triệu/tháng</option>
                `;
                }

                var resArea = `
                <span>Area</span>
                <input type="text" name="area" value="${area}" required />`;

                var resAddress = `
                <span>Address</span>
                <input type="text" name="address" value="${address}" required />
                <input type="text" name="id" value="${hostel_id}" hidden />`;

                
                $.each(streetA[x][i].street, async (index, value) => {
                  const { street_id, name } = value;
                  if (street_id == Gstreet) {
                    var resStreet = `<option value="${street_id}" selected>${name}</option>`;
                  } else {
                    var resStreet = `<option value="${street_id}">${name}</option>`;
                  }
                  $("#street").append(resStreet);
                });

                var resPrice = `
                <span>Price</span>
                <input
                  type="text"
                  name="price"
                  placeholder="Ex: If 2.5 milions VNĐ then type 2.5"
                  value="${price}"
                  required
                />`;

                var resDescription = `
                <textarea
                  placeholder="Nội Dung Mô Tả"
                  class="form-control textarea"
                  name="description"
                  rows="5"
                  id="comment">${description}</textarea>`;

                var resName = `
                  <label class="contact_label" for="contact_name">Tên liên hệ</label>
                  <input
                    id="contact_name"
                    type="text"
                    name="name"
                    value="${name}"
                    required
                  />`;

                var resPhonenumber = `
                  <label class="contact_label" for="contact_phone">Điện thoại</label>
                  <input
                    id="contact_phone"
                    type="text"
                    name="phonenumber"
                    value="${phone_number}"
                    required
                  />`;

                var resEmail = `
                  <label class="contact_label" for="contact_email">Email</label>
                  <input
                    id="contact_email"
                    type="text"
                    name="email"
                    value="${email}"
                    required
                  />`;

                $("#title").append(resTitle);
                $("#category").append(resCategory);
                $("#city").append(resCity);
                $("#priceUnit").append(resPriceUnit);
                $("#area").append(resArea);
                $("#address").append(resAddress);
                $("#price").append(resPrice);
                $("#description").append(resDescription);
                $("#name").append(resName);
                $("#phonenumber").append(resPhonenumber);
                $("#email").append(resEmail);
              }
            }
          }
        }
      }
    }
  });
};

const resUI = async () => {
  $("#formUpdate").on("submit", (event) => {
    event.preventDefault();

    console.log(
      "🚀 ~ file: Post.js ~ line 21 ~ $ ~ $(`#formUpdate`).serialize()",
      $("#formUpdate").serialize()
    );
    $("#updateResponse").text("Waiting for post...");

    $.post({
      url: "updateHostel",
      dataType: "json",
      data: $("#formUpdate").serialize(),
      success: (res) => {
        console.log("🚀 ~ file: post.js ~ line 27 ~ $ ~ res", res);
        $("#formUpdate").trigger("reset");
        $("#updateResponse").text(res.message);
        if (res.message !== "success") return alert("sửa thất bại");
        window.location.href = "/admin";
      },
    });
  });
};

const search = async (city, district, streetA) => {
  $("#city").change(async () => {
    console.log("change");
    $("#district").html(`<option value="">--District--</option>`);
    $("#street").html(`<option value="">--Street--</option>`);
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
  });
  $("#district").change(async () => {
    $("#street").html(`<option value="">--Street--</option>`);
    for (let i = 0; i < streetA.length; i++) {
      for (let f = 0; f < streetA[i].length; f++) {
        if ($("#district").val() == streetA[i][f].street[0].district_id) {
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
};
