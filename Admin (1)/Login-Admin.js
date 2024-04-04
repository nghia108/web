function LoginAdmin() {
    // Lấy giá trị từ trường input
    var username = document.getElementById('Login-Username').value;

    // Lưu giá trị vào session storage
    sessionStorage.setItem('savedUsername', username);

    // Hiển thị thông báo với giá trị đã lưu
    alert('Username saved to session: ' + sessionStorage.getItem('savedUsername'));

    ReturnBDK();
}

function ReturnBDK() {
    // Đặt một giá trị trong localStorage
    sessionStorage.setItem('showTab', 'BDK-tab');
    // Quay lại trang Admin-Final.html
    window.location.href = 'Admin-Final.html';
}

window.onload = function() {
    // Lấy giá trị từ localStorage
    var showTab = sessionStorage.getItem('showTab');
    // Nếu có giá trị, hiển thị thẻ div tương ứng
    if (showTab) {
        myFunction(showTab);
        // Xóa giá trị khỏi localStorage
        sessionStorage.removeItem('showTab');
    }

    // Lấy giá trị username từ sessionStorage
    var username = sessionStorage.getItem('savedUsername');
    // Nếu có giá trị, thêm vào phần tử có id là 'Fullname-Intro'
    document.getElementById('Fullname-Intro').innerHTML = "<strong>Xin chào, </strong>" + username;

}

