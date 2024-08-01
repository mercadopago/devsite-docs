# Partners

## PCI certified partners

For PCI certified partners, it will be necessary to submit the AOC so that the Mercado Pago Risk team can assess the authorization to proceed with backend tokenization.

## Partners without PCI certification

Credit card payment tokenization should be done using our [SDK JS V2](/developers/en/docs/checkout-api/integration-configuration/card/integrate-via-cardform) through the cardform.
MercadoPago.js is responsible for the necessary flows to obtain the required information for creating a payment.

```html
<body>
  <script src="https://sdk.mercadopago.com/js/v2"></script>
</body>
```

### Add payment form

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
        <label for="cardNumber">Card Number:</label>
        <input type="text" name="cardNumber" id="form-checkout__cardNumber" />
      </li>
      <li>
        <label for="cardExpirationMonth">Expiration Month:</label>
        <input type="text" name="cardExpirationMonth" id="form-checkout__cardExpirationMonth" value="12" />
      </li>
      <li>
        <label for="cardExpirationYear">Expiration Year:</label>
        <input type="text" name="cardExpirationYear" id="form-checkout__cardExpirationYear" value="24" />
      </li>
      <li>
        <label for="cardholderName">Cardholder Name:</label>
        <input type="text" name="cardholderName" id="form-checkout__cardholderName" value="APRO" />
      </li>
      <li>
        <label for="cardholderEmail">Email:</label>
        <input type="email" name="cardholderEmail" id="form-checkout__cardholderEmail" value="test_user_60077763@testuser.com" />
      </li>
      <li>
        <label for="securityCode">Security Code:</label>
        <input type="text" name="securityCode" id="form-checkout__securityCode" value="123" />
      </li>
      <li>
        <label for="issuer">Issuer:</label>
        <select name="issuer" id="form-checkout__issuer"></select>
      </li>
      <li>
        <label for="identificationType">Identification Type:</label>
        <select name="identificationType" id="form-checkout__identificationType"></select>
      </li>
      <li>
        <label for="identificationNumber">Identification Number:</label>
        <input type="text" name="identificationNumber" id="form-checkout__identificationNumber" value="12345678909" />
      </li>
      <li>
        <label for="installments">Installments:</label>
        <select name="installments" id="form-checkout__installments"></select>
      </li>
      <li>
        <button type="submit" id="form-checkout__submit">Pay</button>
      </li>
      <li>
        <progress value="0" class="progress-bar">Loading...</progress>
      </li>
    </ul>
  </fieldset>   
</form>
```

### Initialize payment form

```javascript
const cardForm = mp.cardForm({
  amount: "100.5",
  autoMount: true,
  form: {
    id: "form-checkout",
    cardholderName: {
      id: "form-checkout__cardholderName",
      placeholder: "Cardholder Name",
    },
    cardholderEmail: {
      id: "form-checkout__cardholderEmail",
      placeholder: "Email",
    },
    cardNumber: {
      id: "form-checkout__cardNumber",
      placeholder: "Card Number",
    },
    cardExpirationMonth: {
      id: "form-checkout__cardExpirationMonth",
      placeholder: "Expiration Month",
    },
    cardExpirationYear: {
      id: "form-checkout__cardExpirationYear",
      placeholder: "Expiration Year",
    },
    securityCode: {
      id: "form-checkout__securityCode",
      placeholder: "Security Code",
    },
    installments: {
      id: "form-checkout__installments",
      placeholder: "Installments",
    },
    identificationType: {
      id: "form-checkout__identificationType",
      placeholder: "Identification Type",
    },
    identificationNumber: {
      id: "form-checkout__identificationNumber",
      placeholder: "Identification Number",
    },
    issuer: {
      id: "form-checkout__issuer",
      placeholder: "Issuer Bank",
    },
  },
  callbacks: {
    onFormMounted: error => {
      if (error) return console.warn("Form Mounted handling error: ", error);
      console.log("Form mounted");
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
          description: "Product Description",
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

      // Animate progress bar
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
> Considerações
>
> If you are using SDK JS V1, you will need to migrate to [SDK JS V2](https://www.mercadopago.com.br/developers/pt/docs/checkout-api/integration-configuration/card/integrate-via-cardform).
**Practical example for tokenization with JS V2**: [Tokenization - V2 - JSFiddle](https://jsfiddle.net/douglascruz/og85yL34/).