// JavaScript Document
// ===== TOAST =====
function showMsg(text, type = "success") {

    const msg = document.createElement("div");
    msg.innerText = text;

    msg.style.position = "fixed";
    msg.style.top = "20px";
    msg.style.left = "50%";
    msg.style.transform = "translateX(-50%)";
    msg.style.padding = "12px 20px";
    msg.style.borderRadius = "10px";
    msg.style.color = "white";
    msg.style.fontWeight = "bold";
    msg.style.zIndex = "9999";

    msg.style.background = (type === "error") ? "#e63946" : "#2a9d8f";

    document.body.appendChild(msg);

    setTimeout(() => msg.remove(), 2000);
}


// ===== RESET PASSWORD =====
document.addEventListener("DOMContentLoaded", function () {

    const btn = document.getElementById("resetBtn");

    btn.addEventListener("click", function () {

        const account = document.getElementById("account").value.trim();
        const newPass = document.getElementById("newPassword").value.trim();

        if(!account || !newPass){
            showMsg("Nhập đầy đủ thông tin!", "error");
            return;
        }

        const user = JSON.parse(localStorage.getItem("user"));

        if(!user){
            showMsg("Chưa có tài khoản!", "error");
            return;
        }

        // kiểm tra email hoặc sđt
        if(account === user.email || account === user.phone){

            user.password = newPass;

            localStorage.setItem("user", JSON.stringify(user));

            showMsg("Đổi mật khẩu thành công!");

            setTimeout(()=>{
                window.location.href = "taikhoan.html";
            },1000);

        }else{
            showMsg("Tài khoản không tồn tại!", "error");
        }

    });

    // ENTER
    document.addEventListener("keydown", function(e){
        if(e.key === "Enter"){
            btn.click();
        }
    });

});