# Plano de Testes de Software

Pré-requisitos: <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t1-expresso-virtual/blob/main/documentos/02-Especifica%C3%A7%C3%A3o%20do%20Projeto.md"> Especificação do Projeto</a></span>, <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t1-expresso-virtual/blob/main/documentos/04-Projeto%20de%20Interface.md"> Projeto da Interface</a>

Os requisitos para realização dos testes de software são:
<ul><li>Site publicado na internet;</li>
<li>Navegador da internet: Chrome ou Edge.</li>
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
 <td>CT-01: Verificar o funcionamento da página Home</td>
 <td>
  <ul>
   <li>RF-01:	A aplicação deve permitir o usuário cadastrar uma conta e adicionar informações, como endereço, telefone e nome.</li>
   <li>RF-03: A aplicação deve permitir que o usuário visualize todos os produtos, preços e seus ingredientes, antes da compra.</li>
  </ul>
 </td>
 <td>Verificar se os links da página Home estão encaminhando para as respectivas páginas corretamente e mostrando todas as informações corretamente.</td>
 <td>
  <ol>
     <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar nos links da página Home.</li>
   <li>Todos os botões responsíveis e funcionais</li>
  </ol>
 </td>
 <td>Todos os links da página Home devem encaminhar os usuários para as páginas descritas, sem bugs ou erros.</td>
  <td>Lucas Quintanilha</td>
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
 <td>CT-02: Verificar o funcionamento do cardápio.</td>
 <td>
   <ul>
    <li>RF-03:	A aplicação deve permitir que o usuário visualize todos os produtos, preços e seus ingredientes antes da compra.</li>
   </ul>
  </td>
  <td>Verificar se a página está mostrando todas os produtos, as informações como preço e características.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar na página Cardápio.</li>
    <li>Visualizar todos os produtos e adicioná-los ao carrinho.</li>
    <li>Visualizar o carrinho, quantidade de produtos e valor.</li>
   </ol>
   </td>
  <td>Tela Menu mostrando os produtos e características, porém o preço não está aparecendo na tela Cardápio.</td>
  <td>Josef</td>
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
  <td>CT-03: Verificar o funcionamento do login.</td>
  <td>
   <ul>
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
    <li>Clicar em Cadastre-se no primeiro acesso.</li>
    <li>Colocar os dados válidos e logar</li>
   </ol>
   </td>
  <td>Usuário registrado e conseguindo logar</td>
  <td>Lucas Quintanilha</td>
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
  <td>CT-04: Verificar funcionalidades de administrador</td>
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
    <li>Visualizar os pedidos dos clientes</li>
   </ol>
   </td>
  <td>Administrador consegue logar e conferir informações dos clientes</td>
  <td>Josef</td>
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
  <td>CT-05: Verificar as opções de contato</td>
  <td>
   <ul>
    <li>RF-06: A aplicação deve conter informações para contato com a empresa.</li>
     </ul>
  </td>
  <td>Verificar se aparece opções de contato com a empresa</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar na página Contato.</li>
   </ol>
   </td>
  <td>Cliente consegue mandar um e-mail através  da opção "Fale conosco".</td>
  <td>Vitor</td>
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
  <td>CT-06: Verificar a responsividade do site em diferentes formatos de tela.</td>
  <td>
   <ul>
    <li>RNF-01: A aplicação deve ser responsiva permitindo que seja visualizada em qualquer formato de tela.</li>
     </ul>
  </td>
  <td>Verificar se o cliente vai conseguir utilizar o site em diferentes dispositivos e tela</td>
  <td>
   <ol>
    <li>Acessar o navegador de um dispositivo móvel</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar no botão no canto superior direito.</li>
    <li>Clicar na página Sobre</li>
    <li>Clicar na página Contato</li>
    <li>Clicar em login</li>
   </ol>
   </td>
  <td>Cliente deve conseguir navegar pelo site em uma tela menor, sem perder funções ou responsividade</td>
  <td>Laura</td>
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
  <td>CT-07: verificar a compatibilidade do site em diferentes navegadores</td>
  <td>
   <ul>
    <li>RNF-02: A aplicação deve ser compatível com os navegadores mais utilizados.</li>
     </ul>
  </td>
  <td>Verificar se o site vai funcionar perfeitamente em diferente navegaadores.</td>
  <td>
   <ol>
    <li>Acessar o navegador 1.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar na página Cardápio</li>
    <li>Acessar o navegador 2.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar na página Cardápio</li>
    <li>Acessar o navegador 3.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar na página Cardápio</li>
   </ol>
   </td>
  <td>O site deve permanecer igual em todos os navegadores, sem apresentar erros.</td>
  <td>Laura</td>
 </tr>
</table>
