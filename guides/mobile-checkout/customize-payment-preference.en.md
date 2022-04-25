# Customize the payment preference

If necessary, when creating the payment preference on your server, you can specify restrictions such as specific exclusions of payment methods or types and set the maximum or the default number of installments.

## Exclude Payment Methods

You can specify the types of payment method you do not want to accept (Cash, Credit or Debit Cards) by excluding them when creating the Checkout Preference.

In the content of the payment preference, you can add the payment methods or types of payment methods that you do not want to accept.

*Exclude a specific payment type*

```json
{
  "items": [
    ...
  ],
  "payer": {
    ...
  },
  "payment_methods": {
    "excluded_payment_types":[
        {"id":"ticket"}
    ]
  },
  ...
}
```

*Exclude more than one payment type:*


```json
{
  "items": [
    ...
  ],
  "payer": {
    ...
  },
  "payment_methods": {
    "excluded_payment_types":[
        {"id":"ticket"},
        {"id":"atm"},
        {"id":"debit_card"}
    ]
  },
  ...
}
```

You can even determine which specific payment methods (Visa, Mastercard, etc.) you want to exclude from the checkout:

*Exclude a specific payment method:*


```json
{
  "items": [
    ...
  ],
  "payer": {
    ...
  },
  "payment_methods": {
    "excluded_payment_methods":[
        {"id":"visa"}
    ]
  },
  ...
}
```

*Exclude more than one payment method:*


```json
{
  "items": [
    ...
  ],
  "payer": {
    ...
  },
  "payment_methods": {
    "excluded_payment_methods":[
        {"id":"visa"},
        {"id":"master"}
    ]
  },
  ...
}
```

## Customize the Installments

You can specify the maximum number of installments you want to accept for your payment methods.

```json
{
  "items": [
    ...
  ],
  "payer": {
    ...
  },
  "payment_methods": {
  	 "excluded_payment_methods": [
  	   ...
  	 ],
  	 "excluded_payment_types": [
  	   ...
  	 ],
    "installments": 1
  },
  ...
}
```

You can also set the number of installments by default, which will be selected automatically, if available for the payment method selected by the user. Otherwise, the installment options will be displayed for the user to select one:


```json
{
  "items": [
    ...
  ],
  "payer": {
    ...
  },
  "payment_methods": {
  	 "excluded_payment_methods": [
  	   ...
  	 ],
  	 "excluded_payment_types": [
  	   ...
  	 ],
    "default_installments": 3
  },
  ...
}
```