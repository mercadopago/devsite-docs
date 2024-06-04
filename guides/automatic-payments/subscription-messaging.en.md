# Subscription messaging

**Subscription Messaging** involves information about recurring payments (previous payment ID, subscription ID, number of times the payment will be generated, and POI with `type = SUBSCRIPTIONS`) that is sent to the [Payments API](/developers/en/reference/payments/_payments/post) with the aim of increasing the approval rate for these types of payments.

## Configuration

See below how to send recurring payment information to the [v1/payments](/developers/en/reference/payments/_payments/post) endpoint.

### First payment

For the **first payment** in the recurring messaging, you will need to send the following information to the [create payment request](/developers/en/reference/payments/_payments/post) via the `point_of_interaction `parameter.

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

### Subsequent payments

For **subsequent payments** in the recurring messaging, you will need to resend the first payment's information to the [create payment request](/developers/en/reference/payments/_payments/post) via the `point_of_interaction` parameter, modifying the data as shown below.

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