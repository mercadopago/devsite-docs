# Integração via Deep Linking

Uma das formas de integrar-se com Mercado Pago Point é mediante um _deep linking_. Quando se chama o _link_, o mesmo será aceito como um _Point-handled address_ por parte da aplicação de Mercado Pago.

Na chamada a este _link_ se pode enviar diferentes parâmetros que seriam levantados pela aplicação de Mercado Pago e impactados no pagamento. Uma vez que se faça a chamada a este _link_, o usuário será redirecionado a tela da aplicação de Mercado Pago para informar o cartão do cliente e assim realizar a cobrança.

Uma vez que o pagamento é processado, o usuário será redirecionado a `success_url` ou `fail_url`, dependendo do estado do pagamento. Este deverá ser interceptado para retornar o usuário ao fluxo da aplicação.

## Diagrama do Fluxo

![Deep linking flow diagram Mercado Pago Point](/images/point_diagram.png)

## Criação do Deep Linking

A URL a ser interceptada é a seguinte: `https://www.mercadopago.com/mp-brasil/point/lojas`

Os parâmetros que se podem incluir são:

* `amount`: O valor que será cobrado do cliente (\*).
* `description`: Uma descrição da operação (Máx.: 20 caracteres) (\*).
* `external_reference`: O código de referência do seu sistema, o mesmo permitirá conciliar seu pedido de compra com o pagamento.
* `notification_url`: É a URL que receberá a notificação desse pagamento.
* `payer_email`: É o email do pagador.
* `success_url`: É a URL para onde o usuário será redirecionado logo após o pagamento ser aprovado.
* `fail_url`: É a URL para onde o usuário será redirecionado logo após o pagamento ser rejeitado.

> WARNING
>
> Importante
>
> * Os campos marcados com (\*) são campos obrigatórios.

No artigo do [GitHub](https://github.com/mercadopago/point-android_integration#deep-linking) é possível obter mais informação e o exemplo correspondente.