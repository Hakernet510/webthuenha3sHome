$(document).ready(() => {
  // $('#formRegister').submit((event) => {
  //     event.preventDefault();
  //     console.log($('#formRegister').serialize());
  //     $.post({
  //         url: 'register',
  //         dataType: 'json',
  //         data: $('#formRegister').serialize(),
  //         success: (res) => {
  //             console.log("res", res);
  //             $("#serverResponse").text(res.message);
  //             if (res.message !== "success") return
  //             resetForm("#formRegister")
  //         }
  //     });
  // });
  $("#formLogin").submit((event) => {
    event.preventDefault();
    alert("gửi thành công");
    console.log($("#formLogin").serialize());
    $("#loginResponse").text("Waiting for login...");
    $.post({
      url: "login",
      dataType: "json",
      data: $("#formLogin").serialize(),
      success: (res) => {
        console.log("🚀 ~ file: login.js ~ line 27 ~ $ ~ res", res);
        $("#loginResponse").text(res.message);
        if (res.message !== "success") return alert("đăng nhập thất bại");
        // saveToken(res.token, res.id);
        $('#formLogin').trigger("reset")
        // redirectAccount(res.role);
        // window.location.href = "/home"
      },
    });
  });
  // $('#formForgot').submit(function (event) {
  //     event.preventDefault();
  //     const passwordForgot = $("#passwordForgot").val();
  //     const passwordConfirmForgot = $("#passwordConfirmForgot").val();
  //     if (passwordForgot !== passwordConfirmForgot) return $("#serverResponse").text("Error : Password is not confirmed!");
  //     $.post({
  //         url: 'forgot',
  //         dataType: 'json',
  //         data: $('#formForgot').serialize(),
  //         success: (res) => {
  //             $("#serverResponse").text(res.message);
  //             if (res.message !== "success") return
  //             resetForm("#formForgot")
  //         }
  //     });
});
