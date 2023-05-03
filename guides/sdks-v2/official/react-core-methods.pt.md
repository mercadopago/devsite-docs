# Métodos Core

Métodos Core são a forma de integração mais transparente com Mercado Pago, oferecendo métodos que acessam nossas APIs diretamente e permitem a construção de um formulário totalmente customizável.

Neste tipo de integração, o integrador decide quando buscar as informações sobre o tipo de documento, além das informações do cartão (emissor e parcelas). Com isso, possui total flexibilidade na construção da experiência do fluxo de checkout.


Na tabela abaixo listamos os principais métodos disponibilizados através da SDK-JS.

| Método | Descrição |
|---|---|
| getIdentificationTypes | Retorna todos os tipos de documento baseado na public_key |
| getPaymentMethods | Retorna uma lista com os métodos de pagamento |
| getIssuers | Retorna uma lista de issuers |
| getInstallments | Retorna todas as parcelas disponíveis |
| createCardToken | Retorna o token do cartão |

A seguir, você encontra os exemplos de como utilizá-los:

[[[
```react-jsx
import {
 getIdentificationTypes,
 getPaymentMethods,
 getIssuers,
 getInstallments,
 createCardToken,
} from '@mercadopago/sdk-react'


const identificationTypes = await getIdentificationTypes()
const paymentMethods = await getPaymentMethods({ bin: '50314332' })
const issuers = await getIssuers({ paymentMethodId: 'master', bin: '50314332' })
const installments = await getInstallments({
 amount: '1000',
 locale: 'pt-BR',
 bin: '50314332',
 processingMode: 'aggregator'
})
const cardToken = await createCardToken({
 cardholderName: 'APRO',
 identificationType: '<BUYER_IDENTIFICATION_TYPE>',
 identificationNumber: '<BUYER_IDENTIFICATION_NUMBER>',

 ```    
]]]

Para coletar os dados de cartão e gerar o token para pagamentos, **utilize os Secure Fields**.

> NOTE
>
> Importante
>
> Para um detalhamento completo dos parâmetros e retornos de cada função, consulte a [documentação oficial no Github](https://github.com/mercadopago/sdk-js/blob/main/API/core-methods.md).