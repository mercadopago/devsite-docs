---
sites_supported:
  - mla
  - mlb
  - mlm
  - global
---


# Como integrar o Mercado Pago Point

Para realizar cobranças de forma integrada com o nosso dispositivo Point é necessário fazer o download do aplicativo do Mercado Pago disponível nos marketplaces do iOS e Android.

Atualmente, é possível realizar a integração a partir de qualquer aplicativo externo que possa ser acessado a partir do mesmo dispositivo em que o vendedor possuir o aplicativo do Mercado Pago instalado:

- Aplicativo Mobile nativo para Android ou iOS.
- Aplicativo Mobile Híbrido.
- Aplicativo Web.

> WARNING
>
> PRÉ-REQUISITOS
>
> * Possuir o aplicativo do Mercado Pago (Da versão 2.34 para Android e 2.32 para iOS).
> * Possuir um dispositivo Point associado à conta no Mercado Pago.
> * O vendedor deverá estar logado com sua conta  Mercado Pago no aplicativo do Mercado Pago.
> * Disponível para Android versão 2.8.0 ou superior, iOS versão 1.7.0 ou superior e somente no iOS 9 ou superior.

## Diagrama

![instore diagram](/images/point_diagram.png)

## 1. Integração via Deep Linking

Uma das formas para se integrar com o Mercado Pago Point é através de um deep link. Ao acessar o referido link, ele será interceptado como um Point-handled address.

Na requisição para este link, diferentes parâmetros podem ser enviados, que serão levantados pelo aplicativo do Mercado Pago e impactados no pagamento. Assim que a requisição a este link é feita, o vendedor é redirecionado para a tela do aplicativo do Mercado Pago para informar o cartão do cliente e, assim, efetuar a cobrança.

Assim que o pagamento é processado, o usuário é redirecionado para a _success_url_ ou _fail_url_, dependendo do status do pagamento. Isso deverá ser interceptado para retornar o usuário ao fluxo do aplicativo.


### Crie o Deep Linking

A URL a ser interceptada é a seguinte: `https://www.mercadopago.com/point/integrations`

Os parâmetros que podem ser incluídos são:

* `amount`: o valor a ser cobrado do cliente (*).
* `description`: a descrição da operação (Máx.: 20 caracteres) (*).
* `external_reference`: o código de referência do seu sistema, que permitirá conciliar o seu pedido de compra com o pagamento.
* `notification_url`: é a URL onde receberá a notificação desse pagamento.
* `payer_email`: é o e-mail do cliente.
* `success_url`: é a URL a partir da qual o usuário será redirecionado logo após um pagamento aprovado.
* `fail_url`: é a URL a partir da qual o usuário será redirecionado logo após um pagamento recusado.

> WARNING
>
> * Os campos marcados com (\*) são campos obrigatórios.
> * Os campos external reference, notification url e payer email estão disponíveis para integração com o aplicativo do Mercado Pago Point somente no Android.

No artigo sobre [GitHub](https://github.com/mercadopago/point-android_integration#deep-linking) você encontrará mais informações e o exemplo correspondente.

## 2. Integração via Intent-Based

Essa integração está disponível somente para Android versão 2.8.0 ou superior.

A outra forma de se integrar com o aplicativo do Mercado Pago é utilizando o código nativo do Android, por meio do conceito de Intent-Based.

Você deve utilizar o método “startActivityForResult” para iniciar diretamente o processo de pagamento. O resultado do pagamento irá retornar como “activityResult”

É muito importante que o código considere a possibilidade de que o usuário não possua o aplicativo do Mercado Pago em seu dispositivo. Neste caso, recomendamos redirecionar o usuário para a Play Store para que faça o download do aplicativo.

Como referência, você pode utilizar o código de exemplo e a documentação que possui o formato para enviar as informações do pagamento e gerenciar o objeto de retorno.

No artigo sobre [GitHub](https://github.com/mercadopago/point-android_integration#intent) você encontrará mais informações e o exemplo correspondente.

## 3. Notificações de Pagamento

É necessário que envie sua `notification_url`, onde receberá um aviso de todos os novos pagamentos e atualizações de status gerados.

Para mais informações, consulte a seção de [notificações](/guides/notifications/webhooks.es.md).

## 4. Identificação de Pagamentos do Point

Os pagamentos por Point podem ser encontrados na API do Payments. Você pode encontrar mais informações no artigo de [API's](/reference/payments/_payments_id /get/)

Por sua vez, existe uma API de Point exclusiva que possui algumas informações de pagamento adicionais:
 `https://api.mercadolibre.com/point/services/payment/<payment_id>?access_token=<access_token>`

A resposta terá o seguinte formato:

 `{
  "payment_id": 12345,
  "caller_id": 44444,
  "poi": "BBPOS-123123123",
  "poi_type": "BBPOS",
  "operator_id": 555555,
  "buyer_info": {
    "email": "email@email.com"
  }
}`
