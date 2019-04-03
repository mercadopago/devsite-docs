# Binary Payment

You can define the payment so that the response is instantaneous or not.

In case it is instantaneous, the payment response will be `approved` or `rejected` (without intermediate states). On the contrary, the payment can be left as pending, for example, waiting for the payment to be credited in case of offline methods or credit card payments of high amounts where the buyer must call the card issuer to authorize the payment. 

This logic can be managed by setting, at the root of the Advanced Payment, the `binary_mode` field as `true` to return the immediate response and `false` for the contrary.

```json
  "binary_mode": true
```
