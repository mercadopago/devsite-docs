# Create a subscription

Subscribe your customers to receive payments in a periodic and automated way.

> WARNING
>
> Prerequisites
>
> * Have the [card information capture](/guides/payments/receiving-payment-by-card.en.md) implemented.
> * Store[customers and cards](/guides/payments/customers-and-cards.en.md).


## 1. Create a subscription plan

The plan contains the billing frequency info and the amount to be billed.

To create it, you must make a POST request:

[[[
```php
<?php
  $plan = new MercadoPago\Plan();
  $plan->description = "Monthly premium package";
  $plan->auto_recurring = array(
    "frequency" => 1,
    "frequency_type" => "months",
    "transaction_amount" => 200
  );
  $plan->save();
?>
```
```java
AutoRecurring autoRecurring = new AutoRecurring();
autoRecurring.setFrequency(1);
autoRecurring.setFrequencyType("Months");
autoRecurring.setTransactionAmount(200);

Plan plan = new Plan();
plan.setDescription("Monthly premium package");
plan.setAutoRecurring(autoRecurring);
plan.save();
```
```node

plan_data = {
      "description": "Monthly premium package",
      "auto_recurring": {
              "frequency": 1,
              "frequency_type": "months",
              "transaction_amount": 200
      }
}

mercadopago.plan.create(plan_data).then(function (data) {
  // Do Stuff...
}).catch(function (error) {
  // Do Stuff...
});
```
```ruby

plan = MercadoPago::Plan.new();
plan.description = "Monthly premium package";
plan.auto_recurring = {
  frequency: 1,
  frequency_type: "months",
  transaction_amount: 200
}
plan.save();

```
```curl
curl -X POST \
        -H 'accept: application/json' \
        -H 'content-type: application/json' \
        'https://api.mercadopago.com/v1/plans?access_token=ACCESS_TOKEN' \
        -d '{
                "description": "Monthly premium package",
                "auto_recurring": {
                        "frequency": 1,
                        "frequency_type": "months",
                        "transaction_amount": 200
                }
        }'
```
]]]



> These are the minimum and indispensable data to create a plan, but there are many other options in the section [Add special features to your plan.
](#add-special-features-to-your-plan).

**Response:**

HTTP status code: 201 Created

```json
{
  "id": "PLAN_ID",
  ...
  "status": "active",
  "description": "Monthly premium package",
  ...
  "auto_recurring": {
    "frequency": 1,
    "frequency_type": "months",
    "transaction_amount": 200,
    "currency_id": "ARS",
    ...
  },
  ...
}
```

## 2. Create a customer and attribute a card

In order to create a subscription, you must have a `Customer` with a card attributed to it.

For more information, go to the [Customers and Cards section](/guides/payments/api/customers-and-cards.en.md).

Only subscribe `customers` with verified cards.

Some options to do this are as follows:

1. Issue and authorization to the card for a low amount and cancel it immediately, in order to confirm that the card is valid.

2. Use the setup_fee attribute, which will charge an extra fee when trying to subscribe your user; and only if this fee is successfully charged, we will continue with the subscription registry.


## 3. Subscribe a customer to a plan

A subscription is an object that links a `Plan` and a `Customer`.

Make a POST by specifying the ID of the plan and the ID of the customer to be linked:

[[[
```php
<?php
  $subscription = new MercadoPago\Subscription();
  $subscription->plan_id = "PLAN_ID";
  $subscription->payer = array(
    "id"=>"CUSTOMER_ID"
  );
  $subscription->save();
?>
```
```java
payer = Payer.load("CUSTOMER_ID");

Subscription subscription = new Subscription();
subscription.setPlanId("PLAN_ID");
subscription.setPayer(payer);

subscription.save();
```
```node
subscription_data = {
    "plan_id": "PLAN_ID",
    "payer": {
            "id": "CUSTOMER_ID"
    }
}

mercadopago.subscription.create(subscription_data).then(function (data)) {
  // Do Stuff...
}).catch(function (error) {
  // Do Stuff...
});
```
```ruby

payer = MercadoPago::Payer.load("CUSTOMER_ID")

subscription = MercadoPago::Subscription.new()
subscription.plan_id = "PLAN_ID"
subscription.payer = payer
subscription.save()

```
```curl
curl -X POST \
        -H 'accept: application/json' \
        -H 'content-type: application/json' \
        'https://api.mercadopago.com/v1/subscriptions?access_token=ACCESS_TOKEN' \
        -d '{
                "plan_id": "PLAN_ID",
                "payer": {
                        "id": "CUSTOMER_ID"
                }
        }'
```
]]]



> NOTE
>
> Note
>
> The customer must have a `default_card` to be charged, suitable for the payment of subscriptions.


**Response:**

HTTP status code: 201 Created

```json
{
  "id": "SUBSCRIPTION_ID",
  "plan_id": "PLAN_ID",
  ...
  "status": "authorized",
  "description": "Monthly premium package",
  "payer": {
    "id": "CUSTOMER_ID",
    ...
  },
  "charges_detail": {
    "invoices": [...],
    ...
  },
  ...
}
```
**Important:** Collections are made in advance. In this case, the first collection will be made as soon as you subscribe a customer, rather than during the overdue month.

Upon the collection date, an `invoice` object will be created, which will contain the status of the subscription charge for that period. You can see the collection attempts on the `payments` object and the next payment date on `next_payment_attempt`.

## 4. Receive information about your subscription payments
You will receive notifications upon the creation or modification of a plan, subscription, invoice or payment.

Mercado Pago will use its best efforts to ensure that your `invoices` are paid, without requiring any action from you.

You should only deliver your product or service when the `invoice` for that period has been `paid`.

If we do not get a payment approval for the agreed billing date, we will retry up to four times during ten days, before the invoice is flagged as `unpaid`. In this case, you can pause or cancel the subscription.

Regardless of the status of the current invoice, if the subscription is active an invoice will be created for the next period.

Each declined payment will be notified to you via [Webhooks](/guides/notifications/webhooks.en.md). Assess the cause of the decline, and communicate your user to, for example, [update the credit card info](#) or change it for another, prior to the next payment attempt.

For more information, go to the [Webhooks section](/guides/notifications/webhooks.en.md).

## Add special features to your plan

Check the [plans API doc](#) to see all the settings you can use. This will allow you to adapt the billing of subscriptions to your business model. Next, we will show you the most important features you can specify when creating a plan. Keep in mind that they can be combined with each other to get the most out of it.

### Limit the number of subscription charges

You may specify that subscriptions will only last a specific amount of time (for example, that they receive up to 24 payments):

```json
{
  ...
  "auto_recurring": {
    ...
    "repetitions": 24,
    ...
  },
  ...
}
```

### Schedule the payments for a specific day of the month

If your subscription plan is monthly based, you can specify exactly what day of the month you want the payments to be made:

```json
{
  ...
  "auto_recurring": {
    ...
    "debit_date": 1,
    ...
  },
  ...
}
```

If you do not specify this attribute, the payments will be scheduled for the same day the subscription was entered in the system.

### Offer a free trial period

You can offer a trial period to your customers for a certain period:

```json
{
  ...
  "auto_recurring": {
    ...
    "free_trial": {
        "frequency": 1,
        "frequency_type": "months",
    }
    ...
  },
  ...
}
```

### Charge an additional fee when subscribing users

In many cases, it is useful to charge an extra fee when subscribing your user, for example, for the cost incurred with service installation.

You must specify the amount to be charged when creating the plan:

```json
{
  ...
  "setup_fee": 120.99,
  ...
}
```

This payment neither cancels nor is it part of the first invoice of the subscription.

If we are unable to charge that fee, the subscription will not be created.

### Charge a fee per transaction

If you implement the [Marketplace](#) and operate with the credentials of your connected users you can charge a fee for each payment you create. For that, all you have to do is to add this amount in the parameter `application_fee` when creating the plan:

```curl
{
  ...
  "application_fee": 3.99,
  ...
}
```


## Next steps

### Manage your subscription

In the [subscriptions management section](/guides/subscriptions/api/manage-subscription.en.md) you will find information on how to pause, reactivate or delete a subscription, and how to update the price of a plan.

### Test your integration

You can test your integration before going into production, in order to check the operation and make all the adjustments you need. To do this, use your Sandbox Mode credentials and test cards. Go to the [Testing](/guides/subscriptions/api/testing.en.md) section.
