# Actualización de la integración

> WARNING
>
> Importante
>
> La Circular BCB 3978 nº determina que todos los Facilitadores de Pago identifiquen a los beneficiarios finales en el momento de la transacción. Para cumplir con esta norma, se vuelve obligatorio enviar los parámetros de la propiedad `sub_merchant` que se detallan en la tabla que encontrarás a continuación. En caso de que los campos no sean enviados, la bandera de la tarjeta podrá aplicar penalizaciones que serán trasladadas al Facilitador de Pago.

Para utilizar la integración de Facilitador de Pagos, es necesario actualizar la propiedad `forward_data.sub_merchant` para el envío de los campos descritos a continuación.

[[[
```json
{
  "payer": {...},
  "forward_data": {
    "sub_merchant": {
      "sub_merchant_id": 123123,
      "mcc": "5462",
      "country": "BRA",
      "address_door_number": 1,
      "zip": "2222222",
      "document_number": "222222222222222",
      "city": "SÃO PAULO",
      "address_street": "RUA A",
	    "legal_name": "LOJINHA DO ZÉ",
      "region_code_iso": "BR-MG",
      "region_code": "BR",
      "document_type": "CNPJ",
      "phone": "123123123",
      "url": "www.nomedofacilitador.com.br"
    }
  },
  "transaction_amount": 20,
  "description": "...",
  "token": "....",
  "statement_descriptor": "PRUEBA",
  "issuer_id": ...,
  "payment_method_id": "...",
  "amounts": {...},
  "installments": 1,
  "pos_id": "....",
  "external_reference": "..."
}
```
```nodejs
/**
 * Mercado Pago Payment Capture.
 *
 * @see {@link https://www.mercadopago.com/developers/en/reference/payments/_payments/post Documentation}.
 */

import MercadoPago, { Payment } from '@src/index';

const client = new MercadoPago({
  accessToken: 'YOUR_ACCESS_TOKEN'
});

const payment = new Payment(client);

payment.create({
  body: {
    transaction_amount: 100,
    description: 'Test',
    payment_method_id: 'visa',
    installments: 12,
    token: '010466403607c1efc03205b75bd2f18e',
    payer: {
      email: 'test@testuser.com'
    },
    forward_data: {
      sub_merchant: {
        sub_merchant_id: '1234',
        mcc: '12345',
        country: 'BRA',
        address_door_number: 123,
        zip: '9876678',
        document_number: '234567876543',
        city: 'São Paulo',
        address_street: 'Rua TESTE',
        legal_name: 'legal',
        region_code_iso: 'BR',
        document_type: 'CNPJ',
        phone: '123456789',
        url: 'www.rappi.com.br'
      }
    }
  },
  requestOptions: {
    idempotencyKey: '234rw8ujdsfjawadfsa'
  }
}).then(console.log).catch(console.log);
```
```php
<?php
require 'vendor/autoload.php';

use MercadoPago\Client\Payment\PaymentClient;
use MercadoPago\Client\Common\RequestOptions;
use MercadoPago\MercadoPagoConfig;

MercadoPagoConfig::setAccessToken("YOUR_ACCESS_TOKEN");
$client = new PaymentClient();

$request_options = new RequestOptions();
$request = [
    "transaction_amount" => (float) '100',
    "token" => '545950fe518e85df69052e1765898e92',
    "description" =>'teste',
    "payment_method_id" => 'visa',
    "installments" => 1,
    "payer" => [
        "email" => 'test_user_11264832@testuser.com',
    ],
    "forward_data" => [
        "sub_merchant" => [
            "sub_merchant_id" => "123123",
            "mcc" => "5462",
            "country" => "BRA",
            "address_door_number" => 1,
            "zip" => "2222222",
            "document_number" => "222222222222222",
            "city" => "SÃO PAULO",
            "address_street" => "RUA A",
            "legal_name" => "LOJINHA DO ZÉ",
            "region_code_iso" => "BR-MG",
            "region_code" => "BR",
            "document_type" => "CNPJ",
            "phone" => "123123123",
            "url" => "www.rappi.com.br"
        ]
    ]
];

try{
    $payment = $client->create( $request, $request_options);
    var_dump($payment);

} catch (MPApiException $e) {
    var_dump($e);
} catch (\Exception $e) {
    // Handle all other exceptions
    var_dump($e);
}
// echo "Content: ";
// var_dump($e->getApiResponse()->getContent());
// echo "\n";
// } catch (\Exception $e) {
// // Handle all other exceptions
// echo $e->getMessage();
// }
```
```Java
package com.mercadopago;

import com.mercadopago.client.MercadoPagoClient;
import com.mercadopago.client.common.IdentificationRequest;
import com.mercadopago.client.common.SubMerchant;
import com.mercadopago.client.payment.*;
import com.mercadopago.core.MPRequestOptions;
import com.mercadopago.exceptions.MPApiException;
import com.mercadopago.exceptions.MPException;
import com.mercadopago.net.Headers;
import com.mercadopago.resources.payment.Payment;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.UUID;

public class Main {
    public static void main(String[] args) {

        HashMap<String, String> headers = new HashMap<>();
        headers.put(Headers.IDEMPOTENCY_KEY, UUID.randomUUID().toString());
        MPRequestOptions requestOptions = MPRequestOptions
            .builder()
            .customHeaders(headers)
            .accessToken("YOUR_ACCESS_TOKEN").build();

        PaymentClient client = new PaymentClient();
        PaymentCreateRequest createRequest = PaymentCreateRequest.builder()
            .transactionAmount(new BigDecimal(100))
            .description("test_card")
            .paymentMethodId("visa")
            .token("c83cff0fe27a67ae53054fe8716b18bc")
            .installments(1)
            .forwardData(PaymentForwardDataRequest.builder()
                .subMerchant(SubMerchant.builder()
                    .subMerchantId("345678")
                    .mcc("1234")
                    .country("BR")
                    .addressDoorNumber("123")
                    .zip("12345678")
                    .documentNumber("12345678901")
                    .city("Sao Paulo")
                    .addressStreet("Street")
                    .legalName("Business")
                    .regionCodeIso("SP")
                    .regionCode("SP")
                    .documentType("CPF")
                    .phone("1234567890")
                    .url("https://www.mercadopago.com").build()).build())
            .payer(PaymentPayerRequest.builder()
                .email("test_user_61213998@testuser.com").build()).build();

        try {
            Payment payment = client.create(createRequest, requestOptions);
            System.out.println(payment.getId());
        } catch (MPApiException ex) {
            System.out.printf(
                "MercadoPago Error. Status: %s, Content: %s%n",
                ex.getApiResponse().getStatusCode(), ex.getApiResponse().getContent());
        } catch (MPException ex) {
            ex.printStackTrace();
        }
    }
}
```
```Go
package main

import (
	"context"
	"fmt"

	"github.com/mercadopago/sdk-go/pkg/config"
	"github.com/mercadopago/sdk-go/pkg/payment"
)

func main() {
	accessToken := "YOUR_ACCESS_TOKEN"
	cfg, err := config.New(accessToken)
	if err != nil {
		fmt.Println(err)
		return
	}

	client := payment.NewClient(cfg)

	request := payment.Request{
		TransactionAmount: 105,
		PaymentMethodID:   "visa",
		Payer: &payment.PayerRequest{
			Email: "test@testuser.com",
		},
		ForwardData: &payment.ForwardDataRequest{
			SubMerchant: &payment.SubMerchantRequest{
				SubMerchantId:     "1234",
				MCC:               "123",
				Country:           "BRA",
				AddressDoorNumber: "1",
				ZIP:               "22222222",
				DocumentNumber:    "22222222222222",
				City:              "Sao Paulo",
				AddressStreet:     "Rua A",
				LegalName:         "Legal Name",
				RegionCodeIso:     "BR",
				RegionCode:        "BR-SC",
				DocumentType:      "CNPJ",
				Phone:             "123456789",
				URL:               "www.rappi.com.br",
			},
		},
		Token:        "879a958bbed52608607ae70bed919e13",
		Installments: 12,
	}

	resource, err := client.Create(context.Background(), request)
	if err != nil {
		fmt.Println(err)
		return
	}

	fmt.Println(resource)
}
```
```csharp
using System;
using MercadoPago.Config;
using MercadoPago.Client.Common;
using MercadoPago.Client.Payment;
using MercadoPago.Resource.Payment;

MercadoPagoConfig.AccessToken = "YOUR_ACCESS_TOKEN";
var request = new PaymentCreateRequest
{
    TransactionAmount = 105,
    Description = "Título do produto",
    PaymentMethodId = "visa",
    Token = "879a958bbed52608607ae70bed919e13",
    Installments = 3,
    Payer = new PaymentPayerRequest
    {
        Email = "test_user_24634097@testuser.com",
    },
    PaymentForwardDataRequest = new PaymentForwardDataRequest
    {
        SubMerchant = new SubMerchant
        {
            SubMerchantId = "1234",
            MCC = "123",
            Country = "BRA",
            AddressDoorNumber = "1",
            Zip = "22222222",
            DocumentNumber = "22222222222222",
            City = "Sao Paulo",
            AddressStreet = "Rua A",
            LegalName = "Legal Name",
            RegionCodeIso = "BR",
            RegionCode = "BR-SC",
            DocumentType = "CNPJ",
            Phone = "123456789",
            Url = "www.rappi.com.br",
        },
    },
};

var client = new PaymentClient();
Payment payment = await client.CreateAsync(request);
Console.WriteLine(Newtonsoft.Json.JsonConvert.SerializeObject(payment));
```
```java
package com.mercadopago;

import com.mercadopago.client.MercadoPagoClient;
import com.mercadopago.client.common.IdentificationRequest;
import com.mercadopago.client.common.SubMerchant;
import com.mercadopago.client.payment.*;
import com.mercadopago.core.MPRequestOptions;
import com.mercadopago.exceptions.MPApiException;
import com.mercadopago.exceptions.MPException;
import com.mercadopago.net.Headers;
import com.mercadopago.resources.payment.Payment;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.UUID;

public class Main {
    public static void main(String[] args) {
        HashMap<String, String> headers = new HashMap<>();
        headers.put(Headers.IDEMPOTENCY_KEY, UUID.randomUUID().toString());
        MPRequestOptions requestOptions = MPRequestOptions
                .builder()
                .customHeaders(headers)
                .accessToken("YOUR_ACCESS_TOKEN").build();

        PaymentClient client = new PaymentClient();
        PaymentCreateRequest createRequest =
                PaymentCreateRequest.builder()
                        .transactionAmount(new BigDecimal(100))
                        .description("test_boleto")
                        .paymentMethodId("master")
                        .token("89494b4cec3c5d7d4cf3782d80a5aa54")
                        .forwardData(PaymentForwardDataRequest.builder()
                                .subMerchant(SubMerchant.builder()
                                        .subMerchantId("345678")
                                        .mcc("1234")
                                        .country("BR")
                                        .addressDoorNumber("123")
                                        .zip("12345678")
                                        .documentNumber("12345678901")
                                        .city("Sao Paulo")
                                        .addressStreet("Street")
                                        .legalName("Business")
                                        .regionCodeIso("SP")
                                        .regionCode("SP")
                                        .documentType("CPF")
                                        .phone("1234567890")
                                        .url("https://www.mercadopago.com").build()).build())
                        .payer(PaymentPayerRequest.builder()
                                .email("test_user_61213998@testuser.com").build())
                        .build();

        try {
            Payment payment = client.create(createRequest, requestOptions);
            System.out.println(payment.getId());
        } catch (MPApiException ex) {
            System.out.printf(
                    "MercadoPago Error. Status: %s, Content: %s%n",
                    ex.getApiResponse().getStatusCode(), ex.getApiResponse().getContent());
        } catch (MPException ex) {
            ex.printStackTrace();
        }
    }
}
```
]]]


| Campo | Tipo | Descripción | Requerido/Opcional | Ejemplo |
|---|---|---|---|---|
| `sub_merchant_id` | Texto | Código del subcomercio | Requerido | 123123 |
| `mcc` | Texto | MCC del subcomercio conforme a la decisión de la Abecs y/o el CNAE primario | Requerido | 5462 |
| `country` | Texto | País en donde el subcomercio está ubicado | Requerido | BRA |
| `address_door_number` | Número | Número de la calle en donde el subcomercio está ubicado | Requerido | 1 |
| `zip` | Texto | CEP del subcomercio | Requerido | 2222222 |
| `document_number` | Texto | Identificación del CPF o CNPJ del subcomercio | Requerido | 222222222222222 |
| `city` | Texto | Ciudad en donde el subcomercio está ubicado | Requerido | SÃO PAULO |
| `address_street` | Texto | Calle en donde el subcomercio está localizado | Requerido | RUA A |
| `legal_name` | Texto | Nombre del subcomercio | Requerido | LOJINHA DO ZÉ |
| `region_code_iso` | Texto | Estado en donde el subcomercio está ubicado | Requerido | BR-MG |
| `region_code` | Texto | Código postal del subcomercio | Requerido | BR |
| `document_type` | Texto | Número del CPF o CNPJ del subcomercio | Requerido | CNPJ |
| `phone` | Texto | Teléfono del subcomercio | Requerido | 123123123 |
| `url` | Texto | URL del Facilitador de Pago | Requerido | www.nomedofacilitador.com.br |