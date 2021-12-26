const listPost = [1, 2, 3, 4, 5, 6, 7, 100];

$(document).ready(() => {
  $("#body_post").html(``);

  $.each(listPost, (index, value) => {
    var children = ` 
    <div class="left item" id="left1">
        <div class="img">
          <img class="picture" src="../image/Quan1-1.jpg" alt="error">
        </div>

        <div class="text">
            <div class="title">
                <a title="Phòng trọ cao cấp quận Thủ Đức">Phòng trọ cao cấp quận Thủ Đức</a>
            
                <div class="admin_button">
                    <div class="edit">
                    <input type="submit" value="edit" />
                    </div>

                    <div class="delete">
                    <input type="submit" value="delete" />
                    </div>
                </div>
            </div>

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

    $("#body_post").append(children);
  });
});

