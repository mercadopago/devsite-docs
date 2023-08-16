# Update data

To update data in Payment Brick, we provide the update method through the Controller. When called, the update method will update the provided data while preserving the current instance of the Brick.

Data available for updating:

----[mlb, mla, mlm]----
| Field | Type | Description | Validation |
| --- | --- | --- | --- |
| amount | number | Payment amount. <br><br> Updating the `amount` doesn't affect payments via [Mercado Pago Wallet and Installments without card](/developers/en/docs/checkout-bricks/payment-brick/payment-submission/wallet-credits) as their values are set in the backend. | Before updating the `amount`, the Brick checks if the new value is greater than or equal to the minimum value allowed by the payment method selected by the user. If the validation is successful, the update method will return `true`. Otherwise, it will return `false`. |

------------
----[mpe, mco, mlu, mlc]----
| Field | Type | Description | Validation |
| --- | --- | --- | --- |
| amount | number | Payment amount. <br><br> Updating the `amount` doesn't affect payments via [Mercado Pago Wallet](/developers/en/docs/checkout-bricks/payment-brick/payment-submission/wallet) as their values are set in the backend. | Before updating the `amount`, the Brick checks if the new value is greater than or equal to the minimum value allowed by the payment method selected by the user. If the validation is successful, the update method will return `true`. Otherwise, it will return `false`. |

------------

[[[
```javascript
let amount = 95;
paymentBrickController.update({ amount });
```
```react-jsx
import Payment, { usePaymentBrick } from '@mercadopago/sdk-react';

const App = () => {
  const { update } = usePaymentBrick();

  const customization = {
    paymentMethods: {
      creditCard: 'all',
      debitCard: 'all',
    },
  };

  return (
    <>
      <button type="button" onClick={() => update({ amount: 95 })}>
        Update amount
      </button>

      <Payment
        initialization={{ amount: 100 }}
        customization={customization}
        onSubmit={async (param) => {
          console.log(param);
        }}
      />
    </>
  );
};

export default App;
```
]]]