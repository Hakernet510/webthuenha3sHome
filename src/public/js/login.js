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
        if (res.user[0].role == 2) {
          localStorage.setItem("user", res.user[0].role);
          window.location.href = "/admin";
        } else {
          localStorage.setItem("user", res.user);
          if (res.user[0].role == 0) {
            window.location.href = "/renter";
          } else {
          window.location.href = "/landlord";
          }
        }
      },
    });
  });
});
