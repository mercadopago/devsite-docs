# Como migrar do SDK JS V1 para SDK JS V2 com Secure Fields

Nesse artigo explicaremos as configurações necessárias para a migração da **utilização de SDK de JavaScript na versão 1** para a **utilização da SDK de JavaScript na Versão 2 com Secure Fields**.

A migração é bastante simples e a ordem de acontecimentos é exatamente a mesma, as diferenças são: 

* Alteramos a forma de instanciar o Mercado Pago; 
* Não utilizaremos mais as funções de callback de cada método, mas sim o retorno deles para trabalhar com os dados;
* Os nomes de alguns métodos também sofreram algumas pequenas alterações e estas ficaram mais claras nos snippets comparativos.

> WARNING
>
> Atenção
>
> A migração não afetará em nada o seu backend, as modificações são inteiramente no frontend da aplicação.

Veja abaixo um comparativo dos diagramas. 

* **Diagrama de sequência V1**

![java-v1](/images/sdk/sdk-java-v1-pt.png)

* **Diagrama de sequência V2**

![java-v2](/images/sdk/sdk-java-v2-pt.png)

## Alterar a importação do script

O nome do arquivo JS no CDN foi alterado e será necessário modificar no HTML a importação do script.

* **V1**

```html
<script 
   src="https://secure.mlstatic.com/sdk/javascript/v1/mercadopago.js"></script>
`````

* **V2** 

```html
<script src="https://sdk.mercadopago.com/js/v2"></script>
`````

## Instanciar Mercado Pago

Como mencionado anteriormente, a instanciação do Mercado Pago também foi alterada.

* **V1**

```javascript
 
   window.Mercadopago.setPublishableKey("YOUR_PUBLIC_KEY");
````

* **V2** 

```javascript
 
   const mp = new MercadoPago("YOUR_PUBLIC_KEY"); 
````

## Criar campos PCI

Com o Secure Fields, mudou um pouco a forma de implementação dos campos de `card number`, `expiration date` e `security code`. Com essa nova proposta bem mais segura, não é necessário criar tags inputs destes campos em seu HTML, agora deveremos criar apenas as `divs` onde os inputs serão renderizados e deixar que o Mercado Pago envie iframes para os campos, como nos exemplos abaixo.

* **A data de vencimento na V1**

```html
<div>
  <input type="text" placeholder="MM" id="cardExpirationMonth" data-checkout="cardExpirationMonth">
  <span class="date-separator">/</span>
  <input type="text" placeholder="YY" id="cardExpirationYear" data-checkout="cardExpirationYear">
</div>
`````

* **Card number na V1**

```html
<input type="text" id="cardNumber" data-checkout="cardNumber" />
`````

* **Código de segurança na V1**

```html
<input id="securityCode" data-checkout="securityCode" type="text" />
`````

Agora, apenas com as `divs` e os `IDs` correspondentes, ficará da seguinte maneira:

* **A data de vencimento na V2**

```html
<div id="expirationDate"></div>
`````

* **Card number na V2**

```html
<div id="cardNumber"></div>
`````

* **Código de segurança na V2**

```html
<div id="securityCode"> </div>
`````

E além das `divs`, no caso do Secure Fields precisaremos informar aos MP onde ele deverá montar os inputs. Utilizando como exemplo as `divs` indicadas acima, o script ficará assim:

```javascript

  const cardNumberElement = mp.fields.create('cardNumber', {
  placeholder: "Número do cartão"
}).mount('cardNumber');

const expirationDateElement = mp.fields.create('expirationDate', {
  placeholder: "MM/YY",
}).mount('expirationDate');

const securityCodeElement = mp.fields.create('securityCode', {
  placeholder: "Código de segurança"
}).mount('securityCode');
````

Com isso, agora temos os nossos campos PCI seguros dentro do formulário.

## Obter tipos de documento

Agora o `getIdentificationTypes` retorna uma promise e a forma de popular a tag select mudou.
	
No caso da **SDK V1**, a tag select era populada automaticamente no select com `id=’docType’`, depois da chamada do `getIdentificationTypes()`.

```html
<body 
   <select id="docType" name="docType" data-checkout="docType" type="text"></select>
</body>
`````

```javascript
 window.Mercadopago.getIdentificationTypes();
````

Na **V2** a chamada do método retorna uma promise com lista de `identificationTypes` e você deverá popular a tag select com o ID que você quiser, utilizando o exemplo anterior com o `id=’docType’`, a implementação ficaria da seguinte maneira:

> Sabendo que o método `getIdentificationTypes` é uma retorna uma promise e a mesma deve ser executada logo após a renderização, uma opção é usar uma [IIFE,](https://developer.mozilla.org/en-US/docs/Glossary/IIFE) como no exemplo abaixo.

```javascript
 (async function getIdentificationTypes() {
      try {
        const identificationTypes = await mp.getIdentificationTypes();

        const identificationTypeElement = document.getElementById('docType');

        createSelectOptions(identificationTypeElement, identificationTypes);

      } catch (e) {
        return console.error('Error getting identificationTypes: ', e);
      }
})();

function createSelectOptions(elem, options, labelsAndKeys = { label: "name", value: "id" }) {

      const { label, value } = labelsAndKeys;

      elem.options.length = 0;

      const tempOptions = document.createDocumentFragment();

      options.forEach(option => {
        const optValue = option[value];
        const optLabel = option[label];

        const opt = document.createElement('option');
        opt.value = optValue;
        opt.textContent = optLabel;

        tempOptions.appendChild(opt);
      });

      elem.appendChild(tempOptions);
}
````

## Obter método de pagamento do cartão

Agora, o `getPaymentMethod` é o `getPaymentMethods` (no plural). Ainda na V1 esse método recebia dois parâmetros, um objeto contendo o `bin` (6 primeiros dígitos do cartão ainda na V1) e uma função de callback que seria executada no retorno do método. 

* **V1**

```javascript
window.Mercadopago.getPaymentMethod({
    "bin": bin
}, callbackFn);
````

```javascript
document.getElementById('cardNumber').addEventListener('change', guessPaymentMethod);
````

> NOTE
>
> Importante
> 
> O código `bin` na V2 não é de apenas 6 dígitos, mas sim de 8 dígitos e essa mudança não interfere em nada a implementação. Além disso, o código não é mais acessível através do componente de `cardNumber` porque agora no campo não existe mais um input, mas sim uma `div` e, dentro da `div`,existe um iframe. <br/><br/>
> <br/> <br/>
> Agora, para recuperar o bin devemos ouvir o evento `binChange` que existe na div em que está contido o **card number**.

* **V2**

```javascript
cardNumberElement.on('binChange', guessPaymentMethod);
````

A função que será executada no evento de `binChange` receberá por parâmetro um objeto contendo o `bin`. Na V2 esse `getPaymentMethods` é uma **promise** que recebe apenas um objeto contendo o `bin` como parâmetro e retorna um objeto contendo um array dos **payment methods** quando a promise for resolvida.

```javascript
async function getPaymentMethods(data) {
    const { bin } = data
    const { results } = await mp.getPaymentMethods({ bin });
        // O id do payment estará em results[0].id
    …
}
````

## Obter banco emissor

Antes o `getIssuers` recebia dois parâmetros, o `paymentMethodId` e uma função de callback que era executada no retorno do método. 

* **V1**

```javascript
window.Mercadopago.getIssuers(
    paymentMethodId, callBackFn
);

function callBackFn(status, response) {
    if (status == 200) {
        response.forEach( issuer => {
           ...
        });
    }
}
````

Na V2 esse método correspondente é uma promise que recebe um objeto contendo `bin` e o `paymentMethodId` como parâmetros, retornando os _issuers_ quando a promise for resolvida.

* **V2**

```javascript
async function getIssuers(paymentMethodId, bin) {
    const issuears = await mp.getIssuers({paymentMethodId, bin });
    ...
};
````

## Obter quantidade de parcelas

Antes o `getInstallments` recebia dois parâmetros, um objeto contendo o `payment_method_id`, o `amount` e o `issuer_id`, e o outro parâmetro era uma função de callback que era executada no retorno do método. 

* **V1**

```javascript
window.Mercadopago.getInstallments({
       "payment_method_id": paymentMethodId,
       "amount": parseFloat(transactionAmount),
       "issuer_id": parseInt(issuerId)
   }, callbackFn
);

function callBackFn(status, response) {
   if (status == 200) {
      response[0].payer_costs.forEach( payerCost => {
        ...
       });
   }
}
````

Na V2 esse método é uma promise e recebe um objeto como parâmetro contendo o `amount`, o `bin` e o `paymentTypeId` onde o `paymentTypeId` deve sempre receber o valor `credit_card`.

* **V2**

```javascript
async function getInstallments(paymentMethodId, bin) {
    const installments = await mp.getInstallments({
        amount: document.getElementById('transactionAmount').value,
        bin,
        paymentTypeId: 'credit_card'
    });
    ...
};
````

## Criar token do cartão

Finalmente, no submit do formulário, é gerado o token que é enviado ao backend e isso continua funcionando parcialmente do mesmo jeito, só algumas mudanças nas invocações e nos nomes dos métodos.

O método de criação do token também teve alteração no nome, na V1 era `createToken` e na V2 é `createCardToken`.

Na V1, o método `createToken` recebia dois parâmetros, o formulário, e a função de callback que é executada ao fim da criação do token.

* **V1**

```javascript
window.Mercadopago.createToken($form, setCardTokenAndPay);
````

Na V2, o método recebe um objeto contendo o `cardholderName`, `identificationType` e o `identificationNumber`, e esse método retorna uma promise com o token.

* **V2**

```javascript
async function createCardToken(){
    const token = await mp.fields.createCardToken({
        cardholderName,
        identificationType, 
        identificationNumber, 
    });
    ...
}
````

## Enviar o pagamento

Agora com o token em mãos, basta adicionar o token ao formulário e submetê-lo, como explicado na documentação de [Integração via Métodos Core](/developers/pt/docs/checkout-api/integration-configuration/card/integrate-via-core-methods#bookmark_enviar_pagamento).  

Exemplo de implementação:

```javascript
doSubmit = false;
document.getElementById('paymentForm').addEventListener('submit', getCardToken);

async function getCardToken(event) {
    event.preventDefault();
    if (!doSubmit) {
        let $form = document.getElementById('paymentForm');
        const token = await mp.fields.createCardToken({
            cardholderName: document.getElementById('cardholderName').value,
            identificationType: document.getElementById('docType').value,
            identificationNumber: document.getElementById('docNumber').value,
        })
        setCardTokenAndPay(token.id)
    }
};

function setCardTokenAndPay(token) {
    let form = document.getElementById('paymentForm');
    let card = document.createElement('input');
    card.setAttribute('name', 'token');
    card.setAttribute('type', 'hidden');
    card.setAttribute('value', token);
    form.appendChild(card);
    doSubmit = true;
    form.submit();
};
````

> NOTE
>
> Importante
>
> Para mais informações, acesse a [documentação do SDK JS V2 com Secure Fields.](/developers/pt/docs/checkout-api/integration-configuration/card/integrate-via-core-methods) Além disso, disponibilizamos um [exemplo completo](https://github.com/lucmkz/mp-migracao-sdk-v1-para-sdk-v2-sf/blob/main/migracao.html) de migração no código fonte com comentários que você pode usar como modelo.

## Outras alternativas

Existem duas outras alternativas de implementações que não englobam os **core methods**, que foram os métodos tratados neste artigo, e ambas as alternativas são tão seguras quanto a utilização dos core methods. Veja abaixo quais são essas alternativas.

### Cardform

----[mla, mlm, mpe, mco, mlu, mlc]----
A integração de pagamentos via cartão é feita via **cardform**. Neste modo de integração, o **MercadoPago.js** é responsável pelos fluxos necessários para obtenção das informações obrigatórias para a criação de um pagamento. Quando inicializado, uma busca é realizada para recolher os tipos de documentos disponíveis para o país em questão. Veja mais informações na documentação do [Checkout API](/developers/pt/docs/checkout-api/integration-configuration/card/integrate-via-cardform).

------------

----[mlb]----
A integração de pagamentos via cartão é feita via **cardform**. Neste modo de integração, o **MercadoPago.js** é responsável pelos fluxos necessários para obtenção das informações obrigatórias para a criação de um pagamento. Quando inicializado, uma busca é realizada para recolher os tipos de documentos disponíveis para o país em questão. Veja mais informações na documentação do [Checkout Transparente](/developers/pt/docs/checkout-api/integration-configuration/card/integrate-via-cardform).

------------

### Checkout Bricks

O Checkout Bricks é um conjunto de módulos de interface do usuário que já vêm prontos para o front-end e são otimizados para uma melhor usabilidade e conversão. Cada Brick pode ser utilizado de forma independente ou em conjunto, formando a experiência de um checkout completo. Veja mais informações na documentação do [Checkout Bricks](/developers/pt/docs/checkout-bricks/landing).