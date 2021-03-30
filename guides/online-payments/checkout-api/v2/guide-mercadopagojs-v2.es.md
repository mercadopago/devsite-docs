---
indexable: false  
---

# Migrar a la nueva versión de MercadoPago.js

----[mlb]----
Conoce cómo instalar la **nueva versión beta de la SDK MercadoPago.js para la integración de Checkout Transparente**. 
------------ 
----[mla, mlm, mpe, mco, mlu, mlc]---- 
Conoce cómo instalar la **nueva versión beta de la SDK MercadoPago.js para la integración de Checkout API**. 
------------ 

La SDK MercadoPago.js te permite crear el token de la tarjeta para enviar los datos a tu backend de forma segura.

## Sobre la nueva versión

La nueva versión **optimiza tu integración al incluir el uso de la funcionalidad CardForm que obtiene y valida todos los datos necesarios** para realizar el pago sin que tengas que sumar pasos extras. 

Si no quieres utilizar la nueva funcionalidad CardForm, puedes mantener las características básicas de la versión antigua. Revisa las [referencias técnicas](https://github.com/mercadopago/sdk-js) para ver qué cambios necesitas hacer y conocer los nuevos nombres de los parámetros. 

## Pasos para instalar

Te dejamos un resumen de lo que tendrás que hacer para comenzar a usar la nueva versión beta de MercadoPago.js:

* Primero, instala la versión incluyendo el script en tu sitio. 
* Luego, configura las credenciales de la cuenta que estés integrando para identificarla al conectar con Mercado Pago.
* Por último, actualiza tu formulario de pago con la funcionalidad CardForm para comenzar a usarlo.

<br>

> CLIENT_SIDE
>
> h2
>
> Instalar versión beta de MercadoPago.js

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Incluye MercadoPago.js

Añade el siguiente script en tu sitio:

```html
<script src="https://sdk.mercadopago.com/js/v2"></script>
```

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. Configura las credenciales

Inicializa la librería con la [Public Key]([FAKER][CREDENTIALS][URL]) de la cuenta que estés integrando así podemos identificarla al conectar con Mercado Pago.

```javascript
const mercadopago = new MercadoPago('YOUR_PUBLIC_KEY')
```

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. Actualiza tu formulario de pago

En la versión anterior, tenías que agregar el formulario con los atributos `data-checkout` y prestar atención al atributo `name` para cuidar el manejo de información sensible en los campos. 

Además, necesitabas agregar varias funciones JavaScript para completar la información de cada campo. Por ejemplo, tenías que sumar una función para detectar el medio de pago a partir del número de tarjeta o para listar los posibles emisores y hasta para obtener la cantidad de cuotas que pueden ofrecerse.

Ahora, **solo debes inicializar nuestro CardForm relacionando el ID de cada campo del formulario con los atributos correspondientes y la librería va a ser la responsable de completar, obtener y validar todos los datos necesarios al momento de confirmar el pago**.

```html
<form id="form-checkout" >
   <input name="cardNumber" id="form-checkout__cardNumber" />
   <input name="CVV" id="form-checkout__CVV" />
   <input name="expirationMonth" id="form-checkout__expirationMonth" />
   <input name="expirationYear" id="form-checkout__expirationYear" />
   <input name="cardholderName" id="form-checkout__cardholderName"/>
   <select name="issuer" id="form-checkout__issuer"></select>
   <select name="docType" id="form-checkout__docType"></select>
   <input name="docValue" id="form-checkout__docValue"/>
   <select name="installments" id="form-checkout__installments"></select>
   <button type="submit" id="form-checkout__submit">Pagar</button>
 </form>

 <script>
     const cardForm = mercadopago.cardForm({
         amount: 1000,
         autoMount: true,
         form: {
             id: 'form-checkout',
             cardholderName: {
                 id: 'form-checkout__cardholderName',
                 placeholder: 'Nombre completo',
             },
             cardNumber: {
                 id: 'form-checkout__cardNumber',
                 placeholder: 'Número de la tarjeta',
             },
             CVV: {
                 id: 'form-checkout__CVV',
                 placeholder: 'Código de seguridad',
             },
             installments: {
                 id: 'form-checkout__installments',
                 placeholder: 'Cuotas'
             },
             expirationMonth: {
                 id: 'form-checkout__expirationMonth',
                 placeholder: 'Mes de vencimiento'
             },
             expirationYear: {
                 id: 'form-checkout__expirationYear',
                 placeholder: 'Año de vencimiento'
             },
             docType: {
                 id: 'form-checkout__docType',
                 placeholder: 'Tipo de documento'
             },
             docValue: {
                 id: 'form-checkout__docValue',
                 placeholder: 'Número de documento'
             },
             issuer: {
                 id: 'form-checkout__issuer',
                 placeholder: 'Banco emisor'
             }
         },
         callbacks: {
            onFormMounted: function(error) {
                if (error) return console.log('Callback handling error ', error);
            },
            onCardTokenReceived: function(error, token) {
                if (error) return console.log('Callback handling error ', error);

                const formData = cardForm.getCardFormData()
                console.log('form Data: ', formData)
                // post data to your backend
            },
        }
     })

     document.getElementById('form-checkout').addEventListener('submit', function(e) {
         e.preventDefault();
         cardForm.createCardToken()
     })
 </script>
```


> GIT
> 
> Referencia técnica
> 
> Encuentra información sobre los distintos atributos en las [referencias técnicas](https://github.com/mercadopago/sdk-js).

---
### Próximos pasos

----[mlb]----
> LEFT_BUTTON_REQUIRED_ES
>
> Integrar Checkout Transparente con tarjeta
>
> Construye y configura tu propia experiencia de pagos.
>
> [Integrar Checkout Transparente de Mercado Pago con tarjeta](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-api/receiving-payment-by-card)
------------

----[mla, mlm, mpe, mco, mlu, mlc]----
> LEFT_BUTTON_REQUIRED_ES
>
> Integrar Checkout API con tarjeta
>
> Construye y configura tu propia experiencia de pagos.
>
> [Integrar Checkout API de Mercado Pago con tarjeta](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-api/receiving-payment-by-card)
------------

> RIGHT_BUTTON_RECOMMENDED_ES
>
> Referencias de API
>
> Encuentra toda la información necesaria para interactuar con nuestras APIs.
>
> [Referencias de API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference)
