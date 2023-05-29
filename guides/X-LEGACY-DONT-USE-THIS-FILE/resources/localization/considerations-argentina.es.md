---
  sites_supported:
      - mla
---

# Consideraciones especiales para Argentina

## Resolución E 51/2017 para pagos en cuotas

Debido a la [Resolución E 51/2017](https://www.boletinoficial.gob.ar/#!DetalleNormaBusquedaRapida/158269/20170125/resolucion%2051) de la Secretaría de Comercio Argentina, sobre precios transparentes, es necesario que cumplas con ciertas exigencias a la hora de construir el formulario de compra con tarjeta de crédito en tu sitio:

1. Cuando el precio se exhiba financiado, deberá indicarse el precio de contado, el precio total financiado, la cantidad y monto de cada una de las cuotas, la tasa de interés efectiva anual aplicada y el costo financiero total.

2. En caso que comercialices productos y/o servicios bajo la modalidad de venta financiada en cuotas no podrás incluir la frase “sin interés” (o cualquier otra similar), cuando el costo de financiación sea trasladado al precio de venta al consumidor.

3. La información del costo financiero total (CFT) de la operación deberá colocarse en una ubicación contigua al resto de las variables informadas en el punto anterior, en una tipografía en color destacado de idéntica fuente y tamaño al menos CINCO (5) veces mayor —conservando todas las proporciones de espesor de trazos, alto y ancho— al que se utilice para informar la tasa de interés efectiva anual (TEA) aplicada . Multiplicando el ancho de los lados x 2.25 es suficiente. Ejemplo:

![cft-tea](/images/resources/tea-cft.png)

### Obteniendo la TEA y el CFT

La TEA y el CFT pueden ser obtenidos a través de nuestra API utilizando el recurso `installments`.

Para hacer el request, es necesario que envíes el `payment_method_id` y el `bin` (primeros 6 dígitos de la tarjeta). Ejemplo:

```
curl -X GET \
-H "accept: application/json" \
-H 'Authorization: Bearer TEST-5252485006568871-060216-a48700bfc7c55fd627e1a107f7ece57e__LA_LB__-110261734' \
"https://api.mercadopago.com/v1/payment_methods/installments?[payment_method_id=:id]&[bin=:bin]&[amount=:amount]&[issuer.id=:issuer_id]"
```

El resultado obtenido será una lista de cuotas que contendrán dicha información dentro del atributo `labels`:

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

Es importante mencionar que en los casos de 1 cuota o cuotas relacionadas a [promociones](https://www.mercadopago.com.ar/promociones) sin interés, tendrán los valores de TEA y CFT en 0. Aunque su valor sea 0, en escenarios donde el pagador elija más de una cuota, deberás mostrarlo en el formulario de compra de todas maneras.

### Ejemplo de código

A continuación se encuentra un ejemplo de código para asistirte en esta implementación:

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


Tu HTML ya debería contener el siguiente script:

```
<script src="https://secure.mlstatic.com/sdk/javascript/v1/mercadopago.js"></script>
```

Utilizaremos la librería de Mercado Pago para consultar el recurso `installments`.

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
