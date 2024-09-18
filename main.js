console.log("Hola!");
//HEADER
const header = document.createElement("header");

//HEADER -LOGO DE LA MARCA
const section1 = document.createElement("section");
section1.classList.add("brand");

const brandImg = document.createElement("img");
section1.appendChild(brandImg);
brandImg.src = "assets/Logos/nikelogo.png";
brandImg.alt = "Logo de la marca";
header.appendChild(section1);

//HEADER - MENÚ SELECCIÓN OPCIONES
const section2 = document.createElement("section");
section2.classList.add("menu");

const ulMenu = document.createElement("ul");
section2.appendChild(ulMenu);

const options = [
  "Novedades y destacados",
  "Hombre",
  "Mujer",
  "Niño/a",
  "Ofertas",
];

options.forEach((option) => {
  const liOptions = document.createElement("li");
  ulMenu.appendChild(liOptions);

  const linkElement = document.createElement("a");
  linkElement.href = "#";
  linkElement.innerText = option;
  liOptions.appendChild(linkElement);
});

header.appendChild(section2);

//HEADER - SEARCH_FAV_SHOPPING CART
const navHeader = document.createElement("nav");
navHeader.classList.add("user");

const ulNav = document.createElement("ul");
navHeader.appendChild(ulNav);
header.appendChild(navHeader);

const icons = [
  {
    icono: ["fa-solid", "fa-magnifying-glass"],
    isSearch: true,
  },
  {
    icono: ["fa-regular", "fa-heart"],
    isSearch: false,
  },
  {
    icono: ["fa-solid", "fa-cart-shopping"],
    isSearch: false,
  },
];

icons.forEach((icon, index) => {
  const liNav = document.createElement("li");
  liNav.classList.add(`icon-${index + 1}`);
  ulNav.appendChild(liNav);

  const linkElement2 = document.createElement("a");
  linkElement2.href = "#";
  linkElement2.classList.add(`logo-${index + 1}`);
  liNav.appendChild(linkElement2);

  const iconSearch = document.createElement("i");
  linkElement2.appendChild(iconSearch);

  iconSearch.classList.add(...icon.icono);

  if (icon.isSearch) {
    const inputSearch = document.createElement("input");
    inputSearch.id = "text";
    inputSearch.type = "text";
    inputSearch.placeholder = "🔍  Buscar";
    inputSearch.required = true;
    liNav.appendChild(inputSearch);
  }
});

document.body.appendChild(header);
//FIN HEADER

//MAIN
const main = document.createElement("main");

//MAIN - DIV INFORMATION
const divInfo = document.createElement("div");
divInfo.classList.add("information");
main.appendChild(divInfo);

const ulInfo = document.createElement("ul");
divInfo.appendChild(ulInfo);

const information = [
  "Devoluciones y entregas gratuitas",
  "Como Member, tienes envíos y devoluciones gratis en un plazo de 30 días en todos los pedidos. Obtén más información y únete",
];

information.forEach((info) => {
  const liInfo = document.createElement("li");
  ulInfo.appendChild(liInfo);
  liInfo.innerText = info;
});

//MAIN - BACKGROUND
const imgMain = [
  {
    imagen:
      "https://static.nike.com/a/images/f_auto,cs_srgb/w_1920,c_limit/5fab8bfc-28e0-488f-8ee9-25e064774a69/image.jpg",
  },
];

imgMain.forEach((image) => {
  const div = document.createElement("div");
  div.classList.add("background");
  main.appendChild(div);

  const img = document.createElement("img");
  img.src = image.imagen;
  div.appendChild(img);
});

const section3 = document.createElement("section");
section3.classList.add("text");
main.appendChild(section3);
const h3 = document.createElement("h3");
const paragraph = document.createElement("p");
section3.appendChild(h3);
section3.appendChild(paragraph);

const section4 = document.createElement("section");
section4.classList.add("carousel");
main.appendChild(section4);
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
