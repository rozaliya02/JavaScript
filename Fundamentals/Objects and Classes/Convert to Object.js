function ConvertToObject(object) {
  let text = JSON.parse(object);

  for (let key of Object.keys(text)) {
    console.log(`${key}: ${text[key]}`);
  }
}
ConvertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
