                var listaElevi = [];

                var indexEdit;

                function addItems() {
                    var str = "";
                      for(var i=0; i < listaElevi.length; i++) {

                         var element = listaElevi[i];
                              str+= `
                                  <tr>
                                  <td class="nume-produs">${element.name}</td>        
                                  <td class="nota-elev"></td>
                                  <th><button type="submit" class="showItem button" onclick="showItem(${i});">Vezi notele</button></th>
                                  </tr>
                              `;

                      }
                      document.querySelector("table tbody").innerHTML = str;
                }



                var listaNote = [];

                var indexEdit;

                function adaugaNota() {
                    var str = "";
                      for(var i=0; i < listaNote.length; i++) {

                         var element = listaNote[i];
                              str+= `
                                  <tr>
                                 
                                  <td class="nota-elev">${element.nota}</td>
                                 
                                  </tr>
                              `;

                        }
                        document.querySelector("table tbody").innerHTML = str;
                }


                function add(event){
                event.preventDefault();
                var newLink = {
                    
                   name:document.querySelector("[name='name']").value,
                   nota: document.querySelector("[name='nota']").value,
               

                };


                var valid = true;
                if(newLink.name.length<3){
                    document.querySelector("[name='name']").classList.add("redBorder");
                    document.querySelector(".requiredChar").classList.add("visible");
                    valid = false;

                } else {
                    document.querySelector("[name='name']").classList.remove("redBorder");
                    document.querySelector(".requiredChar").classList.remove("visible");
                  
                }


                if(indexEdit === undefined && valid == true){
                    // indexEdit === undefined inseamna ca e nou si valid == true inseamna ca nu sunt introduse <3 sau <10 => deci il adauga la sfarsitul listei
                    listaElevi.push(newLink);

                }else{
                    //inlocuiesc obiectul vechi cu cel nou preluat din formular.
                    listaElevi[indexEdit]=newLink;
                }
                
                addItems();
                document.querySelector("#idForm").reset(); //sterge inputurile dupa trimitere

            }

          
        
            function showItem() {
              var element = document.querySelector("#note_elev_wrapper");
              element.classList.add("afiseaza");
            } 

            function numeElev() {
              document.querySelector(".nume-produs").innerHTML = element.name;
                  
               
            }

            function hideElement() {
              var x = document.querySelector("#note_elev_wrapper");
              if (x.style.display === "none") {
                x.style.display = "block";
              } else {
                x.style.display = "none";
              }
            }
