module.exports = function check(str, bracketsConfig) {
  // your solution
    let arr = str.split('');
    let arrOpen = [];

    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < bracketsConfig.length; j++) {

            if (arr[i] === bracketsConfig[j][0]) {

                if (arrOpen.length && arr[i] === arrOpen[arrOpen.length - 1] && arrOpen[arrOpen.length - 1] === bracketsConfig[j][1]) {
                    arrOpen.pop();
                    break;
                } else {
                    arrOpen.push(arr[i]);
                    break;
                }

            } else if (arr[i] === bracketsConfig[j][1]) {

                if (!arrOpen.length || arrOpen[arrOpen.length - 1] !== bracketsConfig[j][0]) {
                    return false;
                } else {
                    arrOpen.pop();
                    break;
                }

            }
        }

    }

    if (arrOpen.length) {
        return false;
    }

    return true;
};
