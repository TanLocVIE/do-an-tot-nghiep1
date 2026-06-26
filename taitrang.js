// JavaScript Document
function themvaogio(ten, gia, hinh){

    let giohang = JSON.parse(localStorage.getItem("giohang")) || [];

    let index = giohang.findIndex(sp => sp.ten === ten);

    if(index !== -1){

        giohang[index].soluong++;

    } else {

        giohang.push({
            ten: ten,
            gia: Number(gia),
            hinh: hinh,
            soluong: 1
        });
    }

    localStorage.setItem("giohang", JSON.stringify(giohang));

    alert("Đã thêm vào giỏ hàng");
}