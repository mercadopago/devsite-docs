# Discounts

Discounts are reductions in values applied to the original price of a product or service, generally to encourage a purchase or offer a special condition. This type of strategy can also be used for payments made via Wallet Connect, and in this documentation, you will find the necessary steps to perform this integration.

> WARNING
>
> Important
>
> Before offering payments with discounts using Wallet Connect, remember to align the benefits campaign with your account manager.

The implementation of discounts via Wallet Connect is done by creating a discount promise, which must be made after completing the [account linking](/developers/en/docs/wallet-connect/account-linking-flow/create-agreement) and before starting the [payment flow](/developers/en/docs/wallet-connect/payment-flow). This process involves:

## Create a discount promise

There are two main options for creating a discount promise, suitable for different situations:

* **Option 1: [with pre-added coupon](/developers/en/docs/wallet-connect/discounts/create-discount-promise-preadd-coupon)**
    * This option involves making a request with a coupon that the user has already entered, allowing discounts to be applied in a personalized and targeted manner. To implement it, two steps are required.
        * **[Validate the coupon before making the payment](/developers/en/docs/wallet-connect/discounts/create-discount-promise-preadd-coupon#bookmark_validate_coupon_before_making_payment)** - this step refers to the verification of the validity of the coupon already entered by the user. This includes checking if the coupon is within the validity period, if it meets specific criteria such as minimum purchase value, and if it is applicable to the items in the cart, as well as confirming whether or not there is a campaign for it.
        * **[Add the coupon before proceeding to payment](/developers/en/docs/wallet-connect/discounts/create-discount-promise-preadd-coupon#bookmark_add_coupon_before_proceeding_with_payment)** - involves inserting the coupon into the system before starting the payment process. This step is responsible for ensuring that the discount is considered only in the final transaction. <br><br>

* **Option 2: [Without pre-added coupon](/developers/en/docs/wallet-connect/discounts/create-discount-promise-without-preadd-coupon)**
    * In this case, the request is made without a coupon. Here, the discount is requested based on an existing campaign. This is useful when discounts are offered as part of a general promotion, without the need for a specific coupon code.

## Process the payment with discount

After creating the discount promise, it is necessary to process the payment. This ensures that the discount is correctly processed during the transaction.

Define the option that best suits your business strategy and follow the steps described in the respective section.