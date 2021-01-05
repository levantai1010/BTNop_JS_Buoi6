/**
 * Chương trình: Tìm số n nhỏ nhất sao cho 1+2+...+n > 10000
 * Người tạo: Lê Văn Tài
 * Ngày tạo: 03/01/2021
 * Version: 1.0
 */
// Khởi tạo hàm Helper
function GeEle(ele) {
    return document.getElementById(ele);
}
// Tạo hàm TimSoN
document.getElementById('btnTimSoN').addEventListener("click", function TimSoN() {
    // Lấy giá trị người dùng nhập vào và lưu vào biến layTongcacChuSo
    var layTongcacChuSo = GeEle('tongCacSo').value;
    // Tạo biến tích lũy
    var tong = 0;
    for (var i = 1; ; i++) {
        tong += i;
        // Nếu biến tích lũy > giá trị người dùng nhập vào
        if (tong > layTongcacChuSo) {
            // Thoát khỏi vòng lặp
            break;
        }

    }
    // var i = 0;
    // while (tong <= layTongcacChuSo) {
    //     i++;
    //     tong += i;

    // }

    GeEle('theFooter').className = "card-footer d-block";
    GeEle('ketQua').innerHTML = "Số n nguyên dương nhỏ nhất để 1 + 2 + ....+ n > " + layTongcacChuSo + " là: " + i;

})