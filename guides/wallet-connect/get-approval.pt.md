# Obter aprovação 

Com a vinculação criada, é preciso obter a aprovação do comprador para utilizar os dados de pagamento salvos na carteira Mercado Pago. Essa aprovação ocorre durante o fluxo de pagamento e utiliza-se de dois parâmetros retornados na resposta da criação da vinculação:

* `agreement_uri`: endereço para onde o comprador é redirecionado para conceder o acesso à carteira do Mercado Pago para realizar o pagamento.
* `return_uri`: endereço de redirecionamento após a confirmação da vinculação concedida pelo comprador.

> NOTE
>
> Importante
>
> Ao confirmar a vinculação e obter a aprovação do comprador, uma notificação Webhooks será enviada com os detalhes da aprovação. Veja a seção [Confirmação da vinculação pelo usuário](/developers/pt/docs/wallet-connect/additional-content/your-integrations/notifications/webhooks) para mais detalhes.

Veja abaixo o diagrama que ilustra o processo de aprovação do comprador.

![Obter aprovação](/images/wallet-connect/get-payer-approval.pt.png)

O diagrama de sequência exibido anteriormente ilustra que a confirmação do comprador ocorre simultaneamente ao processo de compra. Dentro deste cenário, o comprador concede autorização para integrar sua conta do Mercado Pago, permitindo o uso dos diversos métodos de pagamento oferecidos para efetivar a transação.

Após concluir a vinculação, consulte a seção [Gerar token de pagamento](/developers/pt/docs/wallet-connect/account-linking-flow/create-payer-token). Essa etapa é fundamental para finalizar com sucesso o fluxo de vinculação de contas, habilitando a progressão para a fase subsequente do fluxo de pagamentos.


