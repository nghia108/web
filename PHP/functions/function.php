<?php
 include('../config/connectSvr.php');
 /* Lay 1 bang */
 function getAll($table)
 {
    global $conn;
    $query = "SELECT * FROM $table";
    return $query_run = mysqli_query($conn,$query);
 }
 /* lây 1 sản phẩm từ hai bản product và productvariant */
 function getProduct($product, $productvariant)
{
    global $conn;
    $query = "SELECT * FROM $product JOIN $productvariant ON $product.IdProduct = $productvariant.IdProduct;";
    $query_run = mysqli_query($conn, $query);

    if (!$query_run) {
        die('Query Failed: ' . mysqli_error($conn));
    }

    return $query_run;
}
 //
 function redirect($url,$message){
   $_SESSION['message'] = $message;
  
   header('Location: '.$url);
   exit();
 }

?>