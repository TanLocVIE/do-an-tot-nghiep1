// JavaScript Document
let tong = 0;

// lấy tất cả nút mua
let buttons = document.querySelectorAll("button");

buttons.forEach(function(btn){
    btn.addEventListener("click", function(){

        // lấy tên sản phẩm
        let ten = btn.parentElement.querySelector("h3").innerText;

        tong++;

        alert("Bạn đã chọn: " + ten + "\nTổng sản phẩm: " + tong);
    });
});