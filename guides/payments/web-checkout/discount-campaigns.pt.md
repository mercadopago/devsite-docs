---
sites_supported:
  - mpe
---

# Campanhas de desconto

Crie campanhas de desconto para impulsionar suas vendas utilizando as ferramentas de marketing da sua conta no Mercado Pago, entrando na seção Configurações para o seu Negócio: [Criar desconto](https://www.mercadopago.com.ar/campaigns/create).

Você pode criar dois tipos de campanhas:

* Aplicada a todos os seus compradores, como liquidações sazonais, por exemplo.
* Com código de desconto para enviar aos seus compradores.

Basta escolher quanto quer investir e quando, sem custos adicionais.

## Experiência do comprador

Antes de exibir o checkout, o Mercado Pago irá verificar se existe alguma campanha criada para esse comprador.

Se a campanha for válida, será aplicado o desconto ou o cupom será solicitado. O valor a ser descontado será calculado automaticamente e o preço promocional será exibido.

Para saber se um pagamento teve algum desconto, veja se o atributo `coupon_id` não é `null`. Verifique o valor descontado no atributo `coupon_amount`.
