$(document).ready(() => {
    $("#formForgot").submit((event) => {
      event.preventDefault();
  
      console.log(
        "🚀 ~ file: forgot.js ~ line 21 ~ $ ~ $(`#formForgot`).serialize()",
        $("#formForgot").serialize()
      );
      $("#forgotResponse").text("Waiting for reset password...");
  
      $.post({
        url: "forgot",
        dataType: "json",
        data: $("#formForgot").serialize(),
        success: (res) => {
          console.log("🚀 ~ file: forgot.js ~ line 27 ~ $ ~ res", res);
          $("#formForgot").trigger("reset");
          $("#forgotResponse").text(res.message);
          if (res.message === "Account doesn't exists") return alert("tài khoản không tồn tại");
          if (res.message === "Wrong phone number") return alert("sai số điện thoại");
          if (res.message === "Repeat wrong password") return alert("mật khẩu nhập lại không khớp");
          if (res.message !== "success") return alert("thay mật khẩu thất bại");
          window.location.href = "/login";
          alert("thay mật khẩu thành công");
        },
      });
    });
  });
  