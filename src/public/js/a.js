$(document).ready(async () => {
  var hostelList = await getHostels();
  await console.log("🚀 ~ file: a.js ~ line 5 ~ $ ~ hostelList", hostelList);
  await loadData(hostelList);
});

const getHostels = async () => {
  var result = null;

  const getResult = (data) => {
    console.log("🚀 ~ file: a.js ~ line 13 ~ getResult ~ data", data);
    result = data;
    console.log("🚀 ~ file: a.js ~ line 33 ~ getHostels ~ result", result);
  };

  await $.get({
    url: "landlord/api",
    dataType: "json",
    // data: $("#formLogin").serialize(),
    success: (res) => {
      console.log(
        "🚀 ~ file: a.js ~ line 15 ~ getHostels ~ res",
        res,
        res.hostels
      );
      console.log("🚀 ~ file: a.js ~ line 18 ~ getHostels ~ result", result);
      getResult(res);
    },
  });

  return result;
};

const loadData = async (hostelList) => {
  console.log("🚀 ~ file: a.js ~ line 5 ~ $ ~ hostelList", hostelList);

  $("#post_parent").html(``);

  $.each(hostelList.hostels, (index, value) => {
    const { Title, area, address, city, description, district, price, street, url } = value;

    var children = ` <div class="left item" id="left1">
        <div class="img">
          <img class="picture" src="../image/${url}.png" alt="nhà thủ đức">
        </div>

        <div class="text">
            <h4>${Title}</h4>
            <div>
              <span><i></i> <b>${area} m²</b></span> 
              <span class="rating" style="color: #fc0">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
             </span>
            </div>

            <div class="localtion">
              <span> <b>${address}, đường ${street}, quận ${district}, thành phố ${city}</b></span>
          </div>

          <div class="money">
            <span>${price} Triệu/tháng</span>
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
