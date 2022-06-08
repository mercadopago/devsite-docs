> CLIENT_SIDE
>
> h1
>
> Alterar textos

| Brick | Card Payment Brick |
|--- |--- |
| Momento de customização | Ao renderizar brick |
| Propriedade | customization.visual.texts.{cardNumber, cardExpirationDate, cardSecurityCode, cardholderName, cardholderIdentification, cardholderEmail, formTitle, emailSectionTitle, installmentsSectionTitle, selectInstallments, formSubmit} |
| Atributo | label, placeholder |
| Tipo | String |
| Observações | Ao enviar um texto vazio, a tela apresentará o texto definido pelo layout padrão. Por outro lado, ao se enviar um texto customizado, este substituirá o texto padrão. Para verificar quais são os textos padrões, veja a seção Layout do brick desejado. <br> <br> Caso os textos customizados sejam maiores do que o espaço disponível, o texto apresentado será interrompido até o tamanho máximo permitido e o excedente será substituído pelo símbolo "...". |

```javascript
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

> PREV_STEP_CARD_PT
>
> Ocultar título e bandeiras 
>
> Caso deseje, veja como ocultar a linha de título e as bandeiras aceitas no Card Payment Brick.
>
> [Ocultar título e bandeiras](/developers/pt/docs/checkout-bricks/additional-customization/hide-title-and-flags)

> NEXT_STEP_CARD_PT
>
> Selecionar idioma 
>
> Caso deseje, saiba como selecionar o idioma do Card Payment Brick.
>
> [Selecionar idioma](/developers/pt/docs/checkout-bricks/additional-customization/select-language)