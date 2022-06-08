Para criar um pagamento é necessário fazer a captura dos dados do cartão através do navegador do comprador. Por questões de segurança, **é muito importante que os dados nunca cheguem aos seus servidores**.

> NOTE
>
> Nota
>
> Esta documentação utiliza a nova versão da biblioteca. Para ver a versão anterior, vá para a [seção de integrar pagamentos com cartão com MercadoPago.js V1](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-api/v1/receiving-payment-by-card).

Para capturar os dados do cartão, siga estas etapas:

1. [Inclua a biblioteca MercadoPago.js](#bookmark_1._inclua_a_biblioteca_mercadopago.js)
2. [Adicione o formulário de pagamento](#bookmark_2._adicione_o_formulário_de_pagamento)
3. [Configure sua chave pública](#bookmark_3._configure_sua_chave_pública)
4. [Crie os campos PCI](#bookmark_4._crie_os_campos_pci)
5. [Obtenha os dados para seu formulário](#bookmark_5._obtenha_os_dados_para_seu_formulário)
6. [Crie o token do cartão](#bookmark_6._crie_o_token_do_cartão)

### 1. Inclua a biblioteca MercadoPago.js

**Utilize nossa biblioteca oficial para acessar a API de Mercado Pago** no seu frontend e coletar os dados de forma segura.

```html
<script src="https://sdk.mercadopago.com/js/v2"></script>
```

A informação do cartão será convertida em um token para que os dados sejam enviados aos seus servidores de forma segura.

### 2. Adicione o formulário de pagamento

Para realizar a captura de dados sensíveis dos cartões dos seus clientes, **é muito importante que utilize nosso formulário com os atributos correspondentes** para garantir a segurança da informação e a correta geração do token.

> NOTE
>
> Nota
>
> Os campos seguros são `divs` porque as entradas verdadeiras estarão seguras dentro do iframe.

Você pode adicionar tudo o que precisar, alterar o atributo `label` sugerido e inserir o estilo que desejar sem problemas.

No exemplo a seguir, assume-se que os dados `transactionAmount` e `description` foram obtidos no passo anterior onde o cliente selecionou o produto ou serviço que deseja pagar.

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
  <input type="text" name="cardholderName" id="form-checkout__cardholderName" placeholder="Titular do cartão" />
  <input type="email" name="email" id="form-checkout__email" placeholder="E-mail" />
  <div id="form-checkout__securityCode-container" class="container"></div>
  <select name="issuer" id="form-checkout__issuer">
    <option value="" disabled selected>Selecione o emissor</option>
  </select>----[mla, mlb, mlu, mlc, mpe, mco]----
  <select name="identificationType" id="form-checkout__identificationType">
    <option value="" disabled selected>Tipo de documento</option>
  </select>------------
  <input type="text" name="identificationNumber" id="form-checkout__identificationNumber"
    placeholder="N​ú​mero do documento​" />
  <select name="installments" id="form-checkout__installments">
    <option value="" disabled selected>Escolha a quantidade de parcelas</option>
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
> Lembre-se que é preciso ter o formulário antes de todos os passos seguintes para seu correto funcionamento.

### 3. Configure sua chave pública

Configure a sua [chave pública]([FAKER][CREDENTIALS][URL]) da seguinte forma:

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

> Se ainda não possui conta para ver suas credenciais, [registre-se](https://www.mercadopago[FAKER][URL][DOMAIN]/registration-mp).

### 4. Crie os campos PCI

Nesse passo são criados os campos seguros (cardNumber, expirationDate e securityCode) com **Fields**, hospedados pelo **Mercado Pago**, e que fazem uso do elemento `HTML iframe`.

O segundo parâmetro são as opções e pode receber valor para **placeholder** e **style**. O valor para **placeholder** deve ser uma *string*, enquanto **style** é um *objeto* com as chaves sendo o nome da propriedade CSS e os valores uma string com a estilização. Valores inválidos serão ignorados com a exibição de um warning no console.

Para mais detalhes sobre os estilos permitidos, [consulte a referência técnica](https://github.com/mercadopago/sdk-js/blob/main/API/fields.md#style).

Um exemplo de código com `cardNumber`, `expirationDate` e `securityCode` seria:

```javascript
  // Step #createPCIFields
  const cardNumberElement = mp.fields.create('cardNumber', {
    placeholder: "Card Number",
  }).mount('form-checkout__cardNumber-container');
 
  const expirationDateElement = mp.fields.create('expirationDate', {
    placeholder: "Data de vencimento (MM/YYYY)"
  }).mount('form-checkout__expirationDate-container');
 
  const securityCodeElement = mp.fields.create('securityCode', {
    placeholder: "Código de segurança"  
  }).mount('form-checkout__securityCode-container');
```

### 5. Obtenha os dados para seu formulário

Você deve obter os seguintes dados:

----[mla, mlb, mlu, mlc, mpe, mco]----
* [Tipos de documento](#bookmark_obtenha_os_tipos_de_documento) ------------
* [Método de pagamento do cartão](#bookmark_obtenha_o_método_de_pagamento_do_cartão)
* [Banco emissor](#bookmark_obtenha_o_banco_emissor)
* [Quantidade de parcelas](#bookmark_obtenha_a_quantidade_de_parcelas)


----[mla, mlb, mlu, mlc, mpe, mco]----

#### Obtenha os tipos de documento

Um dos campos obrigatórios é o tipo de documento. Utilize a lista de documentos no momento de completar os dados.

Incluindo o elemento do tipo `select` com o id `form-checkout__identificationType` que está no formulário, será possível preencher automaticamente as opções disponíveis quando chamar a função a seguir:

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

> Encontre mais detalhes na [seção de Tipos de documentos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/resources/localization/identification-types).

------------

#### Obtenha o meio de pagamento do cartão

Valide os dados dos seus clientes enquanto estes são preenchidos para evitar erros e oferecer corretamente as parcelas disponíveis. Use o seguinte código de exemplo para identificar o meio de pagamento com os primeiros 8 dígitos do cartão.

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

#### Obtenha o banco emissor

No momento do preenchimento do formulário, é importante identificar o banco emissor do cartão para evitar conflitos entre os diferentes emissores e poder oferecer as opções corretas de parcelamento.

Adicione o seguinte código para obter o `issuer_id`:

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

#### Obtenha a quantidade de parcelas

Outro campo obrigatório para pagamento com cartão é a quantidade de parcelas. Para obter as parcelas disponíveis, utilize a seguinte função de exemplo para completar o campo sugerido de tipo _select_ denominado `installments`.

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

A partir desse ponto, ao inserir um número de cartão válido (ex: 5031433215406351) no campo `cardNumber`, os campos `issuer` e `installments` deverão ser preenchidos automaticamente.

### 6. Crie o token do cartão

Antes de enviar o pagamento, crie o token que conterá de maneira segura toda a informação do cartão. Você deve gerá-lo da seguinte forma:

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

O método `createCardToken` retornará um token com a representação segura do cartão.

Receberemos o token ID da resposta e ao salvaremos em um atributo oculto denominado `token` para depois enviar o formulário aos seus servidores.

> WARNING
>
> Importante
>
> Tenha em conta que o token tem uma validade de 7 dias e só pode ser utilizado uma única vez.
