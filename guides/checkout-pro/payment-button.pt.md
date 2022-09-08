# Botão de Pagamento

Após integrar o Checkout Pro é possível definir e personalizar a interface exibida para o usuário incluindo o modo de entrada à tela de checkout. 

Por padrão, o **Checkout Pro é aberto com um botão de pagamento direcionando o usuário para concluir a compra**, contudo, também é possível personalizar um botão de pagamento que permite abrir o checkout a partir de qualquer elemento desejado no site, sem necessariamente mostrar o botão de pagamento para o comprador.

Além disso, o Checkout Pro também pode ser aberto de forma automática, sem necessidade de qualquer ação por parte do comprador.


## Abertura com botão personalizado 


A abertura com botão personalizado é feita através do método `open`, que permite abrir o Checkout a partir de qualquer elemento desejado do site, sem necessariamente mostrar o botão de pagamento para o comprador.

Para configurar a abertura com um botão personalizado, insira o HTML abaixo diretamente no seu projeto.


```
<html>
<head>
	<script src="https://sdk.mercadopago.com/js/v2"></script>
</head>
<body>
	<script>
    // Adicione as credenciais do SDK
		const mp = new MercadoPago('PUBLIC_KEY', {
		    locale: 'pt-BR'
		});
		const checkout = mp.checkout({
		  preference: {
		      id: 'YOUR_PREFERENCE_ID' // Indique o ID da preferência
		  }
		});
	</script>	 	 
	<div class="cho-container">
      <li>
      <label for="radio">Botão open-radio: </label>
      <input type="radio" id="checkout-open-radio" onclick="checkout.open()">
       </li>


	</div>
</body>
</html>
```

## Abertura automática 

A abertura automática do Checkout é feita através do parâmetro `autoOpen` nas opções de inicialização. Este parâmetro permitirá a interação dos compradores com um botão ou qualquer outro elemento para abrir o checkout.

Para configurar a abertura automática do checkout, insira o código abaixo diretamente no seu projeto.


```
<html>
<head>
	<script src="https://sdk.mercadopago.com/js/v2"></script>
</head>
<body>
	<script>
    // Adicione as credenciais do SDK
		const mp = new MercadoPago('PUBLIC_KEY', {
		    locale: 'pt-BR'
		});
		const checkout = mp.checkout({
		  preference: {
		      id: 'YOUR_PREFERENCE_ID' // Indique o ID da preferência
		  },
		  autoOpen: true, // Habilita a abertura automática do Checkout Pro
		});	
	</script>	 	 
	<div class="cho-container"></div>
</body>
</html>
```