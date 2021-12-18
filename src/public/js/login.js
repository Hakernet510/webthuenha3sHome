$(document).ready(() => {
  $("#formLogin").submit((event) => {
    event.preventDefault();

    console.log(
      "🚀 ~ file: login.js ~ line 21 ~ $ ~ $(`#formLogin`).serialize()",
      $("#formLogin").serialize()
    );
    $("#loginResponse").text("Waiting for login...");

    $.post({
      url: "login",
      dataType: "json",
      data: $("#formLogin").serialize(),
      success: (res) => {
        console.log("🚀 ~ file: login.js ~ line 27 ~ $ ~ res", res);
        $("#formLogin").trigger("reset");
        $("#loginResponse").text(res.message);
        if (res.message !== "success") return alert("đăng nhập thất bại");
        localStorage.setItem("user", res.user);
        var a = localStorage.getItem("user");
        console.log("🚀 ~ file: login.js ~ line 27 ~ $ ~ res", a.id);
        if (res.role == 0) {
          window.location.href = "/landlord";
        } else {
          if (res.role == 1) {
            window.location.href = "/renter";
          } else {
            window.location.href = "/admin";
          }
        }
      },
    });
  });
});
