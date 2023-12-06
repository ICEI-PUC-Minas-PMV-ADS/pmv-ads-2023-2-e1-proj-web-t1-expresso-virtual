//Armazena os dados dos produtos obtidos do localStorage com a chave "product".
let productsData = JSON.parse(localStorage.getItem("product"));
//Armazena os dados do carrinho obtidos do localStorage com a chave "cart".
let cartData = JSON.parse(localStorage.getItem("cart"));
//Armazena o valor total da compra.
let total = 0;

//Função que recebe um valor numérico e retorna uma string formatada como
//moeda brasileira (formata o valor vindo como 0.00 para R$0,00).
function formatPrice(price) {
  return price.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
}

//função responsável por renderizar dinamicamente o conteúdo do carrinho na página.
//Itera sobre groupedCartData, que é um array contendo objetos agrupados pelos IDs dos produtos e suas quantidades.
//Cria elementos HTML dinamicamente para cada item do carrinho.
//Calcula o total da compra usando reduce.
//Atualiza o total na página usando textContent.
function renderCart() {
  const cartContainer = document.getElementById("cart-container");
  const totalElement = document.getElementById("preco-total");

  // Limpar o conteúdo atual do carrinho
  cartContainer.innerHTML = "";

  // Verificar se o carrinho não possui nada (cartData.length === 0) ou se retornar null,
  //significa que ele está vazio e irá retornar uma mensagem de texto e ajustar o valor total para 0
  if (!cartData || cartData.length === 0) {
    cartContainer.innerHTML = "<p>O carrinho está vazio :(</p>";
    totalElement.textContent = "R$ 0,00";
    return;
  }

  const contagemDeIds = {};
  const groupedCartData = [];

  // Agrupar itens do carrinho pelo ID e contar a quantidade
  cartData.forEach((item) => {
    const { id } = item;
    contagemDeIds[id] = (contagemDeIds[id] || 0) + 1;

    // Verificar se o item já foi agrupado
    const existingItem = groupedCartData.find(
      (groupedItem) => groupedItem.id === id
    );

    if (!existingItem) {
      // Se o item ainda não foi agrupado, adicionar ao grupo sem a quantidade
      groupedCartData.push({ ...item, quantity: 0 });
    }
  });

  // Atualizar a quantidade no grupo
  groupedCartData.forEach((groupedItem) => {
    groupedItem.quantity = contagemDeIds[groupedItem.id];
  });

  // Adicionar conteúdo do carrinho dinamicamente
  groupedCartData.forEach((item) => {
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart");

    // Adicionar o conteúdo do carrinho ao item do carrinho HTML
    cartItem.innerHTML = `
        <img class="cart-img" src=${item.image} />
        <div class="cart-container">
          <div class="cart-info">
            <p>Produto</p>
            <p>${item.name}</p>
          </div>
          <div class="cart-info">
            <p>Quantidade</p>
            <div class="cart-info-button">
              <img class="cart-info-button-img" src="./img/seta-para-cima.png" onclick="increaseQuantity(${
                item.id
              })" />
              <p>${item.quantity}</p>
              <img class="cart-info-button-img" src="./img/seta-para-baixo.png" onclick="decreaseQuantity(${
                item.id
              })" />
            </div>
          </div>
          <div class="cart-info">
            <p>Valor</p>
            <p>${formatPrice(item.price)}</p>
          </div>
        </div>
      `;

    // Adicionar o item do carrinho ao carrinho HTML
    cartContainer.appendChild(cartItem);
  });

  // Calcular o total
  const total = groupedCartData.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // Atualizar o total na página
  totalElement.textContent = `${formatPrice(total)}`;
}

//aumenta a quantidade de um produto no carrinho ao clicar na seta para cima.
//Encontra o item no carrinho com base no ID e o adiciona novamente ao carrinho.
//Chama renderCart para atualizar a exibição do carrinho.
function increaseQuantity(productId) {
  // Encontrar o item no carrinho pelo ID
  const cartItem = cartData.find((item) => item.id === productId);

  // Adicionar o item ao carrinho
  if (cartItem) {
    cartData.push({ ...cartItem });
  }

  // Renderizar o carrinho novamente
  renderCart();
}

//diminui a quantidade de um produto no carrinho ao clicar na seta para baixo.
//Encontra o índice do item no carrinho com base no ID.
//Se a quantidade for maior que 1, diminui a quantidade; caso contrário, remove o produto do carrinho.
//Chama renderCart para atualizar a exibição do carrinho.
function decreaseQuantity(productId) {
  // Encontrar o índice do item no carrinho pelo ID
  const index = cartData.findIndex((item) => item.id === productId);

  // Se o produto existir no carrinho e a quantidade for maior que 1, diminua a quantidade
  if (index !== -1 && cartData[index].quantity > 1) {
    cartData[index].quantity--;

    // Renderizar o carrinho novamente
    renderCart();
  } else if (index !== -1) {
    // Se a quantidade for 1 ou menos, remova o produto do carrinho
    cartData.splice(index, 1);

    // Renderizar o carrinho novamente
    renderCart();
  }
}

// é chamada ao finalizar a compra.
//Remove o carrinho do localStorage, redefine cartData como um array vazio e chama renderCart.
//Exibe um alerta informando que a compra foi finalizada e o carrinho foi esvaziado.
function finalizePurchase() {
  // Verifica se possui itens no carrinho, e exibe um alerta
  if (!cartData || cartData.length === 0) {
    alert("Seu carrinho está vazio! Compra não efetuada!");
    return;
  }

  // Limpar o carrinho no localStorage
  localStorage.removeItem("cart");

  // Atualizar o carrinho local
  cartData = [];

  // Renderizar o carrinho novamente
  renderCart();

  alert("Compra finalizada! O carrinho foi esvaziado.");
  window.location.href = "../Thanks-Page/thanks.html";

}

// Chame a função renderCart() para inicializar o carrinho na página
renderCart();
