---
content_section_with_media:
- title: Card Validation (Zero Dollar Auth)
- message: Zero Dollar Auth is a feature developed to improve the validation of credit or debit cards, with the goal of optimizing the customer experience. With it, you can ensure that no actual charges are made to the customer's card, eliminating the need for cancellations or refunds after transaction authorization.
- media_image: /zero-dollar-auth/credit-card.png
---

> WARNING
>
> Important
>
> It is important to note that the use of payment validation procedures followed by immediate refunds is not recommended as a standard practice. Such actions, especially when performed in high volumes, may result in penalties from credit card issuers.

This validation is done through the API and uses the customer's credit card token. After the request and receiving a positive response, the card can be associated with the customer to generate future payments.

Below, we share the flow that illustrates how the Zero Dollar Auth validation works.

![Flowchart for Zero Dollar Auth validation](/zero-dollar-auth/Fluxo_ZDA_EN_Final.png)