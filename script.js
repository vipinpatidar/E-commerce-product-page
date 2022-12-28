const openModal = document.querySelector("#open-model");
const closeModal = document.querySelector(".close");
const modal = document.querySelector(".shoes-model");
const smallImage = document.querySelectorAll(".s-img");
const bigModalImg = document.querySelector(".big-img");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const productAddNum = document.querySelector("#add-product");
const addToCartBtn = document.querySelector("#add-to-cart-btn");
const cartAddedItems = document.querySelector(".cart-items");
const numOnCart = document.querySelector(".addedPrducts");

// added product into cart
addToCartBtn.addEventListener("click", function () {
  if (productAddNum.textContent === "0") return;
  cartItemHtml();
  numOnCart.style.display = "block";
  numOnCart.textContent = productAddNum.textContent;
});

function cartItemHtml() {
  const html = ` <div class="cart-item">
                  <img
                    class="cart-shoes-img"
                    src="./images/image-product-1-thumbnail.jpg"
                    alt=""
                  />
                  <div class="cart-prduct-text">
                    <p>Fall Limited Edition Sneakers</p>
                    <p>$125 x ${productAddNum.textContent} <span>$${
    125 * +productAddNum.textContent
  }</span></p>
                  </div>
                  <img
                    class="cart-delete-img"
                    src="./images/icon-delete.svg"
                    alt=""
                  />
                </div>
                <button class="checkout-btn">Checkout</button>
                `;

  cartAddedItems.innerHTML = html;
}

//increasing and decreasing product
let product = 0;
plus.addEventListener("click", function () {
  product++;
  productAddNum.textContent = product;
});
minus.addEventListener("click", function () {
  product--;
  if (product < 0) {
    product = 0;
  }
  productAddNum.textContent = product;
});

// changing image with next and prev buttons
let imgNum = 1;
//next button
nextBtn.addEventListener("click", function () {
  imgNum++;
  if (imgNum > 4) {
    imgNum = 1;
  }
  removeActive();

  openModal.src = `./images/image-product-${imgNum + ""}.jpg`;
  bigModalImg.src = `./images/image-product-${imgNum + ""}.jpg`;

  activeImg(`${imgNum + ""}`);
});
//prev button
prevBtn.addEventListener("click", function () {
  imgNum--;
  if (imgNum <= 0) {
    imgNum = 4;
  }
  removeActive();

  openModal.src = `./images/image-product-${imgNum + ""}.jpg`;
  bigModalImg.src = `./images/image-product-${imgNum + ""}.jpg`;
  activeImg(`${imgNum + ""}`);
});

// Changing big image with smallImage
smallImage.forEach((img) => {
  // removing active class from all small images
  img.addEventListener("click", function () {
    removeActive();
    //changing image
    openModal.src = `./images/image-product-${this.dataset.img}.jpg`;
    bigModalImg.src = `./images/image-product-${this.dataset.img}.jpg`;
    //Selecting all active image of modal and normal
    activeImg(this.dataset.img);
  });
});
// removing active image class
function removeActive() {
  return smallImage.forEach((img) => {
    img.classList.remove("active-img");
  });
}
// adding active image class
function activeImg(num) {
  document.querySelectorAll(`[data-img="${num}"]`).forEach((active) => {
    active.classList.add("active-img");
  });
}
// Opening and closing Modal
openModal.addEventListener("click", function () {
  modal.style.display = "flex";
});

closeModal.addEventListener("click", function () {
  modal.style.display = "none";
});

modal.addEventListener("click", function (e) {
  if (!e.target.classList.contains("shoes-model")) return;
  modal.style.display = "none";
});
