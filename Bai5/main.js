/**
 * Chương trình: Tìm Số Nguyên tố trong khoảng cho trước
 * Người tạo: Lê Văn Tài
 * Ngày tạo: 03/01/2021
 * Version: 1.0
 */
// Khởi tạo hàm Helper
function GetEle(ele) {
    return document.getElementById(ele);
}
// Tạo hàm tìm số nguyên tố
GetEle("btnTimNguyenTo").addEventListener("click", function () {
    // Lấy giá trị người dùng nhập vào
    var laySoN = parseInt(GetEle("soN").value);
    // Tạo biến tích lũy
    var hienThi = "Tập hợp các số nguyên tố trong khoảng từ 1 đến " + laySoN + " là: ";
    var dem = 0;
    for (var i = 3; i <= laySoN; i++) {

        if (KiemTraNguyenTo(i)) {
            hienThi += i + " ";
            dem++;
        }

    }
    if (dem === 0) {
        hienThi = "Không tồn tại số nguyên tố trong khoảng từ 1 đến " + laySoN;
    }
    GetEle("ketQua").innerHTML = hienThi;
    GetEle("theFooter").className = "card-footer d-block";

})
// Tạo hàm kiểm tra 1 số có phải là số nguyên tố không
function KiemTraNguyenTo(n) {
    var flag = true;
    if (n < 2) {
        flag = false;
    } else if (n == 2) {
        flag = true;
    } else if (n % 2 == 0) {
        flag = false;
    } else {
        for (var i = 3; i < n; i += 2) {
            if (n % i == 0) {
                flag = false;
                break;
            }

        }
    }
    return flag;

}