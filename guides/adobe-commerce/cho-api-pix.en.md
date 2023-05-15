# Pix

Pix is an instant payment method that allows the sending and receiving of money from any bank account or digital wallet in seconds, any day and time, including weekends and holidays.

To set up payments via Pix, follow the steps described below.

1. In the Magento control panel, go to **Stores > Configuration > Sales > Payment Methods**, search for the Mercado Pago plugin and click **Configure**.
2. In the **Checkout Transparent** option, select the **Pix** option.
3. In **Enabled**, choose between "Yes" or "No". This option defines whether the payment method will be available for use.
4. In **Title**, define the way you want this payment method to appear in the checkout.
5. In **Deadline for payment**, choose the time that the customer has to complete the payment.
6. Click **Save Configuration** to save the changes made.


## Common payment method definitions

In this section, you can define some general characteristics of the platform for the use of Pix in the Checkout. Fill in each of the requested fields according to the description below.

1. In the **Minimum order total** option, set the minimum value for an order to be processed. In this field, enter integers. The payment method will only be displayed to the consumer if the order value is equal to or greater than what you inform.
2. In **Maximum order amount**, set a maximum value for the order to be processed. In this field, enter integers. The payment method will only be displayed to the consumer if the order value is equal to or less than what you inform.
3. In **Payment From Specific Countries**, select the countries that can use this payment method. Only consumers whose payment address is in one of the countries you selected can see this payment method.
4. In the **Sort Order**, define an ascending order of display for this payment method in the checkout. The lower the number you enter, the lower the position of this payment method will be among all the others. For example, if it is 1, any other payment method with a higher order will be displayed after it.

After completing the filling in of these fields, the payment via Pix will have been enabled in the Checkout.