# Test your integration

You can test your integration before going into production, in order to check the operation and make all the adjustments you need. For this, you can use test cards and simulate different payment responses, without having to use a real card.

Use your Sandbox credentials and any of the cards that we provide below, according to your country:


| Country    | Visa                | Mastercard          | American Express  |
| ---------- | ------------------- | ------------------- | ----------------- |
| Argentina  | 4509 9535 6623 3704 | 5031 7557 3453 0604 | 3711 803032 57522 |
| Brazil     | 4235 6477 2802 5682 | 5031 4332 1540 6351 | 3753 651535 56885 |
| Chile      | 4168 8188 4444 7115 | 5416 7526 0258 2580 | 3757 781744 61804 |
| Colombia   | 4013 5406 8274 6260 | 5254 1336 7440 3564 | 3743 781877 55283 |
| Mexico     | 4075 5957 1648 3764 | 5474 9254 3267 0366 | not available     |
| Peru       | 4009 1753 3280 6176 | not available       | not available     |
| Venezuela  | 4966 3823 3110 9310 | 5177 0761 6430 0010 | not available     |

> We have [more test cards]() available for local means of payment of each country.

To test the possible results of a payment, use any of the following prefixes in the `name` field of */card_tokens* or in the `cardholderName` field:

| Prefix  |                Description                  |
| ------- | ------------------------------------------- |
| APRO    | Payment approved                            |
| CONT    | Pending payment                             |
| CALL    | Payment declined, call to authorize         |
| FUND    | Payment declined due to insufficient funds  |
| SECU    | Payment declined by security code           |
| EXPI    | Payment declined by expiration date         |
| FORM    | Payment declined due to error in form       |
| OTHE    | General decline                             |

As soon as you complete your tests and you are ready to receive production payments, you will have to replace the [credentials]() with the production ones and [activate the Production Mode](#). **You don’t have to change anything else in your code**.
