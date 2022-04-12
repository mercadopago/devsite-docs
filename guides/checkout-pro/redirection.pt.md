# Redirecionamento 

Ao final do processo de pagamento, é possível redirecionar o comprador para outro ambiente do site através do atributo `back_urls`. Este atributo permite definir as URLs para onde o comprador deverá ser redirecionado ao concluir o pagamento.

Para definir as `back_urls`, envie um POST com o atributo `back_urls` informando as URLs para onde o comprador deverá ser direcionado quando finalizar o pagamento ao endpoint [/checkout/preferences](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/preferences/_checkout_preferences/post) ou, se preferir, veja [SDKs](https://www.mercadopago.com.br/developers/pt/guides/sdks) para integrar utilizando nossas bibliotecas.

> PREV_STEP_CARD_PT
>
> Botão de pagamento 
>
> Saiba como definir e personalizar a interface exibida para o usuário, incluindo o modo de entrada à tela de checkout.
>
> [Botão de pagamento](/developers/pt/docs/checkout-pro/checkout-customization/user-interface/payment-button)

> NEXT_STEP_CARD_PT
>
> Estilo de cores
>
> Veja como personalizar o estilo de cores dos elementos de sua interface.
>
> [Estilo de cores](/developers/pt/docs/checkout-pro/checkout-customization/user-interface/color-style)