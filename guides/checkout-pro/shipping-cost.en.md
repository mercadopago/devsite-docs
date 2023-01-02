# Shipping cost

Shipping cost is the value charged for shipping the products sold. If this amount is already set, it is possible to display it separately from the total purchase amount at the time of payment.

1. Send a **POST** with the `cost` and `mode` attributes of the `shipments` parameter to the endpoint [/checkout/preferences](/developers/en/reference/preferences/_checkout_preferences/post).
2. In `cost`, enter the freight amount.
3. In `mode`, enter `not_specified`.
4. Execute the request.

```json
{
"shipments":{
"cost": 1000,
"mode": "not_specified",
}
}
```
