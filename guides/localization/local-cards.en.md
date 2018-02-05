# Test local credit cards

You can use test credit cards from local payment methods in each country, and simulate different payment responses, with no need to use a real card.

To do this, use any of the cards we provide below, according to your country:

| Argentina             | Brazil   | Mexico   | Colombia | Peru    | Uruguay                         |
|      ----             | -----    | -----    | -----    | -----   | -----                           |
|Naranja
5895 6278 2345 3005     |Hipercard
6062 8267 8627 6634                |Visa Débito
4189 1412 2126 7633                           |Diners
3057 874205 0528                                         |Visa Débito
4941 3371 3002 9283                                                |OCA 5429 9173 0821 2254         |
|Nativa Mastercard
5465 5326 8384 0176     |Diners
3612 673574 0137                   |Mastercard Débito
5579 0785 2102 5680                           |          |         |                                |
|Tarjeta Shopping
6034 8800 0094 4555     |Elo
5067 2686 5051 7446                |Tarjeta MercadoPago
5399 7823 2218 1356                           |          |         |                                |
|Cencosud
6034 9372 7286 2830     |Cartão MercadoLivre
5300 3272 2151 3800                |          |          |         |                                |
|Cabal
6035 2277 1642 7021     |          |          |          |         |                                |
|Argencard
5011 0542 1120 6753     |          |          |          |         |                                |
|Diners
3023 803018 0020        |          |          |          |         |                                |

Use them in the same way as cards from international brands, with any of the following prefixes in the name field of /card_tokens or in the field _cardholderName_:

* **APRO**: Payment approved.  
* **CONT**: Pending payment.  
* **CALL**: Payment declined, call to authorize.  
* **FUND**: Payment declined due to insufficient funds.  
* **SECU**: Payment declined by security code.  
* **EXPI**: Payment declined by expiration date.  
* **FORM**: Payment declined due to error in form.  
* **OTHE**: General decline.  
