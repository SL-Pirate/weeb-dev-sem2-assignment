let personalFormDetails = document.querySelector('.Personal-Details-form');
let shippingFormDetails = document.querySelector('.Shipping-Details-form');
let dropArrowone = document.querySelector('#drop-down-arrow-one');
let dropArrowtwo = document.querySelector('#drop-down-arrow-two');


console.log(OrederProducts);
console.log(FinalTotal);
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