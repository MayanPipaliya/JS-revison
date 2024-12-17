import { foodApi } from "../API/food.js";

let userarray = await foodApi.get();

const displayfood = async (data) => {
  document.getElementById("display").innerHTML = "";
  data.map((e) => {
    const div = document.createElement("div");
    const price = document.createElement("p");
    const catagorey = document.createElement("p");
    const image = document.createElement("img");
    const remove = document.createElement("button");
    const addcart = document.createElement("button");

    remove.addEventListener("click", () => foodApi.delete(e.id))
    addcart.addEventListener("click", () => addtocart(e));

    price.innerHTML = e.price;
    catagorey.innerHTML = e.catagorey;
    image.src = e.image;
    remove.innerHTML = "remove"
    addcart.innerHTML = "addtocart"

    div.append(image, price, catagorey, remove, addcart);
    document.getElementById("display").append(div)

  })
}

const addtocart = async (elem) => {
  let user = JSON.parse(localStorage.getItem("food"));
  await foodApi.get(`/cart/${user}`);

  let existfood = false;
  const foods = await foodApi.get();
  foods.map((e) => {
    if (e.id === elem.id) {
      e.qty++;
      existfood = true;
    }
  });
  if (!existfood) {
    foods.push({ ...elem, qty: 1 })
  }
  await foodApi.patch(`${elem.id}`, { qty: elem.qty + 1 });
  console.log(foods);

};

displayfood(userarray)