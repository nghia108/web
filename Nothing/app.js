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
            <h2>${product.name}</h2>
            <p>Mã sản phẩm: ${product.id}</p>
            <p>Màu sắc: ${product.color}</p>
            <p>Giá tiền: ${product.price}</p>
            <p>Số lượng: ${product.quantity}</p>
            <p>Tổng số tiền: ${product.total}₫</p>
        `;
        productsContainer.appendChild(productElement);
    } else {
        productsContainer.innerText = 'Không có sản phẩm nào đã được lưu.';
    }
    
};
