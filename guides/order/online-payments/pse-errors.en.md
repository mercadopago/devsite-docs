# Errors with PSE payments

When processing transactions through PSE, the request for sending a payment may return external errors. 

Below, you can see what they are and the workarrounds you can offer the buyer to solve them.


| Code | Description | Suggested message |
|---|---|---|
| 400 | The transaction amount exceds the established limits for this store. | *The transaction amount exceeds the limits established in PSE for the company. Please contact our customer service lines by phone (nnn)nnnn, or by email email@email.com* |
| 500 - cause code 9034 | The transaction can’t be processed right now. It’s necessary to retry later. | *The transaction could not be created. Please try again later, or contact us at phone (nnn)nnnn, or email email@email.com* |