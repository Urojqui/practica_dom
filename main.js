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
  const liInfo = document.createElement("li");
  liInfo.classList.add(`inf-${index + 1}`);
  ulInfo.appendChild(liInfo);
  liInfo.innerText = info;
});

//MAIN - DIV- BACKGROUND
const imgMain = [
  {
    video: "assets/Video/Video nike.mov",
  },
];

imgMain.forEach((image) => {
  const div = document.createElement("div");
  div.classList.add("background");
  main.appendChild(div);

  const img = document.createElement("img");
  img.src = image.video;
  div.appendChild(img);
});

//MAIN - SECTION - TEXT
const section3 = document.createElement("section");
section3.classList.add("text");
main.appendChild(section3);
const h3 = document.createElement("h3");
h3.innerText = "No limites tu energía";

const paragraph = document.createElement("p");
paragraph.innerText = "Corre con Pegasus";

const paragraph1 = document.createElement("p");
paragraph1.innerText =
  "Siente la reactividad y el retorno de energía de la espuma ReactX y la tecnología Air Zoom.";

const buyButton = document.createElement("button");
buyButton.innerText = "Comprar";
buyButton.classList.add("buynow");

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
divButton.classList.add("sportfilter");

const paragraph2 = document.createElement("p");
paragraph2.innerText = "Filtrar por deporte";
divButton.appendChild(paragraph2);

const buttons = document.createElement("div");
buttons.classList.add("buttons");
divButton.appendChild(buttons);

const button1 = document.createElement("button");
button1.innerHTML = '<i class="fa-solid fa-chevron-left"></i>';

buttons.appendChild(button1);

const button2 = document.createElement("button");
button2.innerHTML = '<i class="fa-solid fa-chevron-right"></i>';

buttons.appendChild(button2);

//SECTION - UL
const ulCarousel = document.createElement("ul");
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
];

sports.forEach((sport) => {
  const liSports = document.createElement("li");

  const img2 = document.createElement("img");
  img2.src = sport.img;
  img2.alt = sport.name;

  const names = document.createElement("a");
  names.href = "#";
  names.innerText = sport.name;

  ulCarousel.appendChild(liSports);
  liSports.appendChild(img2);
  liSports.appendChild(names);
});

document.body.appendChild(section4);

//SECTION .SPORTS

const section5 = document.createElement("section");
section5.classList.add("products");
document.body.appendChild(section5);

const paragraph3 = document.createElement("p");
paragraph3.classList.add("exclusive");
paragraph3.innerText = "Zapatillas Exclusivas";
section5.appendChild(paragraph3);

const filterOptions = document.createElement("ul");
filterOptions.classList.add("filteroptions");
section5.appendChild(filterOptions);

const categories = [
  "Air Force 1",
  "Air Max",
  "Nike Dunk",
  "Nike V2K",
  "Blazer",
  "Jordan",
  "Nike Vomero",
];

categories.forEach((category) => {
  const liCategories = document.createElement("li");
  filterOptions.appendChild(liCategories);
  liCategories.classList.add("styles");
  liCategories.innerText = category;
});

const ulFilter = [
  "Lifestyle",
  "Baloncesto",
  "Skateboard",
  "Sexo (1)",
  "Filtrar por precio",
  "Descuentos y ofertas",
  "Size",
  "Color",
  "Colecciones (1)",
  "Alturas de las zapatillas",
  "Deportes",
];

ulFilter.forEach((filter) => {
  const liFilter = document.createElement("li");
  filterOptions.appendChild(liFilter);
  liFilter.classList.add("options")
  liFilter.innerText = filter;

  const icon = document.createElement("i");
  icon.classList.add("fa-solid", "fa-chevron-down");
  liFilter.appendChild(icon);
});

document.body.appendChild(section5);

const products = [
  {
    name: "Nike SB Dunk Low Pro",
    color: "2 colores",
    seller: "Nike",
    price: "119,99€",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b371e4dd-4c8d-4a2d-9ba0-268af8492b6f/NIKE+SB+DUNK+LOW+PRO.png",
  },

  {
    name: "Nike SB Day One",
    color: "1 color",
    seller: "Nike",
    price: "79,99€",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b59665b1-d7db-4d0d-9bbb-72cd2c0a7159/NIKE+SB+DAY+ONE+%28GS%29.png",
  },

  {
    name: "Nike SB Zoom Janoski OG+",
    color: "2 colores",
    seller: "Nike",
    price: "94,99€",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/03c91279-e797-4cd7-879f-d082448a0c97/NIKE+SB+ZOOM+JANOSKI+OG%2B.png",
  },

  {
    name: "Nike SB Dunk Low Pro",
    color: "3 colores",
    seller: "Nike",
    price: "119,99€",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f570e56f-f2be-408f-a3a9-f53bbde6f062/NIKE+SB+DUNK+LOW+PRO.png",
  },

  {
    name: "Nike SB Malor",
    color: "3 colores",
    seller: "Nike",
    price: "79,99€",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9cdc0994-92fc-481c-af17-1afb48e1c118/NIKE+SB+MALOR.png",
  },

  {
    name: "Nike SB Dunk Low Premium",
    color: "1 color",
    seller: "Nike",
    price: "119,99€",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cd14f559-aa93-4875-8d08-b6cd1ee1ca21/NIKE+SB+DUNK+LOW+PRM.png",
  },

  {
    name: "Nike SB Day One",
    color: "1 color",
    seller: "Nike",
    price: "79,99€",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/08e4027a-625e-44f8-b883-b32946fb3dcc/NIKE+SB+DAY+ONE+%28GS%29.png",
  },

  {
    name: "Nike SB Zoom Janoski OG+ Electric",
    color: "1 color",
    seller: "Nike",
    price: "99,99€",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/29a881b7-30e8-414c-8064-a6450ace2ef4/NIKE+SB+ZOOM+JANOSKI+OG%2B.png",
  },

  {
    name: "Nike SB Force 58 Premium",
    color: "1 color",
    seller: "Nike",
    price: "79,99€",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7564ab4b-8cd3-4f0c-a31f-1765f7a4f104/NIKE+SB+FORCE+58+PRM+L.png",
  },

  {
    name: "Nike Dunk Low",
    color: "2 colores",
    seller: "Nike",
    price: "119,99€",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7b69dc5e-caf3-4425-b053-bb2efea296f7/W+NIKE+DUNK+LOW+NEXT+NATURE.png",
  },

  {
    name: "Nike Dunk Low Retro SE",
    color: "1 color",
    seller: "Nike",
    price: "129,99€",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a7fdc214-9aa7-453f-b2ea-17a84016d04b/NIKE+DUNK+LOW+RETRO+SE.png",
  },

  {
    name: "Nike Dunk Low",
    color: "1 color",
    seller: "Nike",
    price: "109,99€",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5d95fbe4-5c2f-4bb0-b4b0-1711fa232281/NIKE+DUNK+LOW.png",
  },

  {
    name: "Nike SB Dunk Low Pro",
    color: "2 colores",
    seller: "Nike",
    price: "119,99€",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b371e4dd-4c8d-4a2d-9ba0-268af8492b6f/NIKE+SB+DUNK+LOW+PRO.png",
  },

  {
    name: "Nike SB Dunk Low Premium",
    color: "1 color",
    seller: "Nike",
    price: "119,99€",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cd14f559-aa93-4875-8d08-b6cd1ee1ca21/NIKE+SB+DUNK+LOW+PRM.png",
  },

  {
    name: "Nike SB Dunk Low Pro",
    color: "3 colores",
    seller: "Nike",
    price: "119,99€",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f570e56f-f2be-408f-a3a9-f53bbde6f062/NIKE+SB+DUNK+LOW+PRO.png",
  },
];

const ul = document.createElement("ul");
ul.classList.add("shoes");
section5.appendChild(ul);

products.forEach((product) => {
  const li = document.createElement("li");

  const h4 = document.createElement("h4");
  h4.innerText = product.name;

  const price = document.createElement("p");
  price.innerText = product.price;

  const color = document.createElement("p");
  color.innerText = product.color;

  const seller = document.createElement("p");
  seller.innerText = product.seller;

  const img = document.createElement("img");
  img.src = product.image;
  img.alt = product.name;

  li.appendChild(img);
  li.appendChild(h4);
  li.appendChild(color);
  li.appendChild(seller);
  li.appendChild(price);

  ul.appendChild(li);
});

section5.appendChild(ul);

//FOOTER

const footerElement = document.createElement("footer");
document.body.appendChild(footerElement);

const resources = document.createElement("ul");
resources.classList.add("recursos")
footerElement.appendChild(resources);

const recursos = [
  "Tarjetas de regalo",
  "Buscar una tienda",
  "Nike Journal",
  "Hazte Member",
  "Descuento para estudiantes",
  "Comentarios",
  "Códigos promocionales",
];

recursos.forEach((recurso) => {
  const liResources = document.createElement("li");
  liResources.innerText = recurso;
  resources.appendChild(liResources);
});

const help = document.createElement("ul");
help.classList.add("ayuda")
footerElement.appendChild(help);

const ayudas = [
  "Obtener ayuda",
  "Estado del pedido",
  "Envíos y entregas",
  "Devoluciones",
  "Opciones de pago",
  "Contacto",
  "Evaluaciones",
  "Ayuda con los códigos promocionales de Nike",
]

ayudas.forEach((ayuda) => {
  const liHelp = document.createElement("li");
  liHelp.innerText = ayuda;
  help.appendChild(liHelp);
});

const company = document.createElement("ul");
company.classList.add("ayuda")
footerElement.appendChild(company);

const empresas = [
  "Acerca de Nike",
  "Novedades",
  "Empleo",
  "Inversores",
  "Sostenibilidad",
  "Proposito",
]

empresas.forEach((empresa) => {
  const liCompany = document.createElement("li");
  liCompany.innerText = empresa;
  company.appendChild(liCompany);
});