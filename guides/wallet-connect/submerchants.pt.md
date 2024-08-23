# Subcomerciante

Os subcomerciantes são clientes finais que possuem **Facilitadores de pagamento**, entidades que oferecem soluções de pagamento que permitem que estes subcomerciantes comercializem seus produtos e serviços. Essa entidade é responsável por capturar, processar e liquidar as transações, encaminhando os valores diretamente aos subcomerciantes, tornando-se um credor do adquirente.

No mercado atual podemos identificar dois tipos de Facilitadores de pagamentos:

- **Subcredenciador**: é uma entidade jurídica que habilita outras empresas ou pessoas físicas para a aceitação de pagamentos com cartão, intermediando as transações de pagamento em nome de subcomerciantes e realizando a liquidação dos recebíveis destes em suas respectivas contas bancárias.
- **Marketplace**: é um site ou plataforma que vende produtos ou serviços, próprios e de terceiros, e que intermedia as transações de pagamento e realiza a liquidação dos recebíveis destes em suas respectivas contas bancárias. Está sob as mesmas regras de um Subcredenciador por fazer intermediação do fluxo financeiro para o subcomerciante.

> WARNING
>
> Importante
>
> A Circular BCB nº3978/2020 determina que todos os Facilitadores de pagamento identifiquem os beneficiários finais no momento da transação. Para cumprimento desta norma, é obrigatório enviar os parâmetros do atributo `sub_merchant` que são detalhados na tabela abaixo. Caso os campos não sejam enviados, a bandeira poderá aplicar penalidades que serão repassadas ao Facilitador de Pagamento.

Veja abaixo os detalhes de cada atributo pertencente a `forward_data.sub_merchant`.

| Atributo | Tipo | Descrição | Obrigatório/Opcional | Exemplo |
|---|---|---|---|---|
| `sub_merchant_id` | Texto | Código do subcomerciante. | Obrigatório | 123123 |
| `mcc` | Texto | MCC (Merchant Code Category) do subcomerciante conforme deliberação da Abecs e/ou CNAE primário. | Obrigatório | 5462 |
| `country` | Texto | País em que o subcomerciante está localizado. | Obrigatório | BRA |
| `address_door_number` | Número | Número da rua onde o subcomerciante está localizado. | Obrigatório | 1 |
| `zip` | Texto | CEP do subcomerciante. | Obrigatório | 2222222 |
| `document_number` | Texto | Identificação do CPF ou CNPJ do subcomerciante. | Obrigatório | 222222222222222 |
| `city` | Texto | Cidade onde o subcomerciante está localizado. | Obrigatório | SÃO PAULO |
| `address_street` | Texto | Rua onde o subcomerciante está localizado. | Obrigatório | RUA A |
| `legal_name` | Texto | Nome do subcomerciante. | Obrigatório | LOJINHA DO ZÉ |
| `region_code_iso` | Texto | Estado onde o subcomerciante está localizado. | Obrigatório | BR-MG |
| `region_code` | Texto | Código postal do subcomerciante. | Obrigatório | BR |
| `document_type` | Texto | Número do CPF ou CNPJ do sub comércio. | Obrigatório | CNPJ |
| `phone` | Texto | Telefone do subcomerciante. | Obrigatório | 123123123 |
| `url` | Texto | URL do Facilitador de Pagamento. | Obrigatório | www.nomedofacilitador.com.br |

> WARNING
>
> Atenção
>
> O Facilitador de Pagamento deve atribuir para cada transação o MCC que descreva mais precisamente a atividade final de seu sub comércio. A atribuição incorreta de MCC por parte do Facilitador de Pagamento poderá acarretar em aplicação de multas e restituição do intercâmbio devido das bandeiras. Essas multas poderão ser repassadas aos Facilitador de Pagamento pelo Mercado Pago.<br><br>Para mais detalhes e acesso ao Cadastro Unificado de MCC, consulte o site oficial da [Abecs](https://www.abecs.org.br/consulta-mcc-individual) (Associação Brasileira das Empresas de Cartões de Crédito e Serviços).