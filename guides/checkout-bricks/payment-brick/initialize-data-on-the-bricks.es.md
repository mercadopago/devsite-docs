> CLIENT_SIDE
>
> h1
>
> Inicializar datos en Bricks

## Tarjetas

En el formulario que se muestra para el pago con tarjetas, puedes empezar con los campos de **documento** y **correo electrónico** ya rellenados. Para eso, es necesario pasar la siguiente configuración en el objeto de inicialización del Brick.

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

En el formulario que se muestra para el pago con Pix, puedes empezar con el **correo electrónico** ya rellenado. Para eso, es necesario pasar la siguiente configuración en el objeto de inicialización del Brick.

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

## Otros medios de pago

En el formulario que se muestra para el pago con **boleto bancário** y en **agencias de lotería** puedes empezar con los campos ya rellenados. Para eso, es necesario pasar la siguiente configuración en el objeto de inicialización del Brick.

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
## Otros medios de pago

En el formulario que se muestra para el pago con **Rapipago** y **Pago Fácil** puedes empezar con los campos ya rellenados. Para eso, es necesario pasar la siguiente configuración en el objeto de inicialización del Brick.

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
## Otros medios de pago

En el formulario que se muestra para el pago con **ticket** puedes empezar con los campos ya rellenados. Para eso, es necesario pasar la siguiente configuración en el objeto de inicialización del Brick.

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