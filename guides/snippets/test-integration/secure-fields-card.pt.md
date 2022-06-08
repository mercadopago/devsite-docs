Para criar um pagamento é necessário fazer a captura dos dados do cartão através do navegador do comprador. Por questões de segurança, **é muito importante que os dados nunca cheguem aos seus servidores**.

Para capturar os dados do cartão, siga estas etapas:

1. [Inclua e configure a biblioteca MercadoPago.js](#bookmark_1._inclua_e_configure_a_biblioteca_mercadopago.js)
2. [Adicione o formulário de pagamento](#bookmark_2._adicione_o_formulário_de_pagamento)
3. [Integre o formulário com a biblioteca MercadoPago.js](#bookmark_3._integre_o_formulário_com_a_biblioteca_mercadopago.js)

### 1. Inclua e configure a biblioteca MercadoPago.js

**Utilize a nossa biblioteca oficial para acessar a API de Mercado Pago** desde seu frontend para coletar os dados de forma segura e configure sua [chave pública]([FAKER][CREDENTIALS][URL]) da seguinte forma:

```html
<body>
  <!-- Add step #2 -->
  <script src="https://sdk.mercadopago.com/js/v2"></script>
  <script>
      const mp = new MercadoPago('YOUR_PUBLIC_KEY');
      // Add step #3
  </script>
</body>
```

Se ainda não possui conta para ver suas credenciais, [registre-se](https://www.mercadopago[FAKER][URL][DOMAIN]/registration-mp).

> NOTE
>
> Nota
>
> Esta documentação utiliza a nova versão da biblioteca. Para ver a versão anterior, vá para a [seção de Integrar pagamentos com cartão com o MercadoPago.js V1](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-api/v1/receiving-payment-by-card).

A informação do cartão será convertida em um token para que os dados sejam enviados aos seus servidores de forma segura.

### 2. Adicione o formulário de pagamento

Para capturar os dados do cartão, primeiro você deve oferecer um formulário para carregar toda a informação.

Com a **funcionalidade CardForm da biblioteca MercadoPago.js V2**, você pode obter e validar todos os dados necessários, como identificar o tipo e o nome do meio de pagamento, o banco emissor, o número de prestações e mais.

CardForm permite que você tenha uma implementação segura e uma correta tokenização da informação do cartão.

Para os campos PCI (**Card Number**, **Expiration Date** e **Security Code**) deve-se criar `divs` que servirão de containers para os `iFrames`.

Utilize o formulário abaixo e adicione os estilos que desejar.

```html
<!-- Step #2 -->
<style>
  #form-checkout {
    display: flex;
    flex-direction: column;
    max-width: 600px;
  }

  .container {
    height: 18px;
    display: inline-block;
    border: 1px solid rgb(118, 118, 118);
    border-radius: 2px;
    padding: 1px 2px;
  }
</style>
<form id="form-checkout">
   <div id="form-checkout__cardNumber-container" class="container"></div>
   <div id="form-checkout__expirationDate-container" class="container"></div>
   <input type="text" name="cardholderName" id="form-checkout__cardholderName"/>
   <input type="email" name="cardholderEmail" id="form-checkout__cardholderEmail"/>
   <div id="form-checkout__securityCode-container" class="container"></div>
   <select name="issuer" id="form-checkout__issuer"></select>----[mla, mlb, mlu, mlc, mpe, mco]----
   <select name="identificationType" id="form-checkout__identificationType"></select>------------
   <input type="text" name="identificationNumber" id="form-checkout__identificationNumber"/>
   <select name="installments" id="form-checkout__installments"></select>
   <button type="submit" id="form-checkout__submit">Pagar</button>
   <progress value="0" class="progress-bar">Carregando...</progress>
 </form>
```

> GIT
> 
> Referência técnica
> 
> Veja mais informações sobre os diferentes atributos nas [referências técnicas](https://github.com/mercadopago/sdk-js).

### 3. Integre o formulário com a biblioteca MercadoPago.js

Para inicializar o CardForm, deve-se relacionar o ID de cada campo do formulário com os atributos correspondentes. A biblioteca será responsável pelo preenchimento, obtenção e validação de todos os dados necessários na hora de confirmar o pagamento.

Para que o IFrame seja renderizado, é necessário passar a opção `iframe` com valor `true` no objeto de parâmetro recebido pelo cardForm. Além disso, também é possível passar o `style` para os elementos.

```javascript
// Step #3
const cardForm = mp.cardForm({
   amount: '100.5',
   iframe: true,
   form: {
     id: 'form-checkout',
     cardholderName: {
       id: 'form-checkout__cardholderName',
       placeholder: "Titular do cartão",
     },
     cardholderEmail: {
       id: 'form-checkout__cardholderEmail',
       placeholder: 'E-mail'
     },
     cardNumber: {
       id: 'form-checkout__cardNumber-container',
       placeholder: 'Número do cartão',
     },
     securityCode: {
       id: 'form-checkout__securityCode-container',
       placeholder: 'Código de segurança'
     },
     installments: {
       id: 'form-checkout__installments',
       placeholder: 'Parcelas'
     },
     expirationDate: {
       id: 'form-checkout__expirationDate-container',
       placeholder: 'Data de vencimento (MM/YYYY)',
     },----[mla, mlb, mlu, mlc, mpe, mco]----
     identificationType: {
       id: 'form-checkout__identificationType',
       placeholder: 'Tipo de documento'
     },------------
     identificationNumber: {
       id: 'form-checkout__identificationNumber',
       placeholder: 'Número do documento'
     },
     issuer: {
       id: 'form-checkout__issuer',
       placeholder: 'Banco emissor'
     }
   },
   callbacks: {
     onFormMounted: function (error) {
       if (error) return console.log('Callback para tratar o erro: montando o cardForm ', error)
     },
     onSubmit: function (event) {
       event.preventDefault();
 
       const {
         paymentMethodId: payment_method_id,
         issuerId: issuer_id,
         cardholderEmail: email,
         amount,
         token,
         installments,
         identificationNumber----[mla, mlb, mlu, mlc, mpe, mco]----,
         identificationType------------
       } = cardForm.getCardFormData();
 
        fetch('/process_payment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            token,
            issuer_id,
            payment_method_id,
            transaction_amount: Number(amount),
            installments: Number(installments),
            description: 'product description',
            payer: {
              email,
              identification: {----[mla, mlb, mlu, mlc, mpe, mco]----
                type: identificationType,------------
                number: identificationNumber
             }
           }
         })
       })
     },
     onFetching: function (resource) {
       console.log('fetching... ', resource)
       const progressBar = document.querySelector('.progress-bar')
       progressBar.removeAttribute('value')
 
       return () => {
         progressBar.setAttribute('value', '0')
       }
     }
   }
 });
```

A opção de callbacks aceita diferentes funções que são ativadas em diversos momentos do fluxo.

> GIT
> 
> Referência técnica
> 
> Obtenha mais informações sobre os callbacks nas [referências técnicas](https://github.com/mercadopago/sdk-js/blob/main/API/card-form.md).

Ao enviar o formulário, geramos um token como uma representação segura dos dados do cartão. Você pode acessar este token usando a função `getCardFormData`, como mostramos anteriormente no callback `onSubmit`. Também armazenaremos o token em um `input` oculto dentro do seu formulário e o chamaremos de `MPHiddenInputToken`.

> WARNING
>
> Importante
>
> Tenha em conta que o token tem validade de 7 dias e só pode ser utilizado uma única vez.
