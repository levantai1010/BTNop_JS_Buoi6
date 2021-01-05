/**
 * Chương trình: Tính Tổng S
 * Người tạo: Lê Văn Tài
 * Ngày tạo: 03/01/2021
 * Version: 1.0
 */
// Khởi tạo hàm Helper
function GetEle(ele) {
    return document.getElementById(ele);
}
// Gọi hàm TinhTong và xuất thông tin ra màn hình
GetEle('btnTinhTong').addEventListener("click", function () {
    var tong = TinhTong();
    GetEle('ketQua').innerHTML = "Tổng là: " + tong;
    GetEle('theFooter').className = "card-footer d-block"

})
// Tạo hàm TinhTong
function TinhTong() {
    var laySoX = parseInt(GetEle('soX').value);
    var laySoN = parseInt(GetEle('soN').value);
    var tong = 0;
    for (var i = 1; i <= laySoN; i++) {
        tong += Math.pow(laySoX, i);

    }
    return tong;

}