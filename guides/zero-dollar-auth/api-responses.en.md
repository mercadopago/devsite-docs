# API responses

In this section, you will find possible responses related to the creation of the Zero Dollar Auth validation, with details about each type of response, including success and error cases.

## 200 responses

Upon receiving the `200 Return`, which confirms the Zero Dollar Auth authorization for the card, and the status indicates "approved", it is concluded that the card validation was done correctly. On the other hand, if the status is "rejected", it means that the card validation was not possible. This negative result can be caused by various factors, such as a blocked or expired card.

> NOTE
>
> Important
>
> A transaction with the `approved` or `rejected` status will be communicated through a Webhooks notification.

Below, we list the response `body` for each of the scenarios.

### Card validated successfully

- **Status**: approved
- **Description**: response indicating the success of the Zero Dollar Auth validation creation.
- **Response body**:

```json
{
    "id": 0000000000,
    "version": null,
    "date_created": "2023-01-12T11:36:19.497-04:00",
    "date_approved": "2023-01-12T11:36:20.345-04:00",
    "date_last_updated": "2023-01-12T11:36:20.345-04:00",
    "date_of_expiration": null,
    "money_release_date": "2023-01-12T11:36:20.345-04:00",
    "operation_type": "card_validation",
    "issuer_id": "205",
    "payment_method_id": "master",
    "payment_type_id": "credit_card",
    "status": "approved",
    "status_detail": "accredited",
    "transaction_amount": 0,
}
```

### Card not validated

* **Status**: rejected
* **Description**: Response indicating that the creation of the Zero Dollar Auth validation was rejected. If you receive this error, we recommend reviewing the parameters of the request to ensure that they all comply with the values accepted by our API. After reviewing it, make a new request.
- **Response body**: 

```json
{
    "id": 0000000000,
    "version": null,
    "date_created": "2023-01-12T11:36:19.497-04:00",
    "date_approved": "2023-01-12T11:36:20.345-04:00",
    "date_last_updated": "2023-01-12T11:36:20.345-04:00",
    "date_of_expiration": null,
    "money_release_date": "2023-01-12T11:36:20.345-04:00",
    "operation_type": "card_validation",
    "issuer_id": "205",
    "payment_method_id": "master",
    "payment_type_id": "credit_card",
    "status": "rejected",
    "status_detail": "cc_rejected_other_reason",
    "transaction_amount": 0,
}
```

## 400 responses

If you receive a `400` response code, it generally means that the request body contains data that is incompatible with what is accepted by the API. A common example of this situation is attempting to validate the transaction by sending a `transaction_amount` with a non-zero value.

Below, we list the response `body` for each of the scenarios.

### 'transaction_amount' different from zero

* **Status**: 400
* **Description**: This error occurs when the `transaction_amount` field has a value different from zero. To avoid this type of error, review the request body and make sure that the `transaction_amount` parameter has a value equal to zero.
* **Response body**:

```json
{
    "message": "Invalid value for transaction_amount",
    "error": "bad_request",
    "status": 400,
    "cause": [
        {
            "code": 2072,
            "description": "Invalid value for transaction_amount",
            "data": "26-09-2023T17:27:50UTC;76230673-8376-47ee-8d7f-6ccaacdb5b2a"
        }
    ]
}
```

### Bad request

* **Status**: 400
* **Description**: If you receive this error, we recommend reviewing the parameters of the request to ensure they comply with the values accepted by our API. After reviewing it, make a new request.
* **Response body**: 

```json
{
    "message": "<BADREQUEST MESSAGE>",
    "error": "bad_request",
    "status": 400,
    "cause": [
        {
            "code": <error_code>,
            "description": "<detail error description>",
            "data": "12-01-2023T15:27:07UTC;bcd3be45-fcb4-4647-ba35-a0396cd71b90"
        }
    ]
}
```

## 500 responses

The 500 responses (Internal Error) can indicate a failure of the server during the attempt to process the operation. Below is the body of the response.


```json
{
   "message": "<ERROR MESSAGE>",
   "error": "internal_error",
   "status": 500,
   "cause": [
       {
           "code": <error_code>,
           "description": "<detail error description>",
           "data": "12-01-2023T15:21:28UTC;82c52796-1026-41d2-8ef9-4cbda2d0db8d"
       }
   ]
}
```

If the 500 error persists in multiple requests, please contact our [Support](/developers/en/support/center).

## Permission list

If the merchant is not included in the permission list, the response will be the message "Forbidden" along with the status code 403. Below is an example code illustrating this response.

```json
{
   "message": "Forbidden"
}
```

If you receive this response, we recommend that you contact your Mercado Pago sales representative.

## Feature disabled

* **Description**: This message is returned when the Zero Dollar Auth feature is temporarily disabled.
* **Response body**:

```json
{
    "message": "This feature is temporarily off"
}
```

