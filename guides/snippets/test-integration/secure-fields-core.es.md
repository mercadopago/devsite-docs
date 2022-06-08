Para crear un pago es necesario hacer la captura de los datos de la tarjeta a través del navegador del comprador. Por cuestiones de seguridad, **es muy importante que los datos sensibles de la tarjeta nunca lleguen a tus servidores**.

> NOTE
>
> Nota
>
> Esta documentación utiliza la nueva versión de la librería. Para ver la versión anterior, ve a la [sección de integrar pagos con tarjeta con MercadoPago.js V1](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-api/v1/receiving-payment-by-card).

Para capturar datos de la tarjeta, sigue estos pasos:

1. [Incluye la librería MercadoPago.js](#bookmark_1._incluye_la_librería_mercadopago.js)
2. [Agrega el formulario de pago](#bookmark_2._agrega_el_formulario_de_pago)
3. [Configura tu clave pública](#bookmark_3._configura_tu_clave_pública)
4. [Crea los campos PCI](#bookmark_4._crea_los_campos_pci)
5. [Obtén los datos para tu formulario](#bookmark_5._obtén_los_datos_para_tu_formulario)
6. [Crea el token de la tarjeta](#bookmark_6._crea_el_token_de_la_tarjeta)

### 1. Incluye la librería MercadoPago.js

**Usa nuestra librería oficial para acceder a la API de Mercado Pago** desde tu aplicación y recolectar los datos de forma segura.

```html
<script src="https://sdk.mercadopago.com/js/v2"></script>
```

La información de la tarjeta será convertida en un token para que envíes los datos a tus servidores de modo seguro.

### 2. Agrega el formulario de pago

Para realizar la captura de datos sensibles de las tarjetas de tus clientes, **es muy importante que utilices nuestro formulario con los atributos correspondientes** para garantizar la seguridad de la información y la correcta generación del token. 

> NOTE
>
> Nota
>
> Los campos seguros son `divs` porque los verdaderos inputs estarán dentro del iframe de manera segura.

Puedes agregar todo lo que necesites, modificar el atributo `label` sugerido y sumarle el estilo que quieras sin problemas.

En el siguiente ejemplo se asume que los datos `transactionAmount` y `description` se obtuvieron en el paso previo donde el cliente seleccionó el producto o servicio que desea pagar.


```html
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
<form id="form-checkout" method="POST" action="/process_payment">
  <div id="form-checkout__cardNumber-container" class="container"></div>
  <div id="form-checkout__expirationDate-container" class="container"></div>
  <input type="text" name="cardholderName" id="form-checkout__cardholderName" placeholder="Titular de la tarjeta" />
  <input type="email" name="email" id="form-checkout__email" placeholder="E-mail" />
  <div id="form-checkout__securityCode-container" class="container"></div>
  <select name="issuer" id="form-checkout__issuer">
    <option value="" disabled selected>Banco emisor</option>
  </select>----[mla, mlb, mlu, mlc, mpe, mco]----
  <select name="identificationType" id="form-checkout__identificationType">
    <option value="" disabled selected>Tipo de documento</option>
  </select>------------
  <input type="text" name="identificationNumber" id="form-checkout__identificationNumber"
    placeholder="Número de documento" />
  <select name="installments" id="form-checkout__installments">
    <option value="" disabled selected>Cuotas</option>
  </select>
  <input id="token" name="token" type="hidden" />
  <input id="paymentMethodId" name="paymentMethodId" type="hidden" />
  <input id="transactionAmount" name="transactionAmount" type="hidden" value="100" />
  <input id="description" name="description" type="hidden" value="product description" />
  <button type="submit" id="form-checkout__submit">Pagar</button>
</form>
```

> NOTE
>
> Nota
>
> Ten en cuenta que es necesario que el formulario se encuentre antes de todos los pasos siguientes para su correcto funcionamiento.

### 3. Configura tu clave pública

Agrega tu [clave pública]([FAKER][CREDENTIALS][URL]) de la siguiente manera:

```javascript
 
<script>
const mp = new MercadoPago('YOUR_PUBLIC_KEY');
// Add Step #createPCIFields
 ----[mla, mlb, mlu, mlc, mpe, mco]----
// Add Step #getIdentificationTypes------------
// Add Step #getPaymentMethods
// Add Step #getIssuers
// Add Step #getInstallments
// Add Step #createCardToken
</script>
```

> Si aún no tienes cuenta para ver tus credenciales, [regístrate](https://www.mercadopago[FAKER][URL][DOMAIN]/registration-mp).

### 4. Crea los campos PCI

En este paso se crean los campos seguros (cardNumber, expirationDate y securityCode) con **Fields**, alojados por **Mercado Pago**, y que hacen uso del elemento `HTML iframe`.

El segundo parámetro son las opciones, y se le pueden asignar valores para **placeholder** y **style**. El valor de **placeholder** debe ser un *string*, mientras que **style** es un *objeto* con las llaves siendo el nombre de la propiedad CSS y los valores un string con el estilo. Los valores no válidos se ignorarán y se mostrará una advertencia en la consola.

Para más detalles sobre los estilos permitidos, [consulta la referencia técnica](https://github.com/mercadopago/sdk-js/blob/main/API/fields.md#style).

Un ejemplo de código con `cardNumber`, `expirationDate` y `securityCode` sería:

```javascript
  // Step #createPCIFields
  const cardNumberElement = mp.fields.create('cardNumber', {
    placeholder: "Número de la tarjeta",
  }).mount('form-checkout__cardNumber-container');
 
  const expirationDateElement = mp.fields.create('expirationDate', {
    placeholder: "Data de vencimiento (MM/YYYY)"
  }).mount('form-checkout__expirationDate-container');
 
  const securityCodeElement = mp.fields.create('securityCode', {
    placeholder: "Código de seguridad"  
  }).mount('form-checkout__securityCode-container');
```

### 5. Obtén los datos para tu formulario

Debes obtener los siguientes datos:

----[mla, mlb, mlu, mlc, mpe, mco]----
* [Tipos de documentos](#bookmark_obtener_tipos_de_documentos) ------------
* [Método de pago de la tarjeta](#bookmark_obtener_método_de_pago_de_la_tarjeta)
* [Banco emisor](#bookmark_obtener_banco_emisor)
* [Cantidad de cuotas](#bookmark_obtener_cantidad_de_cuotas)

----[mla, mlb, mlu, mlc, mpe, mco]----
#### Obtener tipos de documentos

Uno de los campos obligatorios es el tipo de número de documento. Utiliza la lista de documentos al momento de completar los datos.

Incluyendo el elemento de tipo select con el `id: 'form-checkout__identificationType'` que se encuentra en el formulario, podrás completar automáticamente las opciones disponibles cuando llames a la siguiente función:

```javascript
// Step #getIdentificationTypes
 
// Helper function to append option elements to a select input
function createSelectOptions(elem, options, labelsAndKeys = { label : "name", value : "id"}){
  const {label, value} = labelsAndKeys;
 
  elem.options.length = 0;
 
  const tempOptions = document.createDocumentFragment();
 
  options.forEach( option => {
      const optValue = option[value];
      const optLabel = option[label];
 
      const opt = document.createElement('option');
      opt.value = optValue;
      opt.textContent = optLabel;
 
      tempOptions.appendChild(opt);
  });
 
  elem.appendChild(tempOptions);
}
 
// Get Identification Types
(async function getIdentificationTypes () {
  try {
      const identificationTypes = await mp.getIdentificationTypes();
      const identificationTypeElement = document.getElementById('form-checkout__identificationType');
 
      createSelectOptions(identificationTypeElement, identificationTypes)
  }catch(e) {
      return console.error('Error getting identificationTypes: ', e);
  }
})()
```

> Encuentra más detalle en la [sección de Tipos de documentos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/resources/localization/identification-types).

------------


#### Obtener método de pago de la tarjeta

Valida los datos de tus clientes mientras los completan para evitar errores y que puedas ofrecer correctamente las cuotas disponibles. Usa el siguiente código de ejemplo para identificar el medio de pago con los primeros 8 dígitos de la tarjeta.

```javascript
function clearHTMLSelectChildrenFrom(element) {
    const currOptions = [...element.children];
    currOptions.forEach(child => child.remove());
}

// Step #getPaymentMethods
cardNumberElement.on('binChange', async (data) => {
    const { bin } = data;
    try {
      const paymentMethodElement = document.getElementById('paymentMethodId');
      const issuerElement = document.getElementById('form-checkout__issuer');
      const installmentsElement = document.getElementById('form-checkout__installments');

      if (!bin && paymentMethodElement.value) {
        clearHTMLSelectChildrenFrom(issuerElement)
        clearHTMLSelectChildrenFrom(installmentsElement)
        paymentMethodElement.value = "";
        return
      }

      if (bin && !paymentMethodElement.value) {
        const paymentMethods = await mp.getPaymentMethods({ bin });
        const { id: paymentMethodId, additional_info_needed, issuer } = paymentMethods.results[0];
        // Assign payment method ID to a hidden input.
        paymentMethodElement.value = paymentMethodId;
        // If 'issuer_id' is needed, we fetch all issuers (getIssuers()) from bin.
        // Otherwise we just create an option with the unique issuer and call getInstallments().
        additional_info_needed.includes('issuer_id') ? getIssuers(bin) : (() => {
          const issuerElement = document.getElementById('form-checkout__issuer');
          createSelectOptions(issuerElement, [issuer]);
          getInstallments(bin);
        })()
      }
    } catch (e) {
      console.error('error getting payment methods: ', e)
    }
  })
```

#### Obtener banco emisor

Al completar los datos, es importante identificar el banco emisor de la tarjeta para evitar conflictos entre los distintos emisores y poder ofrecer las opciones de pago en cuotas correctas.

Agrega el siguiente código para obtener el `issuer_id`:

```javascript
// Step #getIssuers
const getIssuers = async (bin) => {
    try {
      const paymentMethodId = document.getElementById('paymentMethodId').value;
      const issuerElement = document.getElementById('form-checkout__issuer');
      const issuers = await mp.getIssuers({ paymentMethodId, bin });
      createSelectOptions(issuerElement, issuers);
      getInstallments(bin);
    } catch (e) {
      console.error('error getting issuers: ', e)
    }
  };
```

#### Obtener cantidad de cuotas

Otro de los campos obligatorios para pagos con tarjetas es la cantidad de cuotas. Para obtener las cuotas disponibles, puedes utilizar la siguiente función de ejemplo para completar el campo sugerido de tipo _select_ denominado `installments`.

```javascript
// Step #getInstallments
const getInstallments = async (bin) => {
    try {
      const installmentsElement = document.getElementById('form-checkout__installments')
      const installments = await mp.getInstallments({
        amount: document.getElementById('transactionAmount').value,
        bin,
        paymentTypeId: 'credit_card'
      });
      createSelectOptions(installmentsElement, installments[0].payer_costs, { label: 'recommended_message', value: 'installments' })
    } catch (e) {
      console.error('error getting installments: ', e)
    }
  }
```

A partir de aquí, al ingresar un número de tarjeta válido (por ejemplo, 5031433215406351) en el campo `cardNumber`, los campos` issuer` y `installments` deben completarse automáticamente.

### 6. Crea el token de la tarjeta

Antes de enviar el pago, debes crear el token que contendrá de manera segura toda la información de la tarjeta. Lo tienes que generar de la siguiente manera:

```javascript
// Step #createCardToken
const formElement = document.getElementById('form-checkout');
  formElement.addEventListener('submit', e => createCardToken(e));
  const createCardToken = async (event) => {
    try {
      const tokenElement = document.getElementById('token');
      if (!tokenElement.value) {
        event.preventDefault();
        const token = await mp.fields.createCardToken({
          cardholderName: document.getElementById('form-checkout__cardholderName').value,----[mla, mlb, mlu, mlc, mpe, mco]----
          identificationType: document.getElementById('form-checkout__identificationType').value,------------
          identificationNumber: document.getElementById('form-checkout__identificationNumber').value,
        });
        tokenElement.value = token.id;
        formElement.requestSubmit();
      }
    } catch (e) {
      console.error('error creating card token: ', e)
    }
  }
```

El método `createCardToken` devolverá un token con la representación segura de la tarjeta.

Allí tomaremos el token ID de la respuesta y lo guardaremos en un atributo oculto que llamaremos `token`, para luego enviar el formulario a tus servidores.

> WARNING
>
> Importante
>
> Ten en cuenta que el token tiene una validez de 7 días y solo se puede usar una vez.
