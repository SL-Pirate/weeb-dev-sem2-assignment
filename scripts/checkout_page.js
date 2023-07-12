let formDetails = document.getElementById('Personal-Details-form');

function display(){
    if(formDetails.style.display =='none'){
        console.log("false")
        formDetails.classList.toggle('Personal-Details-form-show');

    }else{
        console.log("true")
        formDetails.classList.toggle('Personal-Details-form-show');
    }
    
}