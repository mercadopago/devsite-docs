# URLs and events configuration

Below we will explain how to indicate the URLs that will be notified and how to configure the events for which notification will be received.

![ipn](/images/notifications/ipn__es.png)

1. Access the [IPN Notifications](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/notifications/ipn).
2. Next, configure the **URL** of **production** where notifications will be received.
3. You will also be able to experiment and test if the indicated URL is receiving notifications correctly, being able to verify the request, the response given by the server and the description of the event.
4. If you need to identify multiple accounts, at the end of the indicated URL you can specify the parameter `?customer=(sellername) endpoint` to identify the sellers.
5. Select the **events** from which you will receive notifications in `json` format using `HTTP POST` to the URL specified above. We notify you of events related to your orders (`merchant_orders`), chargebacks received (`chargebacks`), payments received (`payment`), payment attempts (`point_integration_ipn`) ou fraud alerts (`stop sending`).

