curl -X GET \
  'https://api.mercadopago.com/v1/payments/search?sort=date_created&criteria=desc&external_reference="ID_REF"' \
   -H 'Authorization: Bearer ACCESS_TOKEN'
