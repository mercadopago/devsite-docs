# Tarjetas locales de prueba

Puedes utilizar tarjetas de prueba de medios de pago locales de cada país, y simular las distintas respuestas de pagos, sin necesidad de utilizar una tarjeta real.

Para eso, utiliza alguna de las tarjetas que te facilitamos a continuación, dependiendo de tu país:

| Argentina                  | Brasil                       | México                        | Colombia | Perú    | Uruguay                         |
|      ----                  | -----                        | -----                         | -----    | -----   | -----                           |
|Naranja 5895 6278 2345 3005 |Hipercard 6062 8267 8627 6634 |Visa Débito 4189 1412 2126 7633 | Diners 3057 874205 0528               |Visa Débito 4941 3371 3002 9283 |OCA 5429 9173 0821 2254         |
|Nativa Mastercard 5465 5326 8384 0176 |Diners 3612 673574 0137  |Mastercard Débito 5579 0785 2102 5680                       |          |         |                                |
|Tarjeta Shopping 6034 8800 0094 4555     |Elo 5067 2686 5051 7446                |Tarjeta MercadoPago 5399 7823 2218 1356                           |          |         |                                |
|Cencosud 6034 9372 7286 2830     |Cartão MercadoLivre 5300 3272 2151 3800                |          |          |         |                                |
|Cabal 6035 2277 1642 7021     |          |          |          |         |                                |
|Argencard 5011 0542 1120 6753     |          |          |          |         |                                |
|Diners 3023 803018 0020        |          |          |          |         |                                |

Úsalas igual que las tarjetas de marcas internacionales, mediante alguno de los siguientes prefijos en el campo name de _/card_tokens_ o en el campo _cardholderName_:

* **APRO**: Pago aprobado.  
* **CONT**: Pago pendiente.  
* **CALL**: Rechazo llamar para autorizar.  
* **FUND**: Rechazo por monto insuficiente.  
* **SECU**: Rechazo por código de seguridad.  
* **EXPI**: Rechazo por fecha de expiración.
* **FORM**: Rechazo por error en formulario.  
* **OTHE**: Rechazo general.
