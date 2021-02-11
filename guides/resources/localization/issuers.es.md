# Emisores

> NOTE
>
> Nota
>
> Se denomina *emisor* a la entidad financiera que emite un plástico (tarjeta de débito, crédito o prepaga) a una determinada persona o empresa. Dichas entidades suelen ser bancos pero hay excepciones.

Los emisores soportados por Mercado Pago varían según cada país. Este recurso permite identificar un emisor a partir de un [medio de pago](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/resources/localization/payment-methods) y un número de BIN.

## Obteniendo los emisores

Los emisores pueden ser obtenidos de la siguiente forma:

**GET /v1/payment_methods/card_issuers**

	<?php
		require ('mercadopago.php');
		$mp = new MP ('ACCESS_TOKEN');
		$card_issuers = $mp->get('/v1/payment_methods/card_issuers', 'visa', '424242');
		print_r ($card_issuers);
	?>

**Respuesta**

	[
		{
	    "id": "279",
	    "name": "Banco Galicia",
	    "secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/279.gif",
	    "thumbnail": "http://img.mlstatic.com/org-img/MP3/API/logos/279.gif"
	  },
		...
	]

Los resultados incluídos en esta respuesta coincidirán con el país asociado a tu cuenta de Mercado Pago y *los parámetros (_querystring_) que hayas utilizado*. Puedes obtener más información sobre este recurso y sus atributos en la [Referencia de API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference).
