module.exports = {
    url: 'https://devmountain-qa.github.io/Automation-Basics/build/',
    elements: {
        evenInput: '[name="evenOddInput"]',
        evenSubmit: '[name="evenOddButton"]',
        evenRes: '[name="evenResults"]',
        oddRes: '[name="oddResults"]',
        objectInput: '[name="objectFilterInput"]',
        objectSubmit: '[name="objectFilterButton"]',
        objectRes: '[name="objectFilterResults"]',
        stringInput: '#nameFilterInput',
        stringSubmit: '#nameFilterButton',
        stringRes: '[name="nameFilterResults"]',
        palInput: '[name="palindromeInput"]',
        palSubmit: '[name="palindromeButton"]',
        palRes: '[name="palindromeResults"]',
        sumInputOne: '[name="sumInput1"]',
        sumInputTwo: '[name="sumInput2"]',
        sumSubmit: '[name="sumButton"]',
        sumRes: '[name="sumResults"]'

    },

    var: test = {
        evenOdds: '1,2,3,4,5',
        object: 'hairColor',
        string: 'T',
        pal: 'star rats',
        palTwo: 'not Palindrome',
        sumOne: '5',
        sumTwo: '5'
    }
}

// var: errorInfo = {
//     name: "lkjlkjlkjjlkjlkjlkjjlkjlkjlkjjl",
//     phone: "1",
//     title: "lkjlkjlkjjlkjlkjlkjjlkjlkjlkjjl"
// }