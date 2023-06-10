/* Mô hình 3 khối bt tính điểm trúng tuyển
    đầu vào: nhập vào điểm chuẩn(diemChuan), điểm 3 môn(diemMon1, diemMon2, diemMon3)
            chọn khu vực ưu tiên(khuVuc), đối tượng ưu tiên(slDoiTuong)
    Xử lý: - lấy giá trị của các biến từ dữ liệu người dùng nhập vào
            - tạo biến tongDiem= diemMon1 + diemMon2 + diemMon3 + khuVuc + slDoiTuong;
                tiến hành so sánh: nếu tongDiem > diemChuan và các giá trị diemMon1,diemMon2,diemMon3 đều lớn hơn 0
                ==> đậu
                ngược lại
                ==> rớt
    đầu ra: in ra màn hình tổng điểm đạt được và kết quả đậu hay không

*/
var btnBt1 = document.getElementById("btnBt1")
btnBt1.onclick = function () {
    var diemChuan = document.getElementById("diemChuan").value * 1;
    var diemMon1 = document.getElementById("diemMon1").value * 1;
    var diemMon2 = document.getElementById("diemMon2").value * 1;
    var diemMon3 = document.getElementById("diemMon3").value * 1;
    console.log(diemChuan, diemMon1, diemMon2, diemMon3);

    //lấy giá trị của radio button
    let elements = document.getElementsByName('exampleRadios');
    let len = elements.length;
    let khuVuc = '';
    //kiểm tra nếu radio checked thì lấy value
    for (let i = 0; i < len; i++) {
        if (elements.item(i).checked) {
            khuVuc = elements.item(i).value * 1;
        }
    }
    console.log(khuVuc);

    // lấy giá trị của thẻ selectt
    var slDoiTuong = document.getElementById("slDoiTuong").value * 1;
    console.log(slDoiTuong);
    var tongDiem = diemMon1 + diemMon2 + diemMon3 + khuVuc + slDoiTuong;
    console.log(tongDiem);

    document.getElementById("bt1Output").value = tongDiem;

    if (diemMon1 > 0 && diemMon2 > 0 && diemMon3 > 0 && tongDiem >= diemChuan) {
        var ketQua = document.getElementById("ketQua").innerHTML = "Chúc mừng bạn đã trúng tuyển!!"
    } else {
        var ketQua = document.getElementById("ketQua").innerHTML = "Rất tiếc, bạn bị trượt, chúc bạn may mắn lần sau!!!"
    }
}

/*
    Mô hình 3 khối bài tập tính tiền điện
        đầu vào: - nhập vào tên người sử dụng điện(ten)
                - nhập vào số kw điện đã sử dụng(soKw)
        xử lý: - nếu soKw < 50 thì số tiền phải trả là 500d/1kw
                - nếu soKw > 50 < 100 thì số tiền phải trả sô tiền là 50kw đầu cộng với tiếp đó nhân 650d/1kw
                - nếu soKw > 100 < 200 thì số tiền phải trả là là 100kw đầu cộng với tiếp đó nhân 850d/1kw
                - nếu soKw > 200 < 350 thì số tiền phải trả là là 150kw đầu cộng với tiếp đó nhân 1100/1kw
                - nếu soKw >350 thì số tiền phải trả là 350kw đầu cộng với tiếp đó nhân 1300d/1kw
        đầu ra: số tiền điện mà người đó phải trả
*/
var btn_bt2 = document.getElementById("btn_bt2")
btn_bt2.onclick = function () {
    var ten = document.getElementById("ten").value;
    var soDien = document.getElementById("soDien").value * 1;
    var tongTienDien = 0;
    console.log(ten, soDien);
    const VND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
      });
    if(soDien<0){
        alert("Tiền điện lớn hơn hoặc bằng 0!!!!!!!!!!")
    }
    else if (soDien <= 50) {
        tongTienDien = soDien * 500;
    } else if (50 < soDien && soDien <= 100) {
        tongTienDien = (50 * 500) + (soDien - 50) * 650;
    } else if (100 < soDien && soDien <= 200){
        tongTienDien= (50*500)+(50*650)+(soDien-100)*850;
    }else if (200 < soDien && soDien <= 350){
        tongTienDien= (50*500)+(50*650)+(100*850)+(soDien-200)*1100;
    } else if (soDien>350){
        tongTienDien= (50*500)+(50*650)+(100*850)+(150*1100)+(soDien-350)*1300;
    }
    document.getElementById("outputTen").innerHTML="Tên người sử dụng: " + ten;
    var outputTienDien=document.getElementById("outputTienDien").innerHTML="Tiền điện phải trả: " +VND.format(tongTienDien);
}

/*

*/
var btn_bt3= document.getElementById("btn_bt3");
btn_bt3.onclick=function(){
    var hoten=document.getElementById("hoten").value;
    var thunhap=document.getElementById("thunhap").value;
    var nguoiPhuThuoc=document.getElementById("nguoiPhuThuoc").value;
    console.log(hoten,thunhap);
    var tongThue=0;

    // if()
}