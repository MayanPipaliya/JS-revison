let productdata = [];
let cart = [];

const getproductdata = (e) => {
    e.preventDefault();

    let title = document.getElementById("title").value;
    let price = document.getElementById("price").value;
    let img = document.getElementById("img").value;

    let product = {
        id:Date.now(),
        title,
        price,
        img
    }

    productdata.push(product);
    displaydata(productdata);
}

let displaydata = () => {
    document.getElementById("display").innerHTML = "";
    productdata.forEach((value, index) => {
        const div = document.createElement("div");

        const title = document.createElement("p");
        title.innerHTML = value.title;

        const price = document.createElement("p");
        price.innerHTML = value.price;

        const img = document.createElement("img");
        img.setAttribute("class", "img");
        img.src = value.img;

        const deletbtn = document.createElement("button");
        deletbtn.innerHTML = "Delete";

        const cartbtn = document.createElement("button");
        cartbtn.innerHTML = "Add to cart";

        deletbtn.addEventListener("click", () => deletdata(index));
        cartbtn.addEventListener("click", () => addtocart(value));

        div.append(img, title, price, cartbtn ,deletbtn)
        document.getElementById("display").append(div);
    });
}

const deletdata = (index) => {
    productdata.splice(index, 1)
    displaydata(productdata)
}

let addtocart = (value) => {
    const result = cart.indexOf(value);

    if(result !== -1) {
        cart[result].qty++;
    } else {
        value.qty = 1;
        cart.push(value);
    }
    displaycartdata();
}


const deletcart = (index) => {
    cart.splice(index, 1)
    displaycartdata(cart)
}


let displaycartdata = () => {
    document.getElementById("cart").innerHTML = "";
    cart.forEach((value, index) => {
        const div = document.createElement("div");

        const title = document.createElement("p");
        title.innerHTML = value.title;

        const price = document.createElement("p");
        price.innerHTML = value.price;

        const img = document.createElement("img");
        img.setAttribute("class", "img");
        img.src = value.img;

        const quntity = document.createElement("p");
        quntity.innerHTML = `Quantity: ${value.qty}`;

        const deletbtn = document.createElement("button");
        deletbtn.innerHTML = "Delete";

        deletbtn.addEventListener("click", () => deletcart(index));

        div.append(img, title, price,quntity ,deletbtn)
        document.getElementById("cart").append(div);
    });
}


document.getElementById("productform").addEventListener("submit", getproductdata)