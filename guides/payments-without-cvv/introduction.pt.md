# Pagamentos automáticos

Esta documentação tem o objetivo de oferecer todas as ferramentas necessárias para realizar a integração da solução de pagamentos sem a necessidade de utilizar CVV (_Card Verification Value_) do cartão para pagamentos recorrentes.

> WARNING
> 
> Atenção
>
> Esta documentação destina-se apenas ao uso interno da equipe porque é um produto exclusivo. Para mais detalhes, entre em contato com a equipe comercial ou de integrações.

----[mlb]----
Com os pagamentos sem CVV, é possível realizar cobranças recorrentes (mensalidades escolares, contas de serviços utilitários, etc) com o Mercado Pago, tendo a liberdade de adaptar a solução da forma mais ótima para o seu negócio. A pré-aprovação só está disponível por meio do checkout personalizado, ou seja, via utilização do [Checkout Transparente](/developers/pt/docs/checkout-api/landing) ou [Checkout Bricks](/developers/pt/docs/checkout-bricks/landing).

------------
----[mla, mlm, mpe, mco, mlu, mlc]----
Com os pagamentos sem CVV, é possível realizar cobranças recorrentes (mensalidades escolares, contas de serviços utilitários, etc) com o Mercado Pago, tendo a liberdade de adaptar a solução da forma mais ótima para o seu negócio. A pré-aprovação só está disponível por meio do checkout personalizado, ou seja, via utilização do [Checkout API](/developers/pt/docs/checkout-api/landing) ou [Checkout Bricks](/developers/pt/docs/checkout-bricks/landing).

------------

Além disso, o vendedor deve cumprir as seguintes políticas de integração do Mercado Pago:

- O vendedor deve comunicar de maneira clara e inequívoca à sua base de usuários ou clientes que a plataforma de pagamento em seu site é fornecida pelo Mercado Pago, indicando também e os prazos, datas e valores dos pagamentos recorrentes.

- No caso de usuários ou clientes existentes do vendedor estarem sendo migrados para a plataforma de pagamentos recorrentes do Mercado Pago, o vendedor deve comunicar por escrito indicando que o Mercado Pago processará os pagamentos, informando que na fatura verá a cobrança como Mercado Pago ou Mercado Livre.

> No caso de cartões de crédito **Master e Amex**, na fatura do cartão aparecerá como: `MP*&ltbrand_name&gt`. Portanto, para esses meios de pagamento, você pode comunicar: "Na sua fatura, você verá a cobrança como `MP*&ltbrand_name&gt`" onde `&ltbrand_name&gt` é configurado na conta do Mercado Pago do vendedor, acessando [Seu negócio > Configurações > Dados do seu negócio.](https://www.mercadopago[FAKER][URL][DOMAIN]/business#from-section=menu)