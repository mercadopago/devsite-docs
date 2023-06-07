# Como obter o Sponsor ID

> NOTE
>
> Nota
>
> Caso a plataforma parceira não possua uma conta Mercado Pago em nome da própria plataforma, será necessário [criar uma conta](https://www.mercadopago.com.br/registration-mp?mode=mp) para aplicar o seu ID de conta às transações.

Passo a passo para obter o ID da conta Mercado Pago:

1. Acesse o painel de credenciais da sua conta Mercado Pago. Se você não tiver nenhuma aplicação criada, verá um botão para criar uma nova aplicação.
![Suas integrações](/images/integration-guide-for-partners/partners-guide-1.png)

2. Após criar a aplicação, acesse a mesma.
![Aplicação criada](/images/integration-guide-for-partners/partners-guide-2.png)

3. Na seção de **Credenciais de produção**, você poderá visualizar suas chaves de integração.

4. Localize o Access Token e observe os últimos caracteres da chave privada. Esses caracteres correspondem ao ID da sua conta Mercado Pago.

Exemplo de visualização do ID da conta Mercado Pago:

![ID da conta Mercado Pago](/images/integration-guide-for-partners/partners-guide-3.png)

Você pode utilizar esse ID de conta em suas integrações e requisições de pagamento junto ao campo `sponsor_id` para associar as transações à sua conta Mercado Pago.