// ================================
// CẬP NHẬT THỜI GIAN LIÊN TỤC
// ================================

function capNhatThoiGian() {

    let now = new Date();

    let ngay =
        now.toLocaleDateString("vi-VN");

    let gio =
        now.toLocaleTimeString("vi-VN");

    document.getElementById("time").innerHTML =
        ngay + "<br>" + gio;
}

capNhatThoiGian();

setInterval(capNhatThoiGian, 1000);


// ================================
// SIDEBAR
// ================================

function chonMuc(tenMuc) {

    document.getElementById("mucDangChon").innerHTML =
        tenMuc;
}


// ================================
// XỬ LÝ CHI TIẾT HOẠT ĐỘNG
// (1 hàm cho cả 3 hoạt động)
// ================================

function hienThiHoatDong(ten, diem) {

    document.getElementById("tenHoatDong").innerHTML =
        ten;

    document.getElementById("diemThuong").innerHTML =
        "Điểm thưởng: " + diem;

    document.getElementById("mucDangChon").innerHTML =
        ten;
}