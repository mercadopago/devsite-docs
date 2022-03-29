## Meios de pagamento

Com as preferências criadas, é possível customizar a integração do Checkout Pro e determinar os meios de pagamento que serão aceitos.

Através de um GET no endpoint [/v1/payment_methods](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/payment_methods/_payment_methods/get), você pode ter acesso à lista de cada uma das opções disponíveis e com ela, definir se deseja, por exemplo, excluir um meio de pagamento ou definir um número máximo de parcelas para uma compra.

Para definir os meios de pagamento que serão oferecidos, envie o atributo `payment_methods` informando o meio de pagamento que será oferecido ao endpoint [/checkout/preferences](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/preferences/_checkout_preferences/post) e execute a requisição ou, se preferir veja [SDKs](https://www.mercadopago.com.br/developers/pt/guides/sdks) e realize a integração utilizando nossas bibliotecas.
