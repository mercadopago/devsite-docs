# Informações adicionais para integração

> WARNING
>
> Importante
>
> A atribuição incorreta de MCC por parte do Facilitador do Pagamento poderá acarretar em aplicação de multas e restituição do intercâmbio devido das bandeiras. Essas multas poderão ser repassadas aos Facilitador do Pagamento pelo Mercado Pago.<br><br>Para mais detalhes e acesso ao Cadastro Unificado de MCC, consulte o site oficial da [Abecs](https://www.abecs.org.br/consulta-mcc-individual).

Abaixo, você encontrará algumas observações e boas práticas para a integração de um Facilitador de Pagamento.

## Atribuição do Merchant Code Category (MCC)

O Facilitador de Pagamento deve atribuir para cada transação o MCC que descreva mais precisamente a atividade final de seu sub comércio. 

De acordo com orientação das bandeiras e do Normativo nº 28 da Abecs (Associação Brasileira das Empresas de Cartões de Crédito e Serviços), a atribuição do MCC deve seguir obrigatoriamente as seguintes regras conforme prioridade abaixo:

1. **MCC determinado pelo Comitê das Bandeiras da Abecs;**
1. **MCC considerando o CNAE Primário disposto na Tabela “de/para” (disponível no Cadastro Unificado de MCC da Abecs).**


A Abecs está hospedando um banco de dados que contém informações dos CNPJ que, conforme a regra exposta acima, estão corretamente vinculados ao MCC, seja por deliberação ou atrelado ao CNAE Primário/Principal. 

Todos os participantes do Sistema Brasileiro de Pagamentos podem acessar essas informações por meio das seguintes formas.

* **Portal - Novo Sistema de Cadastro Unificado de MCC:** O portal da Abecs para consulta online de MCC, possibilitando acesso logado a lista de-para de CNAE-MCC e consulta individual do CNPJ para verificar qual o MCC correto para o comércio. Para acessar esse novo sistema, será necessária a realização de um cadastro com a criação de usuário e senha.
* **Integração via API:** Visando aumentar a segurança das informações disponíveis no sistema, a Abecs realizou a criação de APIs do Sistema Unificado de MCC que possibilitam os credenciadores e subcredenciadores terem acesso às informações de forma massificada e automatizada. Pode solicitar mais informações no e-mail monitor@abecs.org.br.
