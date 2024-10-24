# O que é o Platform ID?

O `PLATFORM_ID` é uma informação utilizada para identificar as plataformas parceiras oficiais do Mercado Pago.

Sua aplicação consiste em atribuir o ID fornecido pela equipe de Partners no _header_ das requisições de pagamento, utilizando o campo `x-platform-id`.

Exemplo via _header_:

```curl
--header 'x-platform-id: (PLATFORM_ID fornecido pelo time de Partners)'
```

## Pré-requisito

Antes de obter o seu `PLATFORM_ID`, é necessário solicitar ao time de Partners e aguardar a aprovação da sua solução. Depois de aprovado, o `PLATFORM_ID` será criado e fornecido para que você possa atribuir o ID correspondente em sua integração.