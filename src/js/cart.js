var cart=[
    {
        title:"watch1",
        description:"this is a great watch that has many features like like your great eyes",
        shopeName:"Nike Store",
        price:2000.,
        img:"../assets/test1.jpeg",
        num:1
        ,productID:15
    },
    {
        title:"watch2",
        description:"this is a great watch that has many features like like your great eyes",
        shopeName:"Nike Store",
        price:22.25,
        img:"../assets/test2.jpeg"
        ,num:1
        ,productID:14
    },
    {
        title:"watch3",
        description:"this is a great watch that has many features like like your great eyes",
        shopeName:"Nike Store",
        price:150.50,
        img:"../assets/test1.jpeg"
        ,num:1
        ,productID:13
    },
    {
        title:"watch4",
        description:"this is a great watch that has many features like like your great eyes",
        shopeName:"Nike Store",
        price:11.95,
        img:"../assets/test2.jpeg"
        ,num:1
        ,productID:12
    },
    {
        title:"watch5",
        description:"this is a great watch that has many features like like your great eyes",
        shopeName:"Nike Store",
        price:75.25,
        img:"../assets/test1.jpeg"
        ,num:1
        ,productID:11
    },{
        title:"watch6",
        description:"this is a great watch that has many features like like your great eyes",
        shopeName:"Nike Store",
        price:200.25,
        img:"../assets/test2.jpeg"
        ,num:5
        ,productID:10
    }
]

window.addEventListener("load",function(){
   let cards= this.document.getElementById("items");
   generateCards();
   function generateCards(){
    let flag=0;
    cards.innerHTML="";
    if(cart.length==0){
        cards.innerHTML=`<h1>your cart is empty !</h1>`;
        document.getElementById("CheckOut").style.visibility="hidden";
    }
    total=0;

    cart.forEach(item => {
        total+=item.price*item.num;
        cards.innerHTML+=`<div id="${flag}" class="card m-auto">
        <div class="row g-0">
          <div  class="col-md-2">
            <img  src="${item.img}" class="img-fluid rounded" alt="...">
          </div>
          <div class="col-md-10">
            
            <div class="card-body d-flex gap-3 flex-nowrap">
              <!-- Information -->
              <div class="col-sm-7 flex-grow-1">
                <h5 class="card-title">${item.title}</h5>
                <p class="card-text">${item.description}</p>
                <p class="card-text"><small class="text-body-secondary">${item.shopeName}</small></p>
              </div>
              <!-- End of information -->
              <!-- Controls -->
              <div class="col-4 pt-4 text-center">
                <button id="close" class="float-end btn btn-lg btn-close rounded-circle"> </button>
                <h2 class="price mt-2 mb-3">${item.price}</h2>
                <div class="btn-group numOfItems">
                  <button class="btn btn-success">+</button>
                  <span class="fs-2 mx-3">${item.num}</span>
                  <button class="btn btn-danger fs-4">-</button>
                </div>
              </div>
              <!-- End of controls -->
            </div>
            <!-- End of Control and information -->
            </div>
        </div>
      </div>`
      flag++;
      
       });
       document.getElementById("SubTotal").innerText=total.toFixed(2);
   }
   
   cards.addEventListener("click",function(e){
    if(e.target.innerText=="+"){
       let cardID=e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.id;
       cart[cardID].num+=+1;
        generateCards();
   }
   if(e.target.innerText=="-"){
        let cardID=e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.id;
        if(cart[cardID].num-1==0)return
        cart[cardID].num-=1;
        generateCards();
    
    }
    if(e.target.id=="close"){
        let cardID=e.target.parentElement.parentElement.parentElement.parentElement.parentElement.id;
        deleteCard(cardID)
    }

    function deleteCard(cardId){ 
        cart.splice(cardId,1);
        generateCards();      
    }
         
    })
})
