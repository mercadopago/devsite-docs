---
content_section_with_media: 
 - title: Order
 - message: Order é uma API projetada para simplificar a integração dos produtos de pagamento do Mercado Pago, permitindo que os desenvolvedores acessem diversas soluções de pagamento por meio de uma única integração. Esta API unificada abrange todos os métodos de pagamento oferecidos pela plataforma, incluindo pagamentos online e com dispositivos Point.
 - media_image: /order/landing-1.png
---

--- mini_landing_separator ---

>>>> Modelos de integração <<<<

---
future_product_avaible:
 - card_avaible: true
 - card_icon: Card
 - card_title: Pagamentos online
 - card_description: Construa o processador de pagamentos para o seu site. Você controla toda a experiência, de configurações básicas a avançadas.
 - card_button: /developers/pt/docs/order/online-payments/introduction
 - card_buttonDescription: Saiba mais
 - card_pillText: DISPONÍVEL
 - card_linkAvailable: false
 - card_linkProof:
 - card_linkProofDescription:
 - card_linkAvailable: true
 - card_avaible: true
 - card_icon: User
 - card_title: Pagamentos presenciais
 - card_description: XXX
 - card_button: /developers/pt/docs/order/in-store-payments/introduction
 - card_buttonDescription: Saiba mais
 - card_pillText: DISPONÍVEL
 - card_linkAvailable: false
 - card_linkProof:
 - card_linkProofDescription:
---

--- mini_landing_separator ---

>>>> Disponibilidade por país <<<<
---
available_countries: mla, mlb, mlm

---

---
bullet_section_with_media: 
 - title: Vantagens
 - type: normal
 - message: Ao centralizar essas opções em um único ponto de acesso, a implementação para os integradores se torna mais fácil, permitindo que eles ofereçam múltiplas experiências de pagamento sem a necessidade de trabalhar com várias APIs separadas. Veja na tabela abaixo as principais diferenças entre a nova API de Order e a antiga API de Pagamentos.
 - image: /order/landing-2.png
---

| Funcionalidade  |  API de Pagamentos  | API de Order |
| --- | --- |--- |
| Modo  | Automático  | Automático e manua |
| Operações  | Payments  | [Payments](/developers/pt/docs/order/online-payments/introduction) e [In-store](/developers/pt/docs/order/in-store-payments/introduction) (QR e Point).|
| Múltiplas transações  | Não possui | Possui. |
| Envio de metadados  | Permite  | Não permite |
| Envio de Notification Url  | Permite no _payload_.  | Não permite no _payload_ e deve ser configurado no [Painel do desenvolvedor > Detalhes da aplicação](/developers/pt/docs/order/additional-content/your-integrations/application-details). |
| Validações com respostas de erros completas  | Valida um erro por vez.  | Retorna uma lista com todos os erros. |
| Retorno de dados PII | Retorna em alguns cenários (ex: aprovado.).  | Não retorna em nenhum cenário. |

--- mini_landing_separator ---

>>>> Tipos de pagamento aceitos <<<<

----[mlb]----

---
available_payments: credit, debit

---
------------
----[mla]---- 

---
available_payments: credit, debit

----
------------
----[mlm]---- 

---
available_payments: credit, debit

----
------------