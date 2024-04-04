
document.getElementById('next').onclick = function() {
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}

document.getElementById('prev').onclick = function() {
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length-1]);
}


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

function displayNames(value) {
  input.value = value;
  removeElements();
}

function removeElements() {
  list.innerHTML = "";
}


// Định nghĩa dữ liệu sản phẩm (một mảng sản phẩm giả định)
/*const products = [
    { name: "Sản phẩm 1", category: "category1", price: 100 },
    { name: "Sản phẩm 2", category: "category2", price: 150 },
    // Thêm sản phẩm khác
];

const searchForm = document.getElementById("searchBox");
const searchInput = document.getElementById("input");
const categorySelect = document.getElementById("category");
const priceMinInput = document.getElementById("price-min");
const priceMaxInput = document.getElementById("price-max");
const resultsDiv = document.getElementById("results");
const paginationDiv = document.getElementById("pagination");

searchForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const searchTerm = searchInput.value;
    const selectedCategory = categorySelect.value;
    const minPrice = priceMinInput.value;
    const maxPrice = priceMaxInput.value;
    
    // Thực hiện tìm kiếm dựa trên tiêu chí nhập vào và hiển thị kết quả
    const searchResults = performSearch(searchTerm, selectedCategory, minPrice, maxPrice);
    displayResults(searchResults);
});*/


function performSearch(searchTerm, category, minPrice, maxPrice) {
    // Thực hiện tìm kiếm trong mảng sản phẩm và trả về kết quả
    // Dựa trên các tiêu chí tìm kiếm
    const results = products.filter(product => {
        const isNameMatch = searchTerm === "" || product.name.toLowerCase().includes(searchTerm.toLowerCase());
        const isCategoryMatch = category === "" || product.category === category;
        const isPriceMatch = (minPrice === "" || product.price >= minPrice) && (maxPrice === "" || product.price <= maxPrice);
        return isNameMatch && isCategoryMatch && isPriceMatch;
    });
    return results;
}

function displayResults(results) {
    // Hiển thị kết quả tìm kiếm trên trang
    resultsDiv.innerHTML = "";

    if (results.length === 0) {
        resultsDiv.innerHTML = "Không có kết quả nào.";
        return;
    }

    results.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
            <h2>${product.name}</h2>
            <p>Danh mục: ${product.category}</p>
            <p>Giá: ${product.price}đ</p>
        `;
        resultsDiv.appendChild(productDiv);
    });
    
    // Bổ sung mã phân trang tại đây nếu cần
}


// Bổ sung mã để xử lý phân trang tại đây nếu cần

// Gọi hàm hiển thị tất cả sản phẩm ban đầu
// displayResults(products);



// chạy slide 
let listss = document.querySelector(".slides .lists1");
let items = document.querySelectorAll(".slides .container1");
let dots = document.querySelectorAll( ".dots li");
let prev = document.getElementById('lui');
let next = document.getElementById("tiep");
let active = 0;
let lengthitems = items.length-1;
prev.onclick = function(){
  if(active -1 < 0){
    active=lengthitems;
  }
  else{
    active = active - 1;
  }
  
  reloadSlider();
}

next.onclick = function(){
  if(active +1 > lengthitems){
    active = 0;
  }
  else{
    active +=1;
  }
  
  reloadSlider();
}
let chamdot = setInterval(()=>{next.click()},6000);
function reloadSlider(){
  let checkleft = items[active].offsetLeft;
  listss.style.left =  -checkleft + 'px';
  let lastActiveDot = document.querySelector(".dots li.active");
  lastActiveDot.classList.remove("active");
  dots[active].classList.add('active')
  clearInterval(chamdot);
  chamdot = setInterval(()=>{next.click()},3000);
}
dots.forEach((li,key)=>{
  li.addEventListener('click',function(){
    active = key ;
    reloadSlider();
  })
})