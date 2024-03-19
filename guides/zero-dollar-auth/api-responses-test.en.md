# API Responses in Testing

In this section, you will find the possible responses related to the Zero Dollar Auth validation test, with details about each type of response, including success and error cases.

## Success

### Approved

* **Status code**: approved
* **Description**: This response indicates that the Zero Dollar Auth flow has been approved.
* **Response body**:

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
    …
}
```

## Error

### Rejected

* **Status code**: rejected
* **Description**: This response indicates that the Zero Dollar Auth flow has been rejected. We recommend reviewing the parameters of the request to ensure that they have been filled in correctly with values accepted by our API. After reviewing, make a new request.
* **Response body**:

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
…
}
```

### Feature Disabled

* **Description**: This message is returned when the Zero Dollar Auth feature is temporarily disabled.
* **Response body**:

```json
{
    "message": "This feature is temporarily off"
}
```


### Collector is not Whitelisted

* **Description**: This error occurs when the collector is not found in the Whitelist. Refer to the [Permissions List](/developers/en/docs/zero-dollar-auth/api-responses#bookmark_permissions_list) section for more details.
* **Response body**:

```json
{
     "message": "Forbidden"
}
```

t
### Internal Error

* **Status code**: 500
* **Description**: Response for internal errors in the Zero Dollar Auth flow. If there are failures in the API calls during the flow, the cause will be detailed in the `cause` object, including the error message, code, date, and corresponding request ID (requestId).
* **Response body**:

```json
{
     "message": "Error message",
      "error": "internal_error",
     "status": "500",
     "cause": [
           {
              "code": "Error code",
              "description": "Error description",
              "data": "2023-10-11T10:06:56.000-04:00;",
           }
      ]
}
```

