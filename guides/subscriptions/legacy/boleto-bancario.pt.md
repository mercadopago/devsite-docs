# Boleto bancário

É possível disponibilizar para o assinante a opção de pagar a assinatura com boleto bancário. Ao optar por esse meio de cobrança, o boleto enviado terá validade de 7 dias e continuará válido até 3 dias após o vencimento. Caso o assinante deixe de pagar mais de 2 boletos consecutivos, a assinatura será cancelada.

Para oferecer pagamento de assinaturas via boleto bancário, envie um **POST** com o parâmetro `payment_methods_allowed` informando o meio de pagamento que deverá aparecerá no checkout, por exemplo, `bolbradesco` e o parâmetro `status` como "pending" ao endpoint [/preapproval_plan](/developers/pt/reference/subscriptions/_preapproval_plan/post) e execute a requisição.

> NOTE
>
> Importante
>
> O pagamento de assinaturas por boleto bancário está disponível somente para assinaturas criadas por meio do endpoint [/preapproval_plan](/developers/pt/reference/subscriptions/_preapproval_plan/post), onde o vendedor deverá redirecionar o comprador para a URL gerada no parâmetro `init_point`.