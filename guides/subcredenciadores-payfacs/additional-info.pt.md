# Informações adicionais para integração

Abaixo, você encontrará algumas observações e boas práticas para a integração de um Facilitador de Pagamento.

## Atribuição do Merchant Code Category (MCC)

Para garantir a correta atribuição do MCC (Merchant Category Codes), é necessário que, em cada transação, o Facilitador de Pagamentos atribua o MCC que melhor descreva a atividade final do seu subcomerciante.

De acordo com os regulamentos das bandeiras e da ABECS (Associação Brasileira das Empresas de Cartões de Crédito e Serviços), a atribuição do MCC deve seguir a seguinte regra:

1. Deve ser determinado pelo Comitê do MCC da ABECS;
1. Deve estar incluído no CNAE Primário conforme a Tabela “de/para” (disponível no Cadastro Unificado de MCC).

A Abecs está hospedando um banco de dados que contém informações dos CNPJ que, conforme a regra exposta acima, estão corretamente vinculados ao MCC. 

Todos os participantes do Sistema Brasileiro de Pagamentos podem acessar essas informações por meio das seguintes formas:

* **Portal - Novo Sistema de Cadastro Unificado de MCC:** O portal da Abecs para consulta online de MCC, possibilitando acesso logado a lista de-para de CNAE-MCC e consulta individual do CNPJ para verificar qual o MCC correto para o comércio. Para acessar esse novo sistema, será necessária a realização de um cadastro com a criação de usuário e senha.
* **Integração via API:** Visando aumentar a segurança das informações disponíveis no sistema, a Abecs realizou a criação de APIs do Sistema Unificado de MCC que possibilitam os credenciadores e subcredenciadores terem acesso às informações de forma massificada e automatizada. Pode solicitar mais informações no e-mail monitor@abecs.org.br.

> WARNING
>
> Importante
>
> A atribuição incorreta de MCC por parte do Facilitador do Pagamento poderá acarretar em aplicação de multas e restituição do intercâmbio devido das bandeiras. Essas multas poderão ser repassadas aos Facilitador do Pagamento pelo Mercado Pago.<br><br>Para mais detalhes e acesso ao Cadastro Unificado de MCC, consulte o site oficial da [Abecs](https://www.abecs.org.br/consulta-mcc-individual).

