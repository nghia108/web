function myFunction(id) {
    var i, content;
    content = document.getElementsByClassName("content");
    for (i = 0; i < content.length; i++) {
        content[i].style.display = "none";
    }
    document.getElementById(id).style.display = "block";
}

function toggleClass(element, originalClass, newClass) {
    // Loại bỏ lớp mới từ tất cả các nút khác
    var buttons = document.getElementsByClassName(originalClass);
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove(newClass);
    }   

    // Thêm lớp mới vào nút được nhấp vào
    element.classList.add(newClass);
}


function LoginAdmin() {
    // Lấy giá trị từ trường input
    var username = document.getElementById('Login-Username').value;

    // Lưu giá trị vào session storage
    sessionStorage.setItem('savedUsername', username);

    // Hiển thị thông báo với giá trị đã lưu
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
}

document.addEventListener("DOMContentLoaded", function() {
    loadInfo();
});

function loadInfo(){
    var username = sessionStorage.getItem('savedUsername');
    // Nếu có giá trị, thêm vào phần tử có id là 'Fullname-Intro'
    document.getElementById('Fullname-Intro').innerHTML = "<strong>Xin chào, </strong>" + username;
}


function confirmLogout() {
    // Sử dụng hàm confirm để hiển thị thông báo xác nhận
    var result = confirm("Bạn có thoát không?");
    // Nếu người dùng chọn OK (đồng ý), thì thực hiện hành động xóa
    if (result) {
        window.location.href = 'Login-Admin.html'
        
    }
}


function toggleLockIcon(button) {
    var icon = button.querySelector('i');
    if (icon.classList.contains('bxs-lock-alt')) {
        // Nếu đang là icon lock, chuyển sang icon mở
        icon.classList.remove('bxs-lock-alt');
        icon.classList.add('bxs-lock-open-alt');
        alert("Đã mở khóa");
    } else {
        // Nếu đang là icon mở, chuyển sang icon lock
        icon.classList.remove('bxs-lock-open-alt');
        icon.classList.add('bxs-lock-alt');
        alert("Đã khóa");

    }
}


window.onload = function() {
    var preview = document.getElementById('imagePreviewEdit');
    if (preview.src !== '') {
        preview.style.display = 'block';
    }
}

function displayImage(inputId, previewId) {
    var input = document.getElementById(inputId);
    var preview = document.getElementById(previewId);

    var file = input.files[0];
    var reader = new FileReader();

    reader.onload = function(e) {
        preview.src = e.target.result;
        preview.style.display = 'block';
    };

    if (file) {
        reader.readAsDataURL(file);
    } else {
        preview.src = '';
        preview.style.display = 'none';
    }
}

function removeImage(previewId) {
    var preview = document.getElementById(previewId);
    preview.src = '';
    preview.style.display = 'none';
}



function confirmDeleteSP() {
    // Sử dụng hàm confirm để hiển thị thông báo xác nhận
    var result = confirm("Bạn có chắc chắn muốn xóa sản phẩm không?");

    // Nếu người dùng chọn OK (đồng ý), thì thực hiện hành động xóa
    if (result) {
        deleteSP();
    }
}

function deleteSP() {
    // Thực hiện xóa sản phẩm ở đây
    alert("Sản phẩm đã được xóa!");

}

function ReturnKH() {
    // Đặt một giá trị trong localStorage
    sessionStorage.setItem('showTab', 'KH-tab');
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
}

function ReturnKH1() {
    // Đặt một giá trị trong localStorage
    alert("Thêm thành công!")
    sessionStorage.setItem('showTab', 'KH-tab');
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
}

function ReturnKH2() {
    // Đặt một giá trị trong localStorage
    alert("Chỉnh sửa thành công!")
    sessionStorage.setItem('showTab', 'KH-tab');
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
}

function ReturnSP() {
    // Đặt một giá trị trong localStorage
    sessionStorage.setItem('showTab', 'SP-tab');
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
}

function ReturnSP1() {
    // Đặt một giá trị trong localStorage
    alert("Thêm thành công!")
    sessionStorage.setItem('showTab', 'SP-tab');
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
}

function ReturnSP2() {
    // Đặt một giá trị trong localStorage
    alert("Chỉnh sửa thành công!")
    sessionStorage.setItem('showTab', 'SP-tab');
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
}


