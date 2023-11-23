# Excluir tipos e métodos de pagamento

Quando você cria sua afiliação de Gateway MercadoPagoV2, pode indicar métodos e tipos de pagamento que deseja excluir. Basta digitá-los um a um no campo correspondente, separando-os por uma vírgula (,). 

Com **Métodos de pagamento excluídos**, nos referimos aos meios individuais ou marcas de cartão pelos quais você não deseja receber pagamentos. No caso dos cartões, trata-se especificamente das marcas (Visa, Amex, MasterCard) e não das instituições emissoras desses cartões. 

**Tipos de pagamento excluídos**, por outro lado, referem-se a se você prefere excluir tickets, cartões de crédito ou débito como um todo. 

Essa exclusão de tipos e meios de pagamento configurada na VTEX funcionará apenas para os pagamentos oferecidos com o Checkout Pro e você pode modificá-la quantas vezes considerar necessário. 

Na tabela a seguir, você encontrará a nomenclatura que cada tipo e método de pagamento recebe na VTEX, para que possa usá-la caso queira excluir algum na sua integração com o Checkout Pro.


----[mla]----

|Nome|Métodos de Pagamento|Tipos de Pagamentos|Condições na VTEX|
|---|---|---|---|
|Visa|`Visa`|`credit_card`|Visa, MercadoPagoPro e MercadoPagoWallet|
|Mastercard|`master`|`credit_card`|Mastercard, MercadoPagoPro e MercadoPagoWallet|
|American Express|`amex`|`credit_card`|American Express, MercadoPagoPro e MercadoPagoWallet|
|Tarjeta Shopping|`tarshop`|`credit_card`|Shopping, MercadoPagoPro e MercadoPagoWallet|
|Cabal|`cabal`|`credit_card`|Cabal, MercadoPagoPro e MercadoPagoWallet|
|Diners|`diners`|`credit_card`|Diners, MercadoPagoPro e MercadoPagoWallet|
|Maestro|`maestro`|`debit_card`|Maestro, MercadoPago Pro e MercadoPagoWallet|
|Mastercard Débito|`debmaster`|`debit_card`|Mastercard Debit, MercadoPagoPro e MercadoPagoWallet|
|Visa Débito|`debvisa`|`debit_card`|Visa Electron, MercadoPagoPro e MercadoPagoWallet|
|Pago Fácil|`pagofacil`|`ticket`|MercadoPagoPro e MercadoPagoOff|
|Rapipago|`rapipago`|`ticket`|MercadoPagoPro e MercadoPagoOff|

------------
----[mlb]----

|Nome|Métodos de Pagamento|Tipos de Pagamentos|Condições na VTEX|
|---|---|---|---|
|Visa|`Visa`|`credit_card`|Visa, MercadoPagoPro e MercadoPagoWallet|
|Mastercard|`master`|`credit_card`|Mastercard, MercadoPagoPro e MercadoPagoWallet|
|American Express|`amex`|`credit_card`|American Express, MercadoPagoPro e MercadoPagoWallet|
|Elo|`elo`|`credit_card`|Elo, MercadoPagoPro e MercadoPagoWallet|
|Hipercard|`hipercard`|`credit_card`|Hipercard, MercadoPagoPro e MercadoPagoWallet|
|PEC|`pec`|`ticket`|MercadoPagoPro e MercadoPagoOff|
|Boleto|`bolbradesco`|`ticket`|Boleto Bancário, MercadoPagoPro e MercadoPagoOff|
|Pix|`pix`|`bank_transfer`|Pix e MercadoPagoPro|

------------

----[mlc]----

|Nome|Métodos de Pagamento|Tipos de Pagamentos|Condições na VTEX|
|---|---|---|---|
|Visa|`Visa`|`credit_card`|Visa, MercadoPagoPro e MercadoPagoWallet|
|Mastercard|`master`|`credit_card`|Mastercard, MercadoPagoPro e MercadoPagoWallet|
|American Express|`amex`|`credit_card`|American Express, MercadoPagoPro e MercadoPagoWallet|
|Diners|`diners`|`credit_car`|Diners, MercadoPagoPro e MercadoPagoWallet|
|Mastercard Débito|`debmaster`|`debit_card`|Mastercard Debit, MercadoPagoPro e MercadoPagoWallet|
|Visa Débito|`debvisa`|`debit_card`|Visa Electron, MercadoPagoPro e MercadoPagoWallet|

------------
----[mco]----

|Nome|Métodos de Pagamento|Tipos de Pagamentos|Condições na VTEX|
|---|---|---|---|
|Visa|`Visa`|`credit_card`|Visa, MercadoPagoPro e MercadoPagoWallet|
|Mastercard|`master`|`credit_card`|Mastercard, MercadoPagoPro e MercadoPagoWallet|
|American Express|`amex`|`credit_card`|American Express, MercadoPagoPro e MercadoPagoWallet|
|Diners|`diners`|`credit_car`|Diners, MercadoPagoPro e MercadoPagoWallet|
|Mastercard Débito|`debmaster`|`debit_card`|Mastercard Debit, MercadoPagoPro e MercadoPagoWallet|
|Visa Débito|`debvisa`|`debit_card`|Visa Electron, MercadoPagoPro e MercadoPagoWallet|
|Efecty|`efecty`|`ticket`|MercadoPagoPro e MercadoPagoOff|
|PSE|`pse`|`bank_transfer`|PSE e MercadoPagoPro|

------------
----[mlm]----

|Nome|Métodos de Pagamento|Tipos de Pagamentos|Condições na VTEX|
|---|---|---|---|
|Visa|`Visa`|`credit_card`|Visa, MercadoPagoPro e MercadoPagoWallet|
|Mastercard|`master`|`credit_card`|Mastercard, MercadoPagoPro e MercadoPagoWallet|
|American Express|`amex`|`credit_card`|American Express, MercadoPagoPro e MercadoPagoWallet|
|Mastercard Débito|`debmaster`|`debit_card`|Mastercard Debit, MercadoPagoPro e MercadoPagoWallet|
|Visa Débito|`debvisa`|`debit_card`|Visa Electron, MercadoPagoPro e MercadoPagoWallet|
|OXXO|`oxxo`|`ticket`|MercadoPagoPro e MercadoPagoOff|
|PayCash|`paycash`|`ticket`|MercadoPagoPro e MercadoPagoOff|
|Citibanamex|`banamex`|`atm`|MercadoPagoPro e MercadoPagoOff|

------------
----[mpe]----

|Nome|Métodos de Pagamento|Tipos de Pagamentos|Condições na VTEX|
|---|---|---|---|
|Visa|`Visa`|`credit_card`|Visa, MercadoPagoPro e MercadoPagoWallet|
|Mastercard|`master`|`credit_card`|Mastercard, MercadoPagoPro e MercadoPagoWallet|
|American Express|`amex`|`credit_card`|American Express, MercadoPagoPro e MercadoPagoWallet|
|Diners|`diners`|`credit_car`|Diners, MercadoPagoPro e MercadoPagoWallet|
|Mastercard Débito|`debmaster`|`debit_card`|Mastercard Debit, MercadoPagoPro e MercadoPagoWallet|
|Visa Débito|`debvisa`|`debit_card`|Visa Electron, MercadoPagoPro e MercadoPagoWallet|
|Pago Efectivo|`pagoefectivo_atm`|`atm`|MercadoPagoPro e MercadoPagoOff|

------------
----[mlu]----

|Nome|Métodos de Pagamento|Tipos de Pagamentos|Condições na VTEX|
|---|---|---|---|
|Visa|`Visa`|`credit_card`|Visa, MercadoPagoPro e MercadoPagoWallet|
|Mastercard|`master`|`credit_card`|Mastercard, MercadoPagoPro e MercadoPagoWallet|
|Diners|`diners`|`credit_car`|Diners, MercadoPagoPro e MercadoPagoWallet|
|Visa Débito|`debvisa`|`debit_card`|Visa Electron, MercadoPagoPro e MercadoPagoWallet|
|Abitab|`abitab`|`ticket`|MercadoPagoPro e MercadoPagoOff|
|Redpagos|`redpagos`|`ticket`|MercadoPagoPro e MercadoPagoOff|

------------