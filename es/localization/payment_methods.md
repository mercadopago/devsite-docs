# Medios de pago

Los medios de pago ofrecidos por Mercado Pago varían según cada país.

## Obteniendo los medios de pago

Los medios disponibles pueden ser obtenidos programáticamente de la siguiente forma:

**GET /v1/payment_methods**

	<?php
		require_once ('mercadopago.php');
		$mp = new MP ('ACCESS_TOKEN');
		$payment_methods = $mp->get('/v1/payment_methods');
		print_r ($payment_methods);
	?>
	
**Respuesta**

	[
		{
			"id": "visa",
			"name": "Visa",
			"payment_type_id": "credit_card",
			"status": "active",
			"secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/visa.gif",
			"thumbnail": "http://img.mlstatic.com/org-img/MP3/API/logos/visa.gif",
			"deferred_capture": "supported",
			"settings": [
			  {
			    "card_number": {
			      "validation": "standard",
			      "length": 16
			    },
			    "bin": {
			      "pattern": "^4",
			      "installments_pattern": "^4",
			      "exclusion_pattern": "^(451766|451772|405896|473711|451769|451765|451757|451764|439818|451377|451761|406290|499859|451751|489412|477053|446344|473721)"
			    },
			    "security_code": {
			      "length": 3,
			      "card_location": "back",
			      "mode": "mandatory"
			    }
			  }
			],
			"additional_info_needed": [
			  "cardholder_name",
			  "cardholder_identification_type",
			  "cardholder_identification_number"
			],
			"min_allowed_amount": 0,
			"max_allowed_amount": 250000,
			"accreditation_time": 0,
			"financial_institutions": [
			]
		},
		...
	]

Los medios incluídos en esta respuesta coincidirán con el país asociado a tu cuenta de Mercado Pago. Podrás obtener más información sobre este recurso y sus atributos en la [Referencia de API](#).

## Medios de pago por país

A continuación se indican los medios de pago disponibles para cada país.

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

### Brasil

Medio de pago   				| Payment Type ID          | ID  
:-------------------------	| :----------------------- |:--------------------
Visa							| `credit_card`            | `visa`
MasterCard					| `credit_card`            | `master`
American Express				| `credit_card`            | `amex`
Hipercard						| `credit_card`            | `hipercard`
Diners Club International	| `credit_card`            | `diners`
Elo								| `credit_card`            | `elo`
Tarjeta Mercado Livre		| `credit_card`            | `mercadolivre`
Boleto Bancario				| `ticket`                 | `boleto`
Dinero en cuenta	       	| `digital_currency`       | `account_money`
Giftcard                	| `digital_currency`       | `giftcard`

### Chile

Medio de pago   				| Payment Type ID          | ID  
:-------------------------	| :----------------------- |:--------------------
Visa							| Tarjeta de Crédito       | `visa`
MasterCard					| Tarjeta de Crédito       | `master`
American Express				| Tarjeta de Crédito       | `amex`
Diners Club International	| Tarjeta de Crédito       | `diners`
Tarjeta CMR             	| Tarjeta de Crédito       | `cmr`
Tarjeta Magna             	| Tarjeta de Crédito       | `magna`
Tarjeta Magna             	| Tarjeta de Crédito       | `presto`
Servipag      				| Efectivo                 | `servipag`

### Colombia

Medio de pago   				| Payment Type ID          | ID  
:-------------------------	| :----------------------- |:--------------------
Visa							| Tarjeta de Crédito       | `visa`
MasterCard					| Tarjeta de Crédito       | `master`
American Express				| Tarjeta de Crédito       | `amex`
Diners Club International	| Tarjeta de Crédito       | `diners`
Crédito Fácil Codensa    	| Tarjeta de Crédito       | `codensa`
Diners Club International	| Tarjeta de Crédito       | `diners`
Efecty        				| Efectivo                 | `efecty`
Davivienda       			| Efectivo                 | `davivienda`
PSE    			       	| Transferencia Bancaria   | `pse`