$(document).ready(() => {
  $("#formRegister").submit((event) => {
    event.preventDefault();

    console.log(
      "🚀 ~ file: Register.js ~ line 21 ~ $ ~ $(`#formRegister`).serialize()",
      $("#formRegister").serialize()
    );
    $("#registerResponse").text("Waiting for sign up...");

    $.post({
      url: "register",
      dataType: "json",
      data: $("#formRegister").serialize(),
      success: (res) => {
        console.log("🚀 ~ file: register.js ~ line 27 ~ $ ~ res", res);
        $("#formRegister").trigger("reset");
        $("#registerResponse").text(res.message);
        if (res.message === "Account already exists") return alert("tài khoản đã tồn tại");
        if (res.message === "Repeat wrong password") return alert("mật khẩu nhập lại không khớp");
        if (res.message === "Phone number already used") return alert("số điện thoại đã được sử dụng");
        if (res.message !== "success") return alert("đăng ký thất bại");

        window.location.href = "/login"
      },
    });
  });
});
