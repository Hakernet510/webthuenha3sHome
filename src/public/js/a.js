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
    const { Title, area, address, city, description, name, email, phone_number, district, price, street, url, priceUnit } = value;

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

// const displayProduct = (productInfor) => {
//     console.log(productInfor);
//     $("#productBody").html(``);
//     $.each(productInfor, function (index, value) {
//       const {
//         ProductId,
//         ProductType,
//         ProductName,
//         ProductImage,
//         ProductPrice,
//         ProductAmount,
//       } = value;
//       var html = `<tr class="product">
//                   <td id="productId">${ProductId}</td>
//                   <td id="productName">${ProductName}</td>
//                   <td id="productImage"><img class="image" src="/img/${ProductType}/${ProductImage}.png" alt="hình" /></td>
//                   <td id="productPrice">${ProductPrice.toLocaleString("it-IT", {
//                     style: "currency",
//                     currency: "VND",
//                   })}</td>
//                   <td id="productAmount">${ProductAmount}</td>
//                   <td><button type="button" class="btn btn-warning" onclick="addToCart('${ProductId}','${ProductType}','${ProductName}','${ProductImage}','${ProductPrice}','${ProductAmount}')">Add to Cart</button></td>
//               </tr>`;
//       console.log(value);
//       $("#productBody").append(html);
//     });
//   };
