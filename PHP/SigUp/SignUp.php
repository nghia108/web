<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- <link rel="stylesheet" href="/Final/Final/CSS/LOGIN.CSS"> -->
    <title>Đăng ký</title>
    <script src="/Final/Final/PHP/test.js"></script>
</head>

 <!-- PHP 
        -Chưa có hàm tự động khởi tạo id
        -Chưa có hàm tự khởi tạo ngày giờ tạo tài khoản 
        -->
<body>
   
<?php
    session_start();  // Khởi tạo phiên

    $severname = "localhost";
    $dbusername = "root";
    $dbpassword = "";
    $dbname ="web2";

    $conn = new mysqli($severname,$dbusername,$dbpassword,$dbname);

    if($conn->connect_error){
        die("Connection failed". $conn->connect_error);
    }

    if(isset($_POST['signup-press'])){
        $fullname = $_POST['Fullname'];
        $email = $_POST['email'];
        $username = $_POST['Username'];
        $password = $_POST['Password'];
        $repeatPassword = $_POST['RepeatPassword'];
        $address = $_POST['Address'];
        $gender = $_POST['Gender'];
        $phone = $_POST['PhoneNumber'];
        
        $currentTime = date('Y-m-d H:i:s');

        
        $check_email_query = "SELECT * FROM customer WHERE EmailCustomer = '$email'";
        $check_email_query_run = mysqli_query($conn, $check_email_query);

        if(mysqli_num_rows($check_email_query_run) > 0){
            echo "<script>
                alert('Email đã tồn tại. Vui lòng thử lại với email khác.');
                window.location.href='SignUp.php';
            </script>";
        }
        else{
            if($password == $repeatPassword ){
                $insert_query = "INSERT INTO customer(IdCustomer,FullNameCustomer, PhoneCustomer, EmailCustomer, AddressCustomer, Gender, UsernameCustomer, PasswordCustomer,Date) 
                VALUE ('1233','$fullname','$phone','$email','$address','$gender','$username','$password','$currentTime')";
                // $insert_query_run = mysqli_query($conn,$insert_query);
            }
            else{
                echo "<script>
                    alert('Mật khẩu không khớp. Vui lòng thử lại.');
                    window.location.href='SignUp.php';
                </script>";
            }
        }
    } 

    $conn->close();
?>


    <div class="container">
        <div id="signup-form">
            <h2 class="signup-heading">Đăng ký</h2>
            <button class="signup-social">
                <ion-icon name="logo-google" class="logo"></ion-icon>
                <!-- <i class="fa-brands fa-google signup-social-icon"></i> -->
                <span class="signup-social-text">Sign up With Google</span>
            </button>
            <button class="signup-social2">
                <ion-icon name="logo-facebook"></ion-icon>
                <span class="signup-social-text">Sign up With Facebook</span>
            </button>
            <div class="signup-or"><span>OR</span> 
                <br>
                <div>
                    <form id="signup" autocomplete="off" action="#" method="post" name="myForm">
                        <input type="text" placeholder="Full name" id="Fullname" name="Fullname" class="signup-input" required>
                        <br>
                        <input type="email" placeholder="Email" id="email" name="email" class="signup-input" required>
                        <br>
                        <input type="text" placeholder="Username" id="Username" name="Username" class="signup-input" required>
                        <br>
                        <input type="password" placeholder="Password" id="Password" name="Password" class="signup-input" required>
                        <br>
                        <input type="password" placeholder="Repeat password" id="RepeatPassword" name="RepeatPassword" class="signup-input" required>
                        <br>
                        <input type="text" placeholder="Address" id="Address" name="Address" class="signup-input" required>
                        <br>
                        <input type="text" placeholder="Phone Number" id="PhoneNumber" name="PhoneNumber" class="signup-input" required>
                        <br>
                        <input type="text" placeholder="Gender" id="Gender" name="Gender" class="signup-input" required>
                        <br>
                        <button class="signup-submit" type="submit" name="signup-press">Sign Up</button>
                    </form>
                    <p class="signup-already"><span>Already have an account? <a href="/Final/Final/HTML/Login.html">Login</a></span>
                </div>
            </div>        
        </div>
    </div>
    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
</body>
</html>
