const urlString = (string) => {
  const stringArray = string.split("");
  const replacedArray = [];
  stringArray.forEach((e) => {
    if (e === " ") {
    replacedArray.push("%20");
    } else {
      replacedArray.push(e);
    }
  });
  return replacedArray.join("");
};

console.log(urlString("this is a url"));