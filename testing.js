// const urlString = (string) => {
//   const stringArray = string.split("");
//   const replacedArray = [];
//   stringArray.forEach(e => {
//     if (e === " ") {
//     replacedArray.push("%20");
//     } else {
//       replacedArray.push(e);
//     }
//   });
//   return replacedArray.join("");
// };
// console.log(urlString("this is a url"));

// const recursiveUrlString = (str) => {
//   if (str === "") {
//     return "";
//   } else if (str[str.length-1] === " ") {
//     return recursiveUrlString(str.substr(0, str.length - 1)) + "%20";
//   } else {
//     return recursiveUrlString(str.substr(0, str.length - 1)) + str[str.length - 1];
//   }
// }
// console.log(recursiveUrlString("this is a url"));

// const dedupe = (arr) => {
//   const newArr = []
//   for (i = 0; i < arr.length; i++) {
//     if (!newArr.includes(arr[i])) {
//       newArr.push(arr[i])
//     }
//   }
//   return newArr;
// }
// console.log(dedupe([1, 2, 3, 2, 4, 5, 5, 6, 1]));

// const dedupeFilter = (arr) => {
//   const newArr = arr.filter((e, index) => {
//     return arr.indexOf(e) === index;
//   })
//   return newArr;
// }
// console.log(dedupeFilter([1, 2, 3, 2, 4, 5, 5, 6, 1]));

// const dedupeRecursive = (arr) => {
//   if (arr.length === 0) {
//     return arr.concat([]);
//   }
//   const returnArr = arr.slice(0, -1);
//   if (returnArr.includes(arr[arr.length-1])) {
//     return dedupeRecursive(returnArr)
//   } else {
//     return dedupeRecursive(returnArr).concat(arr[arr.length-1])
//   }
// }
// console.log(dedupeRecursive([1, 2, 3, 2, 4, 5, 5, 6, 1]));

// const compression = (str) => {
//   const strArray = str.split("");
//   let newString = "";
//   for (let i = 0; i < strArray.length; i++) {
//     if (strArray[i] != strArray[i - 1]) {
//       let count = 1;
//       for (let j = i; strArray[j] === strArray[j + 1]; j++) {
//         count++;
//       }
//       if (count > 1) {
//         newString += count + strArray[i];
//       } else {
//         newString += strArray[i];
//       }
//     }
//   }
//   return newString;
// };
// console.log(compression("aaaabbbbcdefaccc"));

// const compressionRecursive = (str) => {
//   if (str === "") {
//     return "";
//   } else if(str.charAt(str.length-1) === str.charAt(str.length-2)) {
//     let count = 1;
//     for (i = 1; str.charAt(str.length - i) === str.charAt(str.length - (i + 1)); i++) {
//       count++
//     }
//     return compressionRecursive(str.substring(0, str.length - count)) + count + str.charAt(str.length - 1);
//   } else {
//     return compressionRecursive(str.substring(0, str.length - 1)) + str.charAt(str.length - 1);
//   }
// }
// console.log(compressionRecursive("aaaabbbbcdefaccc"));

// const uniqueString = (str) => {
//   lcString = str.toLowerCase();
//   for (i = 0; i < str.length; i++) {
//     checkStr = str.substring(0, i) + str.substring((i + 1), str.length);
//     if (checkStr.includes(lcString.charAt(i))) {
//       return false
//     }
//   }
//   return true
// }
// console.log(uniqueString("hello"));
// console.log(uniqueString("whiteboard"));

const merge = (left, right) => {
  let array = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      array.push(left.shift());
    } else {
      array.push(right.shift());
    }
  }
  return [...array, ...left, ...right];
};
const mergeSort = (arr) => {
  const half = arr.length / 2;
  if (arr.length < 2) {
    return arr;
  }
  const left = arr.splice(0, half);
  return merge(mergeSort(left), mergeSort(arr));
};
console.log(mergeSort([4, 2, 5, 7, 9, 9, 3]));
console.log(mergeSort(["a", "s", "b", "j"]));
