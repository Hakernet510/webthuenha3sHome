$(document).ready(async () => {
  var hostelList = await getHostels();
  await console.log("🚀 ~ file: a.js ~ line 5 ~ $ ~ hostelList", hostelList);
  await loadData(hostelList);
});

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
            <input style="background-color: red;" type="submit" value="edit" />
            </form>
            <form action="/delete" id="formDelete" method="post">
            <input type="text" name="id" value="${hostel_id}" hidden>
            <input style="background-color: red;" type="submit" value="delete" />
            </form>          
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
