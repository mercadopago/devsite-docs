# Configura formas de pagamento

Para começar a carregar com cartões de crédito e transferências através do Pix, siga estes passos.

## Ativar métodos de pagamento

Veja como ativar cada forma de pagamento em sua loja Salesforce.

### Pix

> WARNING
>
> Importante
>
> Para oferecer pagamentos com Pix é preciso garantir que as chaves Pix tenham sido criadas. Caso ainda não tenha criado, [clique aqui](https://www.youtube.com/watch?v=60tApKYVnkA) e veja o passo a passo.

1. Em sua loja do Salesforce, vá para o menu **Ferramentas do comerciante** e clique na opção **Métodos de pagamento** encontrada no grupo de opções Pedidos. Você também pode encontrar a opção usando o mecanismo de pesquisa do menu.
2. Para ativar a forma de pagamento Pix, posicione-se na opção **PIX**. Em seguida, na coluna "Ativado" e selecione a opção **Sim** para habilitá-lo.

### Cartão de crédito

1. Em sua loja do Salesforce, vá para o menu **Ferramentas do comerciante** e clique na opção **Métodos de pagamento** encontrada no grupo de opções Pedidos. Você também pode encontrar a opção usando o mecanismo de pesquisa do menu.
2. Para ativar a forma de pagamento com cartão de crédito, posicione-se na opção **CREDIT_CARD**. Em seguida, na coluna "Ativado" e selecione a opção **Sim** para habilitá-lo.

## Escolha a localização do meio de pagamento

Por padrão, o cartucho do Mercado Pago mostrará primeiro a forma de pagamento Pix e depois o cartão de crédito. 

![payment-methods](/images/salesforce/payment-methods.png)

Se você quiser alterar essa ordem, siga estas etapas.

1. Em sua loja do Salesforce, vá para o menu **Ferramentas do comerciante** e clique na opção **Métodos de pagamento** encontrada no grupo de opções Pedidos. Você também pode encontrar a opção usando o mecanismo de pesquisa do menu.
2. Na caixa, procure a coluna **Ordem de classificação**. Nesta coluna, atribua um pedido numérico aos métodos de pagamento de sua loja para definir o pedido em que deseja exibi-los.