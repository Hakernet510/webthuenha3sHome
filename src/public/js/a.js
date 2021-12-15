$(document).ready(async () => {
  var hostelList = await getHostels();
  await console.log("🚀 ~ file: a.js ~ line 5 ~ $ ~ hostelList", hostelList);
  await loadData(hostelList);
  await search();
});

const search = async () => {
  $("#city").change( async () => {
    $("#district").html(`<option>--District--</option>`);
    $("#street").html(`<option>--Street--</option>`);

    if ($("#city").val() == 1) {
      var child = `

                      <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>`;
    } else {
      if ($("#city").val() == 2) {
        var child = `
            <option value="1">5</option>
            <option value="2">6</option>
            <option value="3">7</option>
            <option value="4">8</option>`;
      } else {
        if ($("#city").val() == 3) {
          var child = `
                      <option value="1">9</option>
            <option value="2">10</option>
            <option value="3">11</option>
            <option value="4">12</option>`;
        } else {
          if ($("#city").val() == 4) {
            var child = `
                      <option value="1">13</option>
            <option value="2">14</option>
            <option value="3">15</option>
            <option value="4">16</option>`;
          } else {
            var child = ``;
          }
        }
      }
    }
    $("#district").append(child);

    $("#district").change( async () => {
      $("#street").html(`<option>--Street--</option>`);
      if ($("#district").val() == 1) {
        var kid = `
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>`;
      } else {
        if ($("#district").val() == 2) {
          var kid = `
            <option value="1">5</option>
            <option value="2">6</option>
            <option value="3">7</option>
            <option value="4">8</option>`;
        } else {
          if ($("#district").val() == 3) {
            var kid = `
              <option value="1">9</option>
              <option value="2">10</option>
              <option value="3">11</option>
              <option value="4">12</option>`;
          } else {
            if ($("#district").val() == 4) {
              var kid = `
                <option value="1">13</option>
                <option value="2">14</option>
                <option value="3">15</option>
                <option value="4">16</option>`;
            } else {
              var kid = ``;
            }
          }
        }
      }
      $("#street").append(kid);
    });
  });
};

const getHostels = async () => {
  var result = null;

  const getResult = (data) => {
    result = data;
  };

  await $.get({
    url: "landlord/api",
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

  $.each(hostelList.hostels, (index, value) => {
    const {
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
        </div>

        <div class="location">
          <span> 
          <i class="glyphicon glyphicon-map-marker"></i>
          <b>${address}, ${street}, ${district}, ${city}/b>
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
