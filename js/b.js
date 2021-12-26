const a = [1, 2, 3, 4, 5, 6, 7, 100];

$(document).ready(() => {
  $("#admin_parent").html(``);

  $.each(a, (index, value) => {
    var children = ` 
    <div class="left item" id="left1">
        <div class="img">
          <img class="picture" src="../image/Quan1-1.jpg" alt="error">
        </div>

        <div class="text">
            <h4 class="title">
              <a title="Phòng trọ cao cấp quận Thủ Đức">Phòng trọ cao cấp quận Thủ Đức</a>
              
              
            </h4>

            <div class="area">
              <span>
              <i class="fa fa-area-chart"></i>
               <b>50 m²</b>
              </span>          
              
            </div>

            <div class="location">
              <span> 
              <i class="glyphicon glyphicon-map-marker"></i>
              <b>321, Bác Ái, Thủ Đức, Hồ Chí Minh</b>
              </span>
          </div>

          <div class="money">
            <span>
            <i class="fa fa-money"></i>
            <b>3.8 Triệu/tháng</b>
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
            <b>Liên hệ: Nguyễn Văn A - 0909666999</b>
            </span>
          </div>

          <div class="mail">
          <span>
            <i class="glyphicon glyphicon-envelope"></i> 
            <b>Email: nguyenvana@gmail.com</b>
          </span>
          </div>
        </div>           
    </div>`;

    $("#admin_parent").append(children);
  });
});

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
