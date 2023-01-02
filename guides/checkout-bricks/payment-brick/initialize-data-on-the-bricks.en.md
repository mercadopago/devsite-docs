> CLIENT_SIDE
>
> h1
>
> Initialize data on the Bricks

## Cards

In the form displayed for payment by card, you can start with the **document** and **email** fields already filled in. For this, it is necessary to pass the following configuration in the Brick's initialization object.

```javascript
settings = {
  ...,
  initialization: {
    ...,
    payer: {
      ...,
      email: 'jose@maria.com',
      identification: {
          type: 'string',
          number: 'string',
      },
    }
  }
}
```

----[mlb]----
## Pix

In the form displayed for payment by Pix, you can start with the **email** field already filled in. For this, it is necessary to pass the following configuration in the Brick's initialization object.

```javascript
settings = {
  ...,
  initialization: {
   ...,
  payer: {
  email: 'jose@maria.com'
   }
}
```

## Other payment methods

In the form displayed for payment by **boleto bancário** and **payment in lottery**, you can start with the fields already filled in. For this, it is necessary to pass the following configuration in the Brick's initialization object.

```javascript
settings = {
  ...,
  initialization: {
 ...,
 payer: {
   firstName: 'José',
   lastName: 'Maria',
   identification: {
     type: 'CPF',
     number: '01234567890',
   },
   email: 'jose@maria.com',
   address: {
     zipCode: '01.310-100',
     federalUnit: 'São Paulo',
     city: 'São Paulo',
     neighborhood: 'Bela Vista',
     streetName: 'Avenida Paulista',
     streetNumber: '12345',
     complement: 'Casa 2',
   }
 }
}
```
------------
----[mla]----
## Other payment methods

In the form displayed for payment by **Rapipago** and **Pago Fácil**, you can start with the fields already filled in. For this, it is necessary to pass the following configuration in the Brick's initialization object.

```javascript
settings = {
  ...,
  initialization: {
   ...,
  payer: {
  email: 'jose@maria.com',
   }
}
```
------------
----[mlm]----
## Other payment methods

In the form displayed for payment by **ticket**, you can start with the fields already filled in. For this, it is necessary to pass the following configuration in the Brick's initialization object.

```javascript
settings = {
  ...,
  initialization: {
    ...,
    payer: {
      email: 'jose@maria.com',
      firstName: 'Jose',
      lastName: 'Maria',
    }
  }
}
```
------------