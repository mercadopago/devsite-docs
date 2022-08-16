> CLIENT_SIDE
>
> h1
>
> Inicializar dados nos Bricks

## Cartões

No formulário exibido para pagamento com cartão, é possível inicializar com os campos de documento e e-mail já preenchidos. Para isso, é necessário passar a seguinte configuração no objeto de inicialização do brick.

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