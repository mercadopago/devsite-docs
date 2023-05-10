# Common payment method definitions

----[mlb]----
In this section, you can define some general characteristics of the platform for the use of bank slip Checkout Transparente. Fill in each of the requested fields according to the description below.

------------
----[mla, mpe, mco, mlm, mco, mlu, mlc]----
In this section, you can define some general characteristics of the platform for the use of bank slip Checkout API. Fill in each of the requested fields according to the description below.

------------

1. In the **Minimum order total** option, define the minimum value for an order to be processed. In this field, enter integers. The payment method will only be displayed to the consumer if the order value is equal to or greater than what you inform.
2. In **Maximum order amount**, set a maximum value for the order to be processed. In this field, enter integers. The payment method will only be displayed to the consumer if the order value is equal to or less than what you inform.
3. In **Payment From Specific Countries**, select the countries that can use this payment method. Only consumers whose payment address is from one of the countries you selected can see this payment method.
4. In the **Sort Order** option, define an ascending order of display for this payment method in the checkout. The lower the number you enter, the lower the position of this payment method will be among all others. For example, if it is 1, any other payment method with a higher order will be displayed after it.
5. Click **Save Configuration** to save the changes made.

![Commom definitions](/images/magento-two/definicoes_comuns.png)