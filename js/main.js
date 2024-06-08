function TinhLuong() {
    var luong1Ngay = 100000;
    var soNgayLam = parseFloat(document.getElementById('inputSoNgayLam').value);
    var tongLuong = soNgayLam * luong1Ngay;
    var txtTongLuong = document.getElementById('txtTongLuong');
    txtTongLuong.innerHTML = 'Tổng lương: ' + tongLuong + ".";
}

function TinhGiaTriTrungBinh() {
    var soThuc1 = parseFloat(document.getElementById('inputSoThuc1').value);
    var soThuc2 = parseFloat(document.getElementById('inputSoThuc2').value);
    var soThuc3 = parseFloat(document.getElementById('inputSoThuc3').value);
    var soThuc4 = parseFloat(document.getElementById('inputSoThuc4').value);
    var soThuc5 = parseFloat(document.getElementById('inputSoThuc5').value);
    var giaTriTrungBinh = (soThuc1 + soThuc2 + soThuc3 + soThuc4 + soThuc5) / 5;
    var txtGiaTriTrungBinh = document.getElementById('txtGiaTriTrungBinh');
    txtGiaTriTrungBinh.innerHTML = 'Giá trị trung bình: ' + giaTriTrungBinh + ".";
}

function QuyDoiTien() {
    var tiLeQuyDoi = 23500
    var soTienUSD = parseFloat(document.getElementById('inputSoTienUSD').value);

    var soTienVND = soTienUSD * tiLeQuyDoi;
    var txtSoTienVND = document.getElementById('txtSoTienVND');
    txtSoTienVND.innerHTML = 'Số tiền sau khi quy đổi: ' + soTienVND + 'VND.';
}

function TinhChuViDienTichHCN() {
    var chieuDai = parseFloat(document.getElementById('inputChieuDai').value);
    var chieuRong = parseFloat(document.getElementById('inputChieuRong').value);
    var chuVi = (chieuDai + chieuRong) * 2;
    var dienTich = chieuDai * chieuRong;
    var txtKetQua = document.getElementById('txtKetQua');
    txtKetQua.innerHTML = 'Chu vi: ' + chuVi + ". Diện tích: " + dienTich + ".";
}

function TinhTong2KySo() {
    var so = parseFloat(document.getElementById('inputSo').value);
    var tong = parseInt(so % 10) + parseInt(so / 10);
    var txtTong = document.getElementById('txtTong');
    txtTong.innerHTML = 'Tổng 2 ký số: ' + tong + ".";
}