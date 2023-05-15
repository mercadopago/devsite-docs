# Offline payment methods

----[mlb]----
With Checkout Transparent, you can offer two offline payment methods: **bank slip** and **payment at lottery houses**.

------------
----[mla, mpe, mco, mlm, mco, mlu, mlc]----
With Checkout API, you can offer two offline payment methods: **bank slip** and **payment at lottery houses**.

------------

In this section, you will find all the necessary steps to configure each one.


## Lottery houses

1. In the store Control Panel, go to **Stores > Configuration > Sales > Payment Methods**.
2. In the Mercado Pago plugin, click **Configure**.
3. Click on the **Transparent Checkout** tab and then click on **Offline Payment Methods**.
4. In the **Lottery Houses** option, complete the fields according to the descriptions below.
   1. In **Enabled**, choose between "Yes" or "No". This option defines whether the payment method will be available for use.
   2. In **Title**, define how you want this payment method to appear in the checkout.
   3. In **Deadline for payment**, choose the time that the customer has to complete the payment.


## Bank slip

1. In the store Control Panel, go to **Stores > Configuration > Sales > Payment Methods**.
2. In the Mercado Pago plugin, click **Configure**.
3. Click on the **Checkout Transparent**.
4. In the Bank Slip option, complete the fields according to the descriptions below.
    1. In **Enabled**, choose between "Yes" or "No". This option defines whether the payment method will be available for use.
    2. In **Title**, define how you want this payment method to appear in the checkout.
    3. In **Deadline for payment**, choose the time the customer has to complete the payment.


## Common payment method definitions

----[mlb]----
In this section, you can define some general characteristics of the platform for the use of Checkout Transparente bank slip. Fill in each of the requested fields according to the description below.

------------
----[mla, mpe, mco, mlm, mco, mlu, mlc]----
In this section, you can define some general characteristics of the platform for the use of Checkout API bank slip. Fill in each of the requested fields according to the description below.

------------

1. In the **Minimum order total** option, set the minimum value for an order to be processed. In this field, enter integers. The payment method will only be displayed to the consumer if the order value is equal to or greater than what you inform.
2. In **Maximum order amount**, set a maximum value for the order to be processed. In this field, enter integers. The payment method will only be displayed to the consumer if the order value is equal to or less than what you inform.
3. In **Payment From Specific Countries**, select the countries that can use this payment method. Only consumers whose payment address is from one of the countries you selected can see this payment method.
4. In the **Sort Order**, define an ascending order of display for this payment method in the checkout. The smaller the number you enter, the lower the position of this payment method among all others, for example, if it is 1, any other payment method with a higher order will be displayed after it.
5. Click **Save Configuration** to save the changes made.

![Common definitions](/images/magento-two/definicoes_comuns.png)