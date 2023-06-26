# Usos do relatório

## Como usar o relatório?

Uma vez que o relatório estiver pronto e baixado, você terá um arquivo para consultar em planilhas ou importar para o programa de conciliação de sua escolha.

Para consultar, recomendamos que você faça o download no formato *.csv* e abra-o em uma planilha de cálculo ou em qualquer programa de visualização. Se optar pela última opção, é importante configurar previamente o programa para suportar o formato *UTF-8* e evitar problemas de leitura.

### O que o relatório contém?

O relatório é composto por uma lista de transações realizadas pelos vendedores vinculados a um marketplace. Cada linha representa uma transação independente com detalhes sobre os diferentes valores e taxas, bem como seu **status** e **status_detail**.

| Status   | Status_detail                      |
| -------- | --------------------------------- |
| Approved | accredited                        |
| Rejected | cc_rejected_insufficient_amount   |
| Rejected | cc_rejected_bad_filled_security_code |
| Rejected | cc_rejected_other_reason          |
| Rejected | cc_rejected_high_risk             |

> NOTE
>
> Além disso, na coluna **Net Received Amt LC**, você encontrará o impacto real em seu dinheiro.

Observe como o relatório de vendas do *Marketplace* está estruturado neste exemplo para identificar as operações e ler seus próprios relatórios:

[IMG]