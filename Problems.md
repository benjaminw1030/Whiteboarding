# Questions
## Question #1: Turning Strings to URLs
URLs cannot have spaces. Instead, all spaces in a string are replaced with %20. Write an algorithm that replaces all spaces in a string with %20.

You may not use the replace() method or regular expressions to solve this problem. Solve the problem with and without recursion.

Example
Input: "Jasmine Ann Jones"

Output: "Jasmine%20Ann%20Jones"

```
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
```
```
const recursiveUrlString = (str) => {
  if (str === "") {
    return "";
  } else if (str[str.length-1] === " ") {
    return recursiveUrlString(str.substr(0, str.length - 1)) + "%20";
  } else {
    return recursiveUrlString(str.substr(0, str.length - 1)) + str[str.length - 1];
  }
}
```

## Question #2: Array Deduping
Write an algorithm that removes duplicates from an array. Do not use a function like filter() to solve this. Once you have solved the problem, demonstrate how it can be solved with filter(). Solve the problem with and without recursion.

Example
Input: [7, 9, "hi", 12, "hi" 7, 53]

Output: [7, 9, "hi", 12, 53]
```
const dedupe = (arr) => {
  const newArr = []
  for (i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i]) {
      newArr.push(arr[i])
    }
  }
  return newArr;
}
```
```
const dedupeFilter = (arr) => {
  const newArr = arr.filter((e, index) => {
    return arr.indexOf(e) === index;
  })
  return newArr;
}
console.log(dedupeFilter([1, 2, 3, 2, 4, 5, 5, 6, 1]));
```

```
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
```

## Question #3: Compressing Strings
Write an algorithm that takes a string with repeated characters and compresses them, using a number to show how many times the repeated character has been compressed. For instance, aaa would be written as 3a. Solve the problem with and without recursion.

Example
Input: "aaabccdddda"

Output: "3ab2c4da"

```
const compression = (str) => {
  const strArray = str.split("");
  let newString = "";
  for (let i = 0; i < strArray.length; i++) {
    if (strArray[i] != strArray[i - 1]) {
      let count = 1;
      for (let j = i; strArray[j] === strArray[j + 1]; j++) {
        count++;
      }
      if (count > 1) {
        newString += count + strArray[i];
      } else {
        newString += strArray[i];
      }
    }
  }
  return newString;
};
```
```
const compressionRecursive = (str) => {
  if (str === "") {
    return "";
  } else if(str.charAt(str.length-1) === str.charAt(str.length-2)) {
    let count = 1;
    for (i = 1; str.charAt(str.length - i) === str.charAt(str.length - (i + 1)); i++) {
      count++
    }
    return compressionRecursive(str.substring(0, str.length - count)) + count + str.charAt(str.length - 1);
  } else {
    return compressionRecursive(str.substring(0, str.length - 1)) + str.charAt(str.length - 1);
  }
}
console.log(compressionRecursive("aaaabbbbcdefaccc"));
```

## Question #4: Checking for Uniqueness
Write an algorithm that determines whether all the elements in a string are unique. You may not convert the string into an array or use array methods to solve this problem. The algorithm should return a boolean.

Example
Input: "hello"

Output: false

Input: "copyright"

Output: true

```
const uniqueString = (str) => {
  lcString = str.toLowerCase();
  for (i = 0; i < str.length; i++) {
    checkStr = str.substring(0, i) + str.substring((i + 1), str.length);
    if (checkStr.includes(lcString.charAt(i))) {
      return false
    }
  }
  return true
}
```

## Question #5: Array Sorting
Write an algorithm that sorts an array without using the sort() method. There are many different sorting algorithms - take the time to read about the following:

Quick sort
Merge sort
Heap sort
Insertion sort
Bubble sort
Selection sort
You may implement any of the above algorithms (or your own) to solve the problem - as long as it doesn't use sort().

Example
Input: [9, 2, 7, 12]

Output: [2, 7, 9, 12]

```
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
```