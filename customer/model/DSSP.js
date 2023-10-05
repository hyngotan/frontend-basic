function DSSP() {
    // khai các mảng chứa các sp mà mình muốn tạo ra
    // mảng product này chứa các sản phẩm trong giỏ hàng
    // nếu muốn tạo các mảng chứa sp theo phân loại khác thì khai ra ngay đây
    this.product = []; 

    // tìm hiểu thêm new Map, new Set

    // Phương thức thêm product, hàm này chỉ có chức năng duy nhất là thêm sản phẩm
    this._themSanPham = function (sp) {
        this.product.push(sp);
    };

    // Phương thức tìm vị trí sản phẩm
    this._timViTriSanPham = function (idSP) {
        // mở lên xem thử coi có ra đc tkNV ko
        // alert("ma SV" + tkNV);
        /**
       * Tìm vị trí
       *   index = -1
       *  - Duyệt mảng => lấy từng object sinh vien
       *               => {tkNV: 1, tenSV: Nguyen Van A.,...}
       *               => so sánh cái tkNV trong object bằng tkNV truyền vào
       *               => gán lại ví trí index = i , break;
       *               => không tìm thấy nhanVien thì index = -1
       */
        var index = -1;
        for (var i = 0; i < this.product.length; i++) {
            var sp = dsspInCart.product[i]; 
            if (sp.id == idSP) {
                index = i;
                // nếu đúng rồi thì break luôn ko cần duyệt nữa
                break;
            }
        }
        return index;
    };

    // Phương thức xoá product
    this._xoaSanPham = function (idSP) {
        // có thể xoá trực tiếp mà ko cần tìm index
        // mình có thể chạy for, nếu tkNV giống nhau thì xoá phần tử nhanVien đó
        var index = this._timViTriSanPham(idSP);
        if (index !== -1) {
            // Xoá phần tử của mảng: dùng splice dựa vào vị trí và số lượng
            this.product.splice(index, 1);
        }
    };

}