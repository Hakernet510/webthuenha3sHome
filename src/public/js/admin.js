$(document).ready(() => {
    $("#formDelete").submit((event) => {
      event.preventDefault();
      
      $.post({
        url: "admin",
        dataType: "json",
        data: $("#formDelete").serialize(),
        success: (res) => {
          console.log("🚀 ~ file: Delete.js ~ line 27 ~ $ ~ res", res);
          $("#formDelete").trigger("reset");
          if (res.message !== "success") return alert("đăng thất bại");
          window.location.href = "/post";
        },
      });
    });
  });
  