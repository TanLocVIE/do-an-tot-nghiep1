document.getElementById("loginBtn").addEventListener("click", function () {

    const account = document.getElementById("loginAccount").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    if(!account || !password){
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    if(users.length === 0){
        alert("Chưa có tài khoản!");
        return;
    }

    const foundUser = users.find(user =>
        (account === user.email || account === user.phone) &&
        password === user.password
    );

    if(foundUser){

        localStorage.setItem("currentUser", JSON.stringify(foundUser));

        alert("Đăng nhập thành công!");

        window.location.href = "home.html";

    }else{
        alert("Sai tài khoản hoặc mật khẩu!");
    }
});