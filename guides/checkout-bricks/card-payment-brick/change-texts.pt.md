> CLIENT_SIDE
>
> h1
>
> Alterar textos

| - | Descrição |
|--- |--- |
| Momento de customização | Ao renderizar Brick |
| Propriedade | customization.visual.texts.{cardNumber, cardExpirationDate, cardSecurityCode, cardholderName, cardholderIdentification, cardholderEmail, formTitle, emailSectionTitle, installmentsSectionTitle, selectInstallments, formSubmit} |
| Atributo | label, placeholder |
| Tipo | String |
| Observações | Ao enviar um texto vazio, a tela apresentará o texto definido pelo layout padrão. Por outro lado, ao se enviar um texto customizado, este substituirá o texto padrão. Para verificar quais são os textos padrões, veja a [seção Layout](/developers/pt/docs/checkout-bricks/card-payment-brick/introduction) do Card Payment Brick. <br> <br> Caso os textos customizados sejam maiores do que o espaço disponível, o texto apresentado será interrompido até o tamanho máximo permitido e o excedente será substituído pelo símbolo "...". |

[[[
```Javascript
const settings = {
    ...,
    customization: {
        visual: {
            texts: {
                formTitle: 'string',
                installmentsSectionTitle: 'string',
                ...,
            },
        }
    },
}
```
```react-jsx
const customization = {
 visual: {
   texts: {
     formTitle: 'string',
     installmentsSectionTitle: 'string'
     ...,
   }
 }
};
```
]]]