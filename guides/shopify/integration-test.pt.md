# Testar os pagamentos

Os testes de compras ajudam a garantir que os pagamentos sejam processados corretamente antes de permitir as vendas reais. Siga os passos abaixo para fazer uma compra de teste:

1. Vá para a página inicial da loja e **selecione um produto para comprar**.
2. Clique em **Comprar** e continue com o seu carrinho.
3. Digite um código postal válido de acordo com o país onde a loja opera, para simular o envio. Clique em **Continuar**.
4. Preencha os campos requeridos e selecione o **Mercado Pago como o seu método de pagamento**.
5. Na tela de finalização da compra, escolha **pagar com um novo cartão de crédito** e use os [cartões de teste](/developers/pt/docs/shopify/test-cards) para efetuar o pagamento. **Não faça login em sua conta do Mercado Pago ou tente efetuar o pagamento com cartões para uso próprio.**
6. Adicione as informações do cartão de teste indicadas e clique em **Pagar**.
7. Ao concluir a compra, você visualizará o comprovante de realização da compra no Mercado Pago e será redirecionado de volta à loja.

> WARNING
>
> Importante
>
> Ao finalizar a compra de teste com o Checkout Pro, esta não aparecerá como aprovada no Painel Administrativo da Shopify já que o processo foi realizado dentro do ambiente do Mercado Pago e não no entorno da loja. Ou seja, o pedido será gerado automaticamente, mas não aparecerá como pago. Além disso, as informações do pagamento aprovado não aparecerão no histórico da conta do Mercado Pago uma vez que este apenas contém despesas reais, feitas na produção.