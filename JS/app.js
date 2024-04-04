/*let names = ["Minh", "Thư", "Nghĩa", "Masao"];
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

function displayNames(value) {
  input.value = value;
  removeElements();
}

function removeElements() {
  list.innerHTML = "";
}


window.onload = function() {
    var productsContainer = document.getElementById('products');
    var product = JSON.parse(localStorage.getItem('product'));

    if (product) {
        var productElement = document.createElement('div');
        // Chuyển đổi giá tiền từ chuỗi sang số và loại bỏ ký tự không phải số
        var price = Number(product.price.replace(/./g, "").replace(/[^0-9.-]+/g,""));
        // Chuyển đổi số lượng từ chuỗi sang số
        var quantity = Number(product.quantity);
        // Tính tổng số tiền
        var total = price * quantity;
        productElement.innerHTML = `
         <div class="khung_sp">
            <img src="../product/img/leu2.webp" alt="" class="anh">

            <div class="khung">
            <h2>${product.name}</h2>
            <p> ${product.id}</p>
            <p>Giá tiền: ${product.price}</p>
            <p>Số lượng: ${product.quantity}</p>
            <p class = "total">Tổng số tiền: ${product.total}₫</p>
            </div>
            
<p class = "sl">
            Số lượng: 
            <button onclick="decreaseQuantity()">-</button>
            ${product.quantity}
            <button onclick="increaseQuantity()">+</button>
            </p>

        </div>
            
        `;
        productsContainer.appendChild(productElement);
    } else {
        productsContainer.innerText = 'Không có sản phẩm nào đã được lưu.';
    }
    
};
*/

function addToCart(product) {
  var products = JSON.parse(localStorage.getItem('products')) || [];
  var existingProduct = products.find(p => p.color === product.color);

  if (existingProduct) {
    // Nếu sản phẩm với cùng một color tồn tại, thêm mới vào mảng giá trị
    existingProduct.values.push(product.value);
  } else {
    // Nếu không tồn tại, tạo một sản phẩm mới chỉ với mảng giá trị
    var newProduct = {
      color: product.color,
      values: [product.value]
    };
    products.push(newProduct);
  }

  localStorage.setItem('products', JSON.stringify(products));
}



window.onload = function() {
  var productsContainer = document.getElementById('products');
  var product = JSON.parse(localStorage.getItem('product'));

  if (product) {
      var productElement = document.createElement('div');
      // Chuyển đổi giá tiền từ chuỗi sang số và loại bỏ ký tự không phải số
      var price = Number(product.price.replace(/./g, "").replace(/[^0-9.-]+/g,""));
      // Chuyển đổi số lượng từ chuỗi sang số
      var quantity = Number(product.quantity);
      var sizeMapping = {
        'size1': 'Nhỏ',
        'size2': 'Vừa',
        'size3': 'Lớn'
        // Thêm các ánh xạ khác nếu cần
      };
      
      // Tính tổng số tiền
      var total = price * quantity;
      productElement.innerHTML = `
      <div class="khung_sp">
        <img src="../product/img/leu2.webp" alt="" class="anh">

        <div class="khung">
          <h2>${product.name}</h2>
          <p> ${product.id}</p>
          <p>Kích thước: ${sizeMapping[product.color]}</p>
          <p>Giá tiền: ${product.price}</p>
          <p>Số lượng: <button id="decrease">-</button>${product.quantity}<button id="increase">+</button></p>
          <p class = "total">Tổng số tiền: ${product.total}₫</p>
        </div>
        <p class = "sl">
      </div>
      `;
      productsContainer.appendChild(productElement);

      // Thêm sự kiện cho nút tăng và giảm
      document.getElementById('increase').addEventListener('click', function() {
          quantity++;
          product.quantity = quantity;
          localStorage.setItem('product', JSON.stringify(product));
          location.reload();
      });

      document.getElementById('decrease').addEventListener('click', function() {
          if (quantity > 0) {
              quantity--;
              product.quantity = quantity;
              localStorage.setItem('product', JSON.stringify(product));
              location.reload();
          }
      });
  } else {
      productsContainer.innerText = 'Không có sản phẩm nào đã được lưu.';
  }

  function updateProductElement(element, product) {
    var price = Number(product.price.replace(/./g, "").replace(/[^0-9.-]+/g,""));
    var quantity = Number(product.quantity);
    var total = price * quantity;

    element.querySelector('.total').innerText = `Tổng số tiền: ${total}₫`;
    element.querySelector('button').innerText = product.quantity;

    // Cập nhật các thông tin khác nếu cần
}
};