let Product_container = document.querySelector('.product-container');
let Cart_item_container = document.querySelector('.cart-items-div');
let cartIconCount= document.querySelector('.quantity');
let cartTotal = 0;
let cartList= [];

//-------------- Passing Data -----------------------------
let OrederProducts = [];
let FinalTotal ;

let Products = [
    {
        name:"Mayura Raksha - Traditional Sri Lankan Mask",
        price: 15000.00,
        image:"Mayura_Raksha_Mask.jpg",
        quantity:0
    },
    {
        name:"Gini Raksha - Traditional Sri Lankan Mask",
        price: 15000.00,
        image:"Gini_Raksha_Mask.jpg",
        quantity:0
    },
    {
        name:"Elephant Key Tag",
        price:250.00,
        image:"Elephant-Key-Tag.jpg",
        quantity:0
    },
    {
        name:"Gold Palated SriLanka Map Pendant",
        price:300.00,
        image:"gold_plated_sri_lankan_pendant.png",
        quantity:0
    },
    {
        name:"Sigiriya - Hand Made Stone Statue",
        price:900.00,
        image:"Sigiriya_Stone_Statue.jpg",
        quantity:0
    },
    {
        name:"Bronze Samadhi Statue - Abayagiriya",
        price:3500.00,
        image:"Buddha_Statue.PNG",
        quantity:0
    },
    {
        name:"Batik Shirt - Long Sleeve",
        price:2500.00,
        image:"Batik-Shirt-long-sleeves.jpg",
        quantity:0
    },
    {
        name:"Brass Carved Hanging Oil Lamp",
        price:900.00,
        image:"Brass-Hanging-OilLamp.jpg",
        quantity:0
    },
    {
        name:"Burnt Brass Wall Hanging",
        price:1000.00,
        image:"burnt_brass_wall_hanging.png",
        quantity:0
    },
    {
        name:"Burnt Brass Lamp Shade",
        price:2500.00,
        image:"burnt_brass_lamp_shade.png",
        quantity:0
    },
    {
        name:"Hand Made Elephant Design Mug",
        price:600.00,
        image:"handmade_elephant_design_mug.png",
        quantity:0
    },
    {
        name:"Wooden Handmade Sri Lankan Elephant",
        price:3000.00,
        image:"Wooden-Elephant.jpg",
        quantity:0
    },
    {
        name:"Wooden Jewelary Box",
        price:800.00,
        image:"jewelary_box.png",
        quantity:0
    },
    {
        name:"Hand Made Coconut Shells Wooden Spoons",
        price:200.00,
        image:"Handmade Coconut Shells Wooden Spoons.png",
        quantity:0
    },
    {
        name:"Sri Lanka Travel Poater",
        price:1000.00,
        image:"Travel_poster_of_srilanka.png",
        quantity:0
    }
]

function addProducts(){
    Products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('product-items');
        newDiv.innerHTML = `
        <div class="product-items-image">
            <img  src="../gfx/${value.image}">
            <h4 class="product-item-price">Rs. ${value.price.toLocaleString()} </h4>
        </div>
        <div class="product-item-namecard">
            <h3 class="product-items-title">${value.name}</h3>
            <button class="product-item-addtocart" onclick="addToCart(${key})"></button>
        </div>
            `;
        Product_container.appendChild(newDiv);
    })
}
addProducts();


function addToCart(key){
    if (!(cartList.includes(key))){
        console.log(key);
        Products[key].quantity = 1;
        cartList.push(key);
        console.log(cartList.length);
        refreshCartIcon();

        addToCartView()
    }    
}
function addToCartView(){
    Cart_item_container.innerHTML=``;
    cartList.forEach((value,key) => {
        let newCartItem = document.createElement('div');
        newCartItem.classList.add('cart-item');
        newCartItem.innerHTML=`
            <div class = "cart-item-img">
                <img src="../gfx/${Products[value].image}">
            </div>
            <div class = "cart-item-details">
                <h3 class="cart-item-title">${Products[value].name}</h3>
                <h3 class="cart-item-price"> Rs. ${Products[value].price.toLocaleString()}</h3>
            </div>
            <div class="cart-item-quantity">
                <h3 class="quantity-increase" onclick="increaseCount(${value})">+</h3>
                <h3 class="quantity">${Products[value].quantity}</h3>
                <h3 class="quantity-decrease" onclick="decreaseCount(${value})">-</h3>
            </div>
            <div class="cart-item-total">
                <h3>Total</h3>
                <h3>Rs. ${(Products[value].quantity*Products[value].price).toLocaleString()}</h3>
            </div>
            <div class="cart-item-remove">
                <img src="../gfx/closs_btn.png" onclick="removeFromCart(${key},${value})">
            </div>
        `;
        Cart_item_container.appendChild(newCartItem);

    })
    cartTotalPrice()
}

function removeFromCart(key,value){
    cartList.splice(key,1);
    Products[value].quantity = 0;
    refreshCartIcon();
    addToCartView();
}


function cartTotalPrice(){
    cartTotal = 0;
    document.querySelector('.cart-total-price').innerText = "Rs. 00.00";
    cartList.forEach((value,key) =>{
        let quantity = Products[value].quantity;
        let price = Products[value].price;
        cartTotal+=quantity*price;
        document.querySelector('.cart-total-price').innerText = "Rs. " + cartTotal.toLocaleString();
    })
}
function refreshCartIcon(){
    cartIconCount.innerText = cartList.length;
}

//---------------- Cart - Change quantity -------------------
function increaseCount(value){
    Products[value].quantity += 1;
    addToCartView();
}
function decreaseCount(value){
    if(Products[value].quantity != 0){
        Products[value].quantity -=1;
        addToCartView();
    }
    
}
// -------------- Open and Close Shopping Cart ----------------
function showcart() {
	document.querySelector('.cart-container-show').style.display = 'block';
}

function hidecart() {
	document.querySelector('.cart-container-show').style.display = 'none';
}

//----------------- Open Checkout Popup -------------------------

function submit(){
    if(cartTotal != 0){
        document.querySelector('.product-container').style.display = 'none'
        document.querySelector('.cart-container-show').style.display = 'none';
        document.querySelector('.checkout_popup').style.display = 'flex';
        document.querySelector('.checkout-total').innerText = "Total Payment :- Rs." + cartTotal.toLocaleString();
    }   
}

//---------------- Checkout Popup ------------------------------

let personalFormDetails = document.querySelector('.Personal-Details-form');
let shippingFormDetails = document.querySelector('.Shipping-Details-form');
let paymentFormDetails = document.querySelector('.Payment-Details-form');
let dropArrowone = document.querySelector('#drop-down-arrow-one');
let dropArrowtwo = document.querySelector('#drop-down-arrow-two');
let dropArrowthree = document.querySelector('#drop-down-arrow-three');

function displayPersonalForm(){
    if(personalFormDetails.style.display =='none'){
        dropArrowone.style.transform = 'rotate(180deg)';
        personalFormDetails.style.display = 'flex';
    }else{
        dropArrowone.style.transform = 'rotate(0deg)';
        personalFormDetails.style.display = 'none';
    }  
}

function displayShippingForm(){
    if(shippingFormDetails.style.display =='none'){
        dropArrowtwo.style.transform = 'rotate(180deg)';
        shippingFormDetails.style.display = 'flex';

    }else{
        dropArrowtwo.style.transform = 'rotate(0deg)';
        shippingFormDetails.style.display = 'none';
    }  
}

function displayPaymentForm(){
    if(paymentFormDetails.style.display =='none'){
        dropArrowthree.style.transform = 'rotate(180deg)';
        paymentFormDetails.style.display = 'flex';
    }else{
        dropArrowthree.style.transform = 'rotate(0deg)';
        paymentFormDetails.style.display = 'none';
    }
}

//----------------------- Thank you Popup ---------------------

function thankyouShow(){
    document.querySelector('.thank-you-popup').style.display = 'flex';
    document.querySelector('.checkout_popup').style.display = 'none';
}

function reloadshop(){

}