      <!-- Footer Start -->
      <footer>
        <div class="footer-warpper">
            <section class="footer-top">
                <a href="#" title="Logo">
                    <img src="/Image/camping_logo_isolated_on_background.png" class="logo" alt="Laplace">
                </a>
                <ul class="social-media-buttons">
                    <li>
                        <a href="#instagram" title="Instagram">
                            <svg
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-linecap="round" stroke-linejoin="round"
                            >
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5">
                                </rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z">
                                </path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5">
                                </line>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="#twitter" title="Twitter">
                            <svg 
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                >
                                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86
                                            3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0
                                            1-7 2c9 5 20 0 20-11.5a4.54.5 0 0 0-.08-.83A7.72 7.72
                                            0 0 0 23 3z"
                                    >
                                    </path>
                                </svg>
                            </a>
                        </li>
                    </ul>
                    </span>
                </section>
                <section class="footer-columns">
                    <section>
                        <ul>
                            <h3>CHĂM SÓC KHÁCH HÀNG</h3>
                            <li>
                                <a href="#" title="Solution 1">Hướng dẫn mua hàng trên website</a>
                            </li>
                            <li>
                                <a href="#" title="Solution 2">Phương thức thanh toán</a>
                            </li>
                            <li>
                                <a href="#" title="Solution 4">Câu Hỏi Thường Gặp</a>
                            </li>
                            <li>
                                <a href="#" title="Solution 5">Khiếu nại bồi thường</a>
                            </li>
                        </ul>
                    </section>

                    <section>
                        <ul>
                            <h3>CHÍNH SÁCH</h3>
                            <li>
                                <a href="#" title="API">Chính sách bảo hành</a>
                            </li>
                            <li>
                                <a href="#" title="Pricing">Chính sách bảo mật thông tin</a>
                            </li>
                            <li>
                                <a href="#" title="Documentation">Chính sách đổi trả
                            <li>
                                <a href="#" title="Realease Notes">Điều khoản và quy định chung</a>
                            </li>
                            <li>
                                <a href="#" title="Realease Notes">Chính sách thanh toán</a>
                            </li>
                        </ul>
                    </section>
                    <section>
                        <ul>
                            <h3>VỀ SHOP</h3>
                            <li>
                                <a href="#" title="Solution 1">Giới thiệu</a>
                            </li>
                            <li>
                                <a href="#" title="Solution 2">Thanh toán</a>
                            </li>
                            <li>
                                <a href="#" title="Solution 3">Liên Hệ</a>
                        </li>
                        <li>
                            <a href="#" title="Solution 4">Giỏ hàng</a>
                        </li>
                    </ul>
                    </section>
            </section>
            <section class="footer-bottom">
                <small>My Company Ltd. <span id="years"></span>, All rights reserved</small>
                <span class="footer-bottom-links">
                    <a href="#" title="Terms and services">Terms and Services</a>
                    <a href="#" title="Privacy Policy">Privacy Policy</a>
                </span>
            </section>
        </div>
    </footer>
    <!-- Footer End -->
  <script>
    let searchBtn = document.querySelector('.searchBtn');
    let closeBtn = document.querySelector('.closeBtn');
    let searchBox = document.querySelector('.searchBox');
    let navigation = document.querySelector('.navigation');
    let menuToggle = document.querySelector('.menuToggle');
    let header = document.querySelector('header');
    let heartBtn = document.querySelector('.heartBtn');
    let cartBtn = document.querySelector('.cartBtn');
    let personBtn = document.querySelector('.personBtn');

    searchBtn.onclick = function(){
        searchBox.classList.add('active');
        closeBtn.classList.add('active');
        searchBtn.classList.add('active');
        menuToggle.classList.add('hide');
        header.classList.remove('open');
        // heartBtn.classList.add('hide');
        heartBtn.style.display='none';
        cartBtn.style.display='none';
        personBtn.style.display='none';
    }
    closeBtn.onclick = function(){
        searchBox.classList.remove('active');
        closeBtn.classList.remove('active');
        searchBtn.classList.remove('active');
        menuToggle.classList.remove('hide');
        // heartBtn.classList.remove('hide');
        heartBtn.style.display = 'block';
        cartBtn.style.display = 'block';
        personBtn.style.display='block';
    }
    menuToggle.onclick = function(){
        header.classList.toggle('open');
        searchBox.classList.remove('active');
        closeBtn.classList.remove('active');
        searchBtn.classList.remove('active');
        heartBtn.style.display = 'block'; // Hiển thị biểu tượng "heart" trở lại
        cartBtn.style.display = 'block'; // Hiển thị biểu tượng "cart" trở lại
        // personBtn.style.display='block'; 
    }
</script>
<script>
    function toggleMenu(plusElement) {
        var menu = plusElement.parentElement.nextElementSibling; // Lấy phần "menu" kế tiếp của "plus"
        if (menu.style.display === 'block') {
            menu.style.display = 'none'; // Ẩn phần "menu" khi đang hiển thị
        } else {
            menu.style.display = 'block'; // Hiển thị phần "menu" khi đang ẩn
        }
    }
</script>

</body>
</html>