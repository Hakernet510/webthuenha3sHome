const test = [1, 2, 3, 4, 5, 6, 7, 100];
console.log(123456);
$(document).ready(() => {
    // lấy API chỗ này nè nha

  $("#body_account").html(``);

  $.each(test, (index, value) => {
    var children = ` 
        <tr>
            <td>${index}</td>
            <td>Fullname</td>
            <td>Phonenumber</td>
            <td>Role</td>
        </tr>
    `;

    $("#body_account").append(children);
  });
});

