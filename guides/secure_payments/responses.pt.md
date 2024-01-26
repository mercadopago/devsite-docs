# Informações sobre respostas

Para obter informações detalhadas sobre as possíveis respostas de erro provenientes do processo de criação do pagamento, acesse a [API de Pagamentos](/developers/es/reference/payments/_payments/post) na nossa Referência de API.

É importante ter em mente que, na maioria dos casos, os erros mencionados na documentação funcional serão representados pelo código de status 424 - "Falha na Dependência". Os detalhes dos erros estão no corpo da resposta, portanto, é recomendável examinar o conteúdo para obter informações adicionais sobre erros específicos.

## Modelos de criptografia

Para dispositivos Poi do tipo **"newland_mlb"** com KSN, a criptografia é realizada usando a chave derivada através do 3DES e modo de operação ECB. Isso permite obter os dados de cartão presente, como PAN, data de vencimento, informações do titular do cartão e faixa 1.

| Exemplo |
|---|
| PoiType = NEWLAND_MLB_1234 |
| Track1 = 59BF2A2DA3D02BB6491BF8756B47D05397D3B3E95F13F4F1EC63C1F6A33E0C86493F91D1358C0D7216AC5703D89CC2EB299950B3A3D69D8C1BA38F0A714809F8A8A821D54CC2ADFB |
| KSN = FFFFF010010000E00016 |

| Resultado |
|---|
| PAN = 7657773111126363 |
| Data de vencimento = 07/2022 |
| Titular do cartão = KREIFF DE MENTIRA |
| Track1 = B7657773111126363^KREIFF/ |
| DEMENTIRA^2207201000000100000000950000000|

Para os dispositivos **"pax_d180c", "gertec_mp35p", "pax_a910", "dspread_cr100", "dspread_d20", "dspread_mp300", "redelcompax_d210", "redelcompax_a910", "redelcompax_a920", "redelcompax_a920-pro", "redelcompax_im20", "smartpesa_softpos"** e **"newland_n950"**, que suportam descriptografia HEX CBC, a criptografia é realizada usando a chave derivada através do 3DES e modo de operação CBC. Isso permite obter os dados de cartão presente, como PAN, data de vencimento, informações do titular do cartão e faixa 1.

| Exemplo |
|---|
| Track1 = 4596CEF2DB0337030FB06765410ACDDB87AC1104CF9ED81C11D3BD831D12A68D6F289E61C588A7C6A79EC1DE4D056BF6 |
| KSN = 0A010BF0000000000002 |

| Resultado |
|---|
| PAN = 5413330089020011 |
| Data de vencimento = 12/2025 |
| Titular do cartão = John Doe |
| Track1 = B4000340099900505^John/Doe ^22251110000123000 |

Para dispositivos POI do tipo **"Bbpos"** com KSN, a criptografia é realizada usando a chave derivada através do 3DES e modo de operação CBC. Isso permite obter os dados de cartão presente, como PAN, data de vencimento, informações do titular do cartão e faixa 1.

| Exemplo |
|---|
| Track1 = A3F5E85954E0D9C992D5E1C04A60242D295945E0DD2C974C |
| KSN = FFFF9876543210E000F9 |

| Resultado |
|---|
| PAN = 4540750031789984 |
| Data de vencimento = 10/2019 |
| Titular do cartão = "" |
| Track1 = 4540750031789984=19102016010000000000 |

Para dispositivos POI do tipo **"abecs"**, a criptografia é realizada usando a chave de trabalho através do 3DES e modo de operação CBC. Isso permite obter os dados de cartão presente, como PAN, data de vencimento, informações do titular do cartão e faixa 1.

| Exemplo |
|---|
| Track1 = B73BEB4ADF6A3B7A3^TEST MARCELO ^171220100000 00510000000 |
| Chave de trabalho = 22222222222222222222222222222222 |

| Resultado |
|---|
| PAN = 4074090252161538 |
| Data de vencimento = 12/2017 |
| Titular do cartão = TEST MARCELO |
| Track1 = B4074090252161538^TEST MARCELO ^171220100000 00510000000 |

Para dispositivos Poi do tipo **"newland"**, a criptografia é realizada usando a chave de trabalho através do 3DES e modo de operação ECB. Isso permite obter os dados de cartão presente, como PAN, data de vencimento, informações do titular do cartão e faixa 1.

| Exemplo |
|---|
| Track1 = EE9CB14C4F92A690D68CD81F3C3FBEF37A1656DF0635B3DFD297B4BF74A3756224C4F86A48A0F130612FAB419023C9D73EBFFD5FF48AA36BD1920EA92F5B6A40 |
| Chave de trabalho = 22222222222222222222222222222222 |

| Resultado |
|---|
| PAN = 340431451910745 |
| Data de vencimento = 01/2022 |
| Titular do cartão = TESTTEST TESTER NICOLAS |
| Track1 = B340431451910745^TESTTEST/TESTER NICOLAS ^2201201170191641 |