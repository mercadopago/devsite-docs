# Pagamentos QR modelo comprador

> WARNING
>
> Contato comercial necessário
>
> Você deve acionar nosso time comercial para que sua conta seja habilitada e tenha permissão para cobrança por meio deste modelo de serviço.
> </br></br>
> Para saber mais informações sobre este modelo de integração, acesse a documentação [Integrar QR modelo comprador.](/developers/pt/docs/qr-code/qr-buyer/qr-buyer-part-b) 

## O que é o QR modelo comprador?

É o modelo que permite realizar cobranças a partir da leitura de um código QR gerado pelo aplicativo Mercado Pago na conta do cliente. Este modelo é usado para máquinas de autoatendimento ou sistemas que possuem leitura de QR, como restaurantes, cinemas e estacionamentos. 

----[mlb]----

> NOTE
>
> No Brasil, este produto é um MVP (Produto Viável Mínimo). Por padrão, não temos o QR para cobrança nativamente ativado em nosso aplicativo, por isso, tanto o perfil comprador quanto o vendedor precisam ser liberados pela nossa equipe antes de serem utilizados. 

------------

## Características deste modelo

As principais características são:

- A cobrança é realizada através da leitura do QR do comprador.
- Cada leitura do QR representará uma cobrança.
- Permite pagamentos offline (sem conexão com a internet) para o pagador. 
- Ao enviar a API de cobrança, a validação do pagamento acontecerá de forma sincronizada.

## Integração

Para integrar este modelo de cobrança, acesse a documentação de [Integrar QR modelo comprador](/developers/pt/docs/qr-code/qr-buyer/qr-buyer-part-b).