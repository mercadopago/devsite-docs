# Advanced Payments

> WARNING
>
> Importante
>
> Antes de utilizar essa API, é importante entrar em contato com seu executivo de conta do Mercado Pago.

## Introdução

Advanced Payments é uma API que permite processar pagamentos com funcionalidades adicionais à [API de Payments](https://www.mercadopago.com.br/developers/pt/guides/payments/api/introduction/) regular. Atualmente permite realizar pagamentos de Marketplace com split.

#### Pagamentos de Marketplace com split

A funcionalidade de Split de Pagamentos fornece uma solução para os pagamentos de Marketplace onde o modelo de negócio requer dividir o dinheiro entre múltiplos Vendedores.

> NOTE
>
> Nota
>
> Para mais informação dirija-se à documentação de [Marketplaces](https://www.mercadopago.com.br/developers/pt/guides/marketplace/api/introduction/).

#### Divisão de pagamentos

* Um pagamento efetuado por um Comprador em um Marketplace, se divide entre múltiplos Vendedores.
* A divisão é feita no momento da aprovação do pagamento.
* Não há um limite de Vendedores para dividir o dinheiro e o Marketplace obtém uma comissão por #cada venda efetuada.
* É possível configurar quem paga a comissão de Mercado Pago.

#### Flexibilidade para aplicar comissão

* O Marketplace retém uma parte do valor da venda como comissão.
* A comissão que o Marketplace cobra se aplica a cada pagamento.
* Isso permite ter diferentes comissões para diferentes Vendedores e em sua vez diferentes comissões segundo o tipo ou categoria do produto que um Vendedor ofereça.

#### Liberação flexível de dinheiro de Vendedores

* No momento da integração configura-se um intervalo de dias no qual o dinheiro dos Vendedores pode ser liberado.
* A liberação é atribuída em cada pagamento e pode ser modificada posteriormente.
