# Dados adicionais

Dentro do callback `onSubmit` existe um segundo parâmetro, **de uso opcional**, chamado `additionalData.` Ele é um objeto e pode conter dados adicionais úteis para sua integração, mas que **não são necessários** para a confirmação do pagamento no backend.

Veja na tabela a seguir os campos contidos dentro do objeto `additionalData`.

| Campo | Tipo | Descrição |
|--- |--- | --- |
| bin | string | BIN do cartão inserido pelo usuário. Só é retornado no caso do usuário ter optado pelo pagamento com cartão. |

Veja abaixo um exemplo de uso:

```Javascript
const settings = {
 ...,
 callbacks: {
   onSubmit: ({ selectedPaymentMethod, formData }, additionalData) => {
     // callback chamado após o usuário clicar no botão de submissão dos dados
     // o parâmetro additionalData é opcional, você pode removê-lo se quiser
     console.log(additionalData);
     // exemplo de envio dos dados coletados pelo Brick para seu servidor
     return new Promise((resolve, reject) => {
       let url = undefined;
       if (selectedPaymentMethod === 'credit_card' || selectedPaymentMethod === 'debit_card') {
         url = 'process_payment_card';
       } else if (selectedPaymentMethod === 'bank_transfer') {
         url = 'process_payment_pix';
       } else if (selectedPaymentMethod === 'ticket') {
         url = 'process_payment_ticket';
       }


       if (url) {
         fetch(url, {
           method: "POST",
           headers: {
             "Content-Type": "application/json",
           },
           body: JSON.stringify(formData)
         })
           .then((response) => {
             // receber o resultado do pagamento
             resolve();
           })
           .catch((error) => {
             // lidar com a resposta de erro ao tentar criar o pagamento
             reject();
           })
       } else if (selectedPaymentMethod === 'wallet_purchase') {
         // wallet_purchase (Conta Mercado Pago) não precisa ser enviado pelo backend
         resolve();
       } else {
         reject();
       }
     });
   },
 },
}
```

```react-jsx
// variável onde o controller do Brick está salvo
cardPaymentBrickController.getAdditionalData()
        .then((additionalData) => {
            console.log("Additional data:", additionalData);
        })
        .catch((error) => console.error(error));
```

Caso não esteja utilizando o botão nativo de [enviar formulário do Brick](/developers/pt/docs/checkout-bricks/payment-brick/additional-customization/hide-element), você também pode acessar o objeto `additionalData` através do método `getAdditionalData`. Veja um exemplo de uso a seguir.

```javascript
// variável onde o controller do Brick está salvo
cardPaymentBrickController.getAdditionalData()
        .then((additionalData) => {
            console.log("Additional data:", additionalData);
        })
        .catch((error) => console.error(error));
```

> WARNING
>
> Atenção
>
> Chame o método `getAdditionalData` somente após o envio do formulário, ou seja, após você chamar o método [getFormData.](/developers/pt/docs/checkout-bricks/payment-brick/additional-customization/hide-element) Com isso, é garantido que os dados retornados são válidos e confiáveis.