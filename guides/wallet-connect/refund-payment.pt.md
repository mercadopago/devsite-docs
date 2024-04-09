# Reembolsar pagamento

Reembolsos são transações realizadas quando determinada cobrança é revertida e os valores pagos retornam para o comprador. Isso significa que o cliente receberá de volta em sua conta ou na fatura do cartão, o valor pago na aquisição de determinado produto ou serviço.

Com Wallet Connect, também é possível reembolsar um pagamento. Esta operação mudará o status para `refunded`.

> WARNING
>
> Importante
>
> O reembolso não acontece imediatamente. A chamada para este endpoint aciona um processo assíncrono que reembolsa o pagamento, e sua alteração será notificada via [Webhooks](/developers/pt/docs/wallet-connect/additional-content/your-integrations/notifications/webhooks).

O diagrama abaixo ilustra o fluxo de reembolso de um pagamento.

![refund-a-payment](wallet-connect/refund-a-payment.pt.png)