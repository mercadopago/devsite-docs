// read a file as json
const fs = require('fs');

const readFileAsJson = (fileName) => {
  const file = fs.readFileSync(fileName, 'utf8');
  return JSON.parse(file);
};

const parseDescriptionForItem = (json) => {
  if (!json) {
    return json;
  }
  const keys = Object.keys(json);
  keys.forEach((key) => {
    if (key === 'x-description-i18n') {
      const descriptionContent = json[key];
      json.description = descriptionContent;
      delete json['x-description-i18n'];
    }
  });

  return json;
};

const verifyObjectHasChilds = (json) => {
  if (!json) {
    return json;
  }
  const keys = Object.keys(json);
  keys.forEach((key) => {
    if (typeof json[key] === 'object') {
      parseDescriptionForItem(json[key]);
      verifyObjectHasChilds(json[key]);
    }
  });
  return json;
};

const processFile = (fileName) => {
  const jsonToProcess = readFileAsJson(fileName);
  const result = JSON.stringify(verifyObjectHasChilds(jsonToProcess), null, 2);
  fs.writeFileSync(fileName, result, 'utf8');
};

const files = [
  './cards.json',
  './chargebacks.json',
  './customers.json',
  './identification_types.json',
  './instore_orders.json',
  './instore_orders_v2.json',
  './integrations_api.json',
  './integrations_api_paymentintent_mlb.json',
  './oauth.json',
  './payment_methods.json',
  './payments.json',
  './pos.json',
  './preferences.json',
  './qr-dynamic.json',
  './stores.json',
  './subscriptions.json',
  './test_user.json',
  './wallet_connect.json',
  './merchant_orders.json',
];

files.forEach((file) => {
  processFile(file);
});

