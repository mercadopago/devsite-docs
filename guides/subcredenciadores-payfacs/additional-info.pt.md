# Informações adicionais para integração

Abaixo, você encontrará algumas observações e boas práticas para a integração de um Facilitador de Pagamento.

## Atribuição do Merchant Code Category (MCC)

Para garantir a correta atribuição do MCC (Merchant Category Codes), é necessário que, em cada transação, o Facilitador de Pagamentos atribua o MCC que melhor descreva a atividade final do seu subcomerciante.

De acordo com os regulamentos das bandeiras e da ABECS (Associação Brasileira das Empresas de Cartões de Crédito e Serviços), a atribuição do MCC deve seguir a seguinte regra:

1. Deve ser determinado pelo Comitê do MCC da ABECS;
1. Deve estar incluído no CNAE Primário conforme a Tabela “de/para” (disponível no Cadastro Unificado de MCC).

> WARNING
>
> Importante
>
> A atribuição incorreta de MCC por parte do Subcredenciador/Marketplace poderá acarretar em aplicação de multas e restituição do intercâmbio devido aos emissores por parte das Bandeiras. Essas multas poderão ser repassadas aos Subcredenciadores/Marketplaces pelo Mercado Pago.<br><br>Para mais detalhes e acesso ao Cadastro Unificado de MCC, consulte o site oficial da [ABECS](https://www.abecs.org.br/consulta-mcc-individual).

