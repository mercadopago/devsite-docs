# Configurar condições de pagamento

Após ter criado sua afiliação com o **MercadoPagoV2**, você deverá configurar as **condições de pagamento** que serão oferecidas aos compradores.

> WARNING
>
> Importante
>
> Certifique em sua loja de aplicativos da VTEX se o App **Mercado Pago Payment APP** esteja instalado para utilização das condições de pagamento **MercadoPagoPro, MercadoPagoWallet e MercadoPagoOff** ou solicite a instalação pela equipe VTEX através de ticket no **Support VTEX**.

A configuração das condições de pagamento é feita no portal do administrador da plataforma VTEX na aba **Condições de pagamento** do menu **Configurações**. 

Nessa aba você deverá clicar no botão  "+" (*Adicionar nova condição de pagamento para...*) e selecionar uma condição de pagamento.

IMG

Você poderá configurar as seguintes condições de pagamento:

* **Configuração de cartão de Crédito**
* **Configuração de cartão de Débito**
----[mlb]----
* **Configuração do Boleto Bancário** 
* **Configuração do PIX**
------------
* **Configuração do Mercado Pago Off**
* **Configuração do Checkout Pro: MercadoPagoWallet e MercadoPagoPro**

Nessa tela, encuentre estas **condições de pagamento** nas seguintes seções:

----[mlb]----

|Condição de pagamento|Seção|
|---|---|
|Cartão de Crédito|Cartão de Crédito|
|Cartão de Débito|Cartão de Débito|
|Cartão de Débito|Boleto|
|PIX|Pagamento instantãneo|
|Mercado Pago Off|Outro|
|Checkout Pro|Outro|

------------

----[mla, mlu, mco, mlm, mlc, mpe]----

|Condição de pagamento|Seção|
|---|---|
|Cartão de Crédito|Cartão de Crédito|
|Cartão de Débito|Cartão de Débito|
|Mercado Pago Off|Outro|
|Checkout Pro|Outro|

------------

Todas as condições de pagamento exigem que você preencha o `Nome da Regra`, para facilitar sua identificação, e clique em `Status` para ativar a condição de pagamento. Finalmente, no campo `Processar com afiliação`, você deve selecionar a opção **MercadoPagoV2** da lista de afiliações.

IMG

> NOTE
>
> NOTA
> 
> As mudanças nas Condições de pagamento podem levar até 10 minutos para serem aplicadas.

&nbsp;

## Configuração de cartão de Crédito

A configuração do **cartão de crédito** apresenta os seguintes campos adicionais:

* **À vista ou parcelado?** 
  * **À vista:** selecione para pagamentos à vista.
  * **Parcelado:** selecione para pagamentos parcelados e preencha os campos conforme abaixo.
    * **Total de Parcelas:** indique total de parcelas. As opções são **Intervalo** (1-12) ou **Únicas** (1,3,6,12).
    * **Parcela mínima:**
    * **Cobrança:**
    * **Adicionar juros:**
    * **Juros externo:** Esta opção está desativada por padrão. Clique para ativar.
* **Adicionar condição especial:**

IMG

&nbsp;

----[mlb]----

## Configuração do PIX

Você precisa de uma chave PIX para configurar esta condição de pagamento:

> **Requisito prévio: Obtenha uma chave Pix**
> <br>
> Para começar, você deve ter cadastrada uma chave Pix na conta do vendedor. Este dado é único, serve para identificar sua conta e permitirá que você utilize as funcionalidades do meio de pagamento.
> <br>
> [Conheça como criar uma chave Pix](https://www.mercadopago[FAKER][URL][DOMAIN]/stop/pix?url=https%3A%2F%2Fwww.mercadopago.com.br%2Fadmin-pix-keys%2Fmy-keys&authentication_mode=required).
> <br>
> Considere que o registro da chave Pix pode levar alguns minutos.

Se você já tem sua chave PIX, o processo segue os passos comuns às demais condições de pagamento.

&nbsp;

------------

> LEFT_BUTTON_REQUIRED_PT
>
> Device Fingerprint
>
> Conheça como configurar o fingerprint.
>
> [Device Fingerprint](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/plugins/unofficial/vtex/device-fingerprint)
