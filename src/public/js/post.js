$(document).ready(async () => {
  var res = await getData();
  await search(
    res.districtsHCM,
    res.districtsHaNoi,
    res.districtsDaNang,
    res.streetHCM,
    res.streetHaNoi,
    res.streetDaNang
  );
  await post();
});

const search = async (
  districtsHCM,
  districtsHaNoi,
  districtsDaNang,
  streetHCM,
  streetHaNoi,
  streetDaNang
) => {
  $("#city").change(async () => {
    $("#district").html(`<option>--District--</option>`);
    $("#street").html(`<option>--Street--</option>`);

    if ($("#city").val() == "TP.HCM") {
      $.each(districtsHCM.districts, (index, value) => {
        const { name } = value;
        var child = `
            <option value="${name}">${name}</option>`;

        $("#district").append(child);
      });
    } else {
      if ($("#city").val() == "HaNoi") {
        $.each(districtsHaNoi.districts, (index, value) => {
          const { name } = value;
          var child = `
          <option value="${name}">${name}</option>`;

          $("#district").append(child);
        });
      } else {
        if ($("#city").val() == "DaNang") {
          $.each(districtsDaNang.districts, (index, value) => {
            const { name } = value;
            var child = `
                  <option value="${name}">${name}</option>`;

            $("#district").append(child);
          });
        } else {
          var child = ``;
        }
      }
    }
    $("#district").append(child);
    if ($("#city").val() == "TP.HCM") {
      $("#district").change(async () => {
        $("#street").html(`<option>--Street--</option>`);
        for (let i = 0; i < districtsHCM.districts.length; i++) {
          if ($("#district").val() == districtsHCM.districts[i].name) {
            $.each(streetHCM[i].street, (index, value) => {
              const { name } = value;
              var kid = `
                <option value="${name}">${name}</option>`;

              $("#street").append(kid);
            });
          }
        }
      });
    }
    if ($("#city").val() == "HaNoi") {
      $("#district").change(async () => {
        $("#street").html(`<option>--Street--</option>`);
        for (let i = 0; i < districtsHaNoi.districts.length; i++) {
          if ($("#district").val() == districtsHaNoi.districts[i].name) {
            $.each(streetHaNoi[i].street, (index, value) => {
              const { name } = value;
              var kid = `
                <option value="${name}">${name}</option>`;

              $("#street").append(kid);
            });
          }
        }
      });
    }
    if ($("#city").val() == "DaNang") {
      $("#district").change(async () => {
        $("#street").html(`<option>--Street--</option>`);
        for (let i = 0; i < districtsDaNang.districts.length; i++) {
          if ($("#district").val() == districtsDaNang.districts[i].name) {
            $.each(streetDaNang[i].street, (index, value) => {
              const { name } = value;
              var kid = `
                <option value="${name}">${name}</option>`;

              $("#street").append(kid);
            });
          }
        }
      });
    }
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
    formData.append("title", $( "input[name=title]" ).val());
    formData.append("category", $( "select[name=category]" ).val());
    formData.append("city", $( "select[name=city]" ).val());
    formData.append("district", $( "select[name=district]" ).val());
    formData.append("priceUnit", $( "select[name=priceUnit]" ).val());
    formData.append("area", $( "input[name=area]" ).val());
    formData.append("address", $( "input[name=address]" ).val());
    formData.append("street", $( "input[name=street]" ).val());
    formData.append("price", $( "input[name=price]" ).val());
    formData.append("description", $( "textarea[name=description]" ).val());
    formData.append("name", $( "input[name=name]" ).val());
    formData.append("phonenumber", $( "input[name=phonenumber]" ).val());
    formData.append("email", $( "input[name=email]" ).val());

    
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
        window.location.href = "/landlord";
      },
    });
  });
}