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

  $.each(hostelList.hostels, (index, value) => {
    const {
      hostel_id,
      Title,
      Category,
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

    var children = `<div class="test">

      <div class="center">
        <h1>Postting</h1>
        <form action="/updateHostel" id="formPost" method="post">
          <h2>Thông tin cơ bản</h2>
          <div class="form-group title field">
            <label for="usr">Title</label>
            <input
              class="input"
              type="text"
              name="title"
              class="form-control"
              id="usr"
              value="${Title}"
              required
            />
          </div>

          <div class="basic">
            <div class="left">
              <div class="cate">
                <span>Category</span>
                <select name="category">
                  <option value="${Category}">${Category}</option>
                  <option value="Room for rent">Cho thuê phòng trọ</option>
                  <option value="shared room">Tìm ở ghép</option>
                </select>
              </div>
              <br />

              <div class="city">
                <span>City</span>
                <select name="city">
                  <option value="${city}">${city}</option>
                  <option value="HoChiMinh">HoChiMinh</option>
                  <option value="HaNoi">HaNoi</option>
                  <option value="DaNang">DaNang</option>
                </select>
              </div>
              <br />

              <div class="district">
                <span>District</span>
                <select name="district">
                  <option value="${district}">${district}</option>
                  <option value="">Quận 1</option>
                  <option value="">Quận 2</option>
                  <option value="">Quận 3</option>
                  <option value="">Quận 4</option>
                  <option value="">Quận 5</option>
                  <option value="">Quận 6</option>
                  <option value="">Quận 7</option>
                  <option value="">Quận 8</option>
                  <option value="">Quận 9</option>
                  <option value="">Quận 10</option>
                  <option value="">Quận 11</option>
                  <option value="">Quận 12</option>
                </select>
              </div>

              <div class="PriceUnit">
                <span>Price Unit</span>
                <select class="priceunit" name="priceUnit">
                  <option value="${priceUnit}">${priceUnit}</option>
                  <option value="">Triệu/tháng</option>
                  <option value="">Triệu/năm</option>
                </select>
              </div>
            </div>

            <div class="right height">
              <div class="square">
                <span>Area</span>
                <input type="text" name="area" value="${area}" required />
                <!-- <span class="m2">m<sup>2</sup></span> -->
              </div>

              <div class="address">
                <span>Address</span>
                <input type="text" name="address" value="${address}" required />
                <input type="text" name="id" value="${hostel_id}" hidden />
              </div>


              <div class="street">
                <span>Street</span>
                <input type="text" name="street" value="${street}" required />
              </div>

              <br />
              <div class="price">
                <span>Price</span>
                <input
                  type="text"
                  name="price"
                  placeholder="Ex: If 2.5 milions VNĐ then type 2.5"
                  value="${price}"
                  required
                />
              </div>

              
            </div>
          </div>

          <div class="advance">
            <h2>Thông tin mô tả</h2>
            <div class="group">
              <!-- <label for="pwd">Nội Dung Mô Tả</label> -->
              <textarea 
                placeholder="Nội Dung Mô Tả"
                class="form-control textarea"
                name="description"
                rows="5"
                id="comment"
              >${description}</textarea>
            </div>
          </div>

          <div class="contact">
            <h2>Thông tin liên hệ</h2>
            <div>
              <label class="contact_label" for="contact_name">Tên liên hệ</label>
              <input id="contact_name" type="text" name="name" value="${name}" required />
            </div>
            <div>
              <label class="contact_label" for="contact_phone">Điện thoại</label>
              <input id="contact_phone" type="text" name="phonenumber" value="${phone_number}" required />
            </div>
            <div>
              <label class="contact_label" for="contact_email">Email</label>
              <input id="contact_email" type="text" name="email" value="${email}" required />
            </div>
          </div>

          <!-- <br> -->

          <input class="submit" type="submit" value="Post" />

          <!-- <div>
          <button class="register">
            <a href="../html/login.html">Post</a>
          </button>
        </div> -->
        </form>
      </div>
    </div>`;

    $("#post_parent").append(children);
  });
};
