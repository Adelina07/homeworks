		
/* cod Loader gif */
    function showMain(){
				
				
					var main = document.querySelector("#mainContent");
					main.classList.remove("hidden");
					
					var main = document.querySelector(".loader-f");
					main.classList.add("hidden");
			
				
			}
/* end cod Loader gif  */



         var list = {};
        async function getList(){
        var response = await fetch(`https://online-shop-jewellery.firebaseio.com/menu/${window.location.search.substr(4)}.json`)
        window.produs = await response.json();
        draw();
        showMain();
        }


        function draw() {
        
        document.querySelector("#productName").innerHTML = produs.nume;
        document.querySelector(".productPrice").innerHTML = produs.pret;
        document.querySelector("#productDescription").innerHTML = produs.descriere;
      }


/* adauga in cos */

  



        function addProducts() {
          var listaProduse= [];

          var produs = document.querySelector("#productName").innerText;
          var descriere = document.querySelector("#productDescription").innerText;
          var pret = document.querySelector(".productPrice").innerText;
          var cantitate = document.querySelector("#quantity").value;
          var imagine = document.querySelector("#imageProduct").src; 

            localStorage.setItem("shop", JSON.stringify([{
            productName : produs,
            productDescription : descriere,
            productImage : imagine,
            productQuantity : cantitate,
            productPrice : pret,

          }]))
        }

/*end adauga in cos */


