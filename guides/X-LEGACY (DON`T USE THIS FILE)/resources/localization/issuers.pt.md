# Emissores

> NOTE
>
> Nota
>
> O *emissor* é a instituição financeira que emite um cartão (de débito, crédito ou pré-pago) à uma determinada pessoa ou empresa. Essas instituições são geralmente bancos, mas há exceções.

Os emissores suportados pelo Mercado Pago variam de acordo com cada país. Este recurso permite identificar um emissor com base no [meio de pagamento](#) e um [número BIN](#).

## Obtenha os emissores

Os emissores podem ser obtidos da seguinte forma:

**GET /v1/payment_methods/card_issuers**

	<?php
		require ('mercadopago.php');
		$mp = new MP ('ACCESS_TOKEN');
		$card_issuers = $mp->get('/v1/payment_methods/card_issuers', 'visa', '424242');
		print_r ($card_issuers);
	?>

**Resposta**

	[
		{
	    "id": "279",
	    "name": "Banco Galicia",
	    "secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/279.gif",
	    "thumbnail": "http://img.mlstatic.com/org-img/MP3/API/logos/279.gif"
	  },
		...
	]


Os resultados incluídos nesta resposta coincidirão com o país associado à sua conta Mercado Pago e *os parâmetros (querystring) que tiver utilizado*. Você poderá obter mais informações sobre este recurso e seus atributos em [Referência da API](#).
