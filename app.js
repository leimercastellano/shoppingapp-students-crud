// API Url
const url = 'http://ec2-35-181-5-201.eu-west-3.compute.amazonaws.com:8080/list-products/'
const idTeam = 'frogs' // CHANGEME

//Product Constructor
class Product {
  constructor(name, price, year) {
    this.name = name;
    this.price = price;
    this.year = year;
  }
}

//UI Constructor
class UI {
  //Product template
  static addProduct(product) {
    //funcion a la db
    const productList = document.getElementById("product-list");
    const element = document.createElement("div");
    element.innerHTML = `
      <div class="card text-center mb-4">
      <div class="card-body">
      <h5><strong>${product.name}</strong></h5>
      <strong>Price</strong>: ${product.price}€
      <strong>Year</strong>: ${product.year}
      <a href="#" onclick="UI.deleteProduct(event)" class="dlt btn btn-danger ml-5" name="delete">Delete</a>
      </div>
      </div>
      `;
    productList.appendChild(element);
  }

  static resetForm() {
    document.getElementById("product-form").reset();
  }

  static deleteProduct(event) {
    console.log("event", event)
    event.target.closest("div.card.text-center.mb-4").remove();
    UI.showMessage("Product removed successfully", "danger");
  }

  static showMessage(message, cssClass) {
    //this.retreiveAllProductsFromServer();
    const msg = document.createElement("div");
    msg.className = `alert alert-${cssClass} mt-2 text-center`;
    msg.appendChild(document.createTextNode(message));

    //Show in the DOM
    const container = document.querySelector(".container");
    const app = document.querySelector("#app");

    //Insert message in the UI
    container.insertBefore(msg, app);

    //Remove after 2 seconds
    setTimeout(function () {
      document.querySelector(".alert").remove();
    }, 2000);
  }



  static retreiveAllProductsFromServer() {
    event.preventDefault();
    var urlWithId = url + idTeam;
    fetch(urlWithId, {
      method: 'GET', // So, we can specify HTTP Methods here. Uh, interesting.
      headers: { 'Content-Type': 'application/json' }, // Type of data to retrieve. 
      mode: 'cors', // What is CORS?? https://developer.mozilla.org/es/docs/Web/HTTP/CORS 
    }).then(response => response.json())
      .then((responseJson) => {
        this.convertToArray(responseJson);
        // console.log(responseJson);
      })

  }

  static convertToArray(responseJson) {
    var listaProducts = [];
    var name;
    var price;
    var year;

    for (let i = 0; i < responseJson.length; i++) {
      name = responseJson[i].title;
      price = responseJson[i].price;
      year = responseJson[i].year;

      if (name != null) {
        var myProduct = new Product(name, price, year);
      }
      listaProducts.push(myProduct);
    }

     var currentDate = new Date().getFullYear();
 

    listaProducts.forEach(element => {
      if(element.year<=currentDate){
        this.addProduct(element);
      }
      console.log(element.year)
     
    }); 
  }
}
 




/* function postProductToServer(product){






}
 */




/*  static postProductToServer(product) {
    const endPointToServer ="http://http://ec2-35-181-5-201.eu-west-3.compute.amazonaws.com:8080/add-product/" +idTeam;
    event.preventDefault();
  
    

    async saveProduct(endPointToServer, data = {}) {
      const response = await fetch(url, {
        method: "POST",
          mode: "cors",
          cache: "no-cache",
          headers: { 
              "Content-Type": "application/json",
          },
          body: JSON.stringify(data)
      });
    } 


    nodeUrl = endPointToServer;

const submitData = async () => {

    fetch(nodeUrl, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({'test': 'test'})
    }).then((res) => {
      alert('then')
    }).catch((err) => {
      alert('err')
      alert(JSON.stringify(err))
    })
  } */

   /*  fetch(endPointToServer, {
      method: 'POST', // So, we can specify HTTP Methods here. Uh, interesting.
      headers: { 'Content-Type': 'application/json' }, // Type of data to retrieve. 
      mode: 'cors', // What is CORS?? https://developer.mozilla.org/es/docs/Web/HTTP/CORS 
    }).then(response => response.json())
      .then((responseJson) => {
        this.convertToArray(responseJson);
        // console.log(responseJson);
      }) */












//DOM Events
document.getElementById("product-form").addEventListener("submit", e => {
  const name = document.getElementById("product-name").value
  price = document.getElementById("product-price").value
  year = document.getElementById("product-year").value




  //Loads Products
  /* loadProducts();
  function loadProducts() {
  let productsArray =[]
    var linkOfProducts = "http://ec2-35-181-5-201.eu-west-3.compute.amazonaws.com:8080/list-products/frogs";
  
  
    fetch(linkOfProducts).then((response) => {
       return response.json();
      }).then((responseJson) => {
        
  
     
      })
  
      Product = new Product(nombre, precio, anyo);
  
      var list[]
  
    
  }
  
  
  
  function loadingProducts(listaProducts) {
  
  
  
    const productList = document.getElementById("product-list");
    const element = document.createElement("div");
    element.innerHTML = `
      <div class="card text-center mb-4">
      <div class="card-body">
      <h5><strong>${product.name}</strong></h5>
      <strong>Price</strong>: ${product.price}€
      <strong>Year</strong>: ${product.year}
      <a href="#" onclick="UI.deleteProduct(event)" class="dlt btn btn-danger ml-5" name="delete">Delete</a>
      </div>
      </div>
      `;
    productList.appendChild(element);
   */




  //Save product
  const product = new Product(name, price, year);

  UI.addProduct(product);
  UI.resetForm();
  UI.showMessage("Product added successfully", "success");

  e.preventDefault();
});


