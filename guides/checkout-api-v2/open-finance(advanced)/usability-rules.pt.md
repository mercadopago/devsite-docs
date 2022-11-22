# Regras de Usabilidade
Para garantir o entendimento do usuário pagador sobre o uso da opção da Iniciação de Transação de Pagamentos do Open Finance **é necessário garantir que no Checkout haja clareza de que aquele é um pagamento realizado via Open Finance através do ecossistema de pagamentos Mercado Pago**.

![Tela para escolha ](/images/api/open-finance(advanced)/usability-rule1.png)

Confira abaixo algumas dicas de usabilidade para melhorar o fluxo de pagamentos via Open Finance.

## Listagem de bancos
Apresente uma lista de possíveis instituições financeiras para que o usuário possa selecionar a que ele gostaria de seguir com o pagamento. 

Para permitir que o cliente inicie uma transação de pagamento via **Iniciador de Transação de Pagamentos do Open Finance**, você precisa realizar o seguinte:

### 1 - Disponibilizar a lista de Instituições Financeiras disponíveis
Para ter acesso à lista, basta realizar a seguinte requisição:

```curl
curl --request GET \
  --url https://api.mercadopago.com/open-banking/payments/v1/banks \
  --header 'Authorization: Bearer <ENV_ACCESS_TOKEN>'
```

**Parâmetros de filtro para a requisição**

| Parâmetro | Localização | Tipo     | Valores              | Descrição                                                                                                                                                                                                                             |
|-----------|-------------|----------|----------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| segment   | Query       | Opcional | [personal, business] | Permite filtrar por bancos para PJ ou PF.                                                                                                                                                                                             |
| platform  | Query       | Opcional | [desktop, mobile]    | Permite filtrar por bancos que possuem uma experiência específica, caso o pagamento esteja sendo feito no desktop, a lista de bancos pode ser filtrada para exibir apenas os bancos que possuem uma experiência desktop e vice-versa. |

> NOTE
> 
> Nota
> 
> Por padrão, a API retorna todos os bancos, sem nenhum tipo de filtro.

**Exemplo de resposta**

```json
{
   "data": [
       {
           "id": "81d8e591-5d8e-46e2-8b4a",
           "name": "Mercado Pago - Payments",
           "code": "370",
           "ispb": "10573521",
           "logo": "https://http2.mlstatic.com/open-banking/assets/81d8e591-5d8e-46e2-8b4a.svg",
           "isFrequentlyUsed": true
       },
       {
           "id": "87290355-03e2-4cf9-b30b",
           "name": "Mock Bank",
           "code": "345",
           "ispb": "",
           "logo": "https://http2.mlstatic.com/open-banking/assets/87290355-03e2-4cf9-b30b.svg",
           "isFrequentlyUsed": false
       }
   ]
}
```

**Erros possíveis**

| Código do erro | Tipo         | Descrição                                        |
|----------------|--------------|--------------------------------------------------|
| 401            | unauthorized | Acesso não autorizado                            |
| 403            | forbidden    | Você não tem permissão para acessar este recurso |


> WARNING
> 
> Importante
> 
> Como pré-requisito para realizar a chamada a este endpoint é necessário que seja passado o `access_token` de produção para chamadas produtivas e o de teste para chamadas de testes.

Atualmente as Instituições Financeiras participantes homologadas e disponíveis para serem iniciadas são:

| Instituição Financeira    | Status DCR | Status iniciação | App | Web | Handoff |
|---------------------------|------------|------------------|-----|-----|---------|
| Nubank                    | Concluído  | Concluído        | OK  | OK  | OK      |
| Bradesco PF               | Concluído  | Concluído        | OK  | OK  | N/A     |
| PicPay Servicos S.A       | Concluído  | Concluído        | OK  | OK  | OK      |
| Banco do Brasil           | Concluído  | Concluído        | OK  | OK  | N/A     |
| Banco Bradesco S.A (Next) | Concluído  | Concluído        | OK  | OK  | OK      |
| Santander PF              | Concluído  | Concluído        | OK  | OK  | N/A     |
| Itaú PF                   | Concluído  | Concluído        | OK  | OK  | N/A     |
| XP                        | Concluído  | Concluído        | OK  | OK  | OK      |
| iti - Itaú                | Concluído  | Concluído        | OK  | x   | x       |
| Pagbank                   | Concluído  | Concluído        | OK  | OK  | OK      |
| Neon                      | Concluído  | Concluído        | OK  | OK  | OK      |
| Sicredi                   | Concluído  | Concluído        | OK  | OK  | OK      |
| Woop                      | Concluído  | Concluído        | OK  | OK  | OK      |

> WARNING
> 
> Importante
> 
> A lista de Instituições Financeiras é dinâmica e poderá ser alterada em caso de indisponibilidade.

### 2 - Criar um pagamento
Já com o ID do banco escolhido pelo usuário, crie um pagamento e passe essa informação para o campo transaction_data.bank_info.origin_bank_id da requisição de criação de pagamentos.

Para mais informações, acesse a seção de criação de pagamentos desta documentação, ou [clicando aqui](/developers/pt/docs/checkout-api/integration-test/open-finance/payment)

### Dicas para exibição
O vendedor poderá exibir as instituições favoritas primeiro na lista ou no formato que preferir, porém, **não poderá impedir que o cliente possa selecionar alguma das instituições disponíveis para uso**.

![Lista de bancos disponíveis](/images/api/open-finance(advanced)/display-tips.png)

> WARNING
> 
> Importante
> 
> Lembre-se de que, por enquanto, o Banco Central do Brasil obriga a todos os participantes do Open Finance a exibirem todas as Instituições Financeiras disponíveis para serem utilizadas sem serem excluídas da lista, com exceção em casos de erros, indisponibilidade ou inoperância. 

## Revisa e Confirma
A tela de revisa e confirma deve contemplar, no mínimo, as seguintes informações:

* A forma de pagamento;

* O valor da transação de pagamento;

* As informações referentes ao recebedor da transação de pagamento;

* Data do pagamento.

* Aviso de redirecionamento para dar maior visibilidade ao cliente quanto às próximas etapas. 

![Tela de revisa e confirma](/images/api/open-finance(advanced)/review-confirm.png)

> WARNING
> 
> Importante
> 
> Os Informativos de termos e condições podem ser apresentados como um link para leitura, estando a cargo da Instituição Iniciadora de Transação de Pagamentos definir se exibirá uma ação obrigatória por parte do cliente. 