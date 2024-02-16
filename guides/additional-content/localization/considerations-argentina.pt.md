---
  sites_supported:
      - mla
---

# Considerações especiais para Argentina

## Resolução E 51/2017 para pagamentos parcelados

Devido à [Resolução E 51/2017](https://www.boletinoficial.gob.ar/#!DetalleNormaBusquedaRapida/158269/20170125/resolucion%2051) da Secretaria de Comércio da Argentina, sobre a transparência de preços, é necessário cumprir certos requisitos ao criar o formulário de compra com cartão de crédito em seu site:

1. Ao exibir o preço financiado, deve-se indicar o preço à vista, o preço total financiado, o número e o valor de cada uma das parcelas, a taxa de acréscimos efetiva anual aplicada e o custo financeiro total.

2. Caso comercialize produtos e/ou serviços na modalidade de venda financiada em parcelas, não será possível incluir a frase “sem acréscimos” (ou qualquer outra similar) quando o custo do financiamento é transferido ao preço de venda ao consumidor.

3. A informação sobre o custo financeiro total (CFT) da transação deverá ser posicionada próxima das outras variáveis informadas no ponto anterior, destacada em negrito em fonte idêntica e tamanho pelo menos 5 (CINCO) vezes maior – preservando todas as proporções de espessura do traço, altura e largura – à utilizada para informar a taxa de acréscimos efetiva anual (TEA) aplicada. Multiplicar a largura dos lados x 2,25 é o suficiente. Exemplo:

![cft-tea](/images/resources/tea-cft.png)

### Obtenha a TEA e o CFT

A TEA e o CFT podem ser obtidos através da nossa API, utilizando o recurso installments.

Para fazer a requisição, é necessário que envie o payment_method_id e o bin (6 primeiros dígitos do cartão). Exemplo:

```
curl -X GET \
-H "accept: application/json" \
-H 'Authorization: Bearer TEST-5252485006568871-060216-a48700bfc7c55fd627e1a107f7ece57e__LA_LB__-110261734' \
"https://api.mercadopago.com/v1/payment_methods/installments?[payment_method_id=:id]&[bin=:bin]&[amount=:amount]&[issuer.id=:issuer_id]"
```

O resultado obtido será uma lista de parcelas contendo tais informações dentro do atributo `labels`:

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

Vale ressaltar que nos casos de 1 parcela ou parcelas relacionadas à [promoções](https://www.mercadopago.com.ar/promociones) sem acréscimos, os valores de TEA e CFT serão iguais a 0. Embora o valor seja 0, caso o cliente selecione mais de uma parcela, você deverá indicar o valor no formulário de compras de qualquer forma.

### Exemplo de código

Veja a seguir um exemplo de código para auxiliá-lo nesta implementação:

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


Seu HTML já deve conter o seguinte script:

```
<script src="https://secure.mlstatic.com/sdk/javascript/v1/mercadopago.js"></script>
```

Utilizaremos a biblioteca do Mercado Pago para consultar o recurso `installments`.

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
