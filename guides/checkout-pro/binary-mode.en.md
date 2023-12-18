# Binary mode

You can enable binary mode if your business model requires payment approval to be instantaneous. In this way, the payment can only be approved or declined.

If disabled, payment may be pending (if any action is required from the buyer) or in process (if manual review is required).


> NOTE
>
> Important
>
> Enabling binary mode simplifies integration with Checkout Pro, but may result in a decrease in the percentage rate of approved payments. This is because, in order to maintain the instant flow, payments pending or still being processed will by default automatically be rejected.


To enable binary mode, send the parameter `binary_mode` with the value `true` to the endpoint [/checkout/preferences](/developers/en/reference/preferences/_checkout_preferences/post) as indicated in the example below and execute the request.


```json
"binary_mode": true
```

