# Payment methods

The payment methods offered by Mercado Pago vary by country.

## Get the payment methods

You can get the payment methods as follows:

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

The SITE_ID depends on the country you are going to work in. The corresponding codes are: 
* **MLA**: Argentina.  
* **MLB**: Brasil.  
* **MLC**: Chile.  
* **MLU**: Uruguay.  
* **MCO**: Colombia.  
* **MLV**: Venezuela.
* **MPE**: Perú.  
* **MLM**: México.  


Also, you can get the payment methods supported for recurring payments/payments without CVV:
[[[
```curl
curl -X GET \
-H "Content-Type: application/json" \
-H 'Authorization: Bearer ACCESS_TOKEN' \
'https://api.mercadopago.com/sites/SITE_ID/payment_methods?marketplace=NONE&operation_type=recurring_payment'
```
]]]

**Response**

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

The results included in this response will coincide with the country associated with your Mercado Pago account. For more information about this feature and its attributes, go to  [API reference](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/payment_methods/_payment_methods/get).

## Payment methods by country

The payment methods available for each country are shown below.

### Argentina

| Payment Method | Payment Type ID | ID |
| :--- | :--- | :--- |
| Visa | `credit_card` | `visa` |
| Mastercard | `credit_card` | `master` |
| American Express | `credit_card` | `amex` |
| Diners Club International	| `credit_card` | `diners` |
| Tarjeta Naranja | `credit_card` | `naranja` |
| Tarjeta Nativa | `credit_card` | `nativa` |
| Tarjeta Shopping | `credit_card` | `shopping` |
| Tarjeta Cencosud | `credit_card` | `cencosud` |
| Tarjeta CMR MasterCard | `credit_card` | `cmr_master` |
| Argencard | `credit_card` | `argencard` |
| Cordial | `credit_card` | `cordial` |
| Cordobesa | `credit_card` | `cordobesa` |
| Cabal | `credit_card` | `cabal` |
| Visa Debit | `debit_card` | `debvisa` |
| Mastercard Debit | `debit_card` | `debmaster` |
| Maestro | `debit_card` | `maestro` |
| Cabal Debit | `debit_card` | `debcabal` |
| Pago Fácil | `ticket` | `pagofacil` |
| RapiPago | `ticket` | `rapipago` |
| Carga Virtual | `ticket` | `cargavirtual` |
| Cobro Express | `ticket` | `cobroexpress` |
| Red Link | `atm` | `redlink` |
| Account money | `account_money` | `account_money` |

### Brasil

| Payment Method | Payment Type ID | ID |
| :--- | :--- | :--- |
| Visa | `credit_card` | `visa` |
| Mastercard | `credit_card` | `master` |
| American Express | `credit_card` | `amex` |
| Hipercard | `credit_card` | `hipercard` |
| Diners Club International	| `credit_card` | `diners` |
| Elo | `credit_card` | `elo` |
| Mercado Livre Card | `credit_card` | `melicard` |
| Boleto Bancario | `ticket` | `bolbradesco` |
| Account money | `account_money` | `account_money` |
| Giftcard | `digital_currency` | `giftcard` |
| Paypal | `digital_wallet` | `paypal` |
| Pix | `bank_transfer` | `pix` |

### Chile

| Payment Method | Payment Type ID | ID |
| :--- | :--- | :--- |
| Visa | `credit_card` | `visa` |
| Mastercard | `credit_card` | `master` |
| American Express | `credit_card` | `amex` |
| Diners Club International	| `credit_card` | `diners` |
| Tarjeta CMR | `credit_card` | `cmr` |
| Tarjeta Magna | `credit_card` | `magna` |
| Tarjeta Presto | `credit_card` | `presto` |
| Visa Debit | `debit_card` | `debvisa` |
| Mastercard Debit | `debit_card` | `debmaster` |
| Redcompra | `debit_card` | `redcompra` |
| Account money | `account_money` | `account_money` |

### Colombia

| Payment Method | Payment Type ID | ID |
| :--- | :--- | :--- |
| Visa | `credit_card` | `visa` |
| Mastercard | `credit_card` | `master` |
| American Express | `credit_card` | `amex` |
| Diners Club International	| `credit_card` | `diners` |
| Crédito Fácil Codensa | `credit_card` | `codensa` |
| Visa Debit | `debit_card` | `debvisa` |
| Mastercard Debit | `debit_card` | `debmaster` |
| Efecty | `ticket` | `efecty` |
| PSE | `bank_transfer` | `pse` |
| Account money | `account_money` | `account_money` |

### Mexico

| Payment Method | Payment Type ID | ID |
| :--- | :--- | :--- |
| Visa | `credit_card` | `visa` |
| Mastercard | `credit_card` | `master` |
| American Express | `credit_card` | `amex` |
| Visa Debit | `debit_card` | `debvisa` |
| Mastercard Debit | `debit_card`| `debmaster` |
| Tarjeta Mercado Pago | `prepaid_card` | `mercadopagocard` |
| Oxxo | `ticket` | `oxxo` |
| PayCash | `ticket` | `paycash` |
| BBVA Bancomer | `atm` | `bancomer` |
| Banamex | `atm` | `banamex` |
| Santander | `atm` | `serfin` |
| Account money | `account_money` | `account_money` |
| Bitcoin | `digital_currency` | `bitcoin` |
| Paypal | `digital_wallet` | `paypal` |


### Peru

| Payment Method | Payment Type ID | ID |
| :--- | :--- | :--- |
| Visa | `credit_card` | `visa` |
| Visa Debit | `dedit_card` | `debvisa` |
| Diners Club International	| `credit_card` | `diners` |
| Mastercard Debit | `debit_card` | `debmaster` |
| BCP, BBVA Continental or others | `atm` | `pagoefectivo_atm` |
| Account money | `account_money` | `account_money` |

### Uruguay

| Payment Method | Payment Type ID | ID |
| :--- | :--- | :--- |
| Visa | `credit_card` | `visa` |
| Mastercard | `credit_card` | `master` |
| Diners Club International	| `credit_card` | `diners` |
| OCA | `credit_card` | `oca` |
| Lider | `credit_card` | `lider` |
| Abitab | `ticket` | `abitab` |
| Red Pagos | `ticket` | `redpagos` |
| Account money | `account_money` | `account_money` |
