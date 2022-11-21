# Obter aprovação 

Com o _agreement_ criado, é preciso obter a aprovação do comprador para utilizar os dados de pagamento salvos na carteira Mercado Pago. Essa aprovação ocorre durante o fluxo de pagamento e utiliza-se de dois parâmetros retornados na resposta da criação do agreement:

* `agreement_uri`: endereço para onde o comprador é redirecionado para conceder o acesso à carteira do Mercado Pago para realizar o pagamento.
* `return_uri`: endereço de redirecionamento após a confirmação do agreement concedida pelo comprador.

Veja abaixo o diagrama que ilustra o processo de aprovação do comprador.

![Obter aprovação](/images/wallet-connect/get-payer-approval.pt.png)

Conforme indicado no diagrama de sequência acima, a aprovação do comprador ocorre no momento da compra, onde o mesmo dá o consentimento para conectar sua conta do Mercado Pago e utilizar os meios de pagamento disponíveis para conclusão da transação.

Com a conexão autorizada, veja a seção Criar payer token para concluir a integração do Wallet Connect.

