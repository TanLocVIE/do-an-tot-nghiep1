document.addEventListener("DOMContentLoaded", function () {

    emailjs.init("SX-6_0UJ1L9qpp4Bk");

    const form = document.getElementById("contactForm");
    const statusBox = document.getElementById("statusBox");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const fullName = document.getElementById("fullName").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!fullName || !phone || !message) {
            showStatus("⚠️ Vui lòng nhập đầy đủ!", "error");
            return;
        }

        const params = {
            name: fullName,
            phone: phone,
            email: email,
            message: message
        };

        showStatus("⏳ Đang gửi...", "loading");

        emailjs.send("DragonShadow", "template_hjevrqb", params)

            .then(function () {
                showStatus("✅ Gửi thành công!", "success");
                form.reset();
            })

            .catch(function (error) {
                showStatus("❌ Gửi thất bại!", "error");
                console.log(error);
            });
    });

    function showStatus(msg, type) {
        statusBox.innerText = msg;
        statusBox.className = "status " + type;

        setTimeout(() => {
            statusBox.innerText = "";
            statusBox.className = "status";
        }, 3000);
    }

});