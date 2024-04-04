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

document.querySelector('.form_cart button[type="submit"]').addEventListener('click', function(event) {
    event.preventDefault();
    
    var product = {
        name: document.querySelector('h1').innerText,
        id: document.querySelector('.id_item').innerText,
        color: document.querySelector('.pick_item input:checked').id,
        price: document.querySelector('h3').innerText,
        quantity: document.querySelector('.custom_btn input').value
    };
    
    // Tách giá tiền thành hai phần: số và đơn vị tiền tệ
    var priceParts = product.price.split('₫');
    product.priceNumber = Number(priceParts[0].replace(/\./g, ''));
    product.currency = '₫';

    // Tính tổng số tiền
    product.total = product.priceNumber * Number(product.quantity);
    
    localStorage.setItem('product', JSON.stringify(product));
    alert('Sản phẩm đã được thêm vào giỏ hàng!');
});



document.addEventListener('DOMContentLoaded', (event) => {
    const btn_minus = document.querySelector('.btn_minus');
    const btn_plus = document.querySelector('.btn_plus');
    let quantity = document.querySelector('.custom_btn input[type="text"]');

    btn_minus.addEventListener('click', () => {
        if (quantity.value > 1) {
            quantity.value--;
        }
    });

    btn_plus.addEventListener('click', () => {
        quantity.value++;
    });
});
