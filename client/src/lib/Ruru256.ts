const Charset = new Array(126 - 33).fill(0).map((_, i) => String.fromCharCode(i + 33)).join('');

const InternalKeys = [
    /* 
        ASCII 
        chars with charcode from 33 to 126
    */
   new Array(126 - 33).fill(0).map((_, i) => i + 33).map(x => String.fromCharCode(x)).join(''),
    /*
        Latin1 Supplement
        chars with charcode from 161 to 255
    */
    new Array(255 - 161).fill(0).map((_, i) => i + 161).map(x => String.fromCharCode(x)).join(''),
    /*
        Latin Extended-A
        chars with charcode from 256 to 383
    */
    new Array(383 - 256).fill(0).map((_, i) => i + 256).map(x => String.fromCharCode(x)).join(''),
    /*
        Latin Extended-B
        chars with charcode from 384 to 591
    */
    new Array(591 - 384).fill(0).map((_, i) => i + 384).map(x => String.fromCharCode(x)).join('')
].join('');

const GetCharCode = (char: string | string[]) => {
    // Check if char is a string or an array of strings
    if (typeof char === 'string') {
        // If it's an array of chars, return an array of char codes
        return char.charCodeAt(0);
    }
    // Else return char code of the char
    return char.map(x => x.charCodeAt(0));
}

const GroupKeys = (keys: number[]) => {

    // Initialize
    const result = [];
    let currentVal = keys[0];
    let currentCount = 0;

    // Loop through the array
    for (let i = 0; i < keys.length; i++) {
        // If the current value is the same as the previous value, increment the count
        if (keys[i] === currentVal) {
            currentCount++;
        } else {
            // Else push the current value and count to the result array
            result.push(currentCount === 1 ? currentVal : [currentCount, currentVal]);
            currentVal = keys[i];
            currentCount = 1;
        }
    }

    // Push the last value and count to the result array
    result.push(currentCount === 1 ? currentVal : [currentCount, currentVal]);

    return result;

}

function GroupKeyString(arr: number[]) {
    // Initialize
    let result = "";
    let currentVal = arr[0];
    let currentCount = 0;

    // Loop through the array
    for (let i = 0; i < arr.length; i++) {
        // If the current value is the same as the previous value, increment the count
        if (arr[i] === currentVal) {
            currentCount++;
        } else {
            // Else push the current value and count to the result array
            result += (currentCount === 1 ? currentVal : `${currentCount}(${currentVal})`) + "+";
            currentVal = arr[i];
            currentCount = 1;
        }
    }

    // Push the last value and count to the result array
    result += (currentCount === 1 ? currentVal : `${currentCount}(${currentVal})`);

    return result;
}
function reverseString(str: string) {
    // Create regex to match types
    const regex = /(\d*)(\((\d+)\))|(\d+)/g;
    let match;
    const arr = [];

    // Loop if there is still a match
    while ((match = regex.exec(str))) {
        // Get the match groups
        const [_, countStr, _2, valueStr, singleValueStr] = match;
        // If there is a count, push the value to the array that many times
        if (countStr !== undefined) {
            arr.push(
                ...Array(
                    Number(countStr)
                ).fill(
                    Number(valueStr)
                )
            );
        } else {
            // Else push the value once
            const value = Number(singleValueStr);
            arr.push(value);
        }
    }

    return arr;
}
const Encode = (str: string) => {
    // Initialize
    let key: number[] = []
    // Split the string into an array of chars
    const chars = str.split('');
    // Get the char codes of the chars
    const codes = GetCharCode(chars) as number[];
    // Group the keys
    const encoded = codes.map(x => {
        const char = x % Charset.length;
        key.push(x - char);
        return Charset[char];
    }).join('');
    // Return the encoded string and the key
    return { key: GroupKeyString(key), encoded };
}

const EncodeWithIKE = (str: string) => {
    // Initialize
    let key: number[] = []
    // Split the string into an array of chars
    const chars = str.split('');
    // Get the char codes of the chars
    const codes = GetCharCode(chars) as number[];
    // Group the keys
    const encoded = codes.map(x => {
        const char = x % Charset.length;
        key.push(x - char);
        return Charset[char];
    }).join('');
    // Return the encoded string and the key
    return { key: key.map(x => InternalKeys?.[x] || ' ').join(''), encoded };
};

const ConvertToIKE = (key: string, encoded: string) => {
    // split key into array
    const keyArr = key.split('');
    // split encoded into array
    const encodedArr = encoded.split('');

    let result = '';

    // Loop through the encoded array
    for (let i = 0; i < Math.min(encodedArr.length, keyArr.length); i++) {
        result += keyArr[i] + encodedArr[i];
    }

    return result;
}

const Decode = (key: number[], encoded: string) => {
    // Reverse the key
    return encoded.split('')
        .map(
            (x, i) => String.fromCharCode(
                Charset.indexOf(x) + key[i]
            )
        ).join('');
}

const DecodeFromIKE = (encoded: string) => {
    // Split the encoded string into an array
    const arr = encoded.split('');
    
    // Group array as even and odd
    const even = arr.filter((_, i) => i % 2 === 0);
    const odd = arr.filter((_, i) => i % 2 === 1);

    // Get the key from the even array
    const key = even.map(x => x === ' ' ? 0 : InternalKeys.indexOf(x));
    const encodedStr = odd.join('');

    // Decode the string
    return Decode(key, encodedStr);

}



export default {
    GetCharCode,
    Encode,
    Decode,
    GroupKeys,
    GroupKeyString,
    reverseString,

    EncodeWithIKE,
    DecodeFromIKE,
    ConvertToIKE
}