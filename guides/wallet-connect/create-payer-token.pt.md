# Criar payer token

Com o _agreement_ criado e a aprovação do comprador concedida, é preciso criar o _payer token_. O_ payer token_ é responsável por armazenar os dados do comprador e garantir a segurança da transação, além de ser um atributo mandatório para criar transações durante todo o período de validade do `agreement` criado anteriormente.

Confira o diagrama abaixo que ilustra como funciona o fluxo de criação de um payer token.

![Criar payer token](/images/wallet-connect/create-payer-token.pt.png)

Para criar um _payer token_, envie um **POST** com todos os atributos necessários ao endpoint [/v2/wallet_connect/agreements/{agreementId}/payer_token](/developers/pt/reference/wallet_connect/_wallet_connect_agreements_agreement_id_payer_token/post) e execute a requição.

Com o payer token criado, a integração com o Wallet Connect terá sido concluída com sucesso. Dessa forma, recomendamos que veja a documentação [Webhooks](/docs/wallet-connect/additional-content/notifications/webhooks) para configurar as notificações e receber informações em tempo real sempre que um evento acontecer.

