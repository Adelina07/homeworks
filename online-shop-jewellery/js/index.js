		
/* cod Loader gif */
    function showMain(){
				
				
					var main = document.querySelector("#mainContent");
					main.classList.remove("hidden");
					
					var main = document.querySelector(".loader-f");
					main.classList.add("hidden");
			
				
			}
/* end cod Loader gif  */


/* cod Slider */
			var slideIndex = 1;
      showSlides(slideIndex);

      // Next/previous controls
      function plusSlides(n) {
        showSlides(slideIndex += n);
      }

      // Thumbnail image controls
      function currentSlide(n) {
        showSlides(slideIndex = n);
      }

      function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
      } 

 /* end cod Slider */

         var list = {};
        async function getList(){
        var response = await fetch("https://online-shop-jewellery.firebaseio.com/menu.json");

        window.list = await response.json();
        draw();
        showMain();
        }


        function draw() {
        var str = "";
       
        for (var i in list) { // cand trebuie sa caute in array de tip 0: {}, 1: {}, 2: {}...etc
          
        var produs = list[i];
        
            str+=`      
            <div class="boxProduct col-lg-3 col-md-3">
              <img id="imageProduct" src="${produs.imagine}" width="" height="" alt="Jewellery">
              <p>${produs.nume}</p>
              <span class="productPrice">${produs.pret} &#8364;</span>
              <a href="details.html?id=${i}" class="productDetailsBtn" title="Vezi detalii">DETALII</a>
            </div>
            `
         
        }

        document.querySelector("#continutProduse").innerHTML = str;
      }




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


