# Fluxo de pagamentos

Fluxo de pagamentos são configurações específicas para Wallet Connect nas quais o integrador obtém um "payer token" do pagador ao realizar o fluxo do Agreement. Este "payer token" é usado pelo integrador para fazer o pagamento a partir da carteira digital do pagador. 

> WARNING
>
> Importante
>
> Somente é possível consumir a API de Advanced Payments após a  finalização do fluxo do Agreement. Para mais informações sobre como criar um agreement, veja a seção [Criar agreement](/developers/pt/docs/wallet-connect/integration-configuration/create-agreement).

Nesta documentação você encontra os seguintes endpoints para integração com  Advanced Payments:

* [Capturar pagamento](/developers/pt/docs/wallet-connect/advanced-payments/capture-payment)
* [Idempotência](/developers/pt/docs/wallet-connect/advanced-payments/idempotency)
* [Obter informações de pagamento](/developers/pt/docs/wallet-connect/advanced-payments/get-payment-information)
* [Reembolsar pagamento (total e parcial)](/developers/pt/docs/wallet-connect/advanced-payments/refund-payment)
