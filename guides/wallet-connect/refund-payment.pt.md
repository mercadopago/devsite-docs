# Reembolsar pagamentos

Reembolsos são transações realizadas quando determinada cobrança é revertida e os valores pagos retornam para o comprador. Isso significa que o cliente receberá de volta em sua conta ou na fatura do cartão, o valor pago na aquisição de determinado produto ou serviço.

Com Wallet Connect, também é possível reembolsar um Advanced Payment. Esta operação mudará o status para `refunded`.


> WARNING
>
> Importante
>
> O reembolso não acontece imediatamente. A chamada para este endpoint aciona um processo assíncrono que reembolsa o pagamento, e sua alteração será notificada via webhook.


O diagrama abaixo ilustra o fluxo de reembolso de um Advanced Payment.

![refund-a-payment](/images/wallet-connect/refund-a-payment.pt.png)

