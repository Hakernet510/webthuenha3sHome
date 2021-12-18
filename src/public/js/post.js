$(document).ready(async () => {
  const res = await getData();
  await post();
});

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