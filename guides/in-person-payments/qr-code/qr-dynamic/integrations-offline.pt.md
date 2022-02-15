---
indexable: false  
---

# Como integrar o QR dinâmico

## Valores para o QR

O QR deve conter uma série de informações organizadas e avalizadas pelo padrão EMVCo.
A tabela abaixo mostra todas as informações que ele contém:


| ID | Significado no Mercado Pago | Tamanho | Presença - Restrição |
| --- | --- | --- | --- |
| ID 00: Payload Format Indicator | Versão do template do Código QR. | 02 | Obrigatório |
| ID 01: Point of Initiation Method | Identifica se as informações do QR são dinâmicas ou estáticas. | 02 | Obrigatório |
| ID 43.00 Merchant Account Information | Identificador do Mercado Livre.| 16 | Obrigatório |
| ID 43.02 | Versão do template do Mercado Pago. | até 2 | Obrigatório |
| ID 43.03 | User ID. | até 10 | Obrigatório |
| ID 43.04 | Sponsor ID. | até 10 | Opcional |
| ID 52: Merchant Category Code | Código para classificação da loja. | 04 | Obrigatório |
| ID 53: Transaction Currency | Moeda numérica respectiva ao valor total. ----[mlb]---- Brasil: 986 ------------ ----[mla]---- Argentina: 032 ------------ ----[mlc]---- Chile: 152 ------------ ----[mlu]---- Uruguay: 858 ------------ ----[mco]---- Colombia: 170 ------------ ----[mpe]---- Perú: 604 ------------ ----[mlm]---- México: 484 ------------. | 03 | Obrigatório |
| ID 54: Transaction Amount | Valor total da compra. Ex.: 10.00 | até 13 | Obrigatório |
| ID 58: Country Code | País do vendedor. ----[mlb]---- Brasil: `BR` ------------ ----[mla]---- Argentina: `AR` ------------ ----[mlc]---- Chile: `CL` ------------ ----[mlu]---- Uruguay: `UY` ------------ ----[mco]---- Colombia: `CO` ------------ ----[mpe]---- Perú: `PE` ------------ ----[mlm]---- México: `MX` ------------. | 02 | Obrigatório |
| ID 59: Merchant Name | Nome da sua loja. | até 25 | Obrigatório |
| ID 60: Merchant City | Cidade do vendedor. | até 15 | Obrigatório |
| ID 62.05: Reference Label | ID definido pelo integrador para associar a transação à um pagamento do Mercado Pago. | até 25 | Obrigatório |
| ID 62.07: Terminal Label | *External_id* da caixa. | até 10 | Opcional |
| ID 62.08: Purpose of Transaction | Título descritivo referido ao propósito da compra. | até 25 | Opcional |
| ID 63: CRC | Checksum - Validação do conteúdo. | 04 | Obrigatório |


>Para saber mais sobre as informações que você deve fornecer sobre a sua conta, [consulte o glossário](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/in-person-payments/qr-code/pre-requisites/#bookmark_glosario).



## Como criar o QR

Após **entender e analisar os valores que você deve incluir no seu QR**, vamos ver um exemplo de como você pode montá-lo.

Lembre que você só deve alterar os valores de exemplo. Os valores fixos não devem ser alterados no momento da criação. 



| ID | Sub ID | Comprimento | Valor fixo | Valor exemplo |
| --- | --- | --- | --- | --- |
| 00 | - | 02 | 01 | - |
| 01 | - | 02 | 12 | - |
| 43 | - | *Comprimento total* | - | 38 |
| - | 00 | 16 | com.mercadolibre | - |
| - | 02 | 01 | 1 | - |
| - | 03 | 09 | - | ----[mlb]---- 582245993 ------------ ----[mla]---- 446566691 ------------ ----[mlc]---- 582115007 ------------ ----[mlu]---- 519253179 ------------ ----[mco]---- 582249137 ------------ ----[mpe]---- 582252133 ------------ ----[mlm]---- 582256360 ------------ |
| 52 | - | 04 | 5206 | - |
| 53 | - | 03 | ----[mlb]---- 986 ------------ ----[mla]---- 032 ------------ ----[mlc]---- 152 ------------ ----[mlu]---- 858 ------------ ----[mco]---- 170 ------------ ----[mpe]---- 604 ------------ ----[mlm]---- 484 ------------ | - |
| 54 | - | 03 | - | 5.0 |
| 58 | - | 02 | ----[mlb]---- BR ------------ ----[mla]---- AR ------------ ----[mlc]---- CL ------------ ----[mlu]---- UY ------------ ----[mco]---- CO ------------ ----[mpe]---- PE ------------ ----[mlm]---- MX ------------  | - |
| 59 | - | 09 | - | *TuNegocio* |
| 60 | - | ----[mlb]---- 10 ------------ ----[mla]---- 12 ------------ ----[mlc]---- 8 ------------ ----[mlu]---- 10 ------------ ----[mco]---- 6 ------------ ----[mpe]---- 4 ------------ ----[mlm]---- 11 ------------ | - | ----[mlb]---- *Sao Paulo* ------------ ----[mla]---- *Buenos Aires* ------------ ----[mlc]---- *Santiago* ------------ ----[mlu]---- *Montevideo* ------------ ----[mco]---- *Bogotá* ------------ ----[mpe]---- *Lima* ------------ ----[mlm]---- *Guadalajara* ------------ |
| 62 | - | *Comprimento total* | - | 35 |
| - | 05 | 10 | - | ticket-123 |
| - | 07 | 07 | - | CAJA001 |
| - | 08 | 06 | - | Bebida |
| 63 | - | 04 | - | ----[mlb]---- 9D3B ------------ ----[mla]---- 5259 ------------ ----[mlc]---- B680 ------------ ----[mlu]---- 9512 ------------ ----[mco]---- 2735 ------------ ----[mpe]---- 91B1 ------------ ----[mlm]---- C8D9 ------------ |


> NOTE
>
> Dados a serem considerados
>
> - Para o comprimento total do ID 43 e 62, que contêm 3 Sub IDs cada um, é necessário incluir o comprimento total de **todos os caracteres dentro do ID**. Por exemplo: ----[mlb]---- 43380016com.mercadolibre020110309582245993 ------------ ----[mla]---- 43380016com.mercadolibre020110309446566691 ------------ ----[mlc]---- 43380016com.mercadolibre020110309582115007 ------------ ----[mlu]---- 43380016com.mercadolibre020110309519253179 ------------ ----[mco]---- 43380016com.mercadolibre020110309582249137 ------------ ----[mpe]---- 43380016com.mercadolibre020110309582252133 ------------ ----[mlm]---- 43380016com.mercadolibre020110309582256360 ------------ 
> - Caso o **comprimento dos caracteres** seja menor que 10, um 0 deve ser incluído à esquerda do número inteiro. Por exemplo: “06”.
> - O CRC é uma verificação do conteúdo. Você deve usar o método `CRC-16/CCITT-FALSE Hexadecimal`. 

## Criar o QR

Com todas as informações obtidas, os valores explicados acima devem ser unificados para que o QR contenha todas as informações da ordem.

Unir de acordo com cada fila da seguinte maneira: `ID + Sub ID + Comprimento + Valor`

> WARNING
>
> Importante
>
> Lembre que o valor pode ser fixo ou variável, conforme foi mencionado anteriormente.

Por exemplo, o resultado dos valores de tabela:  

----[mlb]---- `00020101021243380016com.mercadolibre02011030958224599352045812530398654045.005802BR5909TuNegocio6009Sao Paulo62350510ticket-1230707CAJA0010806Bebida63049D3B` ------------ ----[mla]---- `00020101021243380016com.mercadolibre02011030944656669152045206530303254035.05802AR5909TuNegocio6012Buenos Aires62350510ticket-1230707CAJA0010806Bebida63045259` ------------ ----[mlc]---- `00020101021243380016com.mercadolibre02011030958211500752045812530315254045.005802CL5909TuNegocio6008Santiago62350510ticket-1230707CAJA0010806Bebida6304B680` ------------ ----[mlu]---- `00020101021243380016com.mercadolibre02011030951925317952045812530385854045.005802UY5909TuNegocio6010Montevideo62350510ticket-1230707CAJA0010806Bebida63049512` ------------ ----[mco]---- `00020101021243380016com.mercadolibre02011030958224913752045812530317054045.005802CO5909TuNegocio6006Bogotá62350510ticket-1230707CAJA0010806Bebida63042735` ------------ ----[mpe]---- `00020101021243380016com.mercadolibre02011030958225213352045812530360454045.005802PE5909TuNegocio6004Lima62350510ticket-1230707CAJA0010806Bebida630491B1` ------------ ----[mlm]---- `00020101021243380016com.mercadolibre02011030958225636052045812530348454045.005802MX5909TuNegocio6011Guadalajara62350510ticket-1230707CAJA0010806Bebida6304C8D9` ------------ 

Com as informações obtidas, você já pode gerar o seu QR! 


## Testes

Para criar o QR, você precisa [criar um usuário para teste](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/in-person-payments/qr-code/integration-test) para vender e um outro usuário para escanear e pagar no App de Mercado Pago ou Mercado Livre.

> NOTE
>
> Nota
>
> Todo QR que não atender às restrições dos valores definidos será interpretado como QR inválido e você verá uma tela de erro ao escanear.

## Notificações

Para obter as informações do pagamento, é necessário configurar a URL de notificação no [painel do Mercado Pago](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/notifications/ipn/introduction). 

Com a URL já configurada, será possível validar as ordens, como indicado na [seção de Notificações](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/notifications/ipn/introduction).


## Começar a receber pagamentos

Para receber pagamentos, você só deve se certificar de ter todas as suas informações produtivas bem definidas.  

Depois disso, mostre o QR ao seu cliente, como preferir, para que ele o pague. E pronto!


---
### Próximos passos


> LEFT_BUTTON_RECOMMENDED_PT
>
> Integração avançada
>
> Conheça as opções que você tem para levar sua integração ao próximo nível.
>
> [Integração avançada](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/in-person-payments/qr-code/advanced-integration)
