module.exports = function(content) {
  console.log(content);
  console.log('a-loader');
  return content
}

module.exports.pitch = function(remainingRequest, precedingRequest, data) {
  console.log('pitch a-loader');
  data.value = 42
}