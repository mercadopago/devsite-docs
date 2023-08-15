# Update data

To update data in Card Payment Brick, we provide the update method through the Controller. When called, the update method will update the provided data while preserving the current instance of the Brick.

Data available for updating:

| Field | Type | Description | Validation |
| --- | --- | --- | --- |
| amount | number | Payment amount. | Before updating the `amount`, the Brick checks if the new value is greater than or equal to the minimum value allowed by the payment method selected by the user. <br> If the validation is successful, the update method will return `true`. Otherwise, it will return `false`. |

```javascript
let amount = 95;
cardPaymentBrickController.update({ amount });
```