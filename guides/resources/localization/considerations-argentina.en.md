---
  sites_supported:
      - mla
---

# Special considerations for Argentina

## Resolution E 51/2017 for payments in installments

Due to [Resolution E 51/2017](https://www.boletinoficial.gob.ar/#!DetalleNormaBusquedaRapida/158269/20170125/resolucion%2051) of the Argentine Secretary of Commerce, on transparent prices, you are required to comply with certain requirements when building the form for purchases with credit card on your website:

1. When showing the price financed in installments, you must indicate the actual price, the total financed price, the number and amount of each installment, the annual effective interest rate applied and the total financial cost.

2. In case you sell products and/or services based on the modality financed in installments, you are not allowed to include the phrase “without interest rate” (or any other similar) when the cost of financing is transferred to the retail price.

3. The information about the total financial cost (CFT) of the transaction must be placed near the other variables reported in the previous point, highlighted in bold using the same font and size at least FIVE (5) times bigger – while preserving all proportions of stroke thickness, height and width – in relation to that used to report the annual effective interest rate (TEA) applied. Multiplying the width of the sides x 2.25 is sufficient. Example:

![cft-tea](/images/resources/tea-cft.png)

### Get the TEA and CFT

The TEA and the CFT can be obtained through our API using the `installments` feature.

To make the request, you need to submit the `payment_method_id` and the `bin` (first 6 digits of the card). Example:

```
curl -X GET \
-H "accept: application/json" \
-H 'Authorization: Bearer TEST-5252485006568871-060216-a48700bfc7c55fd627e1a107f7ece57e__LA_LB__-110261734' \
"https://api.mercadopago.com/v1/payment_methods/installments?[payment_method_id=:id]&[bin=:bin]&[amount=:amount]&[issuer.id=:issuer_id]"
```

The result will be a list of installments that will contain this information within the `labels` attribute:

```json
{
	...,
    "payer_costs": [
          {
            "installments": 1,
            "installment_rate": 0,
            "discount_rate": 0,
            "labels": [
               "CFT_0,0%|TEA_0,0%"
            ],
            "min_allowed_amount": 0,
            "max_allowed_amount": 250000,
            "recommended_message": "1 cuota de $ 1.000,00 ($ 1.000,00)",
            "installment_amount": 1000,
            "total_amount": 1000
          },
          {
            "installments": 3,
            "installment_rate": 0,
            "discount_rate": 0,
            "labels": [
               "CFT_70,21%|TEA_89,43%"
            ],
            "min_allowed_amount": 2,
            "max_allowed_amount": 250000,
            "recommended_message": "3 cuotas de $ 369,90 ($ 1.109,70)",
            "installment_amount": 369.90,
            "total_amount": 1109.70
          }
    ]
}
```

It is worth noting that in case of 1 installment or installments related to [promotions](https://www.mercadopago.com.ar/promociones) with no interest, they will have the values of TEA and CFT equal to 0. Although the value is 0, in scenarios where the customer chooses more than one installment, you must show it in the purchase form anyway.

### Code sample

Find below an example to assist you with this implementation:

```html
<form action="/pay" method="GET">
    <fieldset>
      <ul>
        <li>
          <label for="installments">Cuotas</label>
          <select id="installments"></select>
        </li>
      </ul>
    </fieldset>
    <p id="summary">
      Total al contado: <span id="total">$100</span>
      Total financiado: <span id="total-financed">$100</span>
      TEA: <span id="tea">0%</span>
      CFT: <span id="cft">0%</span>
    </p>
</form>
```


Your HTML should already contain the following script:

```
<script src="https://secure.mlstatic.com/sdk/javascript/v1/mercadopago.js"></script>
```

We will use the Mercado Pago library to check the `installments` feature.

```javascript
<script type="text/javascript">

    // Configurá tu Public Key
    Mercadopago.setPublishableKey("TEST-59c64ee8-7a6d-4dbc-bfb0-317e24534eea");

    // Consultá el recurso de installments
    Mercadopago.getInstallments({
        "payment_method_id": "visa",
        "bin": 424242,
        "amount": 100
    }, showInstallments);

    // Mostrá las cuotas
    function showInstallments(status, response){
      var selectorInstallments = document.getElementById('installments'),
          fragment = document.createDocumentFragment();
      selectorInstallments.options.length = 0;
      if (response.length > 0){
        var option = new Option("Elija una cuota...", '-1'),
            payerCosts = response[0].payer_costs;
        fragment.appendChild(option);
        for (var i = 0; i < payerCosts.length; i++) {
            option = new Option(payerCosts[i].recommended_message || payerCosts[i].installments, payerCosts[i].installments);
            var tax = payerCosts[i].labels;
            if(tax.length > 0){
              for (var l = 0; l < tax.length; l++) {
                if (tax[l].indexOf('CFT_') !== -1){
                  option.setAttribute('data-tax', tax[l]);
                }
              }
            }
            fragment.appendChild(option);
        }
        selectorInstallments.appendChild(fragment);
        selectorInstallments.removeAttribute('disabled');
      }
      else {
        console.log('Error: Could not get installments');
      }
    }

    // Actualizá el resumen cuando el usuario elija las cuotas
    document.getElementById('installments').onchange = function(){
      var cur_i = this.options[this.selectedIndex].getAttribute('data-tax');
      if(cur_i != null){
        document.getElementById('total-financed').innerHTML = this.options[this.selectedIndex].text;
        showTaxes(cur_i);
      }
    };
    function showTaxes(tax){
      var tax_split = tax.split('|');
          var CFT = tax_split[0].replace('CFT_', ''),
          TEA = tax_split[1].replace('TEA_', '');
      document.getElementById('cft').innerHTML = CFT;
      document.getElementById('tea').innerHTML = TEA;
    }

</script>
```
