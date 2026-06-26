// JavaScript Document

function muahang(ten, gia, hinh){

    localStorage.setItem("tenSP", ten);
    localStorage.setItem("giaSP", gia);
    localStorage.setItem("hinhSP", hinh);

    window.location.href = "muangay.html";
}

function dathang() {

    let checkboxes = document.querySelectorAll("input[type='checkbox']");
    let daTichCheckbox = false;

    checkboxes.forEach(cb => {
        if (cb.checked) {
            daTichCheckbox = true;
        }
    });

    let radios = document.querySelectorAll("input[name='pay']");
    let daChonPay = false;

    radios.forEach(r => {
        if (r.checked) {
            daChonPay = true;
        }
    });

    if (!daTichCheckbox || !daChonPay) {

        alert(" B?n chua tích h?t yêu c?u hoàn ch?nh thanh toán");

        return;
    }

    localStorage.setItem("soLuong", 1);

    window.location.href = "dathangthanhcong.html";
}

// ===== GI? HÀNG =====

let gio = JSON.parse(localStorage.getItem("gioHang")) || [];

function themGio(ten, gia, hinh){

    gio.push({ ten, gia, hinh });

    localStorage.setItem("gioHang", JSON.stringify(gio));

    alert(" Ðã thêm vào gi? hàng");
}

// ===== MUA NGAY =====

function muahang(ten, gia, hinh){

    localStorage.setItem("tenSP", ten);
    localStorage.setItem("giaSP", gia);
    localStorage.setItem("hinhSP", hinh);

    window.location.href = "muangay.html";
}

// ===== TÌM KI?M =====

function timkiem(){

    let tukhoa = document.getElementById("search").value.toLowerCase();

    if(tukhoa.includes("iphone")){
        window.location.href = "iphone.html";
    }
    else if(tukhoa.includes("samsung")){
        window.location.href = "samsung.html";
    }
    else{
        alert("Không tìm th?y s?n ph?m");
    }
}

// ===== USER =====

function hienThiUser(){

    const userArea = document.getElementById("userArea");
    if(!userArea) return;

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if(currentUser){

        userArea.innerHTML = `
            <span>?? ${currentUser.fullName}</span>
            <button onclick="dangXuat()">Ðang xu?t</button>
        `;

    }else{

        userArea.innerHTML = `
            <a href="taikhoan.html">Ðang nh?p</a>
            <a href="DangKy.html">Ðang ký</a>
        `;
    }
}

// ===== LOGOUT =====

function dangXuat(){
    localStorage.removeItem("currentUser");
    location.reload();
} 
document.addEventListener("DOMContentLoaded", function () {
    // 1. L?y thông tin user dã dang nh?p t? localStorage
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const userStateDiv = document.getElementById("userState");

    // 2. Ki?m tra n?u có user dang dang nh?p
    if (currentUser) {
        // L?y tên hi?n th? (Uu tiên tên/email tùy thu?c vào d? li?u lúc b?n cho dang ký)
        // Ví d? l?y t? thu?c tính user.name ho?c c?t ch? tru?c d?u @ c?a email n?u không có tên
        const displayName = currentUser.name || currentUser.email.split('@')[0];

        // 3. Thay d?i giao di?n: Hi?n tên và thêm nút Ðang xu?t
        userStateDiv.innerHTML = `
            <span class="user-name">?? Xin chào, <strong>${displayName}</strong></span>
            <a href="#" id="logoutBtn" class="logout-link">(Ðang xu?t)</a>
        `;

        // 4. B?t s? ki?n cho nút Ðang xu?t
        document.getElementById("logoutBtn").addEventListener("click", function (e) {
            e.preventDefault();
            // Xóa user hi?n t?i kh?i localStorage
            localStorage.removeItem("currentUser");
            alert("Ðã dang xu?t tài kho?n!");
            // T?i l?i trang d? c?p nh?t l?i giao di?n v? tr?ng thái ban d?u
            window.location.reload();
        });
    }
});
indow.onload = function() {
    let gioHang = JSON.parse(localStorage.getItem('gioHang')) || [];
    let vungHienThi = document.getElementById('danh-sach-gio-hang'); // ID c?a th? ch?a gi? hàng bên HTML
    
    if(gioHang.length === 0) {
        vungHienThi.innerHTML = "<p>Gi? hàng c?a b?n dang tr?ng</p>";
        return;
    }
    
    // Duy?t qua gi? hàng và in ra giao di?n
    let html = "";
    gioHang.forEach(item => {
        html += `
            <div class="item-gio-hang">
                <img src="${item.anh}" width="50">
                <h4>${item.ten}</h4>
                <p>Giá: ${item.gia}</p>
                <p>S? lu?ng: ${item.soLuong}</p>
            </div>
        `;
    });
    vungHienThi.innerHTML = html;
}