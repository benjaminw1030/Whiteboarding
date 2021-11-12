const urlString = (string) => {
  const stringArray = string.split("");
  const replacedArray = [];
  stringArray.forEach(e => {
    if (e === " ") {
    replacedArray.push("%20");
    } else {
      replacedArray.push(e);
    }
  });
  return replacedArray.join("");
};
console.log(urlString("this is a url"));

const recursiveUrlString = (str) => {
  if (str === "") {
    return "";
  } else if (str[str.length-1] === " ") {
    return recursiveUrlString(str.substr(0, str.length - 1)) + "%20";
  } else {
    return recursiveUrlString(str.substr(0, str.length - 1)) + str[str.length - 1];
  }
}
console.log(recursiveUrlString("this is a url"));

const dedupe = (arr) => {
  const newArr = []
  for (i = 0; i < arr.length - 1; i++) {
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i])
    }
  }
  return newArr;
}
console.log(dedupe([1, 2, 3, 2, 4, 5, 5, 6, 1]))