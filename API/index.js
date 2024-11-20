const getdata = async () => {
    let req = await fetch("https://dummyjson.com/products");
    let res = await req.json();

    console.log(res);
    Uimaker(res.products);
}

getdata();

const Uimaker = (data) => {
    data.forEach(products => {
        let div = document.createElement("div");

        let id = document.createElement("h3");
        id.innerHTML = `Product ID: ${products.id}`;

        let title = document.createElement("h1");
        title.innerHTML = products.title;

        let img = document.createElement("img");
        img.src = products.images && products.images.length > 0 ? products.images[0] : "https://via.placeholder.com/150";
        img.alt = `Image of ${products.title}`;

        let price = document.createElement("p");
        price.innerHTML = `Price: $${products.price}`;

        let category = document.createElement("p");
        category.innerHTML = `Category: ${products.category}`;

        let rating = document.createElement("p");
        rating.innerHTML = `Rating: ${products.rating}`;

        div.append(id, title, img, price, category, rating);
        document.getElementById("products").append(div);
    });
};
