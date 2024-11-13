let productdata = [];
let cart = [];

const getproductdata = (e) => {
    e.preventDefault();

    let title = document.getElementById("title").value;
    let price = document.getElementById("price").value;
    let img = document.getElementById("img").value;
 
    let product = {
        id: Date.now(),
        title,
        price,
        img
    }

    productdata.push(product);
    displaydata(productdata);
}

const reversetime = (hour, minute, second) => {
    const intervel = setInterval(() => {
        console.log(hour, minute, second)

        if (hour == 0 && minute == 0 && second == 0) {
            clearInterval(intervel);
            document.getElementById("hour","minute","second").innerText = `Offer Ends in : 0 : 0 : 0`;;

            productdata = [];
            cart = [];

            displaydata();
            displaycartdata();
            return;
        }

        if (minute == 0 && second == 0 && hour > 0) {
            minute = 59;
            second = 59;
            hour--;
        }

        if (second == 0) {
            second = 59;
            minute--;
        }

        second--;

        document.getElementById("hour","minute","second").innerText = `Offer Ends in : ${hour} : ${minute} : ${second}`;
    }, 1000)
}

reversetime(0, 0, 30);


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

        div.append(img, title, price, cartbtn, deletbtn)
        document.getElementById("display").append(div);
    });
}

const deletdata = (index) => {
    productdata.splice(index, 1)
    displaydata(productdata)
    deletcart(index);
}

let addtocart = (value) => {
    const result = cart.indexOf(value);

    if (result !== -1) {
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

        div.append(img, title, price, quntity, deletbtn)
        document.getElementById("cart").append(div);
    });
}


document.getElementById("productform").addEventListener("submit", getproductdata)