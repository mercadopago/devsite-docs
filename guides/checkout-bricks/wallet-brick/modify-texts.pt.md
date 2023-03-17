> CLIENT_SIDE
>
> h1
>
> Alterar textos

O Wallet Brick oferece dois níveis de leitura: o **call to action (botão)** e a **proposta de valor**. Em ambos os casos, o texto pode ser customizado de acordo com as opções disponibilizadas pelo Mercado Pago. 

> WARNING
>
> Atenção
>
> Para oferecer uma melhor experiência alinhada à proposta da nossa marca, atualmente ainda não é possível uma personalização completa dos textos.

| - | Descrição |
|--- |--- |
| Momento de customização | Ao renderizar Brick |
| Propriedade | customization.texts.{action, valueProp} |
| Tipo | String |
| Observações | Ao enviar um texto vazio, a tela apresentará o texto definido pelo layout padrão. Por outro lado, ao se enviar um texto customizado, este substituirá o texto padrão. Para verificar quais são os textos padrões, veja a tabela a seguir.|

Confira a seguir os textos disponíveis para alteração e um exemplo de código.

----[mla, mlb, mlm]----
| Chave | Opções disponíveis | Padrão |
|--- |--- | --- |
| action | pay, buy | pay |
| valueProp | practicality, convenience, security_details, security_safety | security_safety |

Veja quais são os textos relacionados a cada opção:

| Chave | Opção | Texto |
|--- |--- | --- |
|action |pay | Pagar com Mercado Pago |
|action |buy | Comprar com Mercado Pago |
|valueProp |practicality | Use cartões salvos ou seu saldo em conta |
|valueProp |convenience | Parcelamento com ou sem cartão |
|valueProp |security_details | Proteção para seus dados |
|valueProp |security_safety | Pague com segurança | 

------------
----[mlu, mlc, mco, mpe]----
| Chave | Opções disponíveis | Padrão |
|--- |--- | --- |
| action | pay, buy | pay |
| valueProp | practicality, security_details, security_safety | security_safety |

Veja quais são os textos relacionados a cada opção:

| Chave | Opção | Texto |
|--- |--- | --- |
|action |pay | Pagar com Mercado Pago |
|action |buy | Comprar com Mercado Pago |
|valueProp |practicality | Use cartões salvos ou seu saldo em conta |
|valueProp |security_details | Proteção para seus dados |
|valueProp |security_safety | Pague com segurança | 

------------

[[[
```javascript
const settings = {
    ...,
    customization: {
         texts: {
             action: 'buy',
             valueProp: 'security_details',
         },
    },
}
```
```react-jsx
const customization = {
 visual: {
   texts: {
     action: 'buy',
     valueProp: 'security_details'
     ...,
   }
 }
};
```
]]]