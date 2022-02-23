## Obter cartões de um cliente

Consulte a lista de cartões armazenados de um cliente a fim de mostrá-los no momento de fazer um pagamento.

[[[
```dotnet

var customerClient = new CustomerClient();
ResourcesList<CustomerCard> customerCards = await customerClient.ListCardsAsync("CUSTOMER_ID");

```
]]]