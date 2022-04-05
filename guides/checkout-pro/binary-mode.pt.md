## Modo binário

Modo binário é uma função que permite a aprovação ou recusa automática de um pagamento. Isso significa que quando ativado, os pagamentos realizados serão automaticamente aprovados ou recusados sem a necessidade de ação por parte do vendedor.

Se estiver desativado, o pagamento poderá ficar pendente (no caso de exigir qualquer ação do comprador) ou em processo (se for necessária uma revisão manual).
Para ativar o modo binário, envie o parâmetro `binary_mode`  ao endpoint [/checkout/preferences](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/preferences/_checkout_preferences/post) com o valor `true` e execute a requisição.

| Elemento | Características | Observações |
|---|---|---|
|Título e bandeiras aceitas <br><br> Propriedade: formTitle | **Valor (título):** Cartão de crédito <br> **Label** N/A <br> **Placeholder:** text/imagem <br> **Formato:** N/A <br> **Máx caracteres**: N/A | Opcional <br> Customizável  </br> <br> *As bandeiras são exibidas em conjunto com o título. A única customização disponível para elas é ocultá-las junto ao título do formulário, deixando de exibir ambas informações. |
| Campo para inserção do número do cartão <br><br> Propriedade: cardNumber | **Valor:** N/A <br> *Label*: Número do cartão <br> **Placeholder:** 1234 1234 1234 1234 <br> **Tipo:** number <br> **Formato:** N/A <br> **Máx. caracteres:** a depender do emissor, podendo variar entre 15 e 16.| Obrigatório <br> Customizável (label, placeholder) |
| Campo para inserção da data de vencimento do cartão <br><br> Propriedade: cardExpirationDate | **Valor:** N/A <br> **Label:** Data de vencimento <br> **Placeholder:** MM/AA <br> **Tipo:** date <br> **Formato:** MM/AA <br> **Máx. caracteres:** 5 | Obrigatório <br> <br> Customizável (label, placeholder) |
| Campo para inserção do código de segurança <br><br> Propriedade: cardSecurityCode | **Valor:** N/A <br> **Label:** Nome do titular como aparece no cartão <br> **Placeholder:** João Silva <br> **Tipo:** string <br> **Formato:** N/A <br> **Máx. caracteres:** 100 | Obrigatório <br><br> Customizável (label, placeholder) |



