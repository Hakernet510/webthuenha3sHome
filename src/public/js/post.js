$(document).ready(() => {
    $("#formPost").submit((event) => {
      event.preventDefault();
      
      console.log(
        "🚀 ~ file: post.js ~ line 21 ~ $ ~ $(`#formPost`).serialize()",
        $("#formPost").serialize()
      );
  
      $.post({
        url: "post",
        dataType: "json",
        data: $("#formPost").serialize(),
        success: (res) => {
          console.log("🚀 ~ file: post.js ~ line 27 ~ $ ~ res", res);
          $("#formPost").trigger("reset");
          if (res.message !== "success") return alert("đăng thất bại");
          localStorage.removeItem('image');
          // window.location.href = "/landlord";
        },
      });
    });
  });
  