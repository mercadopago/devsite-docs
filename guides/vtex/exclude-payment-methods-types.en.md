# Exclude payment types and methods 

When you create your MercadoPagoV2 Gateway affiliation, you can indicate payment methods and types that you want to exclude. Just enter them one by one in the corresponding field, separating them with a comma (,). 

With **Excluded payment methods**, we refer to the individual means or card brands through which you do not want to receive payments. In the case of cards, it specifically refers to the brands (Visa, Amex, MasterCard) and not the issuing institutions of these cards. 

**Excluded payment types**, on the other hand, refer to whether you prefer to exclude tickets, credit cards, or debit cards as a whole. 

This exclusion of payment types and methods configured in VTEX will only work for payments offered with Checkout Pro, and you can modify it as many times as necessary. 

In the table below, you will find the nomenclature that each payment type and method receives in VTEX, so you can use it if you want to exclude any in your integration with Checkout Pro. 


----[mla]----

|Name|Payment methods|Payment types|Conditions in VTEX|
|---|---|---|---|
|Visa|`Visa`|`credit_card`|Visa, MercadoPagoPro and MercadoPagoWallet|
|Mastercard|`master`|`credit_card`|Mastercard, MercadoPagoPro and MercadoPagoWallet|
|American Express|`amex`|`credit_card`|American Express, MercadoPagoPro and MercadoPagoWallet|
|Tarjeta Shopping|`tarshop`|`credit_card`|Shopping, MercadoPagoPro and MercadoPagoWallet|
|Cabal|`cabal`|`credit_card`|Cabal, MercadoPagoPro and MercadoPagoWallet|
|Diners|`diners`|`credit_card`|Diners, MercadoPagoPro and MercadoPagoWallet|
|Maestro|`maestro`|`debit_card`|Maestro, MercadoPago Pro and MercadoPagoWallet|
|Mastercard Debit|`debmaster`|`debit_card`|Mastercard Debit, MercadoPagoPro and MercadoPagoWallet|
|Visa Debit|`debvisa`|`debit_card`|Visa Electron, MercadoPagoPro and MercadoPagoWallet|
|Pago Fácil|`pagofacil`|`ticket`|MercadoPagoPro and MercadoPagoOff|
|Rapipago|`rapipago`|`ticket`|MercadoPagoPro and MercadoPagoOff|

------------
----[mlb]----

|Name|Payment methods|Payment types|Conditions in VTEX|
|---|---|---|---|
|Visa|`Visa`|`credit_card`|Visa, MercadoPagoPro and MercadoPagoWallet|
|Mastercard|`master`|`credit_card`|Mastercard, MercadoPagoPro and MercadoPagoWallet|
|American Express|`amex`|`credit_card`|American Express, MercadoPagoPro and MercadoPagoWallet|
|Elo|`elo`|`credit_card`|Elo, MercadoPagoPro y MercadoPagoWallet|
|Hipercard|`hipercard`|`credit_card`|Hipercard, MercadoPagoPro y MercadoPagoWallet|
|PEC|`pec`|`ticket`|MercadoPagoPro and MercadoPagoOff|
|Boleto|`bolbradesco`|`ticket`|Boleto Bancário, MercadoPagoPro and MercadoPagoOff|
|Pix|`pix`|`bank_transfer`|Pix and MercadoPagoPro|

------------
----[mlc]----

|Name|Payment methods|Payment types|Conditions in VTEX|
|---|---|---|---|
|Visa|`Visa`|`credit_card`|Visa, MercadoPagoPro and MercadoPagoWallet|
|Mastercard|`master`|`credit_card`|Mastercard, MercadoPagoPro and MercadoPagoWallet|
|American Express|`amex`|`credit_card`|American Express, MercadoPagoPro and MercadoPagoWallet|
|Diners|`diners`|`credit_car`|Diners, MercadoPagoPro and MercadoPagoWallet|
|Mastercard Debit|`debmaster`|`debit_card`|Mastercard Debit, MercadoPagoPro and MercadoPagoWallet|
|Visa Debit|`debvisa`|`debit_card`|Visa Electron, MercadoPagoPro and MercadoPagoWallet|

------------
----[mco]----

|Name|Payment methods|Payment types|Conditions in VTEX|
|---|---|---|---|
|Visa|`Visa`|`credit_card`|Visa, MercadoPagoPro and MercadoPagoWallet|
|Mastercard|`master`|`credit_card`|Mastercard, MercadoPagoPro and MercadoPagoWallet|
|American Express|`amex`|`credit_card`|American Express, MercadoPagoPro and MercadoPagoWallet|
|Diners|`diners`|`credit_car`|Diners, MercadoPagoPro and MercadoPagoWallet|
|Mastercard Debit|`debmaster`|`debit_card`|Mastercard Debit, MercadoPagoPro yand MercadoPagoWallet|
|Visa Debit|`debvisa`|`debit_card`|Visa Electron, MercadoPagoPro and MercadoPagoWallet|
|Efecty|`efecty`|`ticket`|MercadoPagoPro and MercadoPagoOff|
|PSE|`pse`|`bank_transfer`|PSE and MercadoPagoPro|

------------
----[mlm]----

|Name|Payment methods|Payment types|Conditions in VTEX|
|---|---|---|---|
|Visa|`Visa`|`credit_card`|Visa, MercadoPagoPro and MercadoPagoWallet|
|Mastercard|`master`|`credit_card`|Mastercard, MercadoPagoPro and MercadoPagoWallet|
|American Express|`amex`|`credit_card`|American Express, MercadoPagoPro and MercadoPagoWallet|
|Mastercard Debit|`debmaster`|`debit_card`|Mastercard Debit, MercadoPagoPro and MercadoPagoWallet|
|Visa Debit|`debvisa`|`debit_card`|Visa Electron, MercadoPagoPro and MercadoPagoWallet|
|OXXO|`oxxo`|`ticket`|MercadoPagoPro and MercadoPagoOff|
|PayCash|`paycash`|`ticket`|MercadoPagoPro and MercadoPagoOff|
|Citibanamex|`banamex`|`atm`|MercadoPagoPro and MercadoPagoOff|

------------
----[mpe]----

|Name|Payment methods|Payment types|Conditions in VTEX|
|---|---|---|---|
|Visa|`Visa`|`credit_card`|Visa, MercadoPagoPro and MercadoPagoWallet|
|Mastercard|`master`|`credit_card`|Mastercard, MercadoPagoPro and MercadoPagoWallet|
|American Express|`amex`|`credit_card`|American Express, MercadoPagoPro and MercadoPagoWallet|
|Diners|`diners`|`credit_car`|Diners, MercadoPagoPro and MercadoPagoWallet|
|Mastercard Debit|`debmaster`|`debit_card`|Mastercard Debit, MercadoPagoPro and MercadoPagoWallet|
|Visa Debit|`debvisa`|`debit_card`|Visa Electron, MercadoPagoPro and MercadoPagoWallet|
|Pago Efectivo|`pagoefectivo_atm`|`atm`|MercadoPagoPro and MercadoPagoOff|

------------
----[mlu]----

|Name|Payment methods|Payment types|Conditions in VTEX|
|---|---|---|---|
|Visa|`Visa`|`credit_card`|Visa, MercadoPagoPro and MercadoPagoWallet|
|Mastercard|`master`|`credit_card`|Mastercard, MercadoPagoPro and MercadoPagoWallet|
|Diners|`diners`|`credit_car`|Diners, MercadoPagoPro and MercadoPagoWallet|
|Visa Debit|`debvisa`|`debit_card`|Visa Electron, MercadoPagoPro and MercadoPagoWallet|
|Abitab|`abitab`|`ticket`|MercadoPagoPro and MercadoPagoOff|
|Redpagos|`redpagos`|`ticket`|MercadoPagoPro and MercadoPagoOff|

------------