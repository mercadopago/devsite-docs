# Emisores

> **Nota:** Se denomina *emisor* a la entidad financiera que emite un plástico (tarjeta de débito, crédito o prepaga) a una determinada persona o empresa. Dichas entidades suelen ser bancos pero hay excepciones.

Los emisores soportados por Mercado Pago varían según cada país. Este recurso permite identificar un emisor a partir de un [medio de pago](#) y un [número de BIN](#).

## Obteniendo los emisores

Los emisores pueden ser obtenidos de la siguiente forma:

**GET /v1/payment_methods/card_issuers**

	<?php
		require_once ('mercadopago.php');
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

Los resultados incluídos en esta respuesta coincidirán con el país asociado a tu cuenta de Mercado Pago y *los parámetros (querystring) que hayas utilizado*. Puedes obtener más información sobre este recurso y sus atributos en la [Referencia de API](#).

## Emisores por país

A continuación se indican los emisores disponibles para cada país.

### Argentina

Medio de pago   				| Payment Type ID          | ID  
:-------------------------	| :----------------------- |:--------------------
Visa							| `credit_card`            | `visa`
MasterCard					| `credit_card`            | `master`
American Express				| `credit_card`            | `amex`
Diners Club International	| `credit_card`            | `diners`
Tarjeta Naranja				| `credit_card`            | `naranja`
Tarjeta Nativa				| `credit_card`            | `nativa`
Tarjeta Shopping				| `credit_card`            | `shopping`
Tarjeta Cencosud				| `credit_card`            | `cencosud`
Tarjeta CMR MasterCard   	| `credit_card`            | `cmr_master`
Argencard      				| `credit_card`            | `argencard`
Nativa         				| `credit_card`            | `nativa`
Cordial      		    		| `credit_card`            | `cordial`
Cordobesa      				| `credit_card`            | `cordobesa`
Cabal							| `credit_card`            | `cabal`
Visa Débito       			| `debit_card`             | `debvisa`
MasterCard Débito			| `debit_card`             | `debmaster`
PagoFácil						| `ticket`                 | `pagofacil`
RapiPago						| `ticket`                 | `rapipago`
Provincia NET					| `ticket`                 | `provincia`
Carga Virtual					| `ticket`                 | `cargavirtual`
Red Link			       	| `bank_transfer`          | `redlink`
Dinero en cuenta	       	| `digital_currency`       | `account_money`