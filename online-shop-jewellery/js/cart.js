         var list = {};
        async function getList(){
        var response = await fetch("https://online-shop-jewellery.firebaseio.com/menu.json");
        window.list = await response.json();
        addProducts();

        }




 	      function addProducts() {
         
          var cosStr = localStorage.getItem("shop")
            if(cosStr === null){
              cos = [];
            } else {
              cos = JSON.parse(cosStr);
            }
              var str = "";
              
              for (var i=0; i < cos.length; i++) {          
            	  var produs = cos[i];
                str+=`      
                <div class="cartRow">
          			<div class="cartItem">
    	       			 <p class="cartTitleProduct">${produs.productName}</p>
    	        		 <p class="cartPrice">${produs.productPrice}</p>
    					     <img src="${produs.productImage}" class="imageProduct" />
                  
    	       		  <input class="cartQuantity" type="number" id="quantity" name="quantity" min="1" max="500" required="" value="${produs.productQuantity}" />
    	        		 <button onclick="del(${i})"  class="btnRemoveItem" type="button" value="Delete">STERGE</button>
                  

               

          			</div>
       			 </div>
              `
          	}
        	document.querySelector(".cartItems").innerHTML = str;
        }

      function del(idx) {

               

                  var cosStr = localStorage.getItem("shop")
            if(cosStr === null){
              cos = [];
            } else {
              cos = JSON.parse(cosStr);
            } // var cos = get gos.


                if(confirm(`Esti sigur ca vrei sa stergi ${cos[idx].nume} ?`)){

                    cos.splice(idx,1);
                    localStorage.setItem("shop", JSON.stringify(cos))
                    addProducts()                   
                }

            }



function maresteCantitate(idx){
  let cosStr = localStorage.getItem("shop");
  let cos;
  if(cosStr===null){
    cos = [];
  }else{
    cos = JSON.parse(cosStr);
  }
  cos[idx].cantitate++;
  if(cos[idx].cantitate <= cos[idx].stoc){
    localStorage.setItem("shop", JSON.stringify(cos));
    drawCos();
  }else{
    alert("Cantitatea depaseste stocul");
  }
}
               
            
  








function updateCartTotal() {
	var cartItemContainer = document.getElementsByClassName('cartItems')[0]
	var cartRows = cartItemContainer.getElementsByClassName('cartRow')
	var total = 0
		for(var i=0; i < cartRows.length; i++) {
			var cartRow = cartRows[i]
			var priceProduct = cartRow.getElementsByClassName('cartPrice')[0]
			var quantityProduct = cartRow.getElementsByClassName('cartQuantity')[0]
			var price = parseFloat(priceProduct.innerText.replace('$', ''))
			var quantity = quantityProduct.value
			total = total + (price*quantity)
	}
	document.getElementsByClassName("cartTolalPrice")[0].innerText = "$" + total

}
/*

  function addItemToCart(title, price, imageSrc) {
  var cartRow = document.createElement("div")
  var cartItems = document.getElementsByClassName("cartRow")[0]
  var cartRowContents = `
  <p id="productName" class="productName" name="name">${title}</p>
      <img id="imageProduct" class="productImage"  src="${imageSrc}" width="" height="" alt="Jewellery">
      
      <span class="productPrice">${price}</span>
      <div class="shopItemDetails">
        <label for="quantity">Cantitate:</label>
        <input type="number" id="quantity" name="quantity" min="1" max="500" required="" value="1">
      <button class="productDetailsBtn"  onclick="adToCart()">ADAUGA IN COS</button>

  `
  cartRow.innerHTML = cartRowContents
  cartItems.append(cartRow)
}

function adToCart() {
  var button = event.target
  var shopItem = button.parentElement.parentElement
  var title = shopItem.getElementsByClassName("productName")[0].innerText
  var price = shopItem.getElementsByClassName("productPrice")[0].innerText
  var imageSrc = shopItem.getElementsByClassName("productImage")[0].src
  console.log(title, price, imageSrc)
  addItemToCart(title, price, imageSrc)  

}

*/
