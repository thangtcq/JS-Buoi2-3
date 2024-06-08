function TinhLuong() {
    var luong1Ngay = 100000;
    var soNgayLam = parseFloat(document.getElementById('inputSoNgayLam').value);
    var txtTongLuong = document.getElementById('txtTongLuong');
    if (soNgayLam > 0) {
        var tongLuong = soNgayLam * luong1Ngay;
        txtTongLuong.innerHTML = 'Tổng lương: ' + tongLuong + '.';
        return true;
    }
    txtTongLuong.innerHTML = 'Số ngày làm không hợp lệ.';
}

function TinhGiaTriTrungBinh() {
    var soThuc1 = parseFloat(document.getElementById('inputSoThuc1').value);
    var soThuc2 = parseFloat(document.getElementById('inputSoThuc2').value);
    var soThuc3 = parseFloat(document.getElementById('inputSoThuc3').value);
    var soThuc4 = parseFloat(document.getElementById('inputSoThuc4').value);
    var soThuc5 = parseFloat(document.getElementById('inputSoThuc5').value);
    var giaTriTrungBinh = (soThuc1 + soThuc2 + soThuc3 + soThuc4 + soThuc5) / 5;
    var txtGiaTriTrungBinh = document.getElementById('txtGiaTriTrungBinh');
    txtGiaTriTrungBinh.innerHTML = 'Giá trị trung bình: ' + giaTriTrungBinh + '.';
}

function QuyDoiTien() {
    var tiLeQuyDoi = 23500
    var soTienUSD = parseFloat(document.getElementById('inputSoTienUSD').value);
    var txtSoTienVND = document.getElementById('txtSoTienVND');
    if (soTienUSD > 0) {
        var soTienVND = soTienUSD * tiLeQuyDoi;
        txtSoTienVND.innerHTML = 'Số tiền sau khi quy đổi: ' + soTienVND + 'VND.';
        return true;
    }
    txtSoTienVND.innerHTML = 'Số tiền USD không hợp lệ.';
}

function TinhChuViDienTichHCN() {
    var chieuDai = parseFloat(document.getElementById('inputChieuDai').value);
    var chieuRong = parseFloat(document.getElementById('inputChieuRong').value);
    var txtKetQua = document.getElementById('txtKetQua');
    if (chieuDai > 0 && chieuRong > 0) {
        var chuVi = (chieuDai + chieuRong) * 2;
        var dienTich = chieuDai * chieuRong;
        txtKetQua.innerHTML = 'Chu vi: ' + chuVi + ". Diện tích: " + dienTich + '.';
        return true;
    }
    txtKetQua.innerHTML = 'Chiều rộng hoặc chiều dài không hợp lệ.';
}

function TinhTong2KySo() {
    var so = parseFloat(document.getElementById('inputSo').value);
    var txtTong = document.getElementById('txtTong');
    if (10 <= so && so <= 99) {
        var tong = parseInt(so % 10) + parseInt(so / 10);
        txtTong.innerHTML = 'Tổng 2 ký số: ' + tong + '.';
        return true;
    }
    txtTong.innerHTML = 'Số đầu vào không hợp lệ.';
}