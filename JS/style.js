let FnameSignup; // Khai báo biến ở phạm vi toàn cục
let EmailSignup;
let UsernameSignup;
let PasswordSignup;
let RepeatPassword;
let AddressSignup;

let UsernameLogin;
let PasswordLogin;
    
function save(){
    FnameSignup = document.getElementById('Fullname').value; // Gán giá trị cho biến
    EmailSignup = document.getElementById('email').value;
    UsernameSignup = document.getElementById('Username').value;
    PasswordSignup = document.getElementById('Password').value;
    RepeatPassword = document.getElementById('RepeatPassword').value;
    AddressSignup = document.getElementById('Address').value;
}

function saveLogin(){
    UsernameLogin = document.getElementById('Login-Username').value;
    PasswordLogin = document.getElementById('Login-Password').value;
}
    
function signup(){
    save(); // Gọi hàm save() để lấy giá trị của Fname

    if(FnameSignup =="" || EmailSignup =="" || UsernameSignup =="" || PasswordSignup =="" || RepeatPassword =="" || AddressSignup ==""){
        alert("KHONG DUOC DE TRONG BAT KY THONG TIN NAO!!");
    }
    else if(PasswordSignup == RepeatPassword){
        alert("DANG KY THANH CONG");
        sessionStorage.setItem('fullname', FnameSignup);
        sessionStorage.setItem('email', EmailSignup);
        sessionStorage.setItem('username', UsernameSignup);
        sessionStorage.setItem('password', PasswordSignup);
        sessionStorage.setItem('address', AddressSignup);
        window.location.href = 'Login.html';
    }
    else{
        alert("SAI MAT KHAU!!");
    } 
}

function thongbao(){
    alert("Thêm thành công");
}

function login(){
    saveLogin();
    var storedUsername = sessionStorage.getItem('username');
    var storedPassword = sessionStorage.getItem('password');
    if( UsernameLogin == storedUsername && PasswordLogin == storedPassword){
        alert("DANG NHAP THANH CONG");
        window.location.href = 'Account.html';
    }
    else if(UsernameLogin == storedUsername && PasswordLogin != storedPassword){
        alert("SAI MAT KHAU");
    }
    else if(UsernameLogin != storedUsername && PasswordLogin != storedPassword){
        alert("TAI KHOAN KHONG TON TAI");
    }
    else if(UsernameLogin != storedUsername && PasswordLogin == storedPassword){
        alert("TAI KHOAN KHONG TON TAI");
    }
}

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
};

window.onload = function() {
    // Existing code...
    document.querySelector("button[onclick=\"myFunction('TTTK-tab'); toggleClass(this, 'item', 'clicked')\"]").click();

    // New code to display user's full name and email
    var storedFullname = sessionStorage.getItem('fullname');
    var storedEmail = sessionStorage.getItem('email');
    var storedAddress = sessionStorage.getItem('address');
    
    document.getElementById('Fullname').innerHTML = "<strong>Họ tên: </strong>" + storedFullname;
    document.getElementById('Fullname-Intro').innerHTML = "<strong>Xin chào, </strong>" + storedFullname;
    document.getElementById('Email').innerHTML = "<strong>Email: </strong>" + storedEmail;
    document.getElementById('Address').innerHTML = "<strong>Địa chỉ: </strong>" + storedAddress;

};



