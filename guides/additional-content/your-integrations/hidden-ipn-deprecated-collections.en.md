# Equivalences between parameters returned in the Collections and Payments APIs in IPN notifications

| collections/notifications | v1/payments |
|:---:|:---:|
| `collection.id` | `id` (string) |
| `collection.date_created` | `date_created` (datetime) |
| `collection.date_approved` | `date_approved` (datetime) |
| `collection.money_release_date` | `money_release_date` (datetime) |
| `collection.last_modified` | `date_last_updated` (datetime) |
| `collection.payer.id` | `payer.id` (string) |
| `collection.payer.first_name` | `payer.first_name` (string) |
| `collection.payer.last_name` | `payer.last_name` (string) |
| `collection.payer.phone.area_code` | `payer.phone.area_code` (string) |
| `collection.payer.phone.number` | `payer.phone.number` (string) |
| `collection.payer.phone.extension` | `payer.phone.extension` (string) |
| `collection.payer.identification.type` | `payer.identification.type` (string) |
| `collection.payer.identification.number` | `payer.identification.number` (string) |
| `collection.payer.email` | `payer.email` (string) |
| `collection.payer.nickname` | Not applicable in _v1/payments_. To obtain the payer’s data, use the `payer_id`. |
| `collection.order_id` | `order.id` (string) |
| `collection.external_reference` | `external_reference` (string) |
| `collection.merchant_order_id` | `order.id` (string) |
| `collection.reason` | `description` (string) |
| `collection.currency_id` | `currency_id` (string) |
| `collection.transaction_amount` | `transaction_amount` (float64) |
| `collection.net_received_amount` | `transaction_details.net_received_amount` (float64) |
| `collection.total_paid_amount` | `transaction_details.total_paid_amount` (float64) |
| `collection.shipping_cost` | `shipping_amount` (float64) |
| `collection.coupon_amount` | `coupon_amount` (float64) |
| `collection.coupon_fee` | `fee_details.amount` (float64).  It is mapped in this field when the fee type is `coupon_fee` and the payment is in `approved` status. Example: In _v1/payments_ we would have:<br>“fee_details”: [{<br>“type”: “coupon_fee”<br>“amount”: 10 <br>}] |
| `collection.finance_fee` | `fee_details.amount` (float64). It is mapped in this field when the fee type is `finance_fee` and the payment is in `approved` status. Example: In _v1/payments_ we would have:<br>“fee_details”: [{<br>“type”: “finance_fee”<br>“amount”: 10 <br>}] |
| `collection.discount_fee` | `fee_details.amount` (float64). It is mapped in this field when the fee type is `discount_fee` and the payment is in `approved` status. Example: In _v1/payments_ we would have:<br>“fee_details”: [{<br>“type”: “'discount_fee'”<br>“amount”: 10 <br>}] |
| `collection.marketplace_fee` | `fee_details.amount` (float64). It is mapped in this field when the fee type is `application_fee` and the payment is in `approved` status. Example: In _v1/payments_ we would have:<br>“fee_details”: [{<br>“type”: “application_fee”<br>“amount”: 10 <br>}] |
| `collection.coupon_id` | `coupon_id` (string) |
| `collection.status` | `status` (string) |
| `collection.status_detail` | `status_detail` (string) |
| `collection.installments` | `installments` (integer) |
| `collection.issuer_id` | `issuer_id` (string) |
| `collection.installment_amount` | `transaction_details.installment_amount` (float64) |
| `collection.deferred_period` | Does not exist in _v1/payments_, always reported as empty. |
| `collection.payment_type` | `payment_type_id` (string) |
| `collection.payment_method_id` | `payment_method_id` (string) |
| `collection.marketplace` |Does not exist in _v1/payments_. |
| `collection.operation_type` | `operation_type` (string) |
| `collection.transaction_order_id` | Does not exist in _v1/payments_, always reported as empty. |
| `collection.statement_descriptor` | `statement_descriptor` (string) |
| `collection.cardholder.name` | `card.cardholder.name` (string) |
| `collection.cardholder.identification.type` | `card.cardholder.identification.type` (string) |
| `collection.cardholder.identification.number` | `card.cardholder.identification.number` (string) |
| `collection.authorization_code` | `authorization_code` (string) |
| `collection.last_four_digits` | `card.last_four_digits` (string) |
| `collection.deduction_schema` | `deduction_schema` (string) |
| `collection.refunds` | `refunds` (array) |
| `collection.refunds.id` | `refunds.id` (string) |
| `collection.refunds.gtw_refund_id` | `refunds.gtw_refund_id` (string) |
| `collection.refunds.collection_id` | `refunds.collection_id` (string) |
| `collection.refunds.movement_id` | `refunds.collector_movement_id` (string) |
| `collection.refunds.metadata`  | `refunds.metadata` (object) |
| `collection.refunds.amount` | `refunds.amount` (float64) |
| `collection.refunds.source` | `refunds.source` (string) |
| `collection.refunds.date_created` | `refunds.date_created` (datetime) |
| `collection.amount_refunded` | `transaction_amount_refunded` (float64) |
| `collection.site_id` | Does not exist in _v1/payments_. |
| `collection.last_modified_by_admin` | Does not exist in _v1/payments_. |
| `collection.api_version` | `api_version` (string) |
| `collection.concept_id` | Does not exist in _v1/payments_. |
| `collection.concept_amount` | Does not exist in _v1/payments_. |
| `collection.collector.id` | `collector_id` (int64) |
| `collection.collector.nickname` | Does not exist in _v1/payments_. To obtain the payer’s data, use the `payer_id`. |