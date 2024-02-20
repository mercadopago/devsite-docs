# Reembolsar pagos

Los reembolsos son transacciones realizadas cuando cierto cobro es revertido y los valores pagados son devueltos al comprador. Esto significa que el cliente recibirá de vuelta en su cuenta o en la factura de su tarjeta, el valor pagado en la adquisición de cierto producto o servicio.

Con Wallet Connect, también es posible reembolsar un Advanced Payment. Esta operación cambiará el estado a `refunded`.

> WARNING
>
> Importante
>
> El reembolso no ocurre inmediatamente. La llamada a este endpoint activa un proceso asíncrono que reembolsa el pago, y su cambio será notificado a través de un [Webhooks](/developers/es/docs/wallet-connect/additional-content/your-integrations/notifications/webhooks).

El diagrama a continuación ilustra el flujo de reembolso de un pago.

![refund-a-payment](/images/wallet-connect/refund-a-payment.es.png)
