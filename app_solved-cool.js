//Product Constructor
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.year = year;
    }
}


//UI Constructor
class UI {



    //Product template
    static addProduct(product) {
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
        </div>`;
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
}

fetch(linkProducts).then((response) => {
    return response.json();
  }).then((responseJson) => {
    console.log(responseJson);
    load(responseJson);

  })


//DOM Events
document.getElementById("product-form").addEventListener("submit", e => {
    const name = document.getElementById("product-name").value
    price = document.getElementById("product-price").value
    year = document.getElementById("product-year").value


    //Create a new Object Product
    const product = new Product(name, price, year);


    //Save product
    UI.addProduct(product);
    UI.resetForm();
    UI.showMessage("Product added successfully", "success");

    e.preventDefault();
});