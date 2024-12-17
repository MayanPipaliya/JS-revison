import { foodApi } from "../API/food.js";


let food = await foodApi.get();
const handfood = async (e) => {
    e.preventDefault();

    let food = {
        price: document.getElementById("price").value,
        image: document.getElementById("image").value,
        catagorey: document.getElementById("catagorey").value
    }
    await foodApi.post(food);

}

document.getElementById("addfood").addEventListener("submit", handfood)
console.log(food);