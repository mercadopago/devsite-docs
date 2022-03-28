# Availability of products and payment methods

The products and payment methods offered by Mercado Pago vary according to each country. See below how to consult all the payment methods that are available and, from that, which will or will not be available by product and by country.

## Consult payment methods

To consult all available payment methods and obtain a list with the details of each one of them and their properties, perform a GET to the endpoint[/v1/payment_methods](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/payment_methods/_payment_methods/get). You can get more information about the attributes in [Get payment methods](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/payment_methods/_payment_methods/get) in the API references.

When consulting the available payment methods, the `response` will indicate the results that will coincide with the country associated with your Mercado Pago account. Check the [payment methods](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/payment_methods) available by country for more information.

## Products and payment methods available by country
 
It may be that some payment methods are not available for some products. Payment methods availability by product and by country are detailed below.
 
### Payments:
 
| Product | ARG | BRA | CHL | COL | MEX | PER | URY | VEN |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Payment link	 | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| Checkout Pro | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| Mobile Checkout | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | | ✔ |
| Chackout API | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
 
### Subscriptions:
 
| Product | ARG | BRA | CHL | COL | MEX | PER | URY | VEN |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Payment link	 | ✔ | ✔ | | | ✔ | | | |
| Checkout Pro | ✔ | ✔ | | | ✔ | | | |
| Checkout API | ✔ | ✔ | | | ✔ | | | |
 
Based on the previous information, below we detail which payment methods are available/unavailable by country.

### Argentina
 
* **Available:**
 
| Payment method | Payment Type ID | ID |
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
| Visa debit | `debit_card` | `debvisa` |
| Mastercard debit | `debit_card` | `debmaster` |
| Maestro | `debit_card` | `maestro` |
| Cabal debit | `debit_card` | `debcabal` |
| Pago Fácil | `ticket` | `pagofacil` |
| RapiPago | `ticket` | `rapipago` |
| Carga Virtual | `ticket` | `cargavirtual` |
| Cobro Express | `ticket` | `cobroexpress` |
| Red Link | `atm` | `redlink` |
| Account money | `account_money` | `account_money` |
 
* **Unavailable:**
 
| Product | Solution | Payment methods not available |
| :--- | :--- | :--- |
| Payments | Payment link | N/A |
| Payments | Checkout Pro | N/A |
| Payments | Mobile Checkout | `account_money` |
| Payments | Checkout API | N/A |
| Subscriptions | Link de pagamento | `naranja`, `nativa`, `shopping`, `debvisa`, `debmaster`, `maestro`, `pagofacil`, `rapipago`, `bapropagos`, `cargavirtual`, `redlink`, `cobroexpress` |
| Subscriptions | Checkout Pro |`naranja`, `nativa`, `shopping`, `debvisa`, `debmaster`, `maestro`, `pagofacil`, `rapipago`, `bapropagos`, `cargavirtual`, `redlink`, `cobroexpress`|
| Subscriptions | Checkout API | `naranja`, `nativa`, `shopping`, `debvisa`, `debmaster`, `maestro`, `pagofacil`, `rapipago`, `bapropagos`, `cargavirtual`, `redlink`, `cobroexpress`|
| Marketplace | Checkout Pro | N/A |
| Marketplace | Checkout API | N/A |
 
### Brazil
 
* **Available:**
 
| Payment method | Payment Type ID | ID |
| :--- | :--- | :--- |
| Visa | `credit_card` | `visa` |
| Mastercard | `credit_card` | `master` |
| American Express | `credit_card` | `amex` |
| Hipercard | `credit_card` | `hipercard` |
| Diners Club International | `credit_card` | `diners` |
| Elo | `credit_card` | `elo` |
| Cartão Mercado Livre | `credit_card` | `melicard` |
| Boleto bancário | `ticket` | `bolbradesco` |
| Account money | `account_money` | `account_money` |
| Giftcard | `digital_currency` | `giftcard` |
| Pagamento na Lotérica | `ticket`| `pec` |
| Paypal | `digital_wallet` | `paypal` |
| Pix | `bank_transfer` | `pix` |
 
* **Unavailable:**
 
| Product | Solution | Payment methods not available |
| :--- | :--- | :--- |
| Payments | Link de pagamento | N/A |
| Payments | Checkout Pro | N/A |
| Payments | Mobile Checkout | `account_money`, `pix` |
| Payments | Checkout API | `pix` |
| Subscriptions | Link de pagamento | `bolbradesco`, `giftcard`, `pix`  |
| Subscriptions | Checkout Pro | `bolbradesco`, `giftcard`, `pix`  |
| Subscriptions | Checkout API | `bolbradesco`, `giftcard`, `pix`  |
| Marketplace | Checkout Pro | `pix` |
| Marketplace | Checkout API | `pix` |
 
## Chile
 
* **Available:**
 
| Payment method | Payment Type ID | ID |
| :--- | :--- | :--- |
| Visa | `credit_card` | `visa` |
| Mastercard | `credit_card` | `master` |
| American Express | `credit_card` | `amex` |
| Diners Club International | `credit_card` | `diners` |
| Tarjeta CMR | `credit_card` | `cmr` |
| Tarjeta Magna | `credit_card` | `magna` |
| Tarjeta Presto | `credit_card` | `presto` |
| Visa debit | `debit_card` | `debvisa` |
| Mastercard Débito | `debit_card` | `debmaster` |
| Redcompra | `debit_card` | `redcompra` |
| Account money | `account_money` | `account_money` |
 
* **Unavailable:**
 
| Product | Solution | Payment methods not available |
| :--- | :--- | :--- |
| Payments | Link de pagamento | N/A |
| Payments | Checkout Pro | N/A |
| Payments | Mobile Checkout | `account_money`|
| Payments | Checkout API | N/A|
| Marketplace | Checkout Pro | N/A |
| Marketplace | Checkout API | N/A |
 
### Colombia
 
* **Available:**
 
| Payment method | Payment Type ID | ID |
| :--- | :--- | :--- |
| Visa | `credit_card` | `visa` |
| Mastercard | `credit_card` | `master` |
| American Express | `credit_card` | `amex` |
| Diners Club International | `credit_card` | `diners` |
| Crédito Fácil Codensa | `credit_card` | `codensa` |
| Visa debit | `debit_card` | `debvisa` |
| Mastercard debit | `debit_card` | `debmaster` |
| Efecty | `ticket` | `efecty` |
| PSE | `bank_transfer` | `pse` |
| Account money | `account_money` | `account_money` |
 
* **Unavailable:**
 
| Product | Solution | Payment methods not available |
| :--- | :--- | :--- |
| Payments | Link de pagamento | N/A |
| Payments | Checkout Pro | N/A |
| Payments | Mobile Checkout | `account_money`,`davivienda`,`efecty`,`pse` |
| Payments | Checkout API | `account_money` |
| Marketplace | Checkout Pro | N/A |
| Marketplace | Checkout API | `account_money` |
 
### Mexico
 
* **Available:**
 
| Payment method | Payment Type ID | ID |
| :--- | :--- | :--- |
| Visa | `credit_card` | `visa` |
| Mastercard | `credit_card` | `master` |
| American Express | `credit_card` | `amex` |
| Visa Débito | `debit_card` | `debvisa` |
| Mastercard Débito | `debit_card` | `debmaster` |
| Mercado Pago card | `prepaid_card` | `mercadopagocard` |
| Oxxo | `ticket` | `oxxo` |
| PayCash | `ticket` | `paycash` |
| BBVA Bancomer | `atm` | `bancomer` |
| Banamex | `atm` | `banamex` |
| Santander | `atm` | `serfin` |
| Account money | `account_money` | `account_money` |
| Bitcoin | `digital_currency` | `bitcoin` |
| Paypal | `digital_wallet` | `paypal` |
 
* **Unavailable:**
 
| Product | Solution | Payment methods not available |
| :--- | :--- | :--- |
| Payments | Payment link | N/A |
| Payments | Checkout Pro | N/A |
| Payments | Mobile Checkout | `account_money` |
| Payments | Checkout API | N/A |
| Subscriptions | Payment link | `amex`, `mercadopagocard`, `oxxo`, `bancomer`, `banamex`, `serfin`, `bitcoin` |
| Subscriptions | Checkout Pro | `amex`, `mercadopagocard`, `oxxo`, `bancomer`, `banamex`, `serfin`, `bitcoin` |
| Subscriptions | Checkout API | `amex`, `mercadopagocard`, `oxxo`, `bancomer`, `banamex`, `serfin`, `bitcoin` |
| Marketplace | Checkout Pro | N/A |
| Marketplace | Checkout API | N/A |
 
### Peru
 
* **Available:**
 
| Payment method | Payment Type ID | ID |
| :--- | :--- | :--- |
| Visa | `credit_card` | `visa` |
| Visa debit | `dedit_card` | `debvisa` |
| Diners Club International | `credit_card` | `diners` |
| Mastercard debit | `debit_card` | `debmaster` |
| BCP, BBVA Continental u otros | `atm` | `pagoefectivo_atm` |
| Account money| `account_money` | `account_money` |
 
* **Unavailable:**
 
| Product | Solution | Payment methods not available |
| :--- | :--- | :--- |
| Payments | Payment link | N/A |
| Payments | Checkout Pro | N/A |
| Payments | Mobile Checkout | `account_money` |
| Payments | Checkout API | N/A |
| Marketplace | Checkout Pro | N/A |
| Marketplace | Checkout API | N/A |
 
### Uruguay
 
* **Available:**
 
| Payment method | Payment Type ID | ID |
| :--- | :--- | :--- |
| Visa | `credit_card` | `visa` |
| Mastercard | `credit_card` | `master` |
| Diners Club International | `credit_card` | `diners` |
| OCA | `credit_card` | `oca` |
| Lider | `credit_card` | `lider` |
| Abitab | `ticket` | `abitab` |
| Red Pagos | `ticket` | `redpagos` |
| Account money | `account_money` | `account_money` |
 
* **Unavailable:**
 
| Product | Solution | Payment methods not available |
| :--- | :--- | :--- |
| Payments | Payment link | N/A |
| Payments | Checkout Pro | N/A |
| Marketplace | Checkout Pro | N/A |