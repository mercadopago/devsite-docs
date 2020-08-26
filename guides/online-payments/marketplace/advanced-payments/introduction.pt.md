---
sites_supported:
  - mla
  - mlb
  - mlm
  - mlc
  - mpe
---

# Advanced Payments
## Introdução

Advanced Payments é uma API que permite processar pagamentos com funcionalidades adicionais à [API de Payments](https://www.mercadopago.com.br/developers/pt/guides/payments/api/introduction/) regular.

#### Pagamentos de Marketplace com split

A funcionalidade de Split de Pagamentos fornece uma solução para os pagamentos de Marketplace onde o modelo de negócio requer dividir o dinheiro entre múltiplos vendedores.

> NOTE
>
> Nota
>
> Para mais informação dirija-se à documentação de [Marketplaces](https://www.mercadopago.com.br/developers/pt/guides/marketplace/api/introduction/).

#### Divisão de pagamentos

* Um pagamento efetuado por um comprador em um Marketplace, se divide entre múltiplos Vendedores.
* A divisão é feita no momento da aprovação do pagamento.
* Não há um limite de Vendedores para dividir o dinheiro e o Marketplace obtém uma comissão por #cada venda efetuada.
* É possível configurar quem paga a comissão de Mercado Pago.

#### Flexibilidade para aplicar comissão

* O Marketplace retém uma parte do valor da venda como comissão.
* A comissão que o Marketplace cobra se aplica a cada pagamento.
* Isso permite ter diferentes comissões para diferentes vendedores e em sua vez diferentes comissões segundo o tipo ou categoria do produto que um vendedor ofereça.

#### Liberação do dinheiro dos vendedores


* O dinheiro dos seus vendedores será liberado em 30 dias por padrão.


[Comece a usar pagamentos divididos no Marketplace](https://www.mercadopago.com.br/developers/pt/guides/marketplace/advanced-payments/receive-split-payments/).
