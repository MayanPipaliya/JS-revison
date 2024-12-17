import { foodApi } from "../API/food.js";

const displayCart = async (data) => {
    const foods = await foodApi.get();
    document.getElementById("cartdisplay").innerHTML = "";
    data.map((e) => {
        const div = document.createElement("div");

        const name = document.createElement("p");
        const price = document.createElement("p");
        const catagorey = document.createElement("p");
        const image = document.createElement("img");
        const remove = document.createElement("button");


        remove.addEventListener("click", () => foodApi.delete(e.id))

        price.innerHTML = e.price;
        catagorey.innerHTML = e.catagorey;
        image.src = e.image;
        remove.innerHTML = "remove"


        div.append(image, name, price, catagorey, remove,);
        document.getElementById("display").append(div)

    })
}

displayCart(foods);