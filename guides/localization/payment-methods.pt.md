# Meios de pagamento

Os meios de pagamento oferecidos pelo Mercado Pago variam de acordo com cada país.

## Obtenha os meios de pagamento

Os meios de pagamento podem ser obtidos da seguinte forma:

**GET /v1/payment_methods**

	<?php
		require ('mercadopago.php');
		$mp = new MP ('ACCESS_TOKEN');
		$payment_methods = $mp->get('/v1/payment_methods');
		print_r ($payment_methods);
	?>

**Resposta**

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

Os resultados incluídos nesta resposta coincidirão com o país associado à sua conta Mercado Pago. Você poderá obter mais informações sobre este recurso e seus atributos na [Referência da API](#).

## Meios de pagamento por país

A seguir estão os meios de pagamento disponíveis para cada país.

### Argentina

Meio de pagamento		| ID do Tipo de Pagamento| ID  
:-----------------------------	| :----------------------- | :--------------------
Visa				| `credit_card`            | `visa`
Mastercard			| `credit_card`            | `master`
American Express		| `credit_card`            | `amex`
Diners Club International	| `credit_card`            | `diners`
Tarjeta Naranja			| `credit_card`            | `naranja`
Tarjeta Nativa			| `credit_card`            | `nativa`
Tarjeta Shopping		| `credit_card`            | `shopping`
Tarjeta Cencosud		| `credit_card`            | `cencosud`
Tarjeta CMR MasterCard   	| `credit_card`            | `cmr_master`
Argencard      			| `credit_card`            | `argencard`
Cordial      		    	| `credit_card`            | `cordial`
Cordobesa      			| `credit_card`            | `cordobesa`
Cabal				| `credit_card`            | `cabal`
Visa Débito       		| `debit_card`             | `debvisa`
Mastercard Débito		| `debit_card`             | `debmaster`
Maestro                         | `debit_card`             | `maestro`
Cabal Débito                    | `debit_card`             | `debcabal`
Pago Fácil			| `ticket`                 | `pagofacil`
RapiPago			| `ticket`                 | `rapipago`
Provincia Pagos			| `ticket`                 | `bapropagos`
Carga Virtual			| `ticket`                 | `cargavirtual`
Cobro Express			| `ticket`                 | `cobroexpress`
Red Link		  	| `atm`		           | `redlink`
Dinheiro em conta	       	| `account_money`          | `account_money`

### Brasil

Meio de pagamento		| ID do Tipo de Pagamento| ID  
:------------------------------	| :----------------------- | :--------------------
Visa				| `credit_card`            | `visa`
Mastercard			| `credit_card`            | `master`
American Express		| `credit_card`            | `amex`
Hipercard			| `credit_card`            | `hipercard`
Diners Club International	| `credit_card`            | `diners`
Elo				| `credit_card`            | `elo`
Tarjeta Mercado Livre		| `credit_card`            | `melicard`
Boleto Bancario			| `ticket`                 | `bolbradesco`
Dinheiro em conta	       	| `account_money`          | `account_money`
Giftcard                	| `digital_currency`       | `giftcard`

### Chile

Meio de pagamento		| ID do Tipo de Pagamento| ID  
:------------------------------	| :----------------------- | :--------------------
Visa				| `credit_card`            | `visa`
Mastercard			| `credit_card`            | `master`
American Express		| `credit_card`            | `amex`
Diners Club International	| `credit_card`            | `diners`
Tarjeta CMR             	| `credit_card`            | `cmr`
Tarjeta Magna             	| `credit_card`            | `magna`
Tarjeta Presto             	| `credit_card`            | `presto`
Servipag      			| `ticket`                 | `servipag`
Red Compras (Webpay)		| `bank_transfer`          | `webpay`
Khipu      			| `bank_transfer`          | `khipu`
Dinheiro em conta	       	| `account_money`          | `account_money`

### Colômbia

Meio de pagamento		| ID do Tipo de Pagamento| ID  
:------------------------------	| :----------------------- | :--------------------
Visa				| `credit_card`            | `visa`
Mastercard			| `credit_card`            | `master`
American Express		| `credit_card`            | `amex`
Diners Club International	| `credit_card`            | `diners`
Crédito Fácil Codensa    	| `credit_card`            | `codensa`
Efecty        			| `ticket`                 | `efecty`
Davivienda       		| `ticket`                 | `davivienda`
PSE    			       	| `bank_transfer`          | `pse`
Dinheiro em conta	       	| `account_money`          | `account_money`

### México

Meio de pagamento		| ID do Tipo de Pagamento| ID  
:------------------------------	| :----------------------- | :--------------------
Visa				| `credit_card`            | `visa`
Mastercard			| `credit_card`            | `master`
American Express		| `credit_card`            | `amex`
Visa Débito       		| `debit_card`             | `debvisa`
Mastercard Débito		| `debit_card`             | `debmaster`
Tarjeta Mercado Pago		| `prepaid_card`           | `mercadopagocard`
Oxxo            		| `ticket`                 | `oxxo`
BBVA Bancomer    	    	| `atm`		           | `bancomer`
Banamex    		       	| `atm`		           | `banamex`
Santander    		       	| `atm`		           | `serfin`
Dinheiro em conta	       	| `account_money`          | `account_money`
Bitcoin	                	| `digital_currency`       | `bitcoin`

### Peru

Meio de pagamento		| ID do Tipo de Pagamento| ID  
:-------------------------	| :----------------------- | :--------------------
Visa				| `credit_card`            | `visa`
Visa Débito			| `dedit_card`             | `debvisa`
BCP, BBVA Continental u otros  	| `atm`                    | `pagoefectivo_atm`
Dinheiro em conta	       	| `account_money`          | `account_money`

### Uruguai

Meio de pagamento		| ID do Tipo de Pagamento| ID  
:-------------------------	| :----------------------- |:--------------------
Visa				| `credit_card`            | `visa`
Mastercard			| `credit_card`            | `master`
Diners Club International	| `credit_card`            | `diners`
OCA				| `credit_card`            | `oca`
Lider				| `credit_card`            | `lider`
Abitab				| `ticket`                 | `abitab`
Red Pagos			| `ticket`                 | `redpagos`
Dinheiro em conta	       	| `account_money`          | `account_money`

### Venezuela

Meio de pagamento		| ID do Tipo de Pagamento| ID  
:-------------------------	| :----------------------- |:--------------------
Visa				| `credit_card`            | `visa`
Mastercard			| `credit_card`            | `master`
BBVA Provincial			| `ticket`                 | `provincial`
Banco Mercantil			| `atm`                    | `mercantil`
Dinheiro em conta	       	| `account_money`          | `account_money`
