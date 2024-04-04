
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin</title>
    <script src="style.js"></script>
	<link href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css' rel='stylesheet'>
    <link rel="stylesheet" href="../Admin-Final.css">
    <!-- link thong bao -->
    <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/alertifyjs@1.13.1/build/css/alertify.min.css"/>
    <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/alertifyjs@1.13.1/build/css/themes/bootstrap.min.css"/>
	<script src="../Admin-Final.js"></script>
</head>
<body>
    <!-- kết nói với sever-->
    <?php
    session_start();
    include ("../functions/function.php");
    ?>
     <!-- tiến hành đọc form và lưu dữ liệu vào bảng Product trong database-->
    <?php
     
    if(isset($_POST['add'])){
        $category_id= $_POST['category_id'];
        $productCode= $_POST['productCode'];
        $productName= $_POST['productName'];
        $brand= $_POST['brand'];
        $orderValue= $_POST['orderValue'];
        $sale_orderValue= $_POST['sale_orderValue'];
        $quantity= $_POST['quantity'];
        $smallDesscription= $_POST['small_Desscription'];
        $Desscription= $_POST['Desscription'];
        /* $Iimage = $_FILES['image']['name'];
        $path = "../Image";
        $image_ext = pathinfo($Iimage,PATHINFO_EXTENSION);
        $filename = time().'.'.$image_ext; */
        //
        
       
        if($productName != "" && $quantity !="" && $Desscription != ""){
                $product_query = "INSERT INTO product(IdProduct,NameProduct,Brand,Category,Price,small_Description,Description,Stock,Sale) 
                VALUES (N'$productCode',N'$productName',N'$brand',N'$category_id',N'$orderValue',N'$smallDesscription',N'$Desscription',N'$quantity',N'$sale_orderValue')";
            $product_query_run = mysqli_query($conn,$product_query);
            for ($i = 0; $i < count($_POST['color']); $i++) {
                $codeVariant=$productCode."-".$i;
                $Color= $_POST['color'][$i];
                $Size = $_POST['size'][$i];
                $image1 = $_FILES['image1']['name'][$i];
                $image2 = $_FILES['image2']['name'][$i];
                $sql = "INSERT INTO productVariant ( IdVariant,IdProduct, Color, Size, Image1,Image2)
                VALUES (N'$codeVariant',N'$productCode',N'$Color',N'$Size',N'$image1',N'$image2')";
                mysqli_query($conn, $sql);
               
            }
        if($product_query_run){
            /*
            move_uploaded_file($_FILES['image']['tmp_name'],$path.'/'.$filename); */
            
            redirect("../SanPham/ThemSP.PHP", "Thêm Sản Phẩm thành công");
        }
        else{
            
            redirect("../SanPham/ThemSP.PHP", "Có thông tin bị sai !! Vui lòng kiểm tra lại");
        }
        }
        else{
            
            redirect("../SanPham/ThemSP.PHP", "Tất cả thôn tin đều phải được nhập");
        }
        
    }
    ?>
     <!-- HTML-->
    <div class="navbar">
        
        <h1 id="trang"><i class='bx bxs-smile'></i> AdminHub</h3>
    </div>
    <button type="button" onclick="ReturnSP()" class="return"><i class='bx bx-chevron-left-circle'></i></button>
    <div id="ThemSP" class = "card-body" >
        <h1>Thêm Sản phẩm</h1>
        <br>
        <form method="post" enctype="multipart/form-data">
            <!--chon danh muc sp-->
           <div class="row">
                <div class="product-input cate">
                    <label for="">Chọn mục sản phẩm : </label>
                    <div class="pro-input">
                        <select name="category_id" class="form-select">
                        <option  selected> Chọn danh mục </option>
                        <?php
                            $categories = getAll("category");
                            foreach ($categories as $item) {
                                ?>
                                <option value=" <?= $item['cate_id'];?>" > <?= $item['cate_name'];?> </option>
                                <?php
                                
                            }
                        ?>
                       
                        
                    </select>
                    </div>
                    
                </div>
                <div class="product-input">
                    <label for="">Mã sản phẩm : </label>
                   <input type="text" id="productCode" name="productCode" placeholder="Mã sản phẩm" class="pro-input">

                      </div>           
            
              <div class="product-input">
                    <label for="">Tên sản phẩm : </label>
                   <input type="text" id="productName" name="productName" placeholder="Tên sản phẩm" class="pro-input">

                </div>
            
                <div class="product-input">
                    <label for=""> Thương hiệu : </label>
                   <input type="text" id="brand" name="brand" placeholder="Thương hiệu" class="pro-input">

                </div>
                <div class="product-input">
                    <label for="">Số lượng : </label>
                    <input type="number" id="quantity" name="quantity" placeholder="Số lượng" class="pro-input">

                </div>
            
                <div class="product-input">
                    <label for=""> Giá gốc sản phẩm : </label>
                   <input type="text" id="orderValue" name="orderValue" placeholder="Giá trị đơn hàng" class="pro-input">

                </div>
                <div class="product-input">
                    <label for=""> Giá sau khi giảm giá sản phẩm : </label>
                   <input type="text" id="orderValue" name="sale_orderValue" placeholder="Giá trị đơn hàng" class="pro-input">

                </div>
            
                <div class="product-input">
                    <label for="">Mô tả sơ bộ  sản phẩm : </label>
                    <textarea row="3" id="Desscription" required name="small_Desscription" placeholder="Nhập mô tả ngắn về sản phẩm" class="pro-input des_text"></textarea>
                </div>
                <div class="product-input">
                    <label for="">Mô tả chi tiết  sản phẩm : </label>
                    <textarea row="3" id="Desscription" required name="Desscription" placeholder="Nhập mô tả chi tiết về sản phẩm" class=" pro-input des_text"> </textarea>

                </div>

                <!--
                    <div class="product-input cate">
                    <label for="">Ảnh  sản phẩm - 1 : </label>
                    <input type="file" id="imageInputAdd" required name="image" accept="image/*"  class=" pro-input upload_img " onchange="displayImage('imageInputAdd', 'imagePreviewAdd')" >

                </div>
                <div class="product-input cate">
                    <label for="">Ảnh  sản phẩm - 2 : </label>
                    <input type="file" id="imageInputAdd" required name="image" accept="image/*"  class=" pro-input upload_img " onchange="displayImage('imageInputAdd', 'imagePreviewAdd')" >

                </div>  
                -->
                <div id="variants" class="product-input cate ">
                    <div class="variant">
                        <div class="product-input">
                                <label for="color">Màu sắc (nếu có):</label><br>
                                <input type="text" id="color" name="color[]" placeholder="Nhập màu " class="pro-input">

                         </div>
                         <div class="product-input">
                                <label for="color">Kích cỡ (nếu có):</label><br>
                                <input type="text" id="size" name="size[]" placeholder="Nhập kích cỡ " class="pro-input">

                         </div>
                    
                         <div class="product-input cate">
                            <label for="">Ảnh  sản phẩm - 1 : </label>
                            <input type="file" id="imageInputAdd" required name="image1[]" accept="image/*"  class=" pro-input upload_img " onchange="displayImage('imageInputAdd', 'imagePreviewAdd')" >

                         </div>
                            <div class="product-input cate">
                                        <label for="">Ảnh  sản phẩm - 2 : </label>
                                        <input type="file" id="imageInputAdd" required name="image2[]" accept="image/*"  class=" pro-input upload_img " onchange="displayImage('imageInputAdd', 'imagePreviewAdd')" >

                            </div> 
                                    
                        
                    </div>
                </div>
              
                <button type="button" onclick="addVariant()" class="Submit cate">Thêm biến thể</button>
                
                        

           
            <br>
           <button type="submit" name="add" class="Submit cate">Thêm Sản phẩm</button>
           </div>
           
            
        </form>
        <script>
function addVariant() {
    var variants = document.getElementById('variants');
    var variant = document.createElement('div');
    variant.innerHTML = `
    
                    <div class="variant">
                        <div class="product-input">
                                <label for="color">Màu sắc (nếu có):</label><br>
                                <input type="text" id="color" name="color[]" placeholder="Nhập màu " class="pro-input">

                         </div>
                         <div class="product-input">
                                <label for="color">Kích cỡ (nếu có):</label><br>
                                <input type="text" id="size" name="size[]" placeholder="Nhập kích cỡ " class="pro-input">

                         </div>
                    
                         <div class="product-input cate">
                            <label for="">Ảnh  sản phẩm - 1 : </label>
                            <input type="file" id="imageInputAdd" required name="image1[]" accept="image/*"  class=" pro-input upload_img " onchange="displayImage('imageInputAdd', 'imagePreviewAdd')" >

                         </div>
                            <div class="product-input cate">
                                        <label for="">Ảnh  sản phẩm - 2 : </label>
                                        <input type="file" id="imageInputAdd" required name="image2[]" accept="image/*"  class=" pro-input upload_img " onchange="displayImage('imageInputAdd', 'imagePreviewAdd')" >

                            </div> 
                                    
                        
                    </div>
               
    `;
    variants.appendChild(variant);
}
</script>
    </div>
<!--thong bao -->
<script src="//cdn.jsdelivr.net/npm/alertifyjs@1.13.1/build/alertify.min.js"></script>
<script> 
 <?php
if(isset($_SESSION['message'])){?>
        alertify.set('notifier','position', 'top-right');
        alertify.success('<?= $_SESSION['message'];?>');
        <?php
        unset($_SESSION['message']);
    }
 ?>
 

 </script>

</body>

</html>