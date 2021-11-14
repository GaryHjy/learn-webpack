module.exports = function(content) {
  console.log(content);
  console.log('b-loader');

  return content
}

module.exports.pitch = function(remainingRequest, precedingRequest, data) {
  console.log('pitch b-loader');
  data.value = 42
}