# Gerenciamento de lojas

A partir requisição feita através de APIs REST, com a identificação retornada no atributo `user_id` você poderá consultar algumas informações das lojas que recebem os pedidos, tais como:
 
* ID da loja (`store_id`).
* Localização do estabelecimento.
* Horário de funcionamento.
* ID externo (caso haja). 

Com o `store_id` vocë poderá verificar e alterar o status de funcionamento da loja, além de poder criar um ID externo que será utilizado como identificador para um sistema de software de gestão de pedidos.