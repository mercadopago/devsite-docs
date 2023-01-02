> CLIENT_SIDE
>
> h1
>
> Alterar textos

| - | Brick |
|--- |--- |
| Momento de customização | Ao renderizar Brick |
| Propriedade | customization.visual.texts.{ctaGeneralErrorLabel, ctaCardErrorLabel, ctaReturnLabel} |
| Tipo | String |
| Observações | Ao enviar um texto vazio, a tela apresentará o texto definido pelo layout padrão. Por outro lado, ao se enviar um texto customizado, este substituirá o texto padrão. <br> <br> Caso os textos customizados sejam maiores do que o espaço disponível, o texto apresentado será interrompido até o tamanho máximo permitido e o excedente será substituído pelo símbolo "...". |

```javascript
const settings = {
   ...,
   customization: {
       visual: {
           texts: {
               ctaGeneralErrorLabel: 'Custom Label',
               ...,
           },
       }
   },
}
```