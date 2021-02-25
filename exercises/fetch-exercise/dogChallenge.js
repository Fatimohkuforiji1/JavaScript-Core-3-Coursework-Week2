let myFirstButton = document.getElementById("button1")
let myUl = document.getElementById("ul")
let myImg = document.createElement("img");
    
  let myLi= document.createElement("li"); 
  myLi.appendChild(myImg)
  myUl.appendChild(myLi) 

myFirstButton.addEventListener("click", function(){
  fetch ("https://dog.ceo/api/breeds/image/random")
  .then(function(response){
   return response.json();
  })

  .then(function(data){
     myImg.src = data.message

     
  })
  
  .catch(function(error){
     console.log(error);
})

})