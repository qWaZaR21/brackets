module.exports = function check(str, bracketsConfig) {
  const array = str.split('');
  for (let i = 0; i < str.length / 2; i += 1) {
    for (let j = 0; j < str.length; j += 1) {
      for (let k = 0; k < bracketsConfig.length; k += 1) {
        if (array[j] === bracketsConfig[k][0] && array[j + 1] === bracketsConfig[k][1]) {
          array.splice(j, 2);
        }
      }
    }
  }
  return array.length === 0;
};
