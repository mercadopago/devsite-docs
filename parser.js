const fs = require('fs');
const RefParser = require('@apidevtools/json-schema-ref-parser');
const yaml = require('js-yaml');

function parseProps(props) {
  if (!props || props.length <= 0) {
    return null;
  }
  return props.map((property) => {
    const name = Object.keys(property)[0];
    const response = {};
    response[`${name}`] = {
      type: property[name].type,
      description: property[name].description.en,
      properties: parseProps(property[name].properties),
    };
    return response;
  });
}

function parseResource() {
  const filePath = './reference/customers/resource.yaml';
  const resultFilePath = './reference/schemas/customer_response.yaml';
  try {
    const fileData = fs.readFileSync(filePath, 'UTF-8');
    const doc = yaml.load(fileData);
    const { definitions } = doc;
    // console.log(JSON.stringify(definitions, null, 2));
    const result = {
      properties: parseProps(definitions.properties),
    };
    // console.log(JSON.stringify(result, null, 2));
    const stringResult = yaml.dump(JSON.parse(JSON.stringify(result))).replace(/- /gm, '');
    fs.writeFileSync(resultFilePath, stringResult);
  } catch (e) {
    console.log(e);
  }
}

parseResource();
