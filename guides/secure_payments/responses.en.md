
# Information on responses

To obtain detailed information about possible error responses from the payment creation process, access the [Payments API](/developers/es/reference/payments/_payments/post) in our API Reference.

It is important to note that, in most cases, the errors mentioned in the functional documentation will be represented by the status code 424 - "Failed Dependency". The error details are found in the response body, so it is recommended to examine the content to obtain additional information about specific errors.

## Encryption models

For **"newland_mlb"** Poi devices with KSN, encryption is performed using the derived key through 3DES and ECB operation mode. This allows obtaining card present data such as PAN, expiration date, cardholder information, and track1.

| Example |
|---|
| PoiType = NEWLAND_MLB_1234 |
| Track1 = 59BF2A2DA3D02BB6491BF8756B47D05397D3B3E95F13F4F1EC63C1F6A33E0C86493F91D1358C0D7216AC5703D89CC2EB299950B3A3D69D8C1BA38F0A714809F8A8A821D54CC2ADFB |
| KSN = FFFFF010010000E00016 |

| Result |
|---|
| PAN = 7657773111126363 |
| Expiration date = 07/2022 |
| Cardholder = KREIFF DE MENTIRA |
| Track1 = B7657773111126363^KREIFF/ |
| DEMENTIRA^2207201000000100000000950000000|

For **"pax_d180c," "gertec_mp35p," "pax_a910," "dspread_cr100," "dspread_d20," "dspread_mp300," "redelcompax_d210," "redelcompax_a910," "redelcompax_a920," "redelcompax_a920-pro," "redelcompax_im20," "smartpesa_softpos,"** and **"newland_n950"** devices that support HEX CBC decoding, encryption is performed using the derived key through 3DES and CBC operation mode. This allows obtaining card present data such as PAN, expiration date, cardholder information, and track1.

| Example |
|---|
| Track1 = 4596CEF2DB0337030FB06765410ACDDB87AC1104CF9ED81C11D3BD831D12A68D6F289E61C588A7C6A79EC1DE4D056BF6 |
| KSN = 0A010BF0000000000002 |

| Result |
|---|
| PAN = 5413330089020011 |
| Expiration date = 12/2025 |
| Cardholder = John Doe |
| Track1 = B4000340099900505^John/Doe ^22251110000123000 |

For **"Bbpos"** Poi devices with KSN, encryption is performed using the derived key through 3DES and CBC operation mode. This allows obtaining card present data such as PAN, expiration date, cardholder information, and track1.

| Example |
|---|
| Track1 = A3F5E85954E0D9C992D5E1C04A60242D295945E0DD2C974C |
| KSN = FFFF9876543210E000F9 |

| Result |
|---|
| PAN = 4540750031789984 |
| Expiration date = 10/2019 |
| Cardholder = "" |
| Track1 = 4540750031789984=19102016010000000000 |

For **"abecs"** Poi devices, encryption is performed using the working key through 3DES and CBC operation mode. This allows obtaining card present data such as PAN, expiration date, cardholder information, and track1.

| Example |
|---|
| Track1 = B73BEB4ADF6A3B7A3^TEST MARCELO ^171220100000 00510000000 |
| Working key = 22222222222222222222222222222222 |

| Result |
|---|
| PAN = 4074090252161538 |
| Expiration date = 12/2017 |
| Cardholder = TEST MARCELO |
| Track1 = B4074090252161538^TEST MARCELO ^171220100000 00510000000 |

For **"newland"** Poi devices, encryption is performed using the working key through 3DES and ECB operation mode. This allows obtaining card present data such as PAN, expiration date, cardholder information, and track1.

| Example |
|---|
| Track1 = EE9CB14C4F92A690D68CD81F3C3FBEF37A1656DF0635B3DFD297B4BF74A3756224C4F86A48A0F130612FAB419023C9D73EBFFD5FF48AA36BD1920EA92F5B6A40 |
| Working key = 22222222222222222222222222222222 |

| Result |
|---|
| PAN = 340431451910745 |
| Expiration date = 01/2022 |
| Cardholder = TESTTEST TESTER NICOLAS |
| Track1 = B340431451910745^TESTTEST/TESTER NICOLAS ^2201201170191641 |