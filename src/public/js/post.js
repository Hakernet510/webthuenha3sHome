$(document).ready(() => {
    $("#formPost").submit((event) => {
      event.preventDefault();
      
      console.log(
        "🚀 ~ file: post.js ~ line 21 ~ $ ~ $(`#formPost`).serialize()",
        $("#formPost").serialize()
      );
      $("#postResponse").text("Waiting for post...");
  
      $.post({
        url: "post",
        dataType: "json",
        data: $("#formPost").serialize(),
        success: (res) => {
          console.log("🚀 ~ file: post.js ~ line 27 ~ $ ~ res", res);
          $("#formPost").trigger("reset");
          $("#postResponse").text(res.message);
          if (res.message !== "success") return alert("đăng thất bại");
          // window.location.href = "/landlord"
        },
      });
    });
  });
  