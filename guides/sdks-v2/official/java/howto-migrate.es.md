# Cómo migrar de Java SDK V1 a Java SDK V2 con Secure Fields

En este artículo, explicaremos las configuraciones necesarias para la migración de **usar JavaScript SDK en la versión 1** a **usar JavaScript SDK en la versión 2 con Secure Fields**.

La migración es bastante simple y el orden de los eventos es exactamente el mismo, las diferencias son:

* Cambiamos la forma de instanciar Mercado Pago;
* Ya no usaremos las funciones de devolución de llamada de cada método, sino su regreso al trabajo con los datos;
* Los nombres de algunos métodos también han sufrido algunos cambios menores y estos se han vuelto más claros en los fragmentos de comparación.

> WARNING
>
> Atenção
>
> La migración no afectará su backend de ninguna manera, las modificaciones están completamente en la interfaz de la aplicación.

Vea a continuación una comparación de los diagramas.

* **Diagrama de secuencia V1**

![java-v1](/images/sdk/sdk-java-v1-pt.png)

* **Diagrama de secuencia V2**

![java-v2](/images/sdk/sdk-java-v2-pt.png)

## Cambiar la importación del script

Se ha cambiado el nombre del archivo JS en el CDN y será necesario modificar la importación del script en el HTML.

* **V1**

```html
<script 
   src="https://secure.mlstatic.com/sdk/javascript/v1/mercadopago.js"></script>
`````

* **V2** 

```html
<script src="https://sdk.mercadopago.com/js/v2"></script>
`````

## Instancia Mercado Pago

Como se mencionó anteriormente, la instanciación de Mercado Pago también ha cambiado.

* **V1**

```javascript
 
   window.Mercadopago.setPublishableKey("YOUR_PUBLIC_KEY");
````

* **V2** 

```javascript
 
   const mp = new MercadoPago("YOUR_PUBLIC_KEY"); 
````

## Creando campos PCI

Con Secure Fields, la forma en que se implementan los campos `card number`, `expiration date` y `security code` ha cambiado un poco. Con esta nueva propuesta mucho más segura, no es necesario crear tags inputs para estos campos en tu HTML, ahora debemos crear solo los `divs` donde se renderizarán los inputs y dejar que Mercado Pago envíe iframes para los campos, como en los ejemplos a continuación.

* **La fecha de caducidad en V1**

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

* **Código de seguridad en V1**

```html
<input id="securityCode" data-checkout="securityCode" type="text" />
`````

Ahora, con solo los 'divs' y los 'ID' correspondientes, se verá así:

* **La fecha de caducidad en el V2**

```html
<div id="expirationDate"></div>
`````

* **Card number na V2**

```html
<div id="cardNumber"></div>
`````

* **Código de seguridad en V2**

```html
<div id="securityCode"> </div>
`````

Y además de los `divs`, en el caso de Secure Fields necesitaremos informar a los MPs donde debe montar las entradas. Usando los `divs` anteriores como ejemplo, el script se verá así:

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

Con eso, ahora tenemos nuestros campos PCI seguros dentro del formulario.

## Obtener tipos de documentos

Ahora `getIdentificationTypes` devuelve una promesa y la forma de completar la tag select ha cambiado.

En el caso de **SDK V1**, la etiqueta de selección se completó automáticamente en la selección con `id='docType'`, después de la llamada `getIdentificationTypes()`.

* **V1**

```html
<body 
   <select id="docType" name="docType" data-checkout="docType" type="text"></select>
</body>
`````

```javascript
 window.Mercadopago.getIdentificationTypes();
````

En **V2**, la llamada al método devuelve una promesa con una lista de `identificationTypes` y debe completar la tag select con la ID que desee, usando el ejemplo anterior con `id='docType'`, la implementación se vería así:

> Sabiendo que el método `getIdentificationTypes` es una devolución de una promise y debe ejecutarse justo después de renderizar, una opción es usar un [IIFE,] (https://developer.mozilla.org/en-US/docs/Glossary/IIFE) como en el siguiente ejemplo.

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

## Obtener método de pago con tarjeta

Ahora `getPaymentMethod` es `getPaymentMethods` (en plural). Todavía en V1, este método recibió dos parámetros, un objeto que contenía el `bin` (los primeros 6 dígitos de la tarjeta aún en V1) y una función de callback que se ejecutaría en la devolución del método.

* **V1**

```html
<body 
   <select id="docType" name="docType" data-checkout="docType" type="text"></select>
</body>

`````

```javascript
window.Mercadopago.getPaymentMethod({
    "bin": bin
}, callbackFn);
````

> NOTE
>
> Importante
> 
> El código `bin` en V2 no tiene solo 6 dígitos, sino 8 dígitos y este cambio no interfiere en absoluto con la implementación. Además, ya no se puede acceder al código a través del componente `cardNumber` porque ahora ya no hay una entrada en el campo, sino un `div` y, dentro del `div`, hay un iframe. <br/><br/>
> <br/> <br/>
> Ahora, para recuperar el bin debemos escuchar el evento `binChange` que existe en el div donde está contenido el **card number**.

* **V2**

```javascript
cardNumberElement.on('binChange', guessPaymentMethod);
````

La función que se ejecutará en el evento `binChange` recibirá un objeto que contenga el `bin` como parámetro. En V2, este `getPaymentMethods` es una **promise** que toma solo el `bin` como parámetro y devuelve un objeto que contiene un array de **medios de pago** cuando se resuelve la promise.

```javascript
async function getPaymentMethods(data) {
    const { bin } = data
    const { results } = await mp.getPaymentMethods({ bin });
        // O id do payment estará em results[0].id
    …
}
````

## Obtener banco emisor

Anteriormente, `getIssuers` recibía dos parámetros, `paymentMethodId` y una función de devolución de llamada que se ejecutaba cuando el método regresaba.

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

En V2, este método correspondiente es una promise que toma un objeto que contiene `bin` y `paymentMethodId` como parámetros, devolviendo los _issuers_ cuando se resuelve la promise.

* **V2**

```javascript
async function getIssuers(paymentMethodId, bin) {
    const issuears = await mp.getIssuers({paymentMethodId, bin });
    ...
};
````

## Obtener número de cuotas

Anteriormente, `getInstallments` recibía dos parámetros, un objeto que contenía `payment_method_id`, `amount` y `issuer_id`, y el otro parámetro era una función de callback que se ejecutaba en la devolución del método.

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

En la V2 este método es una promesa y recibe un objeto como parámetro que contiene el `amount`, el `bin` y el `paymentTypeId` donde `paymentTypeId` siempre debe recibir el valor `credit_card`.

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

## Crear token de tarjeta

Finalmente, en el envío del formulario, el token se genera y se envía al backend y continúa funcionando parcialmente de la misma manera, solo algunos cambios en las invocaciones y los nombres de los métodos.

El método de creación de tokens también tuvo un cambio de nombre, en V1 era `createToken` y en V2 es `createCardToken`.

En V1, el método `createToken` recibió dos parámetros, el formulario y la función de callback que se ejecuta al final de la creación del token.

* **V1**

```javascript
window.Mercadopago.createToken($form, setCardTokenAndPay);
````

En V2, el método recibe un objeto que contiene `cardholderName`, `identificationType` y `identificationNumber`, y este método devuelve una promise con el token.

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

## Enviar pago

Ahora, con el token en la mano, simplemente agréguelo al formulario y envíelo, como se explica en la documentación de [Integración vía Métodos Core](/developers/es/docs/checkout-api/integration-configuration/card/integrate-via-core-methods#bookmark_enviar_pago).  

Ejemplo de implementación:

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
> Para obtener más información, va a [documentación para SDK JS V2 con Secure Fields.](/developers/es/docs/checkout-api/integration-configuration/card/integrate-via-core-methods) Además, proporcionamos un [ejemplo completo](https://github.com/lucmkz/mp-migracao-sdk-v1-para-sdk-v2-sf/blob/main/migracao.html) de migración en código fuente con comentarios que puedes usar como plantilla.

## Otras alternativas

Existen otras dos alternativas de implementación que no incluyen **métodos centrales**, que fueron los métodos que se analizaron en este artículo, y ambas alternativas son tan seguras como usar métodos centrales. Vea a continuación estas alternativas.

### Cardform

----[mla, mlm, mpe, mco, mlu, mlc]----
La integración de los pagos con tarjeta se realiza a través de **cardform**. En este modo de integración, **MercadoPago.js** es responsable de los flujos necesarios para obtener la información requerida para crear un pago. Cuando se inicializa, se realiza una búsqueda para recopilar los tipos de documentos disponibles para el país en cuestión. Consulte la documentación de [Checkout API](/developers/pt/docs/checkout-api/integration-configuration/card/integrate-via-cardform) para obtener más información.

------------

----[mlb]----
La integración de los pagos con tarjeta se realiza a través de **cardform**. En este modo de integración, **MercadoPago.js** es responsable de los flujos necesarios para obtener la información requerida para crear un pago. Cuando se inicializa, se realiza una búsqueda para recopilar los tipos de documentos disponibles para el país en cuestión. Consulte la documentación de [Checkout Transparente](/developers/pt/docs/checkout-api/integration-configuration/card/integrate-via-cardform) para obtener más información.

------------

### Checkout Bricks

Checkout Bricks es un conjunto de módulos de UI que vienen con su front-end listo y optimizados para una mejor usabilidad y conversión. Cada Brick se puede utilizar de forma independiente o en conjunto, formando la experiencia de un checkout completo. Consulte la documentación de [Checkout Bricks](/developers/es/docs/checkout-bricks/landing) para obtener más información.