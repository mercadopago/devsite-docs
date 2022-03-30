## Redirecionamento 

Ao final do processo de pagamento, é possível redirecionar o comprador para outro ambiente do site através do atributo `back_urls`. Este atributo permite definir as URLs para onde o comprador deverá ser redirecionado ao concluir o pagamento.

Para definir as `back_urls`, envie um POST com o atributo `back_urls` informando as URLs para onde o comprador deverá ser direcionado quando finalizar o pagamento ao endpoint [/checkout/preferences](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/preferences/_checkout_preferences/post) ou, se preferir, veja [SDKs](https://www.mercadopago.com.br/developers/pt/guides/sdks) para integrar utilizando nossas bibliotecas.
