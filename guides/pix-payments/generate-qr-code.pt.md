## Gerar QR Code para pagamento

No resultado das requisições, estará presente o campo `loc.location`. A partir do valor desse parâmetro, é possível gerar um QR Code para ser utilizado na cobrança.

Para gerar o QR Code, utilize a API pública abaixo e realize a seguinte requisição.

[[[
```curl

curl --location --request GET 'https://gerarqrcodepix.com.br/api/v1?nome=NOME_RECEBEDOR&cidade=CIDADE_RECEBEDOR&location=LOCATION&saida=qr&tamanho=256'

```
]]]


> WARNING
>
> Importante
>
> Essa é uma ferramenta pública desenvolvida por terceiros, sem nenhum vínculo com a empresa Mercado Pago.
