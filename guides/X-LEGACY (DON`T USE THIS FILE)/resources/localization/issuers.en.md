# Issuers

> NOTE
>
> Note
>
> An *issuer* is the financial entity that issues a card (debit, credit or prepaid cards) to a particular person or company. These entities are usually banks, but there may be exceptions

The issuers supported by Mercado Pago vary by country. This feature allows the identification of an issuer based on the [payment method](#) and a [BIN number](#).

## Get the card issuers

You can get the card issuers as follows:

**GET /v1/payment_methods/card_issuers**

	<?php
		require ('mercadopago.php');
		$mp = new MP ('ACCESS_TOKEN');
		$card_issuers = $mp->get('/v1/payment_methods/card_issuers', 'visa', '424242');
		print_r ($card_issuers);
	?>

**Response**

	[
		{
	    "id": "279",
	    "name": "Banco Galicia",
	    "secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/279.gif",
	    "thumbnail": "http://img.mlstatic.com/org-img/MP3/API/logos/279.gif"
	  },
		...
	]

The results included in this response will coincide with the country associated with your Mercado Pago account and the *querystring parameters that you have used*. For more information about this feature and its attributes, go to [API reference](#).
