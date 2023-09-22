## Crear pago

Es posible crear y agregar información de pago utilizando el SDK a continuación. Para obtener detalles sobre los parámetros de la solicitud, consulte la API [Crear pago](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/payments/_payments/post).

[[[
```node
const client = new MercadoPago({ accessToken: 'ACCESS_TOKEN' });
const payments = new Payments(client);

const item = {
    id: "PR0001",
    title: "Point Mini",
    description: "Producto Point para cobros con tarjetas mediante bluetooth",
    pictureUrl: "https://http2.mlstatic.com/resources/frontend/statics/growth-sellers-landings/device-mlb-point-i_medium@2x.png",
    categoryId: "electronics",
    quantity: 1,
    unitPrice: "58.8"
};

const payer = {
    firstName: "Test",
    lastName: "Test",
    email: "test_user_123@testuser.com",
    entity_type: "individual",
    type: "customer",
};

const receiverAddress = {
    zipCode: "12312-123",
    stateName: "Rio de Janeiro",
    cityName: "Buzios",
    streetName: "Av das Nacoes Unidas",
    streetNumber: "3003"
};

const shipments = {
    receiverAddress: receiverAddress
};

const additionalInfo = {
    items: [item],
    payer: payer,
    shipments: shipments
};

const paymentOrder = {
    type: "mercadolibre"
};

const paymentPayer = {
    entityType: "individual",
    type: "customer"
};

const paymentData = {
    additionalInfo: additionalInfo,
    description: "Payment for product",
    externalReference: "MP0001",
    installments: 1,
    order: paymentOrder,
    payer: paymentPayer,
    paymentMethodId: "visa"
};

payments.create(paymentData, { idempotencyKey: '<SOME_UNIQUE_VALUE>' })
  .then((result) => { console.log(result); })
  .catch((error) => { console.error(error); });
```
]]]