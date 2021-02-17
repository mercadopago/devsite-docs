# Cartões nacionais de teste

Você pode usar cartões de teste de métodos de pagamento locais de cada país, e simular diferentes respostas dos pagamentos, sem a necessidade de usar um cartão real.

Para isso, utilize algum dos cartões que disponibilizamos a seguir, dependendo do seu país:

| Argentina | |
| --- | --- |
| Diners | 3023 803018 0020 |
| Nativa Mastercard | 5465 5326 8384 0176 |
| Tarjeta Shopping | 6034 8800 0094 4555 |
| Cencosud | 6034 9372 7286 2830 |
| Cabal | 6035 2277 1642 7021 |
| Argencard | 5011 0542 1120 6753 |
| Naranja | 5895 6278 2345 3005 |
| Visa Débito | 4055 1678 0230 2037 |
| Mastercard Débito | 5175 6228 5230 1034 |
| Cabal Débito | 6042 0120 4580 9847 |
| CMR | 5570 3906 3300 7137 |
| Córdoba | 5500 7320 5806 8364 |
| Cordial | 5275 5526 1364 0256 |

| Brasil | |
| --- | --- |
| Diners | 3612 673574 0137 |
| Hipercard | 6062 8267 8627 6634 |
| Elo | 5067 2686 5051 7446 |
| Cartão Mercado Livre | 5300 3272 2151 3800 |

| México | |
| --- | --- |
| Visa Débito | 4189 1412 2126 7633 |
| Mastercard Débito | 5579 0785 2102 5680 |
| Tarjeta Mercado Pago | 5399 7823 2218 1356 |

| Chile | |
| --- | --- |
| Diners | 3661 366334 0014 |
| Magna | 5680 0887 8727 1080 |
| Presto | 9200 6750 5403 7716 |
| CMR (Visa) | 4998 4704 7065 8262 |

| Colombia | |
| --- | --- |
| Diners | 3057 874205 0528 |
| Codensa | 5907 1272 7385 5324 |

| Uruguai | |
| --- | --- |
| OCA | 5429 9173 0821 2254 |
| Lider | 5011 0927 8331 7558 |
| Diners | 3014 163225 3213 | 

Use-as como as cartões de bandeiras internacionais, através um dos seguintes prefixos no campo name do _/card_tokens_ ou no campo _cardholderName_:

* **APRO**: Pagamento aprovado.
* **CONT**: Pagamento pendente.
* **CALL**: Recusado, ligar para autorizar.
* **FUND**: Recusado por saldo insuficiente.
* **SECU**: Recusado por código de segurança.
* **EXPI**: Recusado por data de validade.
* **FORM**: Recusado por erro no formulário.
* **OTHE**: Recusado geral.
