---
sites_supported:
  - mla
  - mlb
  - mlm
  - global
---


# Como integrar o Mercado Pago Point

Para realizar cobranças de forma integrada com o nosso dispositivo Point é necessário fazer o download do aplicativo do Mercado Pago Point disponível nos marketplaces do iOS e Android.

Atualmente, é possível realizar a integração a partir de qualquer aplicativo externo que possa ser acessado a partir do mesmo dispositivo em que o vendedor possuir o aplicativo do Mercado Pago Point instalado:

- Aplicativo Mobile nativo para Android ou iOS.
- Aplicativo Mobile Híbrido.
- Aplicativo Web.

> WARNING
>
> Pré-requisitos
>
> * Possuir o aplicativo do Mercado Pago Point.
> * Possuir um dispositivo Point associado à conta no Mercado Pago.
> * O vendedor deverá estar logado com sua conta Mercado Pago no aplicativo do Mercado Pago Point.
> * Disponível para Android versão 2.8.0 ou superior, iOS versão 1.7.0 ou superior e somente no iOS 9 ou superior.

## Diagrama de Fluxo

![instore diagram](/images/point_diagram.png)

## 1. Integração via Deep Linking

Uma das formas para se integrar com o Mercado Pago Point é através de um deep link. Ao acessar o referido link, ele será interceptado como um Point-handled address.

Na requisição para este _link_, diferentes parâmetros podem ser enviados, que serão coletados pelo aplicativo do Point e incorporados no pagamento. Assim que a requisição a este link for feita, o vendedor será redirecionado para a tela do aplicativo do Mercado Pago Point para informar o cartão do cliente e assim efetuar a cobrança.

Assim que o pagamento é processado, o usuário é redirecionado para a _success_url_ ou _fail_url_, dependendo do status do pagamento. Isso deverá ser interceptado para retornar o usuário ao fluxo do aplicativo.


### Criação do Deep Linking

A URL a ser interceptada é a seguinte: `https://secure.mlstatic.com/org-img/point/app/index.html`

Os parâmetros que podem ser incluídos são:

* `amount`: o valor a ser cobrado do cliente (\*).
* `description`: a descrição da operação (Máx.: 20 caracteres) (\*).
* `external_reference`: o código de referência do seu sistema, que permitirá conciliar o seu pedido de compra com o pagamento.
* `notification_url`: é a URL onde receberá a notificação desse pagamento.
* `payer_email`: é o e-mail do cliente.
* `success_url`: é a URL a partir da qual o usuário será redirecionado logo após um pagamento aprovado.
* `fail_url`: é a URL a partir da qual o usuário será redirecionado logo após um pagamento recusado.

> WARNING
>
> * Os campos marcados com (\*) são campos obrigatórios.
> * Os campos external reference, notification url e payer email estão disponíveis para integração com o aplicativo do Mercado Pago Point somente no Android.

No artigo do [GitHub](https://github.com/mercadopago/point-android_integration#deep-linking) você encontrará mais informações e o exemplo correspondente.

## 2. Integração via Intent-Based
> WARNING
>
> * Essa integração está disponível somente para Android versão 2.8.0 ou superior.

Outra forma de integrar com o aplicativo do Mercado Pago Point é utilizando o código nativo do Android, por meio do conceito de _Intent-Based_.

Você deve utilizar o método “startActivityForResult” para iniciar diretamente o processo de pagamento. O resultado do pagamento retornará como “activityResult”.

É muito importante que o código considere a possibilidade de que o usuário não possua o aplicativo do Mercado Pago Point instalado em seu dispositivo. Neste caso, recomendamos redirecionar o usuário para a Play Store para que faça o download do aplicativo.

Como referência, você pode utilizar o código de exemplo e a documentação que possui o formato para enviar as informações do pagamento e gerenciar o objeto de retorno.

No artigo do [GitHub](https://github.com/mercadopago/point-android_integration#intent) você encontrará mais informações e o exemplo correspondente.

## 3. Notificações de Pagamento

É necessário que envie sua `notification_url`, onde receberá os avisos de todos os novos pagamentos e atualizações de status que venham a acontecer.

Para mais informações, consulte a seção de [notificações](/guides/notifications/ipn.pt.md).

## 4. Identificação de Pagamentos do Point

Os pagamentos do Point são identificados da seguinte forma ao realizar a busca na API de Pagamentos.

- operation_type = pos_payment
- created_from = `2707436798674401`(Android) ou `7353443692214630`(iOS)

No artigo da [API](/reference/payments/resource) você encontrará mais informações sobre a API de Pagamentos.
