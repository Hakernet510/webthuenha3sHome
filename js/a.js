const a = [1, 2, 3, 4, 5, 6, 7, 100];

$(document).ready(() => {
  $("#post_parent").html(``);

  $.each(a, (index, value) => {
    var children = ` <div class="left item" id="left1">
        <div class="img">
          <img class="picture" src="../image/thuduc.jpg" alt="nhà thủ đức">
        </div>

        <div class="text">
            <h4>Phòng trọ cao cấp Thủ Đức</h4>
            <div>
              <span><i></i> <b>33 m²</b></span> 
              <span class="rating" style="color: #fc0">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
             </span>
            </div>

            <div class="localtion">
              <span> <b><a>Thủ Đức, Hồ Chí Minh</a></b></span>
          </div>

          <div class="money">
            <span>3.8 Triệu/tháng</span>
          </div>
        </div>       
    </div>`;

    $("#post_parent").append(children)
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
