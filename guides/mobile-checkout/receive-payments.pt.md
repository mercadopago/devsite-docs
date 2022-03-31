# Recebendo pagamentos

> WARNING
>
> Pré-requisitos
>
> * Esta guia presume que você já tenha seguido os passos da seção ‘introdução da documentação para instalação do SDK’.

Esta guia irá ajudá-lo a integrar o componente visual de pagamento do Mercado Pago em sua aplicação. Este componente gerencia a seleção do meio de pagamento, a coleta de dados do meio de pagamento do usuário e a comunicação do resultado do pagamento.

## A integração consiste em duas etapas:
- Integração em seu servidor: nesta etapa, você receberá a informação sobre o pagamento.
- Integração em sua aplicação: nesta etapa, você irá configurar o componente visual.

![Schema payment mobile Mercado Pago](/images/mobile-sdk-schema.png)

1. Crie a preferência de pagamento a partir de seu servidor nos servidores do MercadoPago.
2. Inicie o Checkout em sua aplicação utilizando a ID da preferência.
3. O Checkout efetuará o pagamento nos servidores do MercadoPago.
4. Inscreva-se nas notificações para obter informações sobre seus novos pagamentos e atualizações de status.