# Pré-requisitos

Para configurar Pix Cobrança, é importante atender aos requisitos e ter em mãos os conceitos mostrados abaixo.

### Requisitos

| Requisito  | Descrição  |
| --- | --- |
| Conta Mercado Pago  | Para configurar Pix Cobrança, é preciso uma conta de vendedor no Mercado Pago. Caso não tenha, clique aqui para criar.  |
| Aplicação  | As aplicações são as diferentes integrações contidas em uma ou mais lojas. Você pode criar uma aplicação para cada solução que implementar, a fim de ter tudo organizado e manter um controle que facilite a gestão. Veja [Dashboard](/developers/pt/docs/pix-payments/additional-content/dashboard/introduction) para mais informações sobre como criar uma aplicação.  |
| Certificado de transação  | Criar e cadastrar certificado de transação conforme seção [Criar e cadastrar certificado de transação](/developers/pt/docs/pix-payments/integration-configuration/certificate-creation).  |

### Conceitos

| Conceitos  | Função  |
| --- | --- |
| Usuário  | Corresponde ao usuário do integrador no Mercado Pago. Cada usuário possui um identificador único, referenciado nesse documento por CUST_ID.  |
| Aplicação  | São unidades de integração com o Mercado Pago. Cada aplicação possui um identificador único, referenciado nesse documento por APP_ID.  |
| Certificado mTLS  | Certificado que garante a identidade de ambas as partes de uma transação. Necessário para efetuar as requisições à API.  |


Se todos os requisitos foram cumpridos, siga as próximas etapas para realizar a integração.