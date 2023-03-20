> CLIENT_SIDE
>
> h1
>
> Alterar textos do botão

O botão de pagamento oferece dois níveis de leitura: o **call to action (botão)** e a **proposta de valor**. Em ambos os casos, o texto pode ser customizado de acordo com as opções disponibilizadas pelo Mercado Pago. Por padrão, o botão de pagamento é renderizado como na imagem a seguir.

<center>

![cow-text-wallet-default](cow/cow-text-wallet-default.pt.jpg)

</center>

Para alterar os textos padrões, modifique a propriedade `customization` durante a renderização.

| - | Descrição |
| --- |--- | 
| Momento de customização | Ao renderizar. |
| Propriedade | customization |
| Observações | Ao enviar um texto vazio, a tela apresentará o texto definido pelo layout padrão. Por outro lado, ao se enviar um texto alternativo, este substituirá o texto padrão. Para verificar quais são os textos alternativos disponíveis, veja a tabela a seguir. |

Confira a seguir os textos disponíveis para alteração e um exemplo de código.

| Chave | Opções disponíveis | Padrão |
| --- |--- | --- | 
| action | pay, buy | pay |
| valueProp | practicality, convenience, security_details, security_safety | security_safety |

Veja quais são os textos relacionados a cada opção:

| Chave | Opção | Texto |
| --- |--- | --- | 
| action | pay | Pagar com Mercado Pago. |
| action | buy | Comprar com Mercado Pago. |
| valueProp | practicality| Use cartões salvos ou seu saldo em conta. |
| valueProp | convenience | Parcelamento com ou sem cartão. |
| valueProp | security_details | Proteção para seus dados. |
| valueProp | security_safety| Pague com segurança. |
| valueProp | none | - |

Exemplo de customização dos textos do botão:

[[[
```Javascript
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
 texts: {
   action: 'buy',
   valueProp: 'security_details',
 },
}
```
]]]

Tais exemplos de customização irão gerar o seguinte resultado:

<center>

![cow-text-wallet](cow/cow-text-wallet.pt.jpg)

</center>