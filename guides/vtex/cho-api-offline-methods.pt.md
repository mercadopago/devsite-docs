# Meios de pagamento offline

----[mlb]----

Ao configurar o Checkout Transparente em lojas VTEX, você pode oferecer pagamentos com meios de pagamento offline, como Boleto Bancário ou Pix.

> WARNING
>
> Importante
>
> Para oferecer o Pix como método de pagamento, você deve primeiro garantir que tenha configurado sua chave Pix. Se ainda não o fez, siga as instruções fornecidas em [nossa documentação](https://www.mercadopago.com.br/ajuda/17843).

------------

----[mco]----

Ao configurar o Checkout API em lojas VTEX, você pode oferecer pagamentos com meios de pagamento offline, como PSE ou Efecty.

> WARNING
>
> Importante
>
> Para oferecer o PSE como método de pagamento, certifique-se primeiro de instalar o **aplicativo PSE desenvolvido pela VTEX**. Se ainda não o fez, acesse **Configuração de Conta>Aplicativos > Loja de Aplicativos**, e procure por **Banks for PSE**. 
> <br>
> Se o aplicativo não estiver disponível na loja, solicite sua instalação à equipe da VTEX por meio de um ticket no [Suporte VTEX](https://help.vtex.com/pt/support).

------------

----[mla]----

Ao configurar o Checkout API em lojas VTEX, você pode oferecer pagamentos com meios de pagamento offline, como Pago Fácil, Rapipago, Red Link ou Provincia Net.

------------

----[mlm]----

Ao configurar o Checkout API em lojas VTEX, você pode oferecer pagamentos com meios de pagamento offline, como Oxxo, Paycash, Banamex ou Bancomer.
------------


----[mlu]----

Ao configurar o Checkout API em lojas VTEX, você pode oferecer pagamentos com meios de pagamento offline, como Abitab ou Redpagos.
------------

----[mlc]----

Ao configurar o Checkout API em lojas VTEX, você pode oferecer pagamentos com meios de pagamento offline, como Wip.
------------

----[mpe]----

Ao configurar o Checkout API em lojas VTEX, você pode oferecer pagamentos com meios de pagamento offline, como Pago Efectivo.
------------


Para configurar esses meios de pagamento, acesse o painel de administração da plataforma VTEX, e vá para **Pagamentos > Configuração > Planos de pagamento**. Então, siga os passos abaixo: 

1. Clique no botão "+ (Adicionar novo plano de pagamento para...)". 
2. Dentro da categoria **Outro**, procure por o meio de pagamento offline que você deseja oferecer. Você pode escolher mais de um, mas precisará fazer as seguintes configurações individualmente.
3. Preencha os campos exibidos na próxima tela: 
    1. Digite o **Nome da regra**, que permitirá identificar esse meio de pagamento. 
    2. Em **Processo com a afiliação**, selecione **MercadoPagoV2**. 
    3. No campo **Status**, ative a condição de pagamento usando o botão deslizante. 

4. Clique em **Salvar** para ativar a configuração.

![Configurar condições de pagamento](/images/vtex/paymentconditions-imagenv2-pt.gif)

> NOTE
>
> Nota
>
> As mudanças nas condições de pagamento podem levar até 10 minutos para serem aplicadas.
