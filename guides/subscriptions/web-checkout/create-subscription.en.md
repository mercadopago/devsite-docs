---
sites_supported:
    - mla
    - mlb
    - mlm
    - global
---

# Create subscriptions

Subscribe your customers to receive payments in a periodic and automated way.

## 1. Create a subscription preference

A subscription preference contains all the details of the product or service that is being paid on a recurring basis. For example:

1. Data and amount of what is going to be paid.
2. Subscription frequency.
3. Reference ID of your system.

To create a subscription preference, you must [install MercadoPago's SDK](/plugins) and configure the MP object with your [credentials](https://www.mercadopago.com.ar/account/credentials?type=basic).

[[[
```php
<?php
  require ('mercadopago.php');
  MercadoPago\SDK::configure(['ACCESS_TOKEN' => 'ENV_ACCESS_TOKEN']);
?>
```
```java
import com.mercadopago.*;
MercadoPago.SDK.configure("ENV_ACCESS_TOKEN");
```
```node
var mercadopago = require('mercadopago');
mercadopago.configure({
    access_token: 'ENV_ACCESS_TOKEN'
});
```
```ruby
require 'mercadopago'
MercadoPago::SDK.configure(ACCESS_TOKEN: ENV_ACCESS_TOKEN)
```
]]]

Then, you must add the attributes of your preference:

[[[
```php
<?php

  $preapproval = new MercadoPago\Preapproval();
  $preapproval->payer_email = "my_customer@my-site.com";
  $preapproval->back_url = "http://www.my-site.com";
  $preapproval->reason = "Monthly subscription to premium package";
  $preapproval->external_reference = "OP-1234";
  $preapproval->auto_recurring = array(
		"frequency" => 1,
		"frequency_type" => "months",
		"transaction_amount" => 60,
		"currency_id" => "[FAKER][CURRENCY][ACRONYM]"
  );

  $preapproval->save();

?>
```
```java

AutoRecurring autoRecurring = new AutoRecurring();
autoRecurring.setFrequency(1);
autoRecurring.setFrequencyType("Months");
autoRecurring.setTransactionAmount(60);
autoRecurring.setCurrencyId("[FAKER][CURRENCY][ACRONYM]");

Preapproval preapproval = new Preapproval();
preapproval.setPayerEmail("my_customer@my-site.com");
preapproval.setBackUrl("http://www.my-site.com");
preapproval.setReason("Monthly subscription to premium package");
preapproval.setExternalReference("OP-1234");
preapproval.setAutoRecurring(autoRecurring);
preapproval.save();

```
```node

var mercadopago = require('mercadopago');
mercadopago.configure({
    access_token: 'ENV_ACCESS_TOKEN'
});

preapproval_data = {
  payer_email: "my_customer@my-site.com",
  back_url: "http://www.my-site.com",
  reason: "Monthly subscription to premium package",
  external_reference: "OP-1234",
  auto_recurring: {
    frequency: 1,
    frequency_type: "months",
    transaction_amount: 60,
    currency_id: "[FAKER][CURRENCY][ACRONYM]"
  }
}

mercadopago.preapproval.create(preapproval_data).then(function (data)) {
  // Do Stuff...
}).catch(function (error) {
  // Do Stuff...
});

```
```ruby

preapproval = MercadoPago::Preapproval.new()
preapproval.payer_email = "my_customer@my-site.com"
preapproval.back_url = "http://www.my-site.com"
preapproval.reason = "Monthly subscription to premium package"
preapproval.external_reference = "OP-1234"
preapproval.auto_recurring = {
  frequency: 1,
  frequency_type: "months",
  transaction_amount: 60,
  currency_id: "[FAKER][CURRENCY][ACRONYM]"
}

preapproval.save()

```
]]]


> These are the minimum and indispensable data to create a plan, but there are many other options in the section [Add special features to your subscription](#añade-características-especiales-a-tu-suscripción).


## 2. Take the buyer to checkout

Once the preference has been created, use the URL found in the attribute `init_point` of the response to create a payment button:

```html
<!DOCTYPE html>
<html>
	<head>
		<title>Pagar</title>
	</head>
	<body>
		<a href="<?php echo $preapproval['response']['init_point']; ?>">Subscribe!</a>
	</body>
</html>
```

## 3. Receive information about the payment of your subscriptions

You will automatically receive notifications to be aware of your new payments and status updates.

MercadoPago will use its best efforts to ensure that your subscriptions are paid, without requiring any action from you.

If we do not get a payment approval for the agreed billing date, we will retry up to four times during ten days, before the invoice is flagged as unpaid. In this case, you can pause or cancel the subscription.

If the subscription is active, we will try to charge it in the next period.

Each declined payment will be notified to you through [Notifications](../../notifications/ipn.en.md). Assess the cause of the decline, and communicate your user to, for example, update the credit card info or change it for another, prior to the next payment attempt.

For more information, go to the [Notifications](/guides/notifications/ipn.en.md) section.

## 4. Test your integration

You can test your integration before going into production, in order to check the operation and make all the adjustments you need.

For that, you must use test users and cards.

For more information, go to the [Testing](/guides/payments/api/testing.es.md) section.

## Add special features to your subscription

Check the [Preapproval API doc](#)  to see all the settings you can use. This will allow you to adapt the billing of subscriptions to your business model.

Next, we will show you the most important features you can specify when creating a subscription. Keep in mind that they can be combined with each other to get the most out of it.

### Offer a free trial period

You can offer a trial period to your customers for a certain period by adding the start date:

```json
{
  ...
  "auto_recurring": {
    ...
    "start_date" => "2016-12-10T14:58:11.778-03:00",
    ...
  },
  ...
}
```

### Limit the number of subscription charges

You may specify that subscriptions will only last a specific amount of time:

```json
{
  ...
  "auto_recurring": {
    ...
    "end_date" => "2018-12-10T14:58:11.778-03:00",
    ...
  },
  ...
}
```
