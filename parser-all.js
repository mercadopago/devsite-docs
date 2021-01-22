const fs = require('fs');
const yaml = require('js-yaml');

function parseProps(props) {
  if (!props || props.length <= 0) {
    return null;
  }
  const finalResult = {};
  props.forEach((property) => {
    const name = Object.keys(property)[0];
    finalResult[`${name}`] = {
      type: property[name].type,
      description: property[name].description.en,
      properties: parseProps(property[name].properties),
    };
  });
  return finalResult;
}

function parsePaths(paths) {
  const pathNames = Object.keys(paths);
  const finalPaths = pathNames.map((path) => {
    const pathData = paths[path];
    return {
      name: path,
      methods: pathData.methods,
    };
  });

  return finalPaths;
}

function parseErrorsCode(apiErrors) {
  const errors = apiErrors.map((httpError) => {
    const httpErrorCodeKey = Object.keys(httpError)[0];
    const httpErrorCode = httpError[httpErrorCodeKey];
    const errorsParsed = httpErrorCode.map((error) => {
      const errorCode = Object.keys(error)[0];
      const message = error[errorCode].description.en;
      return {
        code: errorCode,
        message,
      };
    });

    return {
      httpStatus: httpErrorCodeKey.slice(0, 3),
      errors: errorsParsed,
    };
  });
  return errors;
}

function parsePropsContent(propsUsed, properties) {
  const parsedResult = {};
  propsUsed.forEach((propName) => {
    parsedResult[propName] = properties[propName];
  });
  return {
    properties: parsedResult,
  };
}

function parseAPIContent(resourcePath, apiPath, apiMethod, properties) {
  const initialPath = resourcePath.replace(/resource.yaml/gm, '');
  const finalApiPath = `${initialPath}endpoints/${apiPath.replace(/\//gm, '_').replace(/(\{|\})/gm, '')}/${apiMethod.toLowerCase()}.yaml`;
  const apiContentString = fs.readFileSync(finalApiPath, 'utf-8');

  const apiContent = yaml.load(apiContentString);

  const apiErrors = parseErrorsCode(apiContent.errors);
  const responseResult = {};
  apiErrors.forEach((httpError) => {
    const httpErrorItem = {};
    httpError.errors.forEach((error) => {
      httpErrorItem[error.code] = {
        description: error.message,
      };
    });
    responseResult[httpError.httpStatus] = httpErrorItem;
  });

  const props = parsePropsContent(apiContent.use, properties);

  const apiResult = {};
  if (apiMethod.toLowerCase() === 'get') {
    responseResult['200'] = { content: { 'application/json': { schema: { items: props } } } };
  } else if (apiMethod.toLowerCase() === 'post' || apiMethod.toLowerCase() === 'put') {
    apiResult.requestBody = props;
  }

  apiResult.responses = responseResult;
  return apiResult;
}

function parseAPI(resourcePath, outputDirectory) {
  const resourceData = fs.readFileSync(resourcePath, 'utf-8');
  const resourceObject = yaml.load(resourceData);
  const properties = parseProps(resourceObject.definitions.properties);
  const paths = parsePaths(resourceObject.paths);
  paths.forEach((path) => {
    const pathContent = {};
    pathContent[path.name] = {};
    path.methods.forEach((method) => {
      pathContent[path.name][method] = parseAPIContent(resourcePath, path.name, method, properties);
    });

    const yamlContent = yaml.dump(JSON.parse(JSON.stringify({
      paths: pathContent,
    }, (key, value) => {
      if (value !== null) return value;
    }, 2)));
    if (!fs.existsSync(outputDirectory)) {
      fs.mkdirSync(outputDirectory);
    }

    fs.writeFileSync(`${outputDirectory}/${path.name.replace(/\//gm, '_').replace(/(\{|\})/gm, '')}.yaml`, yamlContent);
  });
//   console.log(JSON.stringify(properties, null, 2));
//   console.log(JSON.stringify(paths, null, 2));
}

parseAPI('./devsite-docs/reference/cards/resource.yaml', './devsite-docs/reference/api/cards');
