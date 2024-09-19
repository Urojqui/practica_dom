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

//MAIN - DIV - INFORMATION
const divInfo = document.createElement("div");
divInfo.classList.add("information");
main.appendChild(divInfo);

const ulInfo = document.createElement("ul");
divInfo.appendChild(ulInfo);

const information = [
  "Devoluciones y entregas gratuitas",
  "Como Member, tienes envíos y devoluciones gratis en un plazo de 30 días en todos los pedidos. Obtén más información y únete",
];

information.forEach((info, index) => {
  const liInfo = document.createElement("li");liInfo.classList.add(`inf-${index + 1}`);
  ulInfo.appendChild(liInfo);
  liInfo.innerText = info;
});

//MAIN - DIV- BACKGROUND
const imgMain = [
  {
    imagen: "assets/Video/Video nike.mov"
      
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

//MAIN - SECTION - TEXT
const section3 = document.createElement("section");
section3.classList.add("text");
main.appendChild(section3);
const h3 = document.createElement("h3");
h3.innerText = "No limites tu energía"

const paragraph = document.createElement("p");
paragraph.innerText= "Corre con Pegasus";

const paragraph1 = document.createElement("p");
paragraph1.innerText= "Siente la reactividad y el retorno de energía de la espuma ReactX y la tecnología Air Zoom.";

const buyButton = document.createElement("button");
buyButton.innerText = "Comprar"
buyButton.classList.add("buynow")

section3.appendChild(h3);
section3.appendChild(paragraph);
section3.appendChild(paragraph1);
section3.appendChild(buyButton);

document.body.appendChild(main);
//FIN MAIN

//SECTION - CAROUSEL
const section4 = document.createElement("section");
section4.classList.add("carousel");
main.appendChild(section4);

//SECTION DIV - P - BUTTON
const divButton = document.createElement("div");
section4.appendChild(divButton);
divButton.classList.add("sportfilter")

const paragraph2 = document.createElement("p");
paragraph2.innerText = "Filtrar por deporte"
divButton.appendChild(paragraph2);

const buttons = document.createElement("div");
buttons.classList.add("buttons");
divButton.appendChild(buttons)

const button1 = document.createElement("button");

buttons.appendChild(button1)

const button2 = document.createElement("button");

buttons.appendChild(button2)


//SECTION - UL 
const ulCarousel = document.createElement("ul")
section4.appendChild(ulCarousel);

const sports = [
  {
    img: "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_440,c_limit/a3c971bc-bc0a-4c0c-8bdf-e807a3027e53/nike-just-do-it.jpg",
    name: "Running",
  },
  {
    img: "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_440,c_limit/e4695209-3f23-4a05-a9f9-d0edde31b653/nike-just-do-it.jpg",
    name: "Fútbol",
  },
  {
    img: "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_440,c_limit/38ed4b8e-9cfc-4e66-9ddd-02a52314eed9/nike-just-do-it.jpg",
    name: "Baloncesto",
  },
  {
    img: "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_440,c_limit/e36a4a2b-4d3f-4d1c-bc75-d6057b7cec87/nike-just-do-it.jpg",
    name: "Gym y training",
  },
  {
    img: "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_440,c_limit/7ce96f81-bf80-45b9-918e-f2534f14015d/nike-just-do-it.jpg",
    name: "Tenis",
  },
  {
    img: "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_440,c_limit/6be55ac6-0243-42d6-87d0-a650074c658c/nike-just-do-it.jpg",
    name: "Yoga",
  },
  {
    img: "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_440,c_limit/608705dc-dea5-4450-b68f-e624cf1ed2a7/nike-just-do-it.jpg",
    name: "Skateboard",
  },
  {
    img: "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_440,c_limit/c779e4f6-7d91-46c3-9282-39155e0819e5/nike-just-do-it.jpg",
    name: "Danza",
  },
]

sports.forEach((sport) => {
  const liSports = document.createElement("li");

  const img2 = document.createElement("img");
  img2.src = sport.img;

  const names = document.createElement("a");
  names.href = "#";
  names.innerText = sport.name;

  ulCarousel.appendChild(liSports);
  liSports.appendChild(img2)
  liSports.appendChild(names)
})
 
document.body.appendChild(section4)


 const products = [
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

