# O que é o Platform ID?

O `platform_id` é uma informação utilizada para identificar as plataformas parceiras oficiais do Mercado Pago.

Sua aplicação consiste em atribuir o ID fornecido pela equipe de Partners no **Header** das requisições de pagamento, utilizando o campo `x-platform-id`.

Exemplo via header:

```bash
--header 'x-platform-id: (PLATFORM_ID fornecido pelo time de Partners)'
```

## Pré-requisito
Antes de obter o seu `platform_id`, é necessário solicitar ao time de Partners e aguardar a aprovação da sua solução. Depois de aprovado, o `platform_id` será criado e fornecido para que você possa atribuir o ID correspondente em sua integração.