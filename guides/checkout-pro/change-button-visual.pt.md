> CLIENT_SIDE
>
> h1
>
> Alterar visual do botão

É possível customizar o visual do botão de pagamento através da definição de propriedades visuais com valores alternativos aos padrões. Por padrão, o botão de pagamento é renderizado como na imagem a seguir.

[IMAGEM]

Para alterar os textos padrões, modifique a propriedade `customization` durante a renderização.

| - | Descrição |
| --- |--- | 
| Momento de customização | Ao renderizar. |
| Propriedade | customization |
| Observações | Ao enviar uma propriedade vazia, a tela apresentará o visual definido pelo layout padrão. Por outro lado, ao se enviar um texto alternativo, este substituirá o texto padrão. Para verificar quais são os textos alternativos disponíveis, veja a tabela a seguir. |

Confira a seguir os visuais disponíveis para alteração e um exemplo de código.

| Chave | Opções disponíveis | Padrão | Observações |
| --- |--- | --- | --- | 
| buttonBackground | default, black, blue, white | default | - |
| buttonHeight | - | 48px | Mínimo: 48px. <br> Máximo: livre escolha. |
| borderRadius | - | 6px | - |
| valuePropColor | grey, white| grey | - |
| verticalPadding | - | 16px | Mínimo: 8px. <br> Máximo: livre escolha. |
| horizontalPadding | - | 0px | Mínimo: 0px. <br> Máximo: livre escolha. |

[[[
```Javascript
const settings = {
 ...,
 customization: {
      visual: {
          buttonBackground: 'black',
          borderRadius: '16px',
      },
 },
}
```
```react-jsx
const customization = {
 visual: {
     buttonBackground: 'black',
     borderRadius: '6px',
 },
}
```
]]]

Tais exemplos de customização irão gerar o seguinte resultado:

[IMAGEM]