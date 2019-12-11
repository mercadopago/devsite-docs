---
sites_supported:
  - mla
  - mlb
  - mco
  - mlu
  - mlc
  - mlm
---

# Campanhas de desconto

> WARNING
>
> Nota
>
> Esta documentação é referente à versão anterior do Checkout.
>
> Lembre-se de que há suporte ativo e novas funcionalidades somente para a [nova versão do Checkout Mercado Pago](https://www.mercadopago.com.br/developers/pt/guides/payments/web-payment-checkout/introduction/).

Crie campanhas de desconto para impulsionar suas vendas utilizando as ferramentas de marketing da sua conta no Mercado Pago, entrando na seção Configurações para o seu Negócio: [Criar desconto](https://www.mercadopago.com.ar/campaigns/create).

Você pode criar dois tipos de campanhas:

* Aplicada a todos os seus compradores, como liquidações sazonais, por exemplo.
* Com código de desconto para enviar aos seus compradores.

Basta escolher quanto quer investir e quando, sem custos adicionais.

## Experiência do comprador

Antes de exibir o checkout, o Mercado Pago irá verificar se existe alguma campanha criada para esse comprador.

Se a campanha for válida, será aplicado o desconto ou o cupom será solicitado. O valor a ser descontado será calculado automaticamente e o preço promocional será exibido.

Para saber se um pagamento teve algum desconto, veja se o atributo `coupon_id` não é `null`. Verifique o valor descontado no atributo `coupon_amount`.

Próximos passos

* [Personalização](https://www.mercadopago.com.ar/developers/pt/guides/payments/web-payment-checkout/v1/personalization/)
* [Teste a Integração](https://www.mercadopago.com.ar/developers/pt/guides/payments/web-payment-checkout/v1/testing/)
