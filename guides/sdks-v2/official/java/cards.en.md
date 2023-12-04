# Save card


It is possible to securely store the reference to a card used by the customer in the payment on our servers through the SDK below. For details of the request parameters, check the [Save card](/developers/en/reference/cards/_customers_customer_id_cards/post) API.

[[[
```java
CustomerCardClient client = new CustomerCardClient();

String customerId = "448870796-7ZjwhKGxILixxN";

CustomerCardCreateRequest request = CustomerCardCreateRequest.builder()
   .token("9b2d63e00d66a8c721607214ceda233a")
   .build();

client.create(customerId, request);
```
]]]

# Get customer cards

It is possible to get the card data of a certain customer through their customer ID using the SDK below. For details on the request parameters, check the [Get customer cards](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/cards/_customers_customer_id_cards/get) API.

[[[
```java

CustomerCardClient client = new CustomerCardClient();

String customerId = "448870796-7ZjwhKGxILixxN";
client.listAll(customerId);
```
]]]

# Get card

You can consult the reference information of a stored card associated with a customer using the SDK below. For details of the request parameters, check the  [Get Card](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/cards/_customers_customer_id_cards_id/get) API.

[[[
```java

CustomerCardClient client = new CustomerCardClient();

String customerId = "448870796-7ZjwhKGxILixxN";
String cardId = "8987269652";
client.get(customerId, cardId);
```
]]]

## Delete card

You can delete the reference of a card associated with the customer whenever necessary using the SDK below. For details of the request parameters, check the [Delete Card](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/cards/_customers_customer_id_cards_id/delete) API.

[[[
```java

CustomerCardClient client = new CustomerCardClient();

String customerId = "448870796-7ZjwhKGxILixxN";
String cardId = "8987269652";
client.get(customerId, cardId);
```
]]]

