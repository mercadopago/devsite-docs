# Configurar condições de pagamento

Após ter criado sua afiliação com o **MercadoPagoV2**, você deverá configurar as **condições de pagamento** que serão oferecidas aos compradores.

> WARNING
>
> Importante
>
> Certifique em sua loja de aplicativos da VTEX se o App **Mercado Pago Payment APP** esteja instalado para utilização das condições de pagamento **MercadoPagoPro, MercadoPagoWallet e MercadoPagoOff** ou solicite a instalação pela equipe VTEX através de ticket no [Support VTEX](https://help.vtex.com/es/support).

A configuração das condições de pagamento é feita no portal do administrador da plataforma VTEX na aba **Condições de pagamento** do menu **Configurações** no módulo de **Pagamentos**. 

Nessa aba você deverá clicar no botão  "+" (*Adicionar nova condição de pagamento para...*) e selecionar uma condição de pagamento.

Na próxima tela deve-se escrever o **Nome da Regra** para identificá-la facilmente, ativar a condição de pagamento no campo `Status`, selecionar **MercadoPagoV2** na lista ofrecida pelo campo ` Processar com a afiliação` e, finalmente, salvar suas alterações clicando em `Salvar`.

Para mais informações sobre como configurar as condições de pagamento na VTEX, clique [aqui](https://help.vtex.com/pt/tutorial/condicoes-de-pagamento--tutorials_455).

![Configurar condições de pagamento](/images/vtex/paymentconditions-pt.gif)

A integração com o Mercado Pago permite configurar as seguintes condições de pagamento:

----[mlb]----

|Condição de pagamento|Seção na aba condições de pagamento|
|---|---|
|Cartão de Crédito|Cartão de Crédito|
|Cartão de Débito|Cartão de Débito|
|Boleto Bancário|Boleto|
|PIX|Pagamento instantãneo|
|MercadoPagoOff|Outro|
|MercadoPagoWallet|Outro|
|MercadoPagoPro|Outro|

------------

----[mla, mlu, mco, mlm, mlc, mpe]----

|Condição de pagamento|Seção na aba condições de pagamento|
|---|---|
|Cartão de Crédito|Cartão de Crédito|
|Cartão de Débito|Cartão de Débito|
|MercadoPagoOff|Outro|
|MercadoPagoWallet|Outro|
|MercadoPagoPro|Outro|

------------

Você também pode configurar **condições especiais** de pagamento. Clique [aqui](https://help.vtex.com/pt/tutorial/condicoes-especiais--tutorials_456?&utm_source=admin) para obter mais informações.

Para finalizar a configuração, clique em **Salvar**.


> WARNING
>
> Importante
> 
> As mudanças nas Condições de pagamento podem levar até 10 minutos para serem aplicadas.

&nbsp;

## Configuração do Checkout Mercado Pago

Configure esta solução para cobrar através do **Mercado Pago**, contando com todos os meios de pagamentos disponíveis da plataforma.

Se você configurar **MercadoPagoPro**, o comprador realizará o pagamento no ambiente do Mercado Pago via formulário web modal diretamente em sua loja.

Se você configurar  **MercadoPagoWallet**, o comprador finaliza o pagamento com a carteira do Mercado Pago exclusivamente de usuários cadastrados e uma vez concluído o processo, voltará para sua loja.

Você configura seguindo as mesmos passos comuns às demais condições de pagamento.

&nbsp;

## Configuração de cartão de Crédito

A configuração das condições de pagamento com **cartão de crédito** requer que você [selecione a bandeira do cartão de crédito](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/plugins/unofficial/vtex/payment-methods) que deseja adicionar. Além disso, sua configuração pode exigir que você preencha campos adicionais aos apresentados acima, dependendo se você selecionar **À vista** ou **Parcelado**. 

Para mais informações sobre como configurar parcelas na VTEX, clique [aqui](https://help.vtex.com/pt/tutorial/condicoes-de-pagamento--tutorials_455#parcelado-sem-juros).

![Configuração de cartão de Crédito](/images/vtex/paymentconditions-cc-pt.gif)

&nbsp;

----[mlb]----

## Configuração do PIX

Para configurar o PIX em sua integração com o Mercado Pago é necessário que sua chave PIX esteja configurada.

Para obter mais informações sobre como criar sua chave PIX, clique [aqui](https://www.mercadopago[FAKER][URL][DOMAIN]/stop/pix?url=https%3A%2F%2Fwww.mercadopago.com.br%2Fadmin-pix-keys%2Fmy-keys&authentication_mode=required).

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
