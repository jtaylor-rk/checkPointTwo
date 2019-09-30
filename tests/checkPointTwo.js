var pointTwo
module.exports = {
    before: browser => {
        pointTwo = browser.page.checkPointTwoPOM()
        pointTwo.navigate()
    },
    after: browser => {
        browser.end()
    },

    'Odds and Evens': browser => {
        pointTwo
            .setValue('@evenInput', test.evenOdds)
            .click('@evenSubmit')
            .verify.containsText('@evenRes', '2,4')
            .verify.containsText('@oddRes', '1,3,5')
    },
    'Filter Object': browser => {
        pointTwo
            .setValue('@objectInput', test.object)
            .click('@objectSubmit')
            .verify.containsText('@objectRes', 'hairColor')
    },
    'Filter String': browser => {
        pointTwo
            .setValue('@stringInput', test.string)
            .click('@stringSubmit')
            .verify.containsText('@stringRes', 'Tyler')
    },
    'Palindrome': browser => {
        pointTwo
            .setValue('@palInput', test.pal)
            .pause(2000)
            .click('@palSubmit')
            .verify.containsText('@palRes', 'true')
            .clearValue('@palInput')
            .setValue('@palInput', test.palTwo)
            .click('@palSubmit')
            .verify.containsText('@palRes', 'false')
    },
    'Sum': browser => {
        pointTwo
            .setValue('@sumInputOne', test.sumOne)
            .setValue('@sumInputTwo', test.sumTwo)
            .click('@sumSubmit')
            .verify.containsText('@sumRes', '10')
    }
}