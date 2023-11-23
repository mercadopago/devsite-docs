# Excluir tipos y métodos de pago 

Cuando creas tu afiliación de Gateway MercadoPagoV2, puedes indicar métodos y tipos de pago que deseas excluir. Sólo debes digitarlos uno a uno en el campo que les corresponda, separándolos por una coma (,). 

Con **Métodos de pago excluídos**, nos referimos a aquellos medios individuales o marcas de tarjeta por los cuales no quieres recibir pagos. En el caso de las tarjetas, se trata particularmente de las marcas (Visa, Amex, MasterCard), y no de las entidades emisoras de dichas tarjetas. 

**Tipos de pago excluídos**, en cambio, se refiere a si prefieres excluir tickets, tarjetas de crédito o débito en su totalidad.

Esta exclusión de tipos y medios de pago que configuras en VTEX funcionará para los pagos ofrecidos con Checkout Pro exclusivamente, y puedes modificarla las veces que consideres necesario.

En la siguiente tabla encontrarás la nomenclatura que cada tipo y método de pago recibe en VTEX, para que puedas utilizarla en caso de querer excluir alguno en tu integración con Checkout Pro.



----[mla]----

|Nombre|Métodos de Pago|Tipos de Pago|Planes en VTEX|
|---|---|---|---|
|Visa|`Visa`|`credit_card`|Visa, MercadoPagoPro y MercadoPagoWallet|
|Mastercard|`master`|`credit_card`|Mastercard, MercadoPagoPro y MercadoPagoWallet|
|American Express|`amex`|`credit_card`|American Express, MercadoPagoPro y MercadoPagoWallet|
|Tarjeta Shopping|`tarshop`|`credit_card`|Shopping, MercadoPagoPro y MercadoPagoWallet|
|Cabal|`cabal`|`credit_card`|Cabal, MercadoPagoPro y MercadoPagoWallet|
|Diners|`diners`|`credit_card`|Diners, MercadoPagoPro y MercadoPagoWallet|
|Maestro|`maestro`|`debit_card`|Maestro, MercadoPago Pro y MercadoPagoWallet|
|Mastercard Débito|`debmaster`|`debit_card`|Mastercard Debit, MercadoPagoPro y MercadoPagoWallet|
|Visa Débito|`debvisa`|`debit_card`|Visa Electron, MercadoPagoPro y MercadoPagoWallet|
|Pago Fácil|`pagofacil`|`ticket`|MercadoPagoPro y MercadoPagoOff|
|Rapipago|`rapipago`|`ticket`|MercadoPagoPro y MercadoPagoOff|

------------
----[mlb]----

|Nombre|Métodos de Pago|Tipos de Pago|Planes en VTEX|
|---|---|---|---|
|Visa|`Visa`|`credit_card`|Visa, MercadoPagoPro y MercadoPagoWallet|
|Mastercard|`master`|`credit_card`|Mastercard, MercadoPagoPro y MercadoPagoWallet|
|American Express|`amex`|`credit_card`|American Express, MercadoPagoPro y MercadoPagoWallet|
|Elo|`elo`|`credit_card`|Elo, MercadoPagoPro y MercadoPagoWallet|
|Hipercard|`hipercard`|`credit_card`|Hipercard, MercadoPagoPro y MercadoPagoWallet|
|PEC|`pec`|`ticket`|MercadoPagoPro y MercadoPagoOff|
|Boleto|`bolbradesco`|`ticket`|Boleto Bancário, MercadoPagoPro y MercadoPagoOff|
|Pix|`pix`|`bank_transfer`|Pix y MercadoPagoPro|

------------
----[mlc]----

|Nombre|Métodos de Pago|Tipos de Pago|Planes en VTEX|
|---|---|---|---|
|Visa|`Visa`|`credit_card`|Visa, MercadoPagoPro y MercadoPagoWallet|
|Mastercard|`master`|`credit_card`|Mastercard, MercadoPagoPro y MercadoPagoWallet|
|American Express|`amex`|`credit_card`|American Express, MercadoPagoPro y MercadoPagoWallet|
|Diners|`diners`|`credit_car`|Diners, MercadoPagoPro y MercadoPagoWallet|
|Mastercard Débito|`debmaster`|`debit_card`|Mastercard Debit, MercadoPagoPro y MercadoPagoWallet|
|Visa Débito|`debvisa`|`debit_card`|Visa Electron, MercadoPagoPro y MercadoPagoWallet|

------------
----[mco]----

|Nombre|Métodos de Pago|Tipos de Pago|Planes en VTEX|
|---|---|---|---|
|Visa|`Visa`|`credit_card`|Visa, MercadoPagoPro y MercadoPagoWallet|
|Mastercard|`master`|`credit_card`|Mastercard, MercadoPagoPro y MercadoPagoWallet|
|American Express|`amex`|`credit_card`|American Express, MercadoPagoPro y MercadoPagoWallet|
|Diners|`diners`|`credit_car`|Diners, MercadoPagoPro y MercadoPagoWallet|
|Mastercard Débito|`debmaster`|`debit_card`|Mastercard Debit, MercadoPagoPro y MercadoPagoWallet|
|Visa Débito|`debvisa`|`debit_card`|Visa Electron, MercadoPagoPro y MercadoPagoWallet|
|Efecty|`efecty`|`ticket`|MercadoPagoPro y MercadoPagoOff|
|PSE|`pse`|`bank_transfer`|PSE y MercadoPagoPro|

------------
----[mlm]----

|Nombre|Métodos de Pago|Tipos de Pago|Planes en VTEX|
|---|---|---|---|
|Visa|`Visa`|`credit_card`|Visa, MercadoPagoPro y MercadoPagoWallet|
|Mastercard|`master`|`credit_card`|Mastercard, MercadoPagoPro y MercadoPagoWallet|
|American Express|`amex`|`credit_card`|American Express, MercadoPagoPro y MercadoPagoWallet|
|Mastercard Débito|`debmaster`|`debit_card`|Mastercard Debit, MercadoPagoPro y MercadoPagoWallet|
|Visa Débito|`debvisa`|`debit_card`|Visa Electron, MercadoPagoPro y MercadoPagoWallet|
|OXXO|`oxxo`|`ticket`|MercadoPagoPro y MercadoPagoOff|
|PayCash|`paycash`|`ticket`|MercadoPagoPro y MercadoPagoOff|
|Citibanamex|`banamex`|`atm`|MercadoPagoPro y MercadoPagoOff|

------------

----[mpe]----

|Nombre|Métodos de Pago|Tipos de Pago|Planes en VTEX|
|---|---|---|---|
|Visa|`Visa`|`credit_card`|Visa, MercadoPagoPro y MercadoPagoWallet|
|Mastercard|`master`|`credit_card`|Mastercard, MercadoPagoPro y MercadoPagoWallet|
|American Express|`amex`|`credit_card`|American Express, MercadoPagoPro y MercadoPagoWallet|
|Diners|`diners`|`credit_car`|Diners, MercadoPagoPro y MercadoPagoWallet|
|Mastercard Débito|`debmaster`|`debit_card`|Mastercard Debit, MercadoPagoPro y MercadoPagoWallet|
|Visa Débito|`debvisa`|`debit_card`|Visa Electron, MercadoPagoPro y MercadoPagoWallet|
|Pago Efectivo|`pagoefectivo_atm`|`atm`|MercadoPagoPro y MercadoPagoOff|

------------
----[mlu]----

|Nombre|Métodos de Pago|Tipos de Pago|Planes en VTEX|
|---|---|---|---|
|Visa|`Visa`|`credit_card`|Visa, MercadoPagoPro y MercadoPagoWallet|
|Mastercard|`master`|`credit_card`|Mastercard, MercadoPagoPro y MercadoPagoWallet|
|Diners|`diners`|`credit_car`|Diners, MercadoPagoPro y MercadoPagoWallet|
|Visa Débito|`debvisa`|`debit_card`|Visa Electron, MercadoPagoPro y MercadoPagoWallet|
|Abitab|`abitab`|`ticket`|MercadoPagoPro y MercadoPagoOff|
|Redpagos|`redpagos`|`ticket`|MercadoPagoPro y MercadoPagoOff|

------------