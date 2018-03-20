# Cartões nacionais de teste

Você pode usar cartões de teste de métodos de pagamento locais de cada país, e simular diferentes respostas dos pagamentos, sem a necessidade de usar um cartão real.

Para isso, utilize algum dos cartões que disponibilizamos a seguir, dependendo do seu país:

|Argentina|Brasil|México|Chile|Colombia|Perú|Uruguai
|----|-----|-----|-----|-----|-----|-----|
| Diners 3023 803018 0020 | Diners 3612 673574 0137 | Visa Débito 4189 1412 2126 7633 | Diners 3661 366334 0014 | Diners 3057 874205 0528 | Visa Débito 4941 3371 3002 9283 | OCA 5429 9173 0821 2254 |
| Nativa Mastercard 5465 5326 8384 0176 | Hipercard 6062 8267 8627 6634 |Mastercard Débito 5579 0785 2102 5680 | Magna 5680 0887 8727 1080 | Codensa 5907 1272 7385 5324 |Mastercard Débito 5160 0330 0471 4834 | Lider 5058 6652 3318 5628                |
| Tarjeta Shopping 6034 8800 0094 4555 | Elo 5067 2686 5051 7446                | Tarjeta MercadoPago 5399 7823 2218 1356 | Presto 9200 6750 5403 7716 |  |  |
| Cencosud 6034 9372 7286 2830 | Cartão MercadoLivre 5300 3272 2151 3800 |  |  |  |  |  |
| Cabal 6035 2277 1642 7021 |  |  |  |  |  |                              
| Argencard 5011 0542 1120 6753 |  |  |  |  |  |                                
| Naranja 5895 6278 2345 3005 |  |  |  |  |  |                                
| Visa Débito 4002 7686 9439 5619 |  |  |  |  |  |                                
| Mastercard Débito 5287 3383 1025 3304 |  |  |  |  |  |  |                                
| Cabal Débito 6042 0130 7660 8231 |  |  |  |  |  |  |  

Use-as como as cartões de bandeiras internacionais, através um dos seguintes prefixos no campo name do _/card_tokens_ ou no campo _cardholderName_:

* **APRO**: Pagamento aprovado.
* **CONT**: Pagamento pendente.
* **CALL**: Recusado, ligar para autorizar.
* **FUND**: Recusado por saldo insuficiente.
* **SECU**: Recusado por código de segurança.
* **EXPI**: Recusado por data de validade.
* **FORM**: Recusado por erro no formulário.
* **OTHE**: Recusado geral.
