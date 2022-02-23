## Save card

Store the card reference used by the customer in the payment securely on our servers to avoid asking for all the data in future transactions.

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

## Get customer cards

Consult a client's saved cards in order to be able to show them when making a payment.

[[[
```java

CustomerCardClient client = new CustomerCardClient();

String customerId = "448870796-7ZjwhKGxILixxN";
client.listAll(customerId);
```
]]]

## Get card

Check the reference information for a saved card associated with a customer.

[[[
```java

CustomerCardClient client = new CustomerCardClient();

String customerId = "448870796-7ZjwhKGxILixxN";
String cardId = "8987269652";
client.get(customerId, cardId);
```
]]]

## Delete card

Delete the data of a card associated with a customer whenever you need to.

[[[
```java

CustomerCardClient client = new CustomerCardClient();

String customerId = "448870796-7ZjwhKGxILixxN";
String cardId = "8987269652";
client.get(customerId, cardId);
```
]]]

