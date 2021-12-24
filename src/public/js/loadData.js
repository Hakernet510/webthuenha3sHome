
const loadData = async (hostelList) => {
    console.log("🚀 ~ file: a.js ~ line 5 ~ $ ~ hostelList", hostelList);
  
    $("#post_parent").html(``);
  
    $.each(hostelList.hostels, async (index, value) => {
      const {
        hostel_id,
        city_id,
        district_id,
        street_id,
        Title,
        Category,
        area,
        address,
        description,
        name,
        email,
        phone_number,
        price,
        url,
        priceUnit,
      } = value;
      var res = await getData();
      const street = res.street;
      const district = res.district;
      const city = res.city;
  
      for (let x = 0; x < city.city.length; x++) {
        if (city_id == city.city[x].id) {
          const Gcity = city.city[0].name;
          for (let i = 0; i < district[x].districts.length; i++) {
            if (district_id == district[x].districts[i].district_id) {
              const Gdistrict = district[x].districts[i].name;
              for (let f = 0; f < street.street.length; f++) {
                if (street_id == street.street[f].street_id) {
                  const Gstreet = street.street[f].name;
                  if (city_id == 1) {
                  var children = `<div class="test">
  
                  <div class="center">
                    <h1>Postting</h1>
                    <form action="/updateHostel" id="formUpdate" method="post">
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
                            <select id="city" name="city">
                              <option value="${city_id}">${Gcity}</option>
                              <option value="">--City--</option>
                              <option value="2">HaNoi</option>
                              <option value="3">DaNang</option>
                            </select>
                          </div>
                          <br />
            
                          <div class="district">
                            <span>District</span>
                            <select id="district" name="district">
                              <option value="${district_id}">${Gdistrict}</option>
                              <option value="">--District--</option>
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
                            <select name="street" id="street">
                              <option value="${street_id}">${Gstreet}</option>
                              <option value="">--Street--</option>
                              </select>
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
            
                      <input class="submit" type="submit" value="Edit" />
            
                      <!-- <div>
                      <button class="register">
                        <a href="../html/login.html">Post</a>
                      </button>
                    </div> -->
                    </form>
                  </div>
                </div>`;
                  } else {
                    if (city_id == 2) {
                      var children = `<div class="test">
  
                  <div class="center">
                    <h1>Postting</h1>
                    <form action="/updateHostel" id="formUpdate" method="post">
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
                            <select id="city" name="city">
                              <option value="${city_id}">${Gcity}</option>
                              <option value="">--City--</option>
                              <option value="1">TP.HCM</option>
                              <option value="3">DaNang</option>
                            </select>
                          </div>
                          <br />
            
                          <div class="district">
                            <span>District</span>
                            <select id="district" name="district">
                              <option value="${district_id}">${Gdistrict}</option>
                              <option value="">--District--</option>
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
                            <select name="street" id="street">
                              <option value="${street_id}">${Gstreet}</option>
                              <option value="">--Street--</option>
                              </select>
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
            
                      <input class="submit" type="submit" value="Edit" />
            
                      <!-- <div>
                      <button class="register">
                        <a href="../html/login.html">Post</a>
                      </button>
                    </div> -->
                    </form>
                  </div>
                </div>`;
                    } else {
                      var children = `<div class="test">
  
                  <div class="center">
                    <h1>Postting</h1>
                    <form action="/updateHostel" id="formUpdate" method="post">
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
                            <select id="city" name="city">
                              <option value="${city_id}">${Gcity}</option>
                              <option value="">--City--</option>
                              <option value="1">TP.HCM</option>
                              <option value="2">HaNoi</option>
                            </select>
                          </div>
                          <br />
            
                          <div class="district">
                            <span>District</span>
                            <select id="district" name="district">
                              <option value="${district_id}">${Gdistrict}</option>
                              <option value="">--District--</option>
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
                            <select name="street" id="street">
                              <option value="${street_id}">${Gstreet}</option>
                              <option value="">--Street--</option>
                              </select>
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
            
                      <input class="submit" type="submit" value="Edit" />
            
                      <!-- <div>
                      <button class="register">
                        <a href="../html/login.html">Post</a>
                      </button>
                    </div> -->
                    </form>
                  </div>
                </div>`;
                    }
                  }
  
                  $("#post_parent").append(children);
                }
              }
            }
          }
        }
      }
      
    });
  };