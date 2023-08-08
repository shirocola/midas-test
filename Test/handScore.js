// handScore.ts
function getValue(rank) {
    switch (rank) {
        case 'A': return 11;
        case 'K':
        case 'Q':
        case 'J': return 10;
        default: return parseInt(rank);
    }
}
function getHandScore(input) {
    var cards = input.split(' ');
    var suits = {
        'S': 0,
        'C': 0,
        'H': 0,
        'D': 0
    };
    var ranks = {};
    // Populate suits and ranks with values
    for (var _i = 0, cards_1 = cards; _i < cards_1.length; _i++) {
        var card = cards_1[_i];
        var suit = card[0];
        var rank = card.slice(1);
        suits[suit] += getValue(rank);
        ranks[rank] = (ranks[rank] || 0) + 1;
    }
    // If three cards of the same rank
    for (var rank in ranks) {
        if (ranks[rank] === 3) {
            if (rank === 'A')
                return 35;
            else
                return 32.5;
        }
    }
    // Return maximum value among suits
    var suitValues = [suits['S'], suits['C'], suits['H'], suits['D']];
    return Math.max.apply(Math, suitValues);
}
console.log(getHandScore("S8 S10 CA")); // This should print 18
console.log(getHandScore("D10 DQ HK")); // This should print 30
console.log(getHandScore("S8 S8 C8")); // This should print 32.5
console.log(getHandScore("SA SA CA")); // This should print 35 
console.log(getHandScore("SA SQ S10")); // This should print 31
console.log(getHandScore("SA DQ C10")); // This should print 11
