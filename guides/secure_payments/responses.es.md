# Información sobre respuestas

Para obtener información detallada sobre las posibles respuestas de error provenientes del proceso de creación del pago, accede a la [API de Pagos](/developers/es/reference/payments/_payments/post) en nuestra Referencia de API.

Es importante tener en cuenta que, en su mayoría, los errores mencionados en la documentación funcional estarán representados por el código de estado 424 - "Failed Dependency". Los detalles de los errores se encuentran en el cuerpo de la respuesta, por lo que se recomienda examinar el contenido para obtener información adicional sobre los errores específicos. 

## Modelos de cifrado 

Para dispositivos Poi del tipo **“newland_mlb”** con KSN el cifrado se realiza con la derived key  a través de 3DES y con modo de operación ECB, obteniendo de esta forma los datos de card present como son el PAN, fecha de expiración, datos del titular de la tarjeta y el track1:

| Ejemplo |
|---|
| PoiType = NEWLAND_MLB_1234 | 
| Track1 = 59BF2A2DA3D02BB6491BF8756B47D05397D3B3E95F13F4F1EC63C1F6A33E0C86493F91D1358C0D7216AC5703D89CC2EB299950B3A3D69D8C1BA38F0A714809F8A8A821D54CC2ADFB | 
| KSN = FFFFF010010000E00016 |

| Resultado |
|---|
| PAN = 7657773111126363 |
| Fecha expiracion = 07/2022 |
| Titular de la tarjeta = KREIFF DE MENTIRA |
| Track1 = B7657773111126363^KREIFF/ |
| DEMENTIRA^2207201000000100000000950000000|

Para los dispositivos **"pax_d180c", "gertec_mp35p", "pax_a910", "dspread_cr100", "dspread_d20", "dspread_mp300", "redelcompax_d210", "redelcompax_a910", "redelcompax_a920", "redelcompax_a920-pro", "redelcompax_im20", "smartpesa_softpos"** y **"newland_n950"** que soportan HEX CBC decoding el cifrado se realiza con la derived key a través de 3DES y con modo de operación CBC, obteniendo de esta forma los datos de card present como son el PAN, fecha de expiración, datos del titular de la tarjeta y el track1.

| Ejemplo |
|---|
| Track1 = 4596CEF2DB0337030FB06765410ACDDB87AC1104CF9ED81C11D3BD831D12A68D6F289E61C588A7C6A79EC1DE4D056BF6 |
| KSN = 0A010BF0000000000002 |

| Resultado |
|---|
| PAN = 5413330089020011 |
| Fecha expiracion = 12/2025 |
| Titular de la tarjeta = John Doe |
| Track1 = B4000340099900505^John/Doe ^22251110000123000 |

Para dispositivos POI del tipo **“Bbpos”** con KSN el cifrado se realiza con la derived key a través de 3DES y con modo de operación CBC, obteniendo de esta forma los datos de card present como son el PAN, fecha de expiración, datos del titular de la tarjeta y el track1.

| Ejemplo |
|---|
| Track1 = A3F5E85954E0D9C992D5E1C04A60242D295945E0DD2C974C |
| KSN = FFFF9876543210E000F9 |

| Resultado |
|---|
| PAN = 4540750031789984 |
| Fecha expiracion = 10/2019 |
| Titular de la tarjeta = “” |
| Track1 = 4540750031789984=19102016010000000000 |

Para dispositivos POI del tipo **“abecs”** el cifrado se realiza con la working key a tráves de 3DES y con modo de operación CBC, obteniendo de esta forma los datos de card present como son el PAN, fecha de expiración, datos del titular de la tarjeta y el track1 .

| Ejemplo |
|---|
| Track1 = B73BEB4ADF6A3B7A3^TEST MARCELO            ^171220100000        00510000000 |
| Working key = 22222222222222222222222222222222 |

| Resultado |
|---|
| PAN = 4074090252161538 |
| Fecha expiracion = 12/2017 |
| Titular de la tarjeta = TEST MARCELO |
| Track1 = B4074090252161538^TEST MARCELO            ^171220100000        00510000000 |

Para dispositivos Poi del tipo **“newland”** el cifrado se realiza con la working key a través de 3DES y con modo de operación ECB, obteniendo de esta forma los datos de card present como son el PAN, fecha de expiración, datos del titular de la tarjeta y el track1.

| Ejemplo |
|---|
| Track1 = EE9CB14C4F92A690D68CD81F3C3FBEF37A1656DF0635B3DFD297B4BF74A3756224C4F86A48A0F130612FAB419023C9D73EBFFD5FF48AA36BD1920EA92F5B6A40 |
| Working key = 22222222222222222222222222222222 |

| Resultado |
|---|
| PAN = 340431451910745 |
| Fecha expiracion = 01/2022 |
| Titular de la tarjeta = TESTTEST TESTER NICOLAS |
| Track1 = B340431451910745^TESTTEST/TESTER NICOLAS  ^2201201170191641 |