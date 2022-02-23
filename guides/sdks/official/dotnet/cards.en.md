## Get customer cards

Consult a client's saved cards in order to be able to show them when making a payment.

[[[
```dotnet

var customerClient = new CustomerClient();
ResourcesList<CustomerCard> customerCards = await customerClient.ListCardsAsync("CUSTOMER_ID");

```
]]]