> CLIENT_SIDE
>
> h1
>
> Inicializar datos en Bricks

## Tarjetas

En el formulario que se muestra para el pago con tarjeta, puedes empezar con los campos de documento y correo electrónico ya rellenados. Para eso, es necesario pasar la siguiente configuración en el objeto de inicialización del brick.

```javascript
settings = {
  ...,
  initialization: {
    ...,
    payer: {
      ...,
      email: 'jose@maria.com',
      identification: {
	  type: 'CPF',
	  number: '01234567890',
	},
    }
  }
}
}
```