function ProductInCart(_id, _name, _price, _image, _quantity){
    // thuộc tính
    this.id = _id;
    this.name = _name;
    this.price = _price;
    this.img = _image;
    this.quantity = _quantity;

    // method
    this.tinhTienSanPham = function () {
        var thanhTienSanPham = 0;
        thanhTienSanPham = Number(this.price) * Number(this.quantity);
        return thanhTienSanPham;
    }

}