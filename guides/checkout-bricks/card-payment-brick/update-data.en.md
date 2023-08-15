# Update data

To update data in Card Payment Brick, we provide the update method through the Controller. When called, the update method will update the provided data while preserving the current instance of the Brick.

Data available for updating:

| Field | Type | Description | Validation |
| --- | --- | --- | --- |
| amount | number | Payment amount. |

```javascript
let amount = 95;
cardPaymentBrickController.update({ amount });
```