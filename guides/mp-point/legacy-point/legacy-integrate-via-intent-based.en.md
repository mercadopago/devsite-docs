# Integration via Intent-Based

> WARNING
>
> Important
>
> * This integration is only available for Android version 2.8.0 or superior.

Another way to integrate is by using Androids native code, via _Intent-Based_.

You must use the “startActivityForResult” method to start directly the payment process. The result of the payment is going to come as “activityResult”.

It its very important that the code has the ability to handle the situation where the user does not have the Mercado Pago application installed in his/her device. In this case, we recommend to redirect the user to the Play store in order to be able to download it. 

As a reference you can use the example code and the documentation that has the structure set to send the payment info and handle the return object. 

In the [GitHub](https://github.com/mercadopago/point-android_integration#intent) article you can find more information and the corresponding example.