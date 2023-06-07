# Parceiros

## Parceiros com certificação PCI

Para parceiros certificados PCI, será necessário o envio da AOC para que a equipe de Riscos Mercado Pago possa avaliar a autorização para seguir com a tokenização via *backend*.

## Parceiro sem certificação PCI

A tokenização dos pagamentos via cartão de crédito deve ser feita utilizando a nossa [SDK JS V2](https://www.mercadopago.com.br/developers/pt/docs/checkout-api/integration-configuration/card/integrate-via-cardform), por meio do cardform.
O MercadoPago.js é responsável pelos fluxos necessários para obtenção das informações obrigatórias para a criação de um pagamento.

```html
<body>
  <script src="https://sdk.mercadopago.com/js/v2"></script>
</body>
```

### Adicionar formulário de pagamento

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
        <button type="submit" id="form-checkout__submit">Pagar</button>
      </li>
      <li>
        <progress value="0" class="progress-bar">Carregando...</progress>
      </li>
    </ul>
  </fieldset>   
</form>
```

### Inicializar formulário de pagamento

```bash
const cardForm = mp.cardForm({
  amount: "100.5",
  autoMount: true,
  form: {
    id: "form-checkout",
    cardholderName: {
      id: "form-checkout__cardholderName",
      placeholder: "Titular do cartão",
    },
    cardholderEmail: {
      id: "form-checkout__cardholderEmail",
      placeholder: "E-mail",
    },
    cardNumber: {
      id: "form-checkout__cardNumber",
      placeholder: "Número do cartão",
    },
    cardExpirationMonth: {
      id: "form-checkout__cardExpirationMonth",
      placeholder: "Mês de vencimento",
    },
    cardExpirationYear: {
      id: "form-checkout__cardExpirationYear",
      placeholder: "Ano de vencimento",
    },
    securityCode: {
      id: "form-checkout__securityCode",
      placeholder: "Código de segurança",
    },
    installments: {
      id: "form-checkout__installments",
      placeholder: "Parcelas",
    },
    identificationType: {
      id: "form-checkout__identificationType",
      placeholder: "Tipo de documento",
    },
    identificationNumber: {
      id: "form-checkout__identificationNumber",
      placeholder: "Número do documento",
    },
    issuer: {
      id: "form-checkout__issuer",
      placeholder: "Banco emissor",
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
          description: "Descrição do produto",
          payer: {
            email,
            identification: {
              type: identificationType,
              number: identificationNumber,
            },
          },
        }),
      });*/
      alert("generated card token: " + token);
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
> Caso esteja utilizando o SDK JS V1, será necessário a migração para o [SDK JS V2](https://www.mercadopago.com.br/developers/pt/docs/checkout-api/integration-configuration/card/integrate-via-cardform).
**Exemplo prático para tokenização com JS V2**: [Tokenização - V2 - JSFiddle](https://jsfiddle.net/douglascruz/og85yL34/).