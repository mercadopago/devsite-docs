# Create the store and the point of sale

To create a store, you must first make a POST call to the endpoint [Create stores](/developers/en/reference/stores/_users_user_id_stores/post).

Keep in mind that you should replace the values `user_id` and `YOUR_ACCESS_TOKEN` with the ones obtained when creating your application. Also, you need to modify the variables `name`, `business_hours`, and `location` according to the business you are creating.

> NOTE
>
> Note
>
> The request is configured with information for the site in Argentina. Remember to modify this configuration according to the country from which you are integrating.

Next, you will need to create a point of sale. To do this, make a POST call to the endpoint [Create POS](/developers/en/reference/pos/_pos/post).

Please note that you must first execute the store creation request for the cash register creation request to work correctly.

> WARNING
>
> Important
>
> The InStore API is based on the `external_id` sent during the creation of the cash register in the POST call. Remember that it is a unique identification for the created cash register and the user. If you need to create more cash registers, you must ensure that they all have a different `external_id`.
