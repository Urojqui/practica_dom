console.log("Hola!");
//Header
const header = document.createElement("header");

//Logo de la marca
const section1 = document.createElement("section");
section1.classList.add("brand");
const brandImg = document.createElement("img");
section1.appendChild(brandImg);
brandImg.src = "assets/Logos/svgexport-5.png";
brandImg.alt = "Logo de la marca";
header.appendChild(section1);

//Menú selección
const section2 = document.createElement("section");
section2.classList.add("menu");

header.appendChild(section2);

//Search - language - user
const navHeader = document.createElement("nav");
navHeader.classList.add("user");

const ulNav = document.createElement("ul");
navHeader.appendChild(ulNav);
header.appendChild(navHeader);

const icons = [
  {
    icono: ["fa-solid","fa-magnifying-glass"],
  },
  {
    icono: ["fa-regular", "fa-heart"],
  },
  {
    icono: ["fa-solid", "fa-cart-shopping"],
  },
];

icons.forEach((icon) => {
  const liNav = document.createElement("li");
  ulNav.appendChild(liNav);

  const linkElement = document.createElement("a");
  linkElement.href = "#"; 
  liNav.appendChild(linkElement)

  const iconSearch = document.createElement("i");
  linkElement.appendChild(iconSearch);

  iconSearch.classList.add(...icon.icono);
});

document.body.appendChild(header);

/*
//Main
const main = document.createElement("main");

const div = document.createElement("div");
div.classList.add("img");
main.appendChild(div);

const section3 = document.createElement("section");
section3.classList.add("text");
main.appendChild(section3);
const h3 = document.createElement("h3");
const paragraph = document.createElement("p");
section3.appendChild(h3);
section3.appendChild(paragraph);

const section4 = document.createElement("section");
section4.classList.add("carousel");
main.appendChild(section4)
const ulSection4 = document.createElement("ul");
const liSection4 = document.createElement("li");
/* section4.appendChild(ul);
ulSection4.appendChild(li);
 */

document.body.appendChild(main);

/* const products = [
  {
    name: "HP Essentials 255 G8 AMD",
    price: 289,
    stars: 4,
    reviews: 250,
    seller: "PcComponentes",
    image:
      "https://thumb.pccomponentes.com/w-300-300/articles/1005/10057282/1639-hp-essential-255-g8-amd-3020e-8gb-256gb-ssd-156.jpg",
  },

  {
    name: "HP Essentials 255 G8 AMD",
    price: 300,
    stars: 4.5,
    reviews: 250,
    seller: "PcComponentes",
    image:
      "https://thumb.pccomponentes.com/w-300-300/articles/1005/10057282/1639-hp-essential-255-g8-amd-3020e-8gb-256gb-ssd-156.jpg",
  },

  {
    name: "HP Essentials 255 G8 AMD",
    price: 289,
    stars: 4,
    reviews: 250,
    seller: "PcComponentes",
    image:
      "https://thumb.pccomponentes.com/w-300-300/articles/1005/10057282/1639-hp-essential-255-g8-amd-3020e-8gb-256gb-ssd-156.jpg",
  },

  {
    name: "HP Essentials 255 G8 AMD",
    price: 289,
    stars: 4,
    reviews: 250,
    seller: "PcComponentes",
    image:
      "https://thumb.pccomponentes.com/w-300-300/articles/1005/10057282/1639-hp-essential-255-g8-amd-3020e-8gb-256gb-ssd-156.jpg",
  },

  {
    name: "HP Essentials 255 G8 AMD",
    price: 289,
    stars: 4,
    reviews: 250,
    seller: "PcComponentes",
    image:
      "https://thumb.pccomponentes.com/w-300-300/articles/1005/10057282/1639-hp-essential-255-g8-amd-3020e-8gb-256gb-ssd-156.jpg",
  },

  {
    name: "HP Essentials 255 G8 AMD",
    price: 289,
    stars: 4,
    reviews: 250,
    seller: "PcComponentes",
    image:
      "https://thumb.pccomponentes.com/w-300-300/articles/1005/10057282/1639-hp-essential-255-g8-amd-3020e-8gb-256gb-ssd-156.jpg",
  },

  {
    name: "HP Essentials 255 G8 AMD",
    price: 289,
    stars: 4,
    reviews: 250,
    seller: "PcComponentes",
    image:
      "https://thumb.pccomponentes.com/w-300-300/articles/1005/10057282/1639-hp-essential-255-g8-amd-3020e-8gb-256gb-ssd-156.jpg",
  },

  {
    name: "HP Essentials 255 G8 AMD",
    price: 289,
    stars: 4,
    reviews: 250,
    seller: "PcComponentes",
    image:
      "https://thumb.pccomponentes.com/w-300-300/articles/1005/10057282/1639-hp-essential-255-g8-amd-3020e-8gb-256gb-ssd-156.jpg",
  },

  {
    name: "HP Essentials 255 G8 AMD",
    price: 289,
    stars: 4,
    reviews: 250,
    seller: "PcComponentes",
    image:
      "https://thumb.pccomponentes.com/w-300-300/articles/1005/10057282/1639-hp-essential-255-g8-amd-3020e-8gb-256gb-ssd-156.jpg",
  },
];

const ul = document.createElement("ul");
ul.classList.add("products");
document.body.appendChild(ul);

products.forEach((product) => {
  const li = document.createElement("li");

  const h4 = document.createElement("h4");
  h4.innerText = product.name;

  const price = document.createElement("p");
  price.innerText = product.price;

  const stars = document.createElement("p");
  stars.innerText = product.stars;

  const reviews = document.createElement("p");
  reviews.innerText = product.reviews;

  const seller = document.createElement("p");
  seller.innerText = product.seller;

  const img = document.createElement("img");
  img.src = product.image;

  li.appendChild(img);
  li.appendChild(h4);
  li.appendChild(price);
  li.appendChild(stars);
  li.appendChild(reviews);
  li.appendChild(seller);

  ul.appendChild(li);
});

document.body.appenChild(ul);
 */
