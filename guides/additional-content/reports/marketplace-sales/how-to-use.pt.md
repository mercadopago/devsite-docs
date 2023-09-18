# Usos do relatório

Uma vez que o relatório estiver pronto e baixado, você terá um arquivo para consultar em planilhas ou importar para o programa de conciliação de sua escolha.

Para consultar, recomendamos que você faça o download no formato *.csv* e abra-o em uma planilha de cálculo ou em qualquer programa de visualização. Se optar pela última opção, é importante configurar previamente o programa para suportar o formato *UTF-8* e evitar problemas de leitura.

### Conteúdo do relatório

O relatório lista as transações efetuadas por vendedores associados a um marketplace. Cada linha detalha uma transação independente, abordando valores, taxas, *status* e *status_detail*. Enquanto o campo *status* informa sobre a aprovação do pagamento, o *status_detail* esclarece aspectos adicionais, como razões de rejeição.

Para mais detalhes sobre *status* e *status_detail*, consulte a seção "Parâmetros de resposta" na documentação da [API de Pagamentos](https://www.mercadopago.com.ar/developers/pt/reference/payments/_payments/post).

> NOTE
>
> Nota
> 
> Além disso, na coluna **Net Received Amt LC**, você encontrará o impacto real em seu dinheiro.

Observe como o relatório de vendas do *Marketplace* está estruturado neste exemplo para identificar as operações e ler seus próprios relatórios:

![Exemplo para identificar operações e ler seus próprios relatórios](/images/manage-account/reports/marketplace-sales/image2.png)