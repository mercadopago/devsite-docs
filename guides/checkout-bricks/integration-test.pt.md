# Realizar compra teste

A etapa de testes permite analisar se a integração foi feita de maneira correta e se os pagamentos estão sendo processados sem erros, evitando que erros apareçam ao disponibilizar o checkout para os compradores finais.

Para realizar uma compra teste é preciso utilizar as **credenciais de teste** do seu **usuário de produção**. Para obtê-las, acesse o [Painel do desenvolvedor](/developers/panel/app) e vá até **Detalhes da aplicação > Credenciais** ou em sua conta Mercado Pago, acessando [Seu negócio > Configurações > Gestão e Administração > Credenciais](https://www.mercadopago[FAKER][URL][DOMAIN]/settings/account/credentials).

Com as credencias em mãos e a [integração realizada](/developers/pt/docs/checkout-bricks/common-initialization), siga os passos abaixo para realizar a compra teste.

## Cartão

1. Inicie a integração de seu projeto com as **credenciais de teste**.
2. Insira qualquer e-mail como usuário pagador (**lembrando que deve ser diferente do e-mail que você utiliza no Mercado Pago**).
3. Insira os dados de um dos nossos [cartões de teste](/developers/pt/guides/additional-content/your-integrations/test-cards).
4. Teste diferentes resultados de pagamento utilizando a tabela disponível nos [cartões de teste](/developers/pt/guides/additional-content/your-integrations/test-cards) e preenchendo o _status_ desejado no nome do titular do cartão (campo `card_holder_name`).
5. Confirme a compra. Será gerado um pagamento com o **status indicado** para teste.

## Meios pagamentos offline

1. Inicie a integração de seu projeto com as **credenciais de teste**.
2. Insira qualquer e-mail como usuário pagador (**lembrando que deve ser diferente do e-mail que você utiliza no Mercado Pago**).
3. Insira os dados requeridos pelo formulário.
4. Confirme a compra. Será gerado um pagamento com **status pendente**.

## Pagamento com Mercado Pago

----[mlb, mla, mlm]---- 

1. [Crie uma preferência](/developers/pt/reference/preferences/_checkout_preferences/post) com suas **credenciais de teste** e inicie a integração do seu projeto com as credenciais utilizadas.
2. Vá até o Mercado Pago (via [Payment Brick](/developers/pt/docs/checkout-bricks/payment-brick/payment-submission/wallet-credits) ou [Wallet Brick](/developers/pt/docs/checkout-bricks/wallet-brick/default-rendering))
3. Entre no Mercado Pago com uma conta diferente da usada para criar a preferência.
4. Confirme a compra.

------------
----[mpe, mco, mlu, mlc]---- 
1. [Crie uma preferência](/developers/pt/reference/preferences/_checkout_preferences/post) com suas **credenciais de teste** e inicie a integração do seu projeto com as credenciais utilizadas.
2. Vá até o Mercado Pago (via [Payment Brick](/developers/pt/docs/checkout-bricks/payment-brick/payment-submission/wallet) ou [Wallet Brick](/developers/pt/docs/checkout-bricks/wallet-brick/default-rendering))
3. Entre no Mercado Pago com uma conta diferente da usada para criar a preferência.
4. Confirme a compra.

------------

Pronto! Finalizadas essas etapas a integração terá sido concluída e você já poderá utilizar suas credenciais de produção para utilizar o Checkout Bricks.

> WARNING
>
> Atenção
>
> Não utilize e-mail de usuário de teste no campo de e-mail do Brick (se aplicável).