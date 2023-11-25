//// Dados dos produtos disponíveis na cafeteria
let cafeteriaProducts = {
  cafeA: {
    // Identificador único do produto
    id: 1,
    // Nome do produto
    name: "Café Expresso",
    // Descrição do produto
    description:
      "O café expresso é uma bebida preparada pela passagem de água quente pressurizada através de café moído finamente. É conhecido por sua intensidade e sabor encorpado. Desfrute do aroma robusto e do sabor rico do nosso café expresso feito com grãos de alta qualidade.",
    //Preço do produto
    price: 2.99,
    // Texto alternativo para a imagem
    alt: "Café expresso",
    // Caminho da imagem do produto
    image: "img/cafe-expresso.jpg",
  },
  cafeB: {
    id: 2,
    name: "Croissant",
    description:
      "Delicie-se com nosso croissant recém-assado, uma deliciosa massa folhada em camadas, crocante por fora e macia por dentro. Este clássico francês é perfeito para o café da manhã ou um lanche a qualquer hora do dia. Desfrute da combinação irresistível de textura e sabor.",
    price: 5.99,
    alt: "Croissant",
    image: "img/croissant.jpg",
  },
  cafeC: {
    id: 3,
    name: "Pão de Queijo",
    description:
      "Experimente a autêntica receita mineira em nosso pão de queijo. Feito com queijo de alta qualidade e uma massa leve e aerada, cada mordida é uma explosão de sabor. Perfeito para qualquer momento do dia, nosso pão de queijo é uma escolha irresistível para os amantes de queijo.",
    price: 3.99,
    alt: "Pão de Queijo",
    image: "img/pao-de-queijo.jpg",
  },
  cafeD: {
    id: 4,
    name: "Frapé",
    description:
      "Refresque-se com nosso delicioso frappé. Uma mistura perfeita de café gelado, leite, gelo e um toque de sabor. Desfrute da textura cremosa e da combinação única de café gelado que torna nosso frappé uma escolha refrescante para qualquer dia. Uma verdadeira indulgência para os amantes de café.",
    price: 8.99,
    alt: "Frapé",
    image: "img/frape.jpg",
  },
  cafeE: {
    id: 5,
    name: "Bolo de Fubá com Queijo",
    description:
      "Desfrute do sabor caseiro do nosso bolo de fubá com queijo. Com uma textura macia e uma combinação perfeita de fubá e queijo, este bolo é uma verdadeira delícia. Ideal para o café da tarde ou como sobremesa, nosso bolo de fubá com queijo é uma opção reconfortante e saborosa.",
    price: 2.79,
    alt: "Bolo de Fubá com Queijo",
    image: "img/bolo.jpg",
  },
};

// Verifica se há dados de produtos no localStorage, se não houver, adiciona os dados padrão
let productsList = JSON.parse(localStorage.getItem("product"));
if (productsList == null) {
  localStorage.setItem("product", JSON.stringify(cafeteriaProducts));
}

// Recupera a lista de produtos do localStorage
let list = JSON.parse(localStorage.getItem("product"));

// Variável para armazenar a representação HTML dos produtos
let products = "";

// Itera sobre a lista de produtos para criar a representação HTML e renderizar de forma dinâmica
for (let key in list) {
  if (list.hasOwnProperty(key)) {
    const product = list[key];
    // Constrói a representação HTML para cada produto
    products += `<div class="cafe2">
      <img class="img-cafe" width="500px" src=${product.image} alt=${product.alt}>
      <div class="cafeA">
        <h2>${product.name}</h2>
        <p class="text">${product.description}</p>
      </div>
      <div class="btn">
        <button class="add" onclick="addToCart('${key}')">ADICIONAR AO CARRINHO 
          <img width="40px" class="img-add" src="img/shopping-cart-add-button_icon-icons 1.png" alt="">
        </button><br>
      </div>
    </div>`;
  }
}

// Adiciona a representação HTML dos produtos ao elemento com o ID "products-list"
document.getElementById("products-list").innerHTML = products;

// Função para adicionar um produto ao carrinho
function addToCart(productId) {
  // Recupera o produto selecionado com base no ID
  const product = cafeteriaProducts[productId];

  // Recupera o carrinho do localStorage ou cria um novo se não existir
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Adiciona o produto ao carrinho
  cart.push(product);

  // Atualiza o carrinho no localStorage
  localStorage.setItem("cart", JSON.stringify(cart));

  // Exibe um alerta informando que o produto foi adicionado ao carrinho
  alert("Produto adicionado ao carrinho!");
}
