var loader = document.querySelector(".overlay-loading");
window.addEventListener("load", function () {
  this.setTimeout(showPage, 2000);
});
function showPage() {
  loader.style.display = "none";
  document.body.style.overflow = "auto";
}

const items = [
  {
    id: 0,
    img: "img/seller1.jpg",
    title: "SANT'ILARIO PERSIMMON CONSERVE",
    details: "unique antipasto,with sleek serving dish/lid",
    price: 20,
  },
  {
    id: 1,
    img: "img/firelli_hot_sauce-1-2__74311.jpg",
    title: "FIRELLI ITALIAN HOT SAUCE",
    details: "italian-approved hot sauce for pizza",
    price: 6,
  },
  {
    id: 2,
    img: "img/large__31043.jpg",
    title: "CASELLA PROSCIUTTO SPECIALE",
    details: "supple,salty,pure bliss",
    price: 15,
  },
  {
    id: 3,
    img: "img/antipasto-2022__66693.jpg",
    title: "ANTIPASTO GIFT BOXSANT'ILARIO PERSIMMON CONSERVE",
    details: "use code : antipasto & save!",
    price: 85,
  },
  {
    id: 4,
    img: "img/pretzel_club_thumb__86311.jpg",
    title: "SOFT PRETZEL PAIRING CLUB",
    details: "the ultimate philly pretzel experience,delivered monthly.",
    price: 200,
  },
  {
    id: 5,
    img: "img/balsamico-suite-2__92725.jpg",
    title: "DI BRUNO BROS.BALSAMICO SUIT",
    details: "sweet and syrupy aged balsamic vinegar from modena, italy",
    price: 30,
  },
  {
    id: 6,
    img: "img/pop_zup_popcorn_ecom-1__31125.jpg",
    title: "POPZUP CHEDDAR HEAD POPCORN",
    details: "because everything's better with cheese.",
    price: 7,
  },
  {
    id: 7,
    img: "img/sabatino_truffle_crisps-1_2__79775.jpg",
    title: "SABATINO TRUFFLE",
    details: "indulgent crackers with black truffle seasoning",
    price: 8,
  },
];
// render items
function renderItems() {
  const row = document.getElementById("parentItems");
  let cols = "";
  items.forEach(function (item) {
    cols += `<div class="col-lg-3 col-md-6 col-sm-12 mb-5">
    <div class="card">
      <div class="box">
        <div class="bg-image">
          <img
            src="${item.img}"
            alt=""
          />
        </div>
        <div class="addToCart">
          <span><a href="">Quick View</a></span>
          <a href=""><i class="fa-solid fa-cart-shopping"></i></a>
        </div>
      </div>
      <div class="card-body">
        <h5 class="card-title">
          <a href="">${item.title}</a>
        </h5>
        <p class="card-text">
          ${item.details}
        </p>
      </div>
      <div class="card-foot">
        <span>$${item.price}.00</span>
        <button
          type="button"
          class="btn btn-outline-warning"
          data-mdb-ripple-color="dark"
        >
          add to cart
        </button>
      </div>
    </div>
  </div>`;
    // row.innerHTML = cols;
  });
}
renderItems();
