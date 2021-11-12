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
console.log(dedupe([1, 2, 3, 2, 4, 5, 5, 6, 1]));

const dedupeFilter = (arr) => {
  const newArr = arr.filter((e, index) => {
    return arr.indexOf(e) === index;
  })
  return newArr;
}
console.log(dedupeFilter([1, 2, 3, 2, 4, 5, 5, 6, 1]));

const dedupeRecursive = (arr) => {
  if (arr.length === 0) {
    return arr.concat([]);
  }
  const returnArr = arr.slice(0, -1);
  if (returnArr.includes(arr[arr.length-1])) {
    return dedupeRecursive(returnArr)
  } else {
    return dedupeRecursive(returnArr).concat(arr[arr.length-1])
  }
}
console.log(dedupeRecursive([1, 2, 3, 2, 4, 5, 5, 6, 1]));