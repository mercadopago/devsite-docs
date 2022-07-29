To perform the tests, **you must have at least two users**:

| Type of test users | Description |
| --- | --- |
| Seller | It is the account you use to **configure the application and credentials for collection**. |
| Buyer | It is the account you use to **test the purchase process.**. |

Execute the following curl to generate a test user:

```curl
curl -X POST \
-H "Content-Type: application/json" \
-H 'Authorization: Bearer ${TEST_ACCESS_TOKEN}' \
"https://api.mercadopago.com/users/test" \
-d '{"site_id":"[FAKER][GLOBALIZE][UPPER_SITE_ID]","description" : "a description"}'
```

The answer will have a structure similar to the following example:

```json
{
    "id": 123456,
    "nickname": "TT123456",
    "password": "qatest123456",
    "site_status": "active",
    "site_id": "[FAKER][GLOBALIZE][UPPER_SITE_ID]",
    "description": "a description",
    "email": "test_user_123456@testuser.com",
    "date_created": "2021-11-04T12:02:35Z",
    "date_last_updated": "2021-11-04T12:02:35Z"
}
```

For more information about test user API parameters and responses, check [API References](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/test_user/_users_test/post)

>WARNING
>
> Important
>
> You can generate up to 10 test user accounts simultaneously. Therefore, we recommend you **save each email and **password**.
> <br/>
> Test users expire after 60 days without activity in Mercado Pago.
> <br/>
> Both buyer and seller must be test users.