# Mercado Pago para Shopify


## Introdução

As soluções do Mercado Pago no Shopify permitem receber pagamentos on-line no seu site sem a necessidade de conhecimento técnico ou de programação.

> Mercado Pago é um parceiro oficial do Shopify: oferecemos segurança à todos os pagamentos feitos em sua loja.

----[mlb]----
## Tipos de integração

Escolha a solução que melhor se adequa ao seu negócio:

__Checkout transparente Mercado Pago__: *app extension* do Shopify que oferece uma experiência de compra rápida e segura, sem sair da sua loja! Você pode instalá-lo na [app store do Shopify](https://apps.shopify.com/).

__Checkout redirect Mercado Pago__: configure o Checkout Pro para que seus clientes finalizem o pagamento no nosso site. Ele já está pré-instalado no seu administrador do Shopify.

## Checkout transparente

Instale o [app extension do nosso checkout transparente](https://apps.shopify.com/checkout-transparente) na sua loja do Shopify e deixe tudo por nossa conta: seus clientes podem informar os dados em uma única etapa e concluir a compra com rapidez e segurança.


### O que eu posso fazer com o checkout transparente do Mercado Pago?

| Características          | Descrição                                                                                        |
|---|---|
| Compras em uma etapa     | Ofereça uma experiência de compra clara e rápida, desenvolvida na sua loja e na mesma página.    |
| Experiência mobile       | Ofereça um fluxo de compras pensado e otimizado para dispositivos móveis.                        |
| Envios                   | Conecte o checkout com sua ferramenta de envios e ofereça entregas durante o processo de compra. |
| Ads tracking             | Acompanhe suas campanhas de marketing em detalhes ao longo de processo.                          |
| Meios de pagamento       | Aceite pagamentos com cartão, boleto e dinheiro na conta Mercado Pago.                           |
| Parcelamento             | Venda parcelado e ofereça as promoções disponíveis.                                              |
| Pagamento como convidado | Permita que seus clientes paguem sem a necessidade de terem uma conta no Mercado Pago.           |


### Como instalar o checkout transparente?

Instale o Mercado Pago para Shopify de forma automática seguindo estas instruções pela [app store do Shopify](https://apps.shopify.com/):

1. Acesse [https://apps.shopify.com/](https://apps.shopify.com/) pelo seu navegador e entre na sua conta. Você também pode acessá-lo na seção Apps do seu painel do Shopify.
1. Pesquise por “Checkout transparente do Mercado Pago” na oferta de apps.
1. Clique em "Adicionar app".
1. Vá para a seção Aplicativos do seu painel de administração.

**Excelente! O checkout já está instalado na sua loja, só falta ativá-lo para começar a vender.**


### Como ativá-lo com a minha conta Mercado Pago?

Conecte uma conta Mercado Pago ao aplicativo para capturar os pagamentos das vendas no Shopify. É fácil! Você só precisa ter uma conta de vendedor no Mercado Pago e obter as credenciais de teste e produção.

Depois que o checkout estiver instalado, siga estas etapas:

1. Crie uma [conta de vendedor](https://www.mercadopago[FAKER][URL][DOMAIN]/registration-company?confirmation_url=https%3A%2F%2Fwww.mercadopago[FAKER][URL][DOMAIN]%2Fcomo-cobrar) no Mercado Pago se você ainda não tem uma.
1. Obtenha as [credenciais]([FAKER][CREDENTIALS][URL]) **Public Key** e **Access Token**, e cole-as nos campos de Produção e Testes encontrados na configuração do app.
1. Ative a conta para [ir a Produção](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/payments/api/goto-production/) e receber o dinheiro das suas vendas no Mercado Pago.

**Pronto! Com essa configuração, você pode começar a vender e obter os pagamentos recebidos na sua conta Mercado Pago.**

> WARNING
>
> Importante
>
> As [credenciais](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/faqs/credentials/) são as chaves que o identificam exclusivamente no Mercado Pago. Elas permitirão que você simule pagamentos em um ambiente de teste e receba pagamentos reais quando estiver pronto para produção.


### Como testar o checkout?

O app extension do Mercado Pago vem com o ambiente de teste padrão para que você possa simular pagamentos na loja e verificar se tudo funciona bem antes de começar a receber pagamentos reais de seus clientes.
 
É aqui que as credenciais de teste que você inseriu no módulo ao integrar o Mercado Pago à sua loja entram em jogo.

Ao fazer o teste, confira se o fluxo de pagamento funciona corretamente.

**Você viu que tudo está indo bem? Desative o modo de Testes e vá para o modo de Produção para receber pagamentos reais.**


### Ir a produção

Para começar a receber pagamentos, você deve [ativar suas credenciais]([FAKER][CREDENTIALS][URL]).

> Confira os [requisitos para ir a produção](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/payments/api/goto-production/) se você tem alguma dúvida em relação ao processo.

Para ativá-las, verifique se as credenciais de produção inseridas são as da conta que você recebe o dinheiro das vendas. 

Ative o modo Produção apenas quando estiver pronto para vender e tiver testado o checkout com pagamentos simulados na fase de teste. 

**Pronto! O checkout transparente do Mercado Pago está pronto para receber pagamentos on-line.**

------------


## Checkout redirect Mercado Pago

Configure nosso módulo para finalizar a compra no site do Mercado Pago durante o processo de compra na sua loja Shopify.


### O que eu posso fazer com o gateway de pagamentos do Mercado Pago?

| Características          | Descrição                                                                                      |
|---|---|
| Interface Mercado Pago   | Nós cuidamos disso! Você não precisa se preocupar com a implementação e design de um checkout. |
| Ads tracking             | Acompanhe suas campanhas de marketing em detalhes ao longo do processo.                        |
| Meios de pagamento       | Aceite pagamentos com cartão, boleto e dinheiro na conta Mercado Pago.                         |
| Parcelamento             | Venda parcelado e ofereça as promoções disponíveis.                                            |
| Pagamento como convidado | Permita que seus clientes paguem sem a necessidade de terem uma conta no Mercado Pago.         |
| Descontos                | Use cupons para oferecer promoções aos seus clientes.                                          |


### Como configurar o módulo do Mercado Pago?

Siga estas etapas para processar pagamentos com o Checkout Pro:

1. No painel de administração do Shopify, vá para a seção *Payments* em *Settings*.
1. No campo *Third-party providers*, busque e selecione o Mercado Pago.
1. Obtenha as [credenciais]([FAKER][CREDENTIALS][URL]) **Client id** e **Client secret** e cole-as nos campos correspondentes.
1. Escolha os meios de pagamento que quiser oferecer aos seus clientes.
1. Certifique-se de selecionar o modo Test para conferir se tudo funciona corretamente antes de ir a produção. 
1. Ative o módulo para salvar as alterações.

**Pronto! O Mercado Pago foi instalado e configurado. Depois de concluir os testes, você poderá acessar esta mesma seção para desativar o ambiente de teste e receber pagamentos reais.**

> NOTE
>
> Nota
>
> Confira a documentação do [Checkout Pro](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/payments/web-payment-checkout/introduction/) para conhecer melhor todas as suas características e funcionalidades.


### Mapeamento de status de pagamento

O diagrama a seguir representa a correlação entre os status de um pagamento no Mercado Pago e o status do pedido no Shopify.

| Status do pagamento | Mercado Pago status | Shopify order status |
|---|---|---|
| Aprovado            | Approved            | Completed            |
| Pendente            | Pending             | Pending              |
| Em processamento    | In process          | Pending              |
| Em mediação         | In mediation        | Pending              |
| Cancelado           | Cancelled           | Failed               |
| Reembolsado         | Refunded            | Failed               |
| Recusado            | Rejected            | Failed               |
