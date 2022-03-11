# Medios de pago

Los medios de pago ofrecidos por Mercado Pago varían según cada país.

## Obteniendo los medios de pago

Los medios pueden ser obtenidos de la siguiente forma:

**GET /v1/payment_methods**

[[[
```php
	<?php
		require ('mercadopago.php');
		$mp = new MP ('ACCESS_TOKEN');
		$payment_methods = $mp->get('/v1/payment_methods');
		print_r ($payment_methods);
	?>
```
```curl
curl -X GET \
-H "Content-Type: application/json" \
-H 'Authorization: Bearer ACCESS_TOKEN' \
'https://api.mercadopago.com/sites/SITE_ID/payment_methods?marketplace=NONE'
```
]]]

El SITE_ID dependerá del país en el que quieras operar. Los códigos correspondientes son: 
* **MLA**: Argentina.  
* **MLB**: Brasil.  
* **MLC**: Chile.  
* **MLU**: Uruguay.  
* **MCO**: Colombia.  
* **MLV**: Venezuela.
* **MPE**: Perú.  
* **MLM**: México.  

A su vez, también se pueden consultar los medios de pago soportados para operaciones recurrentes/pagos sin CVV:
[[[
```curl
curl -X GET \
-H "Content-Type: application/json" \
-H 'Authorization: Bearer ACCESS_TOKEN' \
'https://api.mercadopago.com/sites/SITE_ID/payment_methods?marketplace=NONE&operation_type=recurring_payment'
```
]]]


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

Los resultados incluídos en esta respuesta coincidirán con el país asociado a tu cuenta de Mercado Pago. Puedes obtener más información sobre este recurso y sus atributos en la [Referencia de API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/payment_methods/_payment_methods/get).

## Medios de pago por país

A continuación se indican los medios de pago disponibles para cada país.

### Argentina

| Medio de pago | Payment Type ID | ID |
| :--- | :--- | :--- |
| Visa | `credit_card` | `visa` |
| Mastercard | `credit_card` | `master` |
| American Express | `credit_card` | `amex` |
| Diners Club International | `credit_card` | `diners` |
| Tarjeta Naranja | `credit_card` | `naranja` |
| Tarjeta Nativa | `credit_card` | `nativa` |
| Tarjeta Shopping | `credit_card` | `shopping` |
| Tarjeta Cencosud | `credit_card` | `cencosud` |
| Tarjeta CMR MasterCard | `credit_card` | `cmr_master` |
| Argencard | `credit_card` | `argencard` |
| Cordial | `credit_card` | `cordial` |
| Cordobesa | `credit_card` | `cordobesa` |
| Cabal | `credit_card` | `cabal` |
| Visa Débito | `debit_card` | `debvisa` |
| Mastercard Débito | `debit_card` | `debmaster` |
| Maestro | `debit_card` | `maestro` |
| Cabal Débito | `debit_card` | `debcabal` |
| Pago Fácil | `ticket` | `pagofacil` |
| RapiPago | `ticket` | `rapipago` |
| Carga Virtual | `ticket` | `cargavirtual` |
| Cobro Express | `ticket` | `cobroexpress` |
| Red Link | `atm` | `redlink` |
| Dinero en cuenta | `account_money` | `account_money` |

### Brasil

| Medio de pago | Payment Type ID | ID |
| :--- | :--- | :--- |
| Visa | `credit_card` | `visa` |
| Mastercard | `credit_card` | `master` |
| American Express | `credit_card` | `amex` |
| Hipercard | `credit_card` | `hipercard` |
| Diners Club International | `credit_card` | `diners` |
| Elo | `credit_card` | `elo` |
| Tarjeta Mercado Livre | `credit_card` | `melicard` |
| Boleto Bancario | `ticket` | `bolbradesco` |
| Dinero en cuenta | `account_money` | `account_money` |
| Giftcard | `digital_currency` | `giftcard` |
| Paypal | `digital_wallet` | `paypal` |
| Pix | `bank_transfer` | `pix` |

### Chile

| Medio de pago | Payment Type ID | ID |
| :--- | :--- | :--- |
| Visa | `credit_card` | `visa` |
| Mastercard | `credit_card` | `master` |
| American Express | `credit_card` | `amex` |
| Diners Club International | `credit_card` | `diners` |
| Tarjeta CMR | `credit_card` | `cmr` |
| Tarjeta Magna | `credit_card` | `magna` |
| Tarjeta Presto | `credit_card` | `presto` |
| Visa Débito | `debit_card` | `debvisa` |
| Mastercard Débito | `debit_card` | `debmaster` |
| Redcompra | `debit_card` | `redcompra` |
| Dinero en cuenta | `account_money` | `account_money` |

### Colombia

| Medio de pago | Payment Type ID | ID |
| :--- | :--- | :--- |
| Visa | `credit_card` | `visa` |
| Mastercard | `credit_card` | `master` |
| American Express | `credit_card` | `amex` |
| Diners Club International | `credit_card` | `diners` |
| Crédito Fácil Codensa | `credit_card` | `codensa` |
| Visa Débito | `debit_card` | `debvisa` |
| Mastercard Débito | `debit_card` | `debmaster` |
| Efecty | `ticket` | `efecty` |
| PSE | `bank_transfer` | `pse` |
| Dinero en cuenta | `account_money` | `account_money` |

### México

| Medio de pago | Payment Type ID | ID |
| :--- | :--- | :--- |
| Visa | `credit_card` | `visa` |
| Mastercard | `credit_card` | `master` |
| American Express | `credit_card` | `amex` |
| Visa Débito | `debit_card` | `debvisa` |
| Mastercard Débito | `debit_card` | `debmaster` |
| Tarjeta Mercado Pago | `prepaid_card` | `mercadopagocard` |
| Oxxo | `ticket` | `oxxo` |
| PayCash | `ticket` | `paycash` |
| BBVA Bancomer | `atm` | `bancomer` |
| Banamex | `atm` | `banamex` |
| Santander | `atm` | `serfin` |
| Dinero en cuenta | `account_money` | `account_money` |
| Bitcoin | `digital_currency` | `bitcoin` |
| Paypal | `digital_wallet`| `paypal` |

### Perú

| Medio de pago | Payment Type ID | ID |
| :--- | :--- | :--- |
| Visa | `credit_card` | `visa` |
| Visa Débito | `dedit_card` | `debvisa` |
| Diners Club International | `credit_card` | `diners` |
| Mastercard Débito | `debit_card` | `debmaster` |
| BCP, BBVA Continental u otros | `atm` | `pagoefectivo_atm` |
| Dinero en cuenta | `account_money` | `account_money` |

### Uruguay

| Medio de pago | Payment Type ID | ID |
| :--- | :--- | :--- |
| Visa | `credit_card` | `visa` |
| Mastercard | `credit_card` | `master` |
| Diners Club International | `credit_card` | `diners` |
| OCA | `credit_card` | `oca` |
| Lider | `credit_card` | `lider` |
| Abitab | `ticket` | `abitab` |
| Red Pagos | `ticket` | `redpagos` |
| Dinero en cuenta | `account_money` | `account_money` |
