/**
 * @param {*} renderProductsList 
 * Chức năng: hàm lấy sản phẩm từ admin render ra trang customer cho người dùng xem
 * Tham số: mảng hoặc object sp
 * Chú ý: 
 */
function renderProductsList(productsList) {
  var content = "";

  for (var i = 0; i < productsList.length; i++) {
    var product = productsList[i];
    var contentTr = `
            <div class="my-4 col-12 col-lg-4 col-sm-6">
                <div class="card animate__animated animate__zoomIn">
                    <img src="${product.img}" class="card-img-top" alt="" width="200" >
                    <div>
                        <h5>${product.name}</h5>
                        <p><span>Price </span>${product.price}<span> $</span></p>
                        <p>${product.desc}</p>
                    </div>
                    <button type="button" onclick ="plusOneToCart(${product.id})" class="btn btn-primary">Thêm vào giỏ hàng</button>
                </div>
            </div> 
        `;
    content += contentTr;
  }

  // in danh sách ra table
  var productTable = document.querySelector("#customerDSSP");
  productTable.innerHTML = content;
}


/**
 * @param {*} renderProductsToCart 
 * Chức năng: lấy sản phẩm từ admin render ra trang customer cho người dùng xem
 * Tham số: mảng hoặc object sp
 * Chú ý: 
 */
function renderProductsToCart(productsList) {
  // console.log('productsList: ', productsList);
  // console.log('productsList.length: ', productsList.length);

  var content = "";

  for (var i = 0; i < productsList.length; i++) {
    var product = productsList[i];
    // console.log('product: ', product);
    var contentTr = 
    // Giao diện 2
    `
      <a href="#" target="_blank" class="product-link">
        <div class="product-left">
          <img src="${product.img}" alt="Product Photo" width="250">
        </div>
        <div class="product-left">
          <a href="${product.img}" target="_blank">
            <h3 class="product-heading">${product.name}</h3>
          </a>
          <div class="qty-price">
            <div class="price">$ ${product.price}</div>
            <div class="qty">
              <button onclick="minusOneFromCart(${product.id})" class="minus-button" id="minus-button-1">-</button>
              <input type="number" id="qty-input" class="qty-input" step="1" min="1"  max="1000" name="qty-input" value="${product.quantity}" pattern="[0-9]*" title="Quantity"  inputmode="numeric">
              <button onclick="plusOneToCart(${product.id})" class="plus-button" id="plus-button-1"> +</button>
              <input type="hidden" name="item-price" id="item-price-2" value="12.00">
            </div>
          </div>
        <div class="product-right">
          <button onclick="removeProductFromCart(${product.id})" class="bg-danger">Xoá sản phẩm</button>
        </div>
      </a>
      <hr>
    `;
    // Giao diện 2
    /*
    `
        <div class="product">
          <div class="product-left">
            <a href="#">
              <img
                class="product-object"
                src="${product.img}"
                alt="..." width="120" height="120"
              />
            </a>
          </div>
          <div class="product-body">
            <h4 class="product-heading">${product.name}</h4>
            <h5>$ ${product.price}</h5>
            <a href="">remove</a>
          </div>
        </div>
        <hr>
    `;
    */
    content += contentTr;
    // console.log('content: ', content);
  }

  // in danh sách ra table
  var productTable = document.querySelector("#inner");
  productTable.innerHTML = content;
}


/**
 * @param {*} getEle 
 * Chức năng: dom tới class hoặc id được truyền vào
 * Tham số: tên class hoặc id
 * Chú ý: 
 */
function getEle(selector) {
  return document.querySelector(selector);
}


/**
 * @param {*} getInfo 
 * Chức năng: lấy thông tin từ form
 * Tham số: không
 * Chú ý: 
 */
function getInfo() {
  var id = document.querySelector("#maSP").value;
  var nameProduct = getEle("#TenSP").value;
  var priceProduct = getEle("#GiaSP").value;
  var screenProduct = getEle("#screenSP").value;
  var bkCamProduct = getEle("#backCameraSP").value;
  var frCamProduct = getEle("#frontCameraSP").value;
  var imageProduct = getEle("#HinhSP").value;
  var describeProduct = getEle("#descSP").value;
  var typeProduct = getEle("#loaiSP").value;

  return new Product(
    id,
    nameProduct,
    priceProduct,
    screenProduct,
    bkCamProduct,
    frCamProduct,
    imageProduct,
    describeProduct,
    typeProduct
  );
}

/**
 * @param {*} getEle 
 * Chức năng: tạo giao diện chờ khi đang load trang
 * Tham số: tên class hoặc id
 * Chú ý: 
 */
function onLoading() {
  document.querySelector("#spinner").style.display = "flex";
}

function offLoading() {
  document.querySelector("#spinner").style.display = "none";
}


/**
 * @param {*} global code
 * Chức năng: lấy dữ 
 * Tham số: tên class hoặc id
 * Chú ý: 
 */
// Muốn xài obj thì phải khai new trước
// bằng cách dùng cái DSSP này mình ko cần phải new những cái obj mới khi mình muốn thêm obj mới
var dsspInCart = new DSSP();
var dataJson = localStorage.getItem("DSSP");
if (dataJson !== null) {
    // chuyển string thành mảng
    var dataJson = localStorage.getItem("DSSP");
    // chuyển string thành mảng bằng cách gán vào mảng
    dsspInCart.product = JSON.parse(dataJson);

    for (var i = 0; i < dsspInCart.product.length; i++) {
        // Cách 1:
        // var sv = dssv.students[i];
        // sv = new SinhVien(
        //     sv.maSV,
        //     sv.tenSV,
        //     sv.email,
        //     sv.matKhau,
        //     sv.ngaySinh,
        //     sv.khoaHoc,
        //     sv.diemToan,
        //     sv.diemLy,
        //     sv.diemHoa
        // );
        // dssv.students[i] = sv;

        // Cách 2:
        dsspInCart.product[i] = new ProductInCart(
            dsspInCart.product[i].id,
            dsspInCart.product[i].name,
            dsspInCart.product[i].price,
            dsspInCart.product[i].img,
            dsspInCart.product[i].quantity,
        );

        // Cách 3:
        // dùng map thì code sẽ ngắn gọn như sau
        // item tương ứng với từng phần tử trong array
        // map dùng giống callback function
        // dsspInCart.product[i] = JSON.parse(dataJson).map(function (item) {
        //   return new ProductInCart(
        //       item.id,
        //       item.name,
        //       item.price,
        //       item.img,
        //       item.quantity,
        //   );
        // });

    }
    // console.log('dsspInCart: ', dsspInCart.product);
    renderProductsToCart(dsspInCart.product);
}