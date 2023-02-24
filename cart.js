let cartBag = document.querySelector(".carbag");
// cartBag.addEventListener('click',e => {

// })

const Items = [
    {
        id: 0,
        title: "sant'ilario persimmon conserve",
        price: "$20.00",
        img: "img\seller1.jpg",
        amount: 1
    },
    {
        id: 1,
        title: "firelli italian hot sauce",
        price: "$6.00",
        img: "img\firelli_hot_sauce-1-2__74311.jpg",
        amount: 1
    },
    {
        id: 2,
        title: "casella prosciutto speciale",
        price: "$15.00",
        img: "img\large__31043.jpg",
        amount: 1
    },
    {
        id: 3,
        title: "antipasto gift box",
        price: "$85.00",
        img: "img\antipasto-2022__66693.jpg",
        amount: 1
    },
    {
        id: 4,
        title: "soft pretzel pairing club",
        price: "$200.00",
        img: "img\pretzel_club_thumb__86311.jpg",
        amount: 1
    },
    {
        id: 5,
        title: "di bruno bros.balsamico suit",
        price: "$30.00",
        img: "img\balsamico-suite-2__92725.jpg",
        amount: 1
    },
    {
        id: 6,
        title: "popzup cheddar head popcorn",
        price: "$7.00",
        img: "img\pop_zup_popcorn_ecom-1__31125.jpg",
        amount: 1
    },

    {
        id: 7,
        title: "sabatino truffle",
        price: "$8.00",
        img: "img\sabatino_truffle_crisps-1_2__79775.jpg",
        amount: 1
    },
]

// render items

// let parentBox = document.querySelector('.parent-box');
// let shopItems = ""
// function renderItems() {
//     items.forEach(item => {

//         // console.log(item);

//         shopItems += `
//         <div class="card shopItems">
//             <div class="box">
//                 <div class="bg-image">
//                     <img src="img\seller1.jpg" alt="" />
//                 </div>
//                 <div class="addToCart">
//                     <span><a href="">Quick View</a></span>
//                     <a href=""><i class="fa-solid fa-cart-shopping"></i></a>
//                 </div>
//             </div>
//             <div class="card-body">
//                 <h5 class="card-title">
//                     <a href="">sant'ilario persimmon conserve</a>
//                 </h5>
//                 <p class="card-text">
//                     unique antipasto,with sleek serving dish/lid
//                 </p>
//             </div>
//             <div class="card-foot">
//                 <span>$20.00</span>
               
//                 <div>
//                     <button type="button" class="btn btn-outline-warning" data-bs-toggle="modal"
//                         data-bs-target="#exampleModal" data-mdb-ripple-color="dark">
//                         add to cart
//                     </button>
//                     <!-- Modal -->
//                     <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
//                         aria-hidden="true">
//                         <div class="modal-dialog">
//                             <div class="modal-content">
//                                 <div class="modal-header">
//                                     <h5 class="modal-title" id="exampleModalLabel">SANT'ILARIO PERSIMMON CONSERVE</h5>
//                                     <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                                 </div>
//                                 <div class="modal-body">
//                                     <div>
//                                         <img src="${item.img}" alt="" class="modal-body-img" />
//                                     </div>
//                                     <div>
//                                         <span class="priceimg1">${item.price}</span>
//                                         <p class="quanityimg1">Quantity:1</p>
//                                         <p class="infoimg1">${item.title}</p>
//                                     </div>
//                                 </div>
//                                 <div class="addtocart2">
//                                     <button type="button" class="btns btn-secondary" data-bs-dismiss="modal">KEEP SHOPPING</button>
//                                     <a href="#" class="abtns">${item.id}</a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
            
//         </div>
//         `
//           parentBox.innerHTML = shopItems;
//     })

// }
// renderItems();

