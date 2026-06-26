document.getElementById("registerBtn").addEventListener("click", function (e) {

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirm = document.getElementById("confirm").value.trim();

    if(!name || !email || !phone || !password || !confirm){
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    if(password !== confirm){
        alert("Mật khẩu không khớp!");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    // check trùng
    const exist = users.find(u => u.email === email);
    if(exist){
        alert("Email đã tồn tại!");
        return;
    }

    const user = {
        name,
        email,
        phone,
        password
    };

    users.push(user);

    localStorage.setItem("users", JSON.stringify(users));

    alert("Ðăng ký thành công!");

    window.location.href = "taikhoan.html";
});