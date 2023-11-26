# Plano de Testes de Software

Pré-requisitos: <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t1-expresso-virtual/blob/main/documentos/02-Especifica%C3%A7%C3%A3o%20do%20Projeto.md"> Especificação do Projeto</a></span>, <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t1-expresso-virtual/blob/main/documentos/04-Projeto%20de%20Interface.md"> Projeto da Interface</a>

Os requisitos para realização dos testes de software são:
<ul><li>Site publicado na internet;</li>
<li>Navegador da internet: Chrome, Firefox ou Edge.</li>
</ul>

Os testes funcionais a serem realizados na aplicação são descritos a seguir.

<table>
 <tr>
  <th>Caso de Teste</th>
  <th>Requisitos associados</th>
  <th>Objeto do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <td>CT-01: Verificar o funcionamento da página Home </td>
 <td>
  <ul>
   <li>RF-01:	A aplicação deve permitir o usuário cadastrar uma conta e adicionar informações, como endereço, telefone e nome.</li>
   <li>RF-02:	A aplicação deve permitir que o usuário faça login em sua conta.</li>
   <li>RF-04:	A aplicação deve permitir que o usuário compre os produtos através de um carrinho de compras.</li>
  </ul>
 </td>
 <td>Verificar se os links da página Home estão encaminhando para as respectivas páginas corretamente</td>
 <td>
  <ol>
     <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar nos links da página Home.</li>
  </ol>
 </td>
 <td>Todos os links da página Home devem encaminhar os usuários para as páginas descritas.</td>
  <td>Lucas</td>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <td>CT-02: Verificar o funcionamento do Menu</td>
 <td>
   <ul>
    <li>RF-03:	A aplicação deve permitir que o usuário visualize todos os produtos, preços e seus ingredientes, antes da compra.</li>
    <li>RF-04: A aplicação deve permitir que o usuário compre os produtos através de um carrinho de compras.</li>
   </ul>
  </td>
  <td>Verificar se a página está mostrando todas as opções de produtos e adicionando ao carrinho</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar na página Menu.</li>
    <li>Visualizar todos os produtos e adicionar ao carrinho</li>
   </ol>
   </td>
  <td>Produtos e detalhes do mesmo aparecem e adicionados ao carrinho com sucesso</td>
  <td>Vítor</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>  
 </tr>
 <tr>
  <td>CT-03: Verificar o cadastro de usuário</td>
  <td>
   <ul>
    <li>RF-01:	A aplicação deve permitir o usuário cadastrar uma conta e adicionar informações, como endereço, telefone e nome.</li>
    <li>RF-02:	A aplicação deve permitir que o usuário faça login em sua conta.</li>
   </ul>
  </td>
  <td>Verificar se um cliente irá conseguir cadastrar seus dados para comprar pelo site</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar na página Login.</li>
    <li>Clicar em registrar</li>
    <li>Colocar seu dados válidos e logar</li>
   </ol>
   </td>
  <td>Usuário registrado com sucesso e dados salvos no navegador</td>
  <td>Lucas</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>  
 </tr>
 <tr>
  <td>CT-04: Verificar direitos de administrador</td>
  <td>
   <ul>
    <li>RF-02: A aplicação deve permitir que o usuário faça login em sua conta.</li>
    <li>RF-05:	A aplicação deve permitir que o administrador consiga editar o cardápio, podendo inserir e excluir itens, alterar valores e descrições.</li>
     </ul>
  </td>
  <td>Verificar se o administrador irá conseguir editar o cardápio e alterar valores e descrições dos produtos</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar na página Login.</li>
    <li>Logar como adminstrador</li>
    <li>Alterar informações dos produtos </li>
    <li>Visualizar os pedidos dos clientes</li>
   </ol>
   </td>
  <td>Administrador consegue logar e alterar/adicionar os dados dos produtos e carrinho</td>
  <td>Laura</td>
 </tr>
</table>

