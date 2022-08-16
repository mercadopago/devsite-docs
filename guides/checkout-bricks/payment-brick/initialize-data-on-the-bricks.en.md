> CLIENT_SIDE
>
> h1
>
> Initialize data on the Bricks

## Cards

In the form displayed for payment by card, you can start with the document and email fields already filled in. For this, it is necessary to pass the following configuration in the brick's initialization object.

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