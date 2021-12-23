$(document).ready(async () => {
  var res = await getData();
  await search(res.city, res.district, res.streetA);
  await post();
});

const search = async (city, district, streetA) => {
  $("#city").change(async () => {
    $("#district").html(`<option>--District--</option>`);
    $("#street").html(`<option>--Street--</option>`);
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
    $("#district").change(async () => {
      $("#street").html(`<option>--Street--</option>`);
      for (let i = 0; i < streetA.length; i++) {
        for (let f = 0; f < streetA[i].length; f++) {
          if ($("#district").val() == streetA[i][f].street[0].district_id) {
            $.each(streetA[i][f].street, (index, value) => {
              const { street_id, name } = value;
              console.log("🚀 ~ file: post.js ~ line 29 ~ $.each ~ street_id", street_id)
              var kid = `
                    <option value="${street_id}">${name}</option>`;

              $("#street").append(kid);
            });
          }
        }
      }
    });

    //   if ($("#city").val() == "1") {
    //     $.each(districtsHCM.districts, (index, value) => {
    //       const { district_id, name } = value;
    //       var child = `
    //           <option value="${district_id}">${name}</option>`;

    //       $("#district").append(child);
    //     });
    //   } else {
    //     if ($("#city").val() == "2") {
    //       $.each(districtsHaNoi.districts, (index, value) => {
    //         const { district_id, name } = value;
    //         var child = `
    //           <option value="${district_id}">${name}</option>`;

    //         $("#district").append(child);
    //       });
    //     } else {
    //       if ($("#city").val() == "3") {
    //         $.each(districtsDaNang.districts, (index, value) => {
    //           const { district_id, name } = value;
    //           var child = `
    //           <option value="${district_id}">${name}</option>`;

    //           $("#district").append(child);
    //         });
    //       } else {
    //         var child = ``;
    //       }
    //     }
    //   }
    //   $("#district").append(child);
    //   if ($("#city").val() == "1") {
    //     $("#district").change(async () => {
    //       $("#street").html(`<option>--Street--</option>`);
    //       for (let i = 0; i < districtsHCM.districts.length; i++) {
    //         if ($("#district").val() == districtsHCM.districts[i].district_id) {
    //           $.each(streetHCM[i].street, (index, value) => {
    //             const { street_id, name } = value;
    //             var kid = `
    //               <option value="${street_id}">${name}</option>`;

    //             $("#street").append(kid);
    //           });
    //         }
    //       }
    //     });
    //   }
    //   if ($("#city").val() == "2") {
    //     $("#district").change(async () => {
    //       $("#street").html(`<option>--Street--</option>`);
    //       for (let i = 0; i < districtsHaNoi.districts.length; i++) {
    //         if ($("#district").val() == districtsHaNoi.districts[i].district_id) {
    //           $.each(streetHaNoi[i].street, (index, value) => {
    //             const { street_id, name } = value;
    //             var kid = `
    //               <option value="${street_id}">${name}</option>`;

    //             $("#street").append(kid);
    //           });
    //         }
    //       }
    //     });
    //   }
    //   if ($("#city").val() == "3") {
    //     $("#district").change(async () => {
    //       $("#street").html(`<option>--Street--</option>`);
    //       for (let i = 0; i < districtsDaNang.districts.length; i++) {
    //         if (
    //           $("#district").val() == districtsDaNang.districts[i].district_id
    //         ) {
    //           $.each(streetDaNang[i].street, (index, value) => {
    //             const { street_id, name } = value;
    //             var kid = `
    //               <option value="${street_id}">${name}</option>`;

    //             $("#street").append(kid);
    //           });
    //         }
    //       }
    //     });
    //   }
  });
};

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

const post = async () => {
  $("#formPost").submit((event) => {
    event.preventDefault();

    var formData = new FormData();
    var logoImg = $('input[name="image"]').get(0).files[0];
    // console.log("🚀 ~ file: post.js ~ line 6 ~ $ ~ logoImg", logoImg);

    formData.append("image", logoImg);
    formData.append("title", $("input[name=title]").val());
    formData.append("category", $("select[name=category]").val());
    formData.append("city", $("select[name=city]").val());
    formData.append("district", $("select[name=district]").val());
    formData.append("priceUnit", $("select[name=priceUnit]").val());
    formData.append("area", $("input[name=area]").val());
    formData.append("address", $("input[name=address]").val());
    formData.append("street", $("select[name=street]").val());
    formData.append("price", $("input[name=price]").val());
    formData.append("description", $("textarea[name=description]").val());
    formData.append("name", $("input[name=name]").val());
    formData.append("phonenumber", $("input[name=phonenumber]").val());
    formData.append("email", $("input[name=email]").val());

    // formData.get("username");
    // formData.append("id", id);
    // formData.append("name", userName);
    for (var value of formData.values()) {
      console.log(1, value);
    }

    console.log(
      "🚀 ~ file: post.js ~ line 21 ~ $ ~ $(`#formPost`).serialize()",
      $("#formPost").serialize()
    );
    // return;
    $.post({
      url: "post",
      dataType: "json",
      // data: $("#formPost").serialize(),
      data: formData,
      processData: false,
      contentType: false,
      success: (res) => {
        $("#formPost").trigger("reset");
        // window.location.href = "/landlord";
      },
    });
  });
};
