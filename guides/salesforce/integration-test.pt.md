# Teste de integração

Os testes de compras ajudam a garantir que os pagamentos sejam processados corretamente antes de permitir as vendas reais. Para testar sua loja, você precisará usar o **ambiente Sandbox** do Salesforce Commerce Cloud.

> WARNING
> 
> Importante
>
> Faça os pedidos de teste usando um e-mail fictício que termine em **@testuser.com**.

Descubra como testar os diversos tipos de pagamento.

## Compras com Checkout Pro

Para realizar uma compra teste, siga estas etapas:



1. Adicione um produto ao carrinho da loja.
2. Clique no botão **comprar**.
3. Continue comprando como usuário convidado e preencha as informações de envio. Em seguida, clique em “Avançar > Pagamento”.
4. Na página de pagamento, selecione a opção **Mercado Pago**.
5. Conclua a transação na página do Mercado Pago usando um dos meios de pagamento disponíveis. Se você optar por pagar com cartão de crédito, lembre-se de usar nossos [cartões de teste](/developers/en/docs/salesforce-commerce-cloud/additional-content/test-cards). **Nunca utilize seus cartões pessoais**.
6. Clique no botão **Pagar**.

Se o teste foi bem-sucedido, a tela de sucesso do Mercado Pago será exibida.

## Compras com cartão de crédito

Para realizar um teste, siga estas etapas:

1. Adicione um produto ao carrinho da loja.
2. Clique no botão **comprar**.
2. Continue comprando como usuário convidado e preencha as informações de envio. Em seguida, clique em "Avançar: Pagamento".
3. Na página de pagamento, selecione a opção **Cartão de Crédito**.
4. Opte por pagar com um novo cartão de crédito e use os [cartões de teste](/developers/pt/docs/salesforce-commerce-cloud/additional-content/test-cards) para efetuar o pagamento. **É importante não pagar com cartões de uso pessoal**.
5. Adicione as informações do cartão de teste indicado (número do cartão, CVV e data de validade).
6. Clique no botão **Pagar**.

Na finalização da compra, verifique com sua loja se a compra está listada como "Aprovada".