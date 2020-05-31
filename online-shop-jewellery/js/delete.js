    var products = [];
    var cart = [];

        function addProduct() {
            var productID = document.querySelector(".cartTitleProduct").value;
           

            var newProduct = {
                product_id: null,
            
            };
            newProduct.product_id = productID;
           


            products.push(newProduct);


            var html = "<table border='1|1' >";
            html += "<td>Product ID</td>";
            html += "<td>Product Description</td>";
            html += "<td>Quantity</td>";
            html += "<td>Price</td>";
            html += "<td>Action</td>";
            for (var i = 0; i < products.length; i++) {
                html += "<tr>";
                html += "<td>" + products[i].product_id + "</td>";
                html += "<td>" + products[i].product_desc + "</td>";
                html += "<td>" + products[i].product_qty + "</td>";
                html += "<td>" + products[i].product_price + "</td>";
                html += "<td><button type='submit' onClick='deleteProduct(\"" + products[i].product_id + "\", this);'/>Delete Item</button> &nbsp <button type='submit' onClick='addCart(\"" + products[i].product_id + "\", this);'/>Add to Cart</button></td>";
                html += "</tr>";
            }
            html += "</table>";
            document.getElementById("demo").innerHTML = html;

            document.getElementById("resetbtn").click()
        }
        function deleteProduct(product_id, e) {
            e.parentNode.parentNode.parentNode.removeChild(e.parentNode.parentNode);
            for (var i = 0; i < products.length; i++) {
                if (products[i].product_id == product_id) {
                    // DO NOT CHANGE THE 1 HERE
                    products.splice(i, 1);
                }
            }
        }