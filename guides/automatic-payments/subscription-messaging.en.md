# Automatic payments messaging

Automatic payments messaging, or **Subscription Messaging**, involves information about recurring payments (previous payment ID, subscription ID, number of times the payment will be generated, and POI with `type = SUBSCRIPTIONS`) that is sent to the [Payments API](/developers/en/reference/payments/_payments/post) with the aim of increasing the approval rate for these types of payments.

> WARNING
>
> Important
>
> In the case of recurring payment transactions with the Visa brand, it will be necessary to send the transaction identifier (TID) in messaging transactions. For more information on how to send the TID, check the documentation [Network Transaction ID - TID](/developers/en/docs/automatic-payments/recurring-charges/network-transaction-id).

## Configuration

See below how to send recurring payment information to the [create payment request](/developers/en/reference/payments/_payments/post).

### Process the first payment

For the **first payment** in the recurring messaging, you will need to send the following information to the [v1/payments](/developers/en/reference/payments/_payments/post) endpoint through the `point_of_interaction `parameter.

- Indicate that the type is subscription (`type = SUBSCRIPTIONS`);
- Indicate that it is the first transaction (`first_time_use = TRUE`);
- Indicate the payment `subscription_id` (we suggest using the `collector` + a unique subscription `ID` per user);
- Number of installments (`subscription_sequence`);
- Frequency of the charges (`invoice_period`);
- Billing date (`billing_date`).

Example:

```json
"point_of_interaction": {
    "type": "SUBSCRIPTIONS",
    "transaction_data": {
        "first_time_use": true,
        "subscription_id": "COLLECTORPADRE-SUBSCRIPCION_ID",
        "subscription_sequence": {
            "number": 1,
            "total": 12
        },
        "invoice_period": {
            "period": 1,
            "type": "monthly"
        },
        "billing_date": "2024-03-16"
    }
}
```

### Process subsequent payments

For **subsequent payments** in the recurring messaging, you will need to resend the first payment's information to the [v1/payments](/developers/en/reference/payments/_payments/post) endpoint through the `point_of_interaction` parameter, modifying the data as shown below.

- Indicate that **it is not** the first transaction (`first_time_use = FALSE`);
- Indicate the payment `subscription_id` (we suggest using the `collector` + a unique subscription `ID `per user);
- Current installment number (`subscription_sequence = number`);
- Total number of installments (`subscription_sequence = total`);
- Frequency of the charges (`invoice_period`);
- Billing date (`billing_date`);
- User is present when making the payment (`user_present`);
- Reference number of the first payment (`payment_reference`).

> WARNING
>
> Attention
> 
> In the `payment_reference.id`, the ID of the first payment in the sequence should remain.

Example:

```json
"point_of_interaction": {
    "type": "SUBSCRIPTIONS",
    "transaction_data": {
        "first_time_use": true,
        "subscription_id": "COLLECTORPADRE-SUBSCRIPCION_ID",
        "subscription_sequence": {
            "number": 2,
            "total": 12
        },
        "invoice_period": {
            "period": 2,
            "type": "monthly"
        },
        "payment_reference": {
            "id": "20792195335"
        },
	  "user_present": true/false,
        "billing_date": "2024-04-16"
    }
}
```

| Parameter  | Type  | Description  | Example |
| --- | --- | --- | --- |
| type | string | Indicates the type of 'poi'	 | SUBSCRIPTIONS |
| first_time_use| boolean | Indicates if it is the first payment of the subscription | true/false |
| subscription_id | string | Subscription identifier | "COLLECTORPADRE-SUBSCRIPCION_ID" |
| subscription_sequence.number |integer | Indicates the number of the subsequent payment	  | 3 |
| subscription_sequence.total |integer | Indicates the total number of the subscription. For permanent subscriptions, set to 'null' | 12 |
| invoice_period.period |integer | Indicates the frequency of the recurring payment	 | 1 |
| invoice_period.type | string | Indicates the type of recurring payment period | daily, monthly ou yearly |
| user_present | boolean | Indicates if there was user intervention at the time of payment creation |true/false |
| billing_date | string | Billing date | 2024-03-16 |
| payment_reference.id | string | Validation OK payment ID | 20792195335 |
| transaction_amount | number | Payment amount |100 |
| token | string | Card token | 12346622341 |
| description | string | Payment description | "Pagamento de teste" |
| payment_method_id | string | Indicates the identifier of the selected payment method | master |
| payer.email | string | Payer's email | buyer@examplemail.com |
| payer.type | string | Type of payer identification associated | guest |