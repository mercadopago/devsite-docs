# Adicionar checkout

Após ter criado a preferência em seu backend, será necessário instalar o SDK de frontend do Mercado Pago ao seu projeto para adicionar o botão do Checkout Pro.

A instalação é feita em duas etapas: incluindo o SDK do Mercado Pago ao projeto com suas credenciais configuradas e iniciando o checkout a partir do ID da preferência gerado anteriormente.

1. Para incluir o SDK Mercado Pago.js V2, adicione o código abaixo no HTML do projeto.

[[[
```html
<html>
<head>
	<title>Pagar Versão Modal</title>
</head>

<body>
	<div class="cho-container"></div>
	//Adicione o SDK MercadoPago.js/v2
		<script src="https://sdk.mercadopago.com/js/v2"></script>
```
]]]
		
2. Ao finalizar a inclusão do SDK Mercado Pago.js V2, configure as credenciais do SDK e inicialize seu checkout com o ID da preferência previamente criada e o identificador do elemento onde o botão de pagamento deverá ser exibido conforme exemplo abaixo.

[[[
```html
<script>
			//Adicione as credenciais de sua conta Mercado Pago junto ao SDK
			const mp = new MercadoPago('YOUR_PUBLIC_KEY', {
			    locale: 'pt-BR'
			});
			const checkout = mp.checkout({
			   preference: {
			       id: 'YOUR_PREFERENCE_ID' // Indique o ID da preferência
			   },
			   render: {
			       container: '.cho-container', // class do CSS para renderizar o botão de pagamento
			       label: 'Pagar', // Muda o texto do botão de pagamento (opcional)
			    }
			});
	</script>	 	 
	
</body>
</html>
```
]]]

No exemplo acima, um botão de pagamento será renderizado e ficará responsável por abrir o Checkout Pro. Caso queira personalizar a forma como o checkout será aberto, veja a seção Esquema de abertura

> WARNING
>
> Importante
>
> Para testar o checkout é preciso acessá-lo através de outro navegador ou encerrar a sessão da sua conta do Mercado Pago. Isso porque estar logado na mesma conta responsável por criar o formulário de pagamento impossibilita testar o fluxo de pagamento e garantir seu funcionamento.

> PREV_STEP_CARD_PT
>
> Criar preferências
>
> Veja como criar conjuntos de informações sobre um produto e/ou serviço.
>
> [Criar preferências](/developers/pt/docs/checkout-pro/integration-configuration/create-preference)

> NEXT_STEP_CARD_PT
>
> Vigência da preferência 
>
> Saiba como definir o período de validade para determinada preferência de pagamento.
>
> [Vigência da preferência](/developers/pt/docs/checkout-pro/checkout-customization/preferences/term-of-preference)