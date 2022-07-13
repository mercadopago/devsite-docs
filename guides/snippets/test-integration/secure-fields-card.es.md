Para crear un pago es necesario hacer la captura de los datos de la tarjeta a través del navegador del comprador. Por cuestiones de seguridad, **es muy importante que los datos nunca lleguen a tus servidores**.

Para capturar datos de la tarjeta, siga estos pasos:

1. [Incluye y configura la librería MercadoPago.js](#bookmark_1._incluye_y_configura_la_librería_mercadopago.js)
2. [Agrega el formulario de pago](#bookmark_2._agrega_el_formulario_de_pago)
3. [Integra el formulario con la librería MercadoPago.js](#bookmark_3._integra_el_formulario_con_la_librería_mercadopago.js)

### 1. Incluye y configura la librería MercadoPago.js

**Usa nuestra librería oficial para acceder a la API de Mercado Pago** desde tu frontend para recolectar los datos de forma segura y configura tu [clave pública]([FAKER][CREDENTIALS][URL]) de la siguiente manera:

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

La información de la tarjeta será convertida en un token para que envíes los datos a tus servidores de modo seguro.

Si aún no tienes cuenta para ver tus credenciales, [regístrate](https://www.mercadopago[FAKER][URL][DOMAIN]/registration-mp).

La información de la tarjeta se convertirá en un token para que puedas enviar los datos a tus servidores de forma segura.

### 2. Agrega el formulario de pago

Para capturar los datos de la tarjeta, primero tienes que brindar un formulario para cargar toda la información.

Con la funcionalidad CardForm de la librería MercadoPago.js, puedes obtener y validar todo los datos necesarios como identificar el tipo y nombre del medio de pago, el banco emisor, la cantidad de cuotas y más.

CardForm te permite tener una implementación segura y una correcta tokenización de la información de la tarjeta.

Para los campos PCI (**Card Number**, **Expiration Date** y **Security Code**) debes crear `divs` que servirán como contenedores para los `iFrames`.

Utiliza el siguiente formulario y agrega los estilos que desees.

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
   <progress value="0" class="progress-bar">Cargando...</progress>
 </form>
```


> GIT
> 
> Referencia técnica
> 
> Encuentra información sobre los distintos atributos en las [referencias técnicas](https://github.com/mercadopago/sdk-js).

### 3. Integra el formulario con la librería MercadoPago.js

Ahora, para inicializar el CardForm, tienes que relacionar el ID de cada campo del formulario con los atributos correspondientes. La librería va a ser la responsable de completar, obtener y validar todos los datos necesarios al momento de confirmar el pago.

Para que el IFrame sea renderizado, es necesario pasar la opción `iframe` con el valor `true` en el objeto de parámetro recibido por cardForm. También es posible pasar el `style` a los elementos.

```javascript
// Step #3
const cardForm = mp.cardForm({
   amount: '100.5',
   iframe: true,
   form: {
     id: 'form-checkout',
     cardholderName: {
       id: 'form-checkout__cardholderName',
       placeholder: "Titular de la tarjeta",
     },
     cardholderEmail: {
       id: 'form-checkout__cardholderEmail',
       placeholder: 'E-mail'
     },
     cardNumber: {
       id: 'form-checkout__cardNumber-container',
       placeholder: 'Número de la tarjeta',
     },
     securityCode: {
       id: 'form-checkout__securityCode-container',
       placeholder: 'Código de seguridad'
     },
     installments: {
       id: 'form-checkout__installments',
       placeholder: 'Cuotas'
     },
     expirationDate: {
       id: 'form-checkout__expirationDate-container',
       placeholder: 'Data de vencimiento (MM/YYYY)',
     },----[mla, mlb, mlu, mlc, mpe, mco]----
     identificationType: {
       id: 'form-checkout__identificationType',
       placeholder: 'Tipo de documento'
     },------------
     identificationNumber: {
       id: 'form-checkout__identificationNumber',
       placeholder: 'Número de documento'
     },
     issuer: {
       id: 'form-checkout__issuer',
       placeholder: 'Banco emisor'
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

La opción de callbacks acepta diferentes funciones que son activadas en diversos momentos del flujo. 

> GIT
> 
> Referencia técnica
> 
> Conoce más información sobre los callbacks en las [referencias técnicas](https://github.com/mercadopago/sdk-js/blob/main/API/card-form.md).

Al realizar el envío del formulario, generamos un token como una representación segura de los datos de la tarjeta. Podrás a acceder a este token utilizando la función `getCardFormData`, como mostramos en el ejemplo anterior en el callback `onSubmit`.  También guardaremos el token en un `input` oculto dentro de tu formulario que denominaremos `MPHiddenInputToken`.

> WARNING
>
> Importante
>
> Ten en cuenta que el token tiene una validez de 7 días y solo se pueda usar una vez.
