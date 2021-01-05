/**
 * Chương trình: Hiển thị thẻ div
 * Người tạo: Lê Văn Tài
 * Ngày tạo: 03/01/2021
 * Version: 1.0
 */
// Khởi tạo hàm Helper
function GetEle(ele) {
    return document.getElementById(ele);
}
GetEle('btnTheDiv').addEventListener('click', function () {
    // Reset lại ô hiển thị kết quả
    GetEle('ketQua').innerHTML = "";
    // Lấy giá trị người dùng nhập vào
    var laySoTheDiv = parseInt(GetEle('soTheDiv').value);
    for (var i = 1; i <= laySoTheDiv; i++) {
        //Nếu i chia hết cho 2
        if (i % 2 == 0) {
            // Tạo ra thẻ div màu đỏ
            var theDiv = document.createElement('div');
            theDiv.innerHTML = "Thẻ " + i;
            theDiv.style.background = "red";
            GetEle('ketQua').appendChild(theDiv);

        } else {// Ngược lại neus i không chia hết cho 2
            // Tạo ra thẻ div màu xanh
            var theDiv = document.createElement('div');
            theDiv.innerHTML = "Thẻ " + i;
            theDiv.style.background = "blue";
            GetEle('ketQua').appendChild(theDiv);
        }

    }
    // Hiển thị card footer
    GetEle('theFooter').className = "card-footer d-block"

})