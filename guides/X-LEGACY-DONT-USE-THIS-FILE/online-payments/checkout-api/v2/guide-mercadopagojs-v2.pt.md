---
indexable: false  
---

# Migrar para a nova versão do MercadoPago.js

----[mlb]----
Saiba como instalar a **nova versão beta do SDK MercadoPago.js para a integração da Checkout Transparente**.
------------ 
----[mla, mlm, mpe, mco, mlu, mlc]---- 
Saiba como instalar a **nova versão beta do SDK MercadoPago.js para a integração da Checkout API**.
------------ 

O SDK MercadoPago.js permite criar o token de cartão para enviar os dados para o seu backend de forma segura.

## Sobre a nova versão

A nova versão **otimiza sua integração com a inclusão do uso da funcionalidade CardForm que obtém e valida todos os dados necessários** para realizar o pagamento sem ter que adicionar passos extras. 

No caso de não desejar utilizar a nova funcionalidade CardForm, você pode manter os recursos básicos da versão antiga. Verifique a [referência técnica](https://github.com/mercadopago/sdk-js) para saber quais mudanças você precisa fazer e confira os novos nomes dos parâmetros.

## Passos para instalar

Deixamos um resumo do que você terá que fazer para começar a usar a nova versão beta de MercadoPago.js:

* Primeiro, instale a versão incluindo o script no seu site. 
* Depois, configure as credenciais da conta que estiver integrando para identificá-la ao conectar com Mercado Pago.
* Por último, atualize seu formulário de pagamento com a funcionalidade CardForm para começar a usá-lo.

<br>

> CLIENT_SIDE
>
> h2
>
> Instalar a versão beta de MercadoPago.js

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Inclui MercadoPago.js

Adicione o seguinte script no seu site:

```html
<script src="https://sdk.mercadopago.com/js/v2"></script>
```

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. Configure as credenciais

Inicialize a biblioteca com a [Public Key]([FAKER][CREDENTIALS][URL]) da conta que estiver integrando para que possamos identificá-la ao conectar com Mercado Pago.

```javascript
const mercadopago = new MercadoPago('YOUR_PUBLIC_KEY')
```

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. Atualize seu formulário de pagamento


Na versão anterior, você tinha que adicionar o formulário com os atributos `data-checkout` e prestar atenção ao atributo `name` para cuidar do processamento de informações sensíveis nos campos. 

Além disso, era preciso adicionar várias funções JavaScript para preencher as informações de cada campo. Por exemplo, você tinha que gerar uma função para detectar o método de pagamento a partir do número de cartão ou para enumerar os possíveis emissores, e até para obter a quantidade de parcelas oferecidas.

Agora, **você apenas deve inicializar nosso CardForm relacionando o ID de cada campo do formulário com os atributos correspondentes, e a biblioteca será responsável por preencher, obter e validar todos os dados necessários no momento de confirmar o pagamento**.

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
                 placeholder: 'Nome completo',
             },
             cardNumber: {
                 id: 'form-checkout__cardNumber',
                 placeholder: 'Número do cartão',
             },
             CVV: {
                 id: 'form-checkout__CVV',
                 placeholder: 'Código de segurança',
             },
             installments: {
                 id: 'form-checkout__installments',
                 placeholder: 'Parcelas'
             },
             expirationMonth: {
                 id: 'form-checkout__expirationMonth',
                 placeholder: 'Mês de vencimento'
             },
             expirationYear: {
                 id: 'form-checkout__expirationYear',
                 placeholder: 'Ano de vencimento'
             },
             docType: {
                 id: 'form-checkout__docType',
                 placeholder: 'Tipo de documento'
             },
             docValue: {
                 id: 'form-checkout__docValue',
                 placeholder: 'N​ú​mero do documento​'
             },
             issuer: {
                 id: 'form-checkout__issuer',
                 placeholder: 'Banco emissor'
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
> Referência técnica
> 
> Encontre informações sobre os diferentes atributos na [referência técnica](https://github.com/mercadopago/sdk-js).

---
### Próximos passos

----[mlb]----
> LEFT_BUTTON_REQUIRED_PT
>
> Integrar Checkout Transparente com cartão
>
> Construa e configure sua própria experiência de pagamentos.
>
> [Integrar Checkout Transparente do Mercado Pago para cartão](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-api/receiving-payment-by-card)
------------

----[mla, mlm, mpe, mco, mlu, mlc]----
> LEFT_BUTTON_REQUIRED_PT
>
> Integrar Checkout API com cartão
>
> Construa e configure sua própria experiência de pagamentos.
>
> [Integrar Checkout API do Mercado Pago para cartão](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-api/receiving-payment-by-card)
------------

> RIGHT_BUTTON_RECOMMENDED_PT
>
> Referéncias de API
>
> Encontre toda a informação necessária para interagir com nossas APIs.
>
> [Referencias de API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference)
