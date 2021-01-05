/**
 * Chương trình: Tính Giai Thừa
 * Người tạo: Lê Văn Tài
 * Ngày tạo: 03/01/2021
 * Version: 1.0
 */
// Khởi tạo hàm Helper
function GetEle(ele) {
    return document.getElementById(ele);
}
// Tạo hàm Tính Giai thừa theo yêu cầu nghiệp vụ
GetEle('btnTinhGiaiThua').addEventListener("click", function () {
    // Lấy giá trị người dùng nhập vào
    var laySoN = parseInt(GetEle('soN').value);
    // Tạo biến tích lũy
    var giaiThua = 1;
    for (var i = 1; i <= laySoN; i++) {
        giaiThua *= i;

    }
    GetEle('theFooter').className = "card-footer d-block";
    GetEle('ketQua').innerHTML = "Kết quả Giai Thừa là: " + giaiThua;
})