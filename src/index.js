function eval() {
    // Do not use eval!!!
    return;
}

function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
  let priority = {'*': 2, '/': 2, '+': 1, '-': 1, '(': 0, ')': 0, undefined: -1};
  let arr = expr.split(' '),
      openingBr = '',
      closingBr = '',
      num = '',
      stack = [];
  for (let i = 0; i < arr.length; i++) {
    while (arr[i] == '') {
      arr.splice(i, 1);
    }
  }
  let exc = arr.join('');
  for (let i = 0; i < exc.length; i++) {
  	if (exc[i] == '(') {
    	openingBr++;
    } else if (exc[i] == ')') {
    	closingBr++;
    }
  }
  if (openingBr != closingBr) {
    throw Error ('ExpressionError: Brackets must be paired');
  }
	for (let i = 0; i < exc.length; i++) {
    if (exc[i] != '(' && exc[i] != ')' && exc[i] != '+' && exc[i] != '-' && exc[i] != '*' && exc[i] != '/') {
      num += exc[i];
      if (i == exc.length - 1) {
        stack.push(num);
      }
    } else {
      stack.push(num);
      stack.push(exc[i]);
      num = '';
      }
    }
  for (let i = 0; i < stack.length; i++) {
    while (stack[i] == '') {
      stack.splice(i, 1);
    }
    if (isNaN(parseInt(stack[i]))) {
      stack[i] = stack[i];
    } else {
      stack[i] = +stack[i];
    }
  }
  for (let i = 0; i < stack.length; i++)
  while (~stack.indexOf('(') && ~stack.indexOf(')')) {
    let opbr = stack.lastIndexOf('(');
    let clbr = stack.slice(opbr).indexOf(')') + opbr;
    let newArr = stack.splice(opbr + 1, clbr - opbr - 1);
    for (let i = 0; i < newArr.length; i++) {
      if (typeof newArr[i] != 'number') {
        if (priority[newArr[i]] >= priority[newArr[i + 2]]) {
          if (newArr[i] == '*') {
            newArr.splice(i - 1, 3, newArr[i - 1] * newArr[i + 1]);
            i = 0;
          }
          if (newArr[i] == '/') {
            if (newArr[i + 1] == 0) {
                throw Error ("TypeError: Division by zero.");
            }
            newArr.splice(i - 1, 3, newArr[i - 1] / newArr[i + 1]);
            i = 0;
          }
          if (newArr[i] == '+') {
            newArr.splice(i - 1, 3, newArr[i - 1] + newArr[i + 1]);
            i = 0;
          }
          if (newArr[i] == '-') {
            newArr.splice(i - 1, 3, newArr[i - 1] - newArr[i + 1]);
            i = 0;
          }
        }
      }
    }
    if (newArr.length == 1) {
      stack.splice(opbr, 2, newArr.pop());
    }
    opbr = 0;
    clbr = 0;
    newArr = [];
  }
  for (let i = 0; i < stack.length; i++) {
    if (typeof stack[i] != 'number') {
      if (priority[stack[i]] >= priority[stack[i + 2]]) {
        if (stack[i] == '*') {
          stack.splice(i - 1, 3, stack[i - 1] * stack[i + 1]);
          i = 0;
        }
        if (stack[i] == '/') {
        if (stack[i + 1] == 0) {
            throw Error ("TypeError: Division by zero.");
        }
          stack.splice(i - 1, 3, stack[i - 1] / stack[i + 1]);
          i = 0;
        }
        if (stack[i] == '+') {
          stack.splice(i - 1, 3, stack[i - 1] + stack[i + 1]);
          i = 0;
        }
        if (stack[i] == '-') {
          stack.splice(i - 1, 3, stack[i - 1] - stack[i + 1]);
          i = 0;
        }
      }
    }
  }
  let result = stack.pop();
  if (result === Infinity) {
    throw Error ("TypeError: Division by zero.");
  }
  return result;
}

module.exports = {
    expressionCalculator
}

module.exports = {
    expressionCalculator
}