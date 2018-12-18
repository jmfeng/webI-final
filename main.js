var imgArray = new Array(4);
var index = 0;


function cycleslide(){
 
 document.banner.src = imgArray[index].src;
  index++;
  if(index > 4){
    index = 0;
  }
  setTimeout("cycleslide()",2000);
  return;

}

function startupslide(){
  imgArray[0] = new Image;
  imgArray[0].src = "pic/slide/slide1.jpeg";
  imgArray[1] = new Image;
  imgArray[1].src = "pic/slide/slide2.jpeg";
  imgArray[2] = new Image;
  imgArray[2].src = "pic/slide/slide3.jpeg";
  imgArray[3] = new Image;
  imgArray[3].src = "pic/slide/slide4.jpeg";
  imgArray[4] = new Image;
  imgArray[4].src = "pic/slide/slide5.jpeg";
  cycleslide();
  return
}

// Function to check the Firstname
function FirstName(){
  var firstName = document.survey.firstName.value;
  if(firstName == ""){
    alert("First name must be filled out.");
    return false;
  }
  if(!isNaN(firstName)){
    alert("First name must be only letters.")
    return false;
  }

  return true;
}



// Function to check the Lastname
function LastName(){
  var lastName = document.survey.lastName.value;
  if(lastName == ""){
    alert("Last name must be filled out.");
    return false;
  }
  if(!isNaN(lastName)){
    alert("Last name must be only letters.")
    return false;
  }

  return true;
}

//Function to check email addresss 
function Email(){
  var email = document.survey.email.value;
  
  if(email == ""){
    alert("Email must be filled out.");
    return false;
  }
  if(email.indexOf("@", 0) < 0 || email.indexOf(".", 0) < 0){
    alert("Watch your email punctuation, don't miss '@' or '.'!");
    return false;
  }

  return true;
}


// Function to check the phonenumber
function Phone(){
  var phone = document.survey.phone.value;
  if(phone == ""){
    alert("Phone must be filled out");
    return false;
  } else if (isNaN(phone)){
    alert("Phone must be all numbers");
    return false;
  } else if(phone.length < 10){
    alert("Please check your number, it is too short.");
    return false;
  }
  return true;
}

//Function to check the local address
function Address(){

  var street = document.survey.address.value;
  var city = document.survey.city.value;
  var state = document.survey.state.value;
  var zipcode = document.survey.zipcode.value;

  if(street.length == 0){
    alert("Please, provide your address.");
    return false;
  } else if(city == ""){
    alert("Please, provide your city");
    return false;
  } else if(zipcode == ""){
    alert("Please, provide your zipcode.");
    return false;
  } else if(isNaN(zipcode)){
    alert("Zip code must be all digits");
    return false;
  } else if(zipcode.length != 5){
    alert("Zipcode must be 5 digits.");
    return false;
  }

  return true;
}

//function to check the creditcard info
function Card(){
  var nameOnCard = document.survey.nameOnCard.value;
  var cardNum = document.survey.cardNum.value;
  var expDate = document.survey.expiration.value;

  if(nameOnCard == ""){
    alert("Please provide the name on a card.");
    return false;
  }else if(cardNum == ""){
    alert('Please provide the credit card number.');
    return false;
  } else if(isNaN(cardNum)){
    alert("Card number must be all digits.");
    return false;
  }else if(cardNum.length != 16){
    alert("Card number must be 16 digits.");
    return false;
  }else if(expDate == ""){
    alert("Please provide the expiration date.");
    return false;
  }else if(isNaN(expDate)){
    alert("Expiration date must be digits only");
    return false;
  }

  return true;
}

function terms(){

  if(document.survey.terms.checked){
    return true;
  }

 alert("You must agree to the terms and condition");

  return false;
}


function doSubmit(){
  if(!FirstName()) {}
  else if(!LastName()){}
  else if(!Email()){}
  else if(!Phone()){}
  else if(!Address()){}
  else if(!Card()){}
  else if(!terms()){}

} 


