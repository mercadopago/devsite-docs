# Disponibilidad de productos y medios de pago

Los productos y medios de pago que ofrece Mercado Pago varían según cada país. Lee a continuación cómo consultar todos los métodos de pago que están disponibles y, a partir de eso, cuáles están o no disponibles por producto y por país.

## Consultar formas de pago

Para consultar todos los métodos de pago disponibles y obtener un listado con el detalle de cada uno de ellos y sus propiedades, realiza un GET al endpoint[/v1/payment_methods](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/payment_methods/_payment_methods/get). Puedes obtener más información sobre los atributos en [Obtener medios de pago](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/payment_methods/_payment_methods/get) en las referencias de la API.

Al consultar los métodos de pago disponibles, la `response` te indicará los resultados que coinciden con el país asociado a tu cuenta de Mercado Pago. Consulta los [métodos de pago](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/payment_methods) disponibles por país para más información.

## Productos y métodos de pago disponibles por país
 
Puede ser que algunos métodos de pago no estén disponibles para algunos productos. A continuación se detallan qué métodos de pago no están disponibles por producto y por país.
 
### Pagos:
 
----[mlb]----
| Producto | ARG | BRA | CHL | COL | MEX | PER | URY | VEN |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Link de pago | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| Checkout Pro | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| Mobile Checkout | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | | ✔ |
| Chackout Transparente | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
------------
----[mla, mlm, mpe, mco, mlu, mlc]----
| Producto | ARG | BRA | CHL | COL | MEX | PER | URY | VEN |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Link de pago	 | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| Checkout Pro | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| Mobile Checkout | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | | ✔ |
| Chackout API | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
------------
 
### Suscripciones:
 
----[mlb]----
| Producto | ARG | BRA | CHL | COL | MEX | PER | URY | VEN |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Link de pago	 | ✔ | ✔ | | | ✔ | | | |
| Checkout Pro | ✔ | ✔ | | | ✔ | | | |
| Checkout Transparente | ✔ | ✔ | | | ✔ | | | |
------------
----[mla, mlm, mpe, mco, mlu, mlc]----
| Producto | ARG | BRA | CHL | COL | MEX | PER | URY | VEN |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Link de pago	 | ✔ | ✔ | | | ✔ | | | |
| Checkout Pro | ✔ | ✔ | | | ✔ | | | |
| Checkout API | ✔ | ✔ | | | ✔ | | | |
------------
 
Con base en la información anterior, a continuación se detallan qué métodos de pago están y no están disponibles por país.

### Argentina
 
* **Disponible:**
 
| Método de pago | ID del tipo de pago | ID |
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
| Visa débito | `debit_card` | `debvisa` |
| Mastercard débito | `debit_card` | `debmaster` |
| Maestro | `debit_card` | `maestro` |
| Cabal Débito | `debit_card` | `debcabal` |
| Pago Fácil | `ticket` | `pagofacil` |
| RapiPago | `ticket` | `rapipago` |
| Carga Virtual | `ticket` | `cargavirtual` |
| Cobro Express | `ticket` | `cobroexpress` |
| Red Link | `atm` | `redlink` |
| Dinero en cuenta | `account_money` | `account_money` |
 
* **Indisponible:**
 
----[mlb]----
| Producto | Solución | Medios de pago no disponibles |
| :--- | :--- | :--- |
| Pagos | Link de pago | N/A |
| Pagos | Checkout Pro | N/A |
| Pagos | Mobile Checkout | `account_money` |
| Pagos | Checkout Transparente | N/A |
| Suscripciones | Link de pago | `naranja`, `nativa`, `shopping`, `debvisa`, `debmaster`, `maestro`, `pagofacil`, `rapipago`, `bapropagos`, `cargavirtual`, `redlink`, `cobroexpress` |
| Suscripciones | Checkout Pro |`naranja`, `nativa`, `shopping`, `debvisa`, `debmaster`, `maestro`, `pagofacil`, `rapipago`, `bapropagos`, `cargavirtual`, `redlink`, `cobroexpress`|
| Suscripciones | Checkout Transparente | `naranja`, `nativa`, `shopping`, `debvisa`, `debmaster`, `maestro`, `pagofacil`, `rapipago`, `bapropagos`, `cargavirtual`, `redlink`, `cobroexpress`|
| Marketplace | Checkout Pro | N/A |
| Marketplace | Checkout Transparente | N/A |
------------
----[mla, mlm, mpe, mco, mlu, mlc]----
| Producto | Solución | Medios de pago no disponibles |
| :--- | :--- | :--- |
| Pagos | Link de pago | N/A |
| Pagos | Checkout Pro | N/A |
| Pagos | Mobile Checkout | `account_money` |
| Pagos | Checkout API | N/A |
| Suscripciones | Link de pago | `naranja`, `nativa`, `shopping`, `debvisa`, `debmaster`, `maestro`, `pagofacil`, `rapipago`, `bapropagos`, `cargavirtual`, `redlink`, `cobroexpress` |
| Suscripciones | Checkout Pro |`naranja`, `nativa`, `shopping`, `debvisa`, `debmaster`, `maestro`, `pagofacil`, `rapipago`, `bapropagos`, `cargavirtual`, `redlink`, `cobroexpress`|
| Suscripciones | Checkout API | `naranja`, `nativa`, `shopping`, `debvisa`, `debmaster`, `maestro`, `pagofacil`, `rapipago`, `bapropagos`, `cargavirtual`, `redlink`, `cobroexpress`|
| Marketplace | Checkout Pro | N/A |
| Marketplace | Checkout API | N/A |
------------
 
### Brasil
 
* **Disponible:**
 
| Método de pago | ID del tipo de pago | ID |
| :--- | :--- | :--- |
| Visa | `credit_card` | `visa` |
| Mastercard | `credit_card` | `master` |
| American Express | `credit_card` | `amex` |
| Hipercard | `credit_card` | `hipercard` |
| Diners Club International | `credit_card` | `diners` |
| Elo | `credit_card` | `elo` |
| Cartão Mercado Livre | `credit_card` | `melicard` |
| Boleto bancario | `ticket` | `bolbradesco` |
| Dinero en cuenta  | `account_money` | `account_money` |
| Giftcard | `digital_currency` | `giftcard` |
| Pagamento na lotérica | `ticket`| `pec` |
| Paypal | `digital_wallet` | `paypal` |
| Pix | `bank_transfer` | `pix` |
 
* **Indisponible:**
 
----[mlb]----
| Producto | Solución | Medios de pago no disponibles |
| :--- | :--- | :--- |
| Pagos | Link de pago | N/A |
| Pagos | Checkout Pro | N/A |
| Pagos | Mobile Checkout | `account_money`, `pix` |
| Pagos | Checkout Transparente | N/A |
| Suscripciones | Link de pago | `bolbradesco`, `giftcard`, `pix` |
| Suscripciones | Checkout Pro | `bolbradesco`, `giftcard`, `pix` |
| Suscripciones | Checkout Transparente | `bolbradesco`, `giftcard`, `pix` |
| Marketplace | Checkout Pro | `pix` |
| Marketplace | Checkout Transparente | `pix` |
------------
----[mla, mlm, mpe, mco, mlu, mlc]----
| Producto | Solución | Medios de pago no disponibles|
| :--- | :--- | :--- |
| Pagos | Link de pago | N/A |
| Pagos | Checkout Pro | N/A |
| Pagos | Mobile Checkout | `account_money`, `pix` |
| Pagos | Checkout API | `pix` |
| Suscripciones | Link de pago | `bolbradesco`, `giftcard`, `pix`  |
| Suscripciones | Checkout Pro | `bolbradesco`, `giftcard`, `pix`  |
| Suscripciones | Checkout API | `bolbradesco`, `giftcard`, `pix`  |
| Marketplace | Checkout Pro | `pix` |
| Marketplace | Checkout API | `pix` |
------------
 
## Chile
 
* **Disponible:**
 
| Método de pago | ID del tipo de pago| ID |
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
 
* **Indisponible:**
 
----[mlb]----
| Producto | Solución | Medios de pago no disponibles |
| :--- | :--- | :--- |
| Pagos | Link de pago | N/A |
| Pagos | Checkout Pro | N/A |
| Pagos | Mobile Checkout | `account_money` |
| Pagos | Checkout Transparente | N/A|
| Marketplace | Checkout Pro | N/A |
| Marketplace | Checkout Transparente | N/A |
------------
----[mla, mlm, mpe, mco, mlu, mlc]----
| Producto | Solución | Medios de pago no disponibles |
| :--- | :--- | :--- |
| Pagos | Link de pago | N/A |
| Pagos | Checkout Pro | N/A |
| Pagos | Mobile Checkout | `account_money`|
| Pagos | Checkout API | N/A|
| Marketplace | Checkout Pro | N/A |
| Marketplace | Checkout API | N/A |
------------
 
### Colombia
 
* **Disponible:**
 
| Método de pago | ID del tipo de pago| ID |
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
| Dinero en cuenta  | `account_money` | `account_money` |
 
* **Indisponible:**
 
----[mlb]----
| Producto | Solución | Medios de pago no disponibles |
| :--- | :--- | :--- |
| Pagos | Link de pago | N/A |
| Pagos | Checkout Pro | N/A |
| Pagos | Mobile Checkout | `account_money`,`davivienda`,`efecty`,`pse` |
| Pagos | Checkout Transparente | `account_money` |
| Marketplace | Checkout Pro | N/A |
| Marketplace | Checkout Transparente | `account_money` |
------------
----[mla, mlm, mpe, mco, mlu, mlc]----
| Producto | Solución | Medios de pago no disponibles|
| :--- | :--- | :--- |
| Pagos | Link de pago | N/A |
| Pagos | Checkout Pro | N/A |
| Pagos | Mobile Checkout | `account_money`,`davivienda`,`efecty`,`pse` |
| Pagos | Checkout API | `account_money` |
| Marketplace | Checkout Pro | N/A |
| Marketplace | Checkout API | `account_money` |
------------
 
### México
 
* **Disponible:**
 
| Método de pago | ID del tipo de pago| ID |
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
| Paypal | `digital_wallet` | `paypal` |
 
* **Indisponible:**
 
----[mlb]----
| Producto | Solución | Medios de pago no disponibles|
| :--- | :--- | :--- |
| Pagos | Link de pago | N/A |
| Pagos | Checkout Pro | N/A |
| Pagos | Mobile Checkout | `account_money` |
| Pagos | Checkout Transparente | N/A |
| Suscripciones | Botón de pago	| `amex`, `mercadopagocard`, `oxxo`, `bancomer`, `banamex`, `serfin`, `bitcoin` |
| Suscripciones | Checkout Pro | `amex`, `mercadopagocard`, `oxxo`, `bancomer`, `banamex`, `serfin`, `bitcoin` |
| Suscripciones | Checkout Transparente | `amex`, `mercadopagocard`, `oxxo`, `bancomer`, `banamex`, `serfin`, `bitcoin` |
| Marketplace | Checkout Pro | N/A |
| Marketplace | Checkout Transparente | N/A |
------------
----[mla, mlm, mpe, mco, mlu, mlc]----
| Producto | Solución | Medios de pago no disponibles |
| :--- | :--- | :--- |
| Pagos | Link de pago | N/A |
| Pagos | Checkout Pro | N/A |
| Pagos | Mobile Checkout | `account_money` |
| Pagos | Checkout API | N/A |
| Suscripciones | Botón de pago	| `amex`, `mercadopagocard`, `oxxo`, `bancomer`, `banamex`, `serfin`, `bitcoin` |
| Suscripciones | Checkout Pro | `amex`, `mercadopagocard`, `oxxo`, `bancomer`, `banamex`, `serfin`, `bitcoin` |
| Suscripciones | Checkout API | `amex`, `mercadopagocard`, `oxxo`, `bancomer`, `banamex`, `serfin`, `bitcoin` |
| Marketplace | Checkout Pro | N/A |
| Marketplace | Checkout API | N/A |
------------
 
### Peru
 
* **Disponible:**
 
| Método de pago | ID del tipo de pago| ID |
| :--- | :--- | :--- |
| Visa | `credit_card` | `visa` |
| Visa Débito | `dedit_card` | `debvisa` |
| Diners Club International | `credit_card` | `diners` |
| Mastercard Débito | `debit_card` | `debmaster` |
| BCP, BBVA Continental u otros | `atm` | `pagoefectivo_atm` |
| Dinero en cuenta	| `account_money` | `account_money` |
 
* **Indisponible:**
 
----[mlb]----
| Producto | Solución | Medios de pago no disponibles |
| :--- | :--- | :--- |
| Pagos | Link de pago | N/A |
| Pagos | Checkout Pro | N/A |
| Pagos | Mobile Checkout | `account_money` |
| Pagos | Checkout Transparente | N/A |
| Marketplace | Checkout Pro | N/A |
| Marketplace | Checkout Transparente | N/A |
------------
----[mla, mlm, mpe, mco, mlu, mlc]----
| Producto | Solución | Medios de pago no disponibles |
| :--- | :--- | :--- |
| Pagos | Link de pago | N/A |
| Pagos | Checkout Pro | N/A |
| Pagos | Mobile Checkout | `account_money` |
| Pagos | Checkout API | N/A |
| Marketplace | Checkout Pro | N/A |
| Marketplace | Checkout API | N/A |
------------
 
### Uruguay
 
* **Disponible:**
 
| Método de pago | ID del tipo de pago| ID |
| :--- | :--- | :--- |
| Visa | `credit_card` | `visa` |
| Mastercard | `credit_card` | `master` |
| Diners Club International | `credit_card` | `diners` |
| OCA | `credit_card` | `oca` |
| Lider | `credit_card` | `lider` |
| Abitab | `ticket` | `abitab` |
| Red Pagos | `ticket` | `redpagos` |
| Dinero en cuenta | `account_money` | `account_money` |
 
* **Indisponible:**
 
| Producto | Solución | Medios de pago no disponibles |
| :--- | :--- | :--- |
| Pagos | Link de pago | N/A |
| Pagos | Checkout Pro | N/A |
| Marketplace | Checkout Pro | N/A |