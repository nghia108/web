
document.getElementById('checkout-form').addEventListener('submit', function(event) {
    // Danh sách các trường cần kiểm tra
    var fields = ['email', 'name', 'phone', 'address', 'city', 'district', 'ward', 'payment'];

    /*for (var i = 0; i < fields.length; i++) {
        var field = document.getElementById(fields[i]);
       if (field.value === '') {
            // Nếu một trường nào đó chưa được điền, hiển thị thông báo và ngăn chặn việc submit form
            alert('Vui lòng điền đầy đủ thông tin trước khi đặt hàng.');
            event.preventDefault();
            return;
        }
        else{
            window.location.href="https://translate.google.com/?hl=vi"
        }
    }
    */
    alert('Bạn đã đặt hàng thành công. Cảm ơn bạn đã mua hàng tại cửa hàng của chúng tôi.');

    // Nếu tất cả các trường đã được điền, cho phép form được submit
});

window.onload = function() {
    var total = localStorage.getItem('total'); // Thay 'total' bằng tên key bạn đã lưu trong LocalStorage
    if (total) {
        var totalElement = document.querySelector('.column p:last-child');
        totalElement.textContent = 'Tổng cộng: ' + total;
    }
}

document.getElementById('checkout-form').addEventListener('submit', function(event) {
    // Check if the user is logged in
    var storedUsername = sessionStorage.getItem('username');
    var storedPassword = sessionStorage.getItem('password');

    if (!storedUsername || !storedPassword) {
        // If not logged in, display an alert and prevent form submission
        alert('Vui lòng đăng nhập trước khi thanh toán.');
        event.preventDefault();
        return;
    }

    // Check other required fields in the checkout form
    /*var fields = ['email', 'name', 'phone', 'address', 'city', 'district', 'ward', 'payment'];

    for (var i = 0; i < fields.length; i++) {
        var field = document.getElementById(fields[i]);
        if (field.value === '') {
            // If any field is not filled, display an alert and prevent form submission
            alert('Vui lòng điền đầy đủ thông tin trước khi đặt hàng.');
            event.preventDefault();
            return;
        }
    }

    // If all checks pass, allow the form to be submitted
    alert('Đặt đơn hàng thành công!');*/

    
});


window.onload = function () {
    // Retrieve user information from sessionStorage
    var storedFullname = sessionStorage.getItem('fullname');
    var storedEmail = sessionStorage.getItem('email');
    var storedAddress = sessionStorage.getItem('address');

    // Insert the retrieved information into the HTML document
    document.getElementById('name').value = storedFullname;
    document.getElementById('email').value = storedEmail;
    document.getElementById('address').value = storedAddress;
};
let names = ["Minh", "Thư", "Nghĩa", "Masao"];
let sortedNames = names.sort((a, b) => a.localeCompare(b, 'vi'));
let input = document.getElementById("input");
let list = document.querySelector(".list");

input.addEventListener("input", (e) => {
  removeElements();
  let inputValue = input.value.toLowerCase();

  sortedNames.forEach((name) => {
    if (name.toLowerCase().startsWith(inputValue) && inputValue !== "") {
      let listItem = document.createElement("li");
      listItem.classList.add("list-items");
      listItem.style.cursor = "pointer";
      listItem.textContent = name;
      listItem.setAttribute("onclick", `displayNames('${name}')`);
      list.appendChild(listItem);
    }
  });
});

// script.js
document.addEventListener("DOMContentLoaded", function () {
    var deliverySelect = document.getElementById("delivery-address");
    var shippingFeeInput = document.getElementById("shipping-fee");

    deliverySelect.addEventListener("change", function () {
        var selectedOption = deliverySelect.options[deliverySelect.selectedIndex].value;
        updateShippingFee(selectedOption);
    });

    function updateShippingFee(selectedOption) {
        switch (selectedOption) {
            case "address1":
                shippingFeeInput.value = "10.000đ";
                break;
            case "address2":
                shippingFeeInput.value = "8.000đ";
                break;
            case "address3":
                shippingFeeInput.value = "12.000đ";
                break;
            default:
                shippingFeeInput.value = "0đ";
        }
    }
});

