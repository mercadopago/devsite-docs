# Partners

## Partners con certificación PCI

Para los partners certificados PCI, será necesario enviar el AOC para que el equipo de Riesgos de Mercado Pago pueda evaluar la autorización para proceder con la tokenización a través del backend.

## Partner sin certificación PCI

La tokenización de los pagos con tarjeta de crédito debe realizarse utilizando nuestro [SDK JS V2](/developers/es/docs/checkout-api/integration-configuration/card/integrate-via-cardform), a través del _cardform_.
MercadoPago.js es responsable de los flujos necesarios para obtener la información obligatoria para la creación de un pago.

```html
<body>
  <script src="https://sdk.mercadopago.com/js/v2"></script>
</body>
```

### Añadir formulario de pago

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
<form id="form-checkout">
  <fieldset>
    <ul>
      <li>
        <label for="cardNumber">Número de tarjeta:</label>
        <input type="text" name="cardNumber" id="form-checkout__cardNumber" />
      </li>
      <li>
        <label for="cardExpirationMonth">Mes de vencimiento:</label>
        <input type="text" name="cardExpirationMonth" id="form-checkout__cardExpirationMonth" value="12" />
      </li>
      <li>
        <label for="cardExpirationYear">Año de vencimiento:</label>
        <input type="text" name="cardExpirationYear" id="form-checkout__cardExpirationYear" value="24" />
      </li>
      <li>
        <label for="cardholderName">Nombre del titular:</label>
        <input type="text" name="cardholderName" id="form-checkout__cardholderName" value="APRO" />
      </li>
      <li>
        <label for="cardholderEmail">Correo electrónico:</label>
        <input type="email" name="cardholderEmail" id="form-checkout__cardholderEmail" value="test_user_60077763@testuser.com" />
      </li>
      <li>
        <label for="securityCode">Código de seguridad:</label>
        <input type="text" name="securityCode" id="form-checkout__securityCode" value="123" />
      </li>
      <li>
        <label for="issuer">Emisor:</label>
        <select name="issuer" id="form-checkout__issuer"></select>
      </li>
      <li>
        <label for="identificationType">Tipo de documento:</label>
        <select name="identificationType" id="form-checkout__identificationType"></select>
      </li>
      <li>
        <label for="identificationNumber">Número de documento:</label>
        <input type="text" name="identificationNumber" id="form-checkout__identificationNumber" value="12345678909" />
      </li>
      <li>
        <label for="installments">Cuotas:</label>
        <select name="installments" id="form-checkout__installments"></select>
      </li>
      <li>
        <button type="submit" id="form-checkout__submit">Pagar</button>
      </li>
      <li>
        <progress value="0" class="progress-bar">Cargando...</progress>
      </li>
    </ul>
  </fieldset>   
</form>
```

### Inicializar formulario de pago

```javascript
const cardForm = mp.cardForm({
  amount: "100.5",
  autoMount: true,
  form: {
    id: "form-checkout",
    cardholderName: {
      id: "form-checkout__cardholderName",
      placeholder: "Nombre del titular",
    },
    cardholderEmail: {
      id: "form-checkout__cardholderEmail",
      placeholder: "Correo electrónico",
    },
    cardNumber: {
      id: "form-checkout__cardNumber",
      placeholder: "Número de tarjeta",
    },
    cardExpirationMonth: {
      id: "form-checkout__cardExpirationMonth",
      placeholder: "Mes de vencimiento",
    },
    cardExpirationYear: {
      id: "form-checkout__cardExpirationYear",
      placeholder: "Año de vencimiento",
    },
    securityCode: {
      id: "form-checkout__securityCode",
      placeholder: "Código de seguridad",
    },
    installments: {
      id: "form-checkout__installments",
      placeholder: "Cuotas",
    },
    identificationType: {
      id: "form-checkout__identificationType",
      placeholder: "Tipo de documento",
    },
    identificationNumber: {
      id: "form-checkout__identificationNumber",
      placeholder: "Número de documento",
    },
    issuer: {
      id: "form-checkout__issuer",
      placeholder: "Banco emisor",
    },
  },
  callbacks: {
    onFormMounted: error => {
      if (error) return console.warn("Error al montar el formulario: ", error);
      console.log("Formulario montado");
    },
    onSubmit: event => {
      event.preventDefault();

      const {
        paymentMethodId: payment_method_id,
        issuerId: issuer_id,
        cardholderEmail: email,
        amount,
        token,
        installments,
        identificationNumber,
        identificationType,
      } = cardForm.getCardFormData();

      /*fetch("/process_payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token,
          issuer_id,
          payment_method_id,
          transaction_amount: Number(amount),
          installments: Number(installments),
          description: "Descripción del producto",
          payer: {
            email,
            identification: {
              type: identificationType,
              number: identificationNumber,
            },
          },
        }),
      });*/
      alert("Generated card token: " + token);
    },
    onFetching: resource => {
      console.log("Fetching resource: ", resource);

      // Animar barra de progreso
      const progressBar = document.querySelector(".progress-bar");
      progressBar.removeAttribute("value");

      return () => {
        progressBar.setAttribute("value", "0");
      };
    },
  },
});
```

> NOTE
>
> Nota
>
> Si estás utilizando el SDK JS V1, será necesario migrar al [SDK JS V2](https://www.mercadopago.com.br/developers/pt/docs/checkout-api/integration-configuration/card/integrate-via-cardform).
> **Ejemplo práctico para tokenización con JS V2**: [Tokenización - V2 - JSFiddle](https://jsfiddle.net/douglascruz/og85yL34/).