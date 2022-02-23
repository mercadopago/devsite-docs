## Guardar tarjeta

Almacena de manera segura en nuestro servidores la referencia de la tarjeta utilizada por el cliente en el pago para evitar volver a pedir todos los datos en futuras transacciones.

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


## Obtener tarjetas de un cliente

Consulta el listado de tarjetas almacenadas de un cliente para poder mostrarlas al momento de hacer un pago.

[[[
```java

CustomerCardClient client = new CustomerCardClient();

String customerId = "448870796-7ZjwhKGxILixxN";
client.listAll(customerId);
```
]]]

## Obtener tarjeta

Consulta la información de referencia de una tarjeta guardada asociada a un cliente.

[[[
```java

CustomerCardClient client = new CustomerCardClient();

String customerId = "448870796-7ZjwhKGxILixxN";
String cardId = "8987269652";
client.get(customerId, cardId);
```
]]]

## Eliminar tarjeta

Elimina los datos de una tarjeta asociada a un cliente siempre que lo necesites.


[[[
```java

CustomerCardClient client = new CustomerCardClient();

String customerId = "448870796-7ZjwhKGxILixxN";
String cardId = "8987269652";
client.delete(customerId, cardId);
```
]]]