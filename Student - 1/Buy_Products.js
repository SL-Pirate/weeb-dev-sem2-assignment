let Product_container = document.querySelector('.product-container');

let Products = [
    {
    name:"Mayura Raksha - Traditional Sri Lankan Mask",
    price: 15000.00,
    image:"Mayura_Raksha_Mask.jpg"
},
{
    name:"Gini Raksha - Traditional Sri Lankan Mask",
    price: 15000.00,
    image:"Gini_Raksha_Mask.jpg"
},
{
    name:"Elephant Key Tag",
    price:250.00,
    image:"Elephant-Key-Tag.jpg"
},
{
    name:"Sigiriya - Hand Made Stone Statue",
    price:900.00,
    image:"Sigiriya_Stone_Statue.jpg"
},
{
    name:"Bronze Samadhi Statue - Abayagiriya",
    price:3500.00,
    image:"Buddha_Statue.PNG"
}
]

function addProducts(){
    Products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('product-items');
        newDiv.innerHTML = `
        <div class="product-items-image">
            <img  src="images/${value.image}">
            <h4 class="product-item-price">Rs. ${value.price.toLocaleString()} </h4>
        </div>
        <div class="product-item-namecard">
            <h3 class="product-items-title">${value.name}</h3>
            
            <button class="product-item-addtocart"></button>
        </div>
            `;
        Product_container.appendChild(newDiv);
    })
}
addProducts();