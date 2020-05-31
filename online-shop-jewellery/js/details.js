		
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

          var cosStr = localStorage.getItem("shop")
          var cos = [];
          if (cosStr === null) {
            cos = [];
          } else {
            cos = JSON.parse(cosStr);
          }
       
          var produsid = window.location.search.substr(4);
          var nume = produs.nume;
          var stoc = produs.stoc;
          var descriere = produs.descriere;
          var pret = produs.pret;
          var cantitate = parseInt(document.querySelector("#quantity").value);
          var imagine = document.querySelector("#imageProduct").src; 
          

          var found = false;

          for(var i = 0; i<cos.length; i++) {
            if (cos[i].productId === produsid) {
              //cantitate<=stoc
              cos[i].productQuantity += cantitate;
              found = true;
            }
          }

          var listaProduse= [];

  

  

            if(!found){
            cos.push({
            productName : nume,
            productDescription : descriere,
            productImage : imagine,
            productQuantity : cantitate,
            productId: produsid,
            productPrice : pret})

            } 
            localStorage.setItem("shop", JSON.stringify(cos))
        }

/*end adauga in cos */


const modalTriggers = document.querySelectorAll('.popup-trigger')
const modalCloseTrigger = document.querySelector('.popup-modal__close')
const bodyBlackout = document.querySelector('.body-blackout')

modalTriggers.forEach(trigger => {
  trigger.addEventListener('click', () => {
    const { popupTrigger } = trigger.dataset
    const popupModal = document.querySelector(`[data-popup-modal="${popupTrigger}"]`)

    popupModal.classList.add('is--visible')
    bodyBlackout.classList.add('is-blacked-out')
    
    popupModal.querySelector('.popup-modal__close').addEventListener('click', () => {
       popupModal.classList.remove('is--visible')
       bodyBlackout.classList.remove('is-blacked-out')
    })
    
    bodyBlackout.addEventListener('click', () => {
      // TODO: Turn into a function to close modal
      popupModal.classList.remove('is--visible')
      bodyBlackout.classList.remove('is-blacked-out')
    })
  })
})


