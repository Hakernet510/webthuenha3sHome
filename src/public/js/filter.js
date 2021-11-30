$(document).ready(() => {
    $("#formSearch").submit((event) => {
      event.preventDefault();
  
      console.log(
        "🚀 ~ file: search.js ~ line 21 ~ $ ~ $(`#formSearch`).serialize()",
        $("#formSearch").serialize()
      );
      $("#searchResponse").text("Waiting for search...");
  
      $.search({
        url: "search",
        dataType: "json",
        data: $("#formSearch").serialize(),
        success: (res) => {
          console.log("🚀 ~ file: search.js ~ line 27 ~ $ ~ res", res);
          $("#formSearch").trigger("reset");
          $("#SearchResponse").text(res.message);
          if (res.message !== "success") return alert("đăng thất bại");
          window.location.href = "/landlord"
        },
      });
    });
  });
  