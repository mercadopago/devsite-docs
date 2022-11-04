> CLIENT_SIDE
>
> h1
>
> Inicializar dados nos Bricks

## Cartões

No formulário exibido para pagamento com cartões, é possível inicializar com os campos de **documento** e **e-mail** já preenchidos. Para isso, é necessário passar a seguinte configuração no objeto de inicialização do brick.

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

No formulário exibido para pagamento com Pix, é possível inicializar com o campo de **e-mail** já preenchido. Para isso, é necessário passar a seguinte configuração no objeto de inicialização do brick.

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

## Outros meios de pagamento

No formulário exibido para pagamento com **boleto bancário** e **pagamento em lotérica**, é possível inicializar com as informações já preenchidas. Para isso, é necessário passar a seguinte configuração no objeto de inicialização do brick.

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