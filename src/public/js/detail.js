$(document).ready(() => {
    $("#formDetail").submit((event) => {
      event.preventDefault();
  
      console.log(
        "🚀 ~ file: detail.js ~ line 21 ~ $ ~ $(`#formDetail`).serialize()",
        $("#formDetail").serialize()
      );
      $("#detailResponse").text("Waiting for detail...");
  
      $.post({
        url: "detail",
        dataType: "json",
        data: $("#formDetail").serialize(),
        success: (res) => {
          console.log("🚀 ~ file: detail.js ~ line 27 ~ $ ~ res", res);
          $("#formDetail").trigger("reset");
          $("#detailResponse").text(res.message);
          if (res.message !== "success") return alert("đăng thất bại");
          window.location.href = "/landlord"
        },
      });
    });
  });
  