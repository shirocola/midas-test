// handScore.ts

function getValue(rank: string): number {
    switch (rank) {
        case 'A': return 11;
        case 'K':
        case 'Q':
        case 'J': return 10;
        default: return parseInt(rank);
    }
}

function getHandScore(input: string): number {
    let cards = input.split(' ');
    let suits: { [key: string]: number } = {
        'S': 0,
        'C': 0,
        'H': 0,
        'D': 0
    };
    let ranks: { [key: string]: number } = {};

    // Populate suits and ranks with values
    for (let card of cards) {
        let suit = card[0];
        let rank = card.slice(1);
        suits[suit] += getValue(rank);
        ranks[rank] = (ranks[rank] || 0) + 1;
    }

    // If three cards of the same rank
    for (let rank in ranks) {
        if (ranks[rank] === 3) {
            if (rank === 'A') return 35;
            else return 32.5;
        }
    }

    // Return maximum value among suits
    let suitValues = [suits['S'], suits['C'], suits['H'], suits['D']];
    return Math.max(...suitValues);
}

console.log(getHandScore("S8 S10 CA"));  // This should print 18
console.log(getHandScore("D10 DQ HK"));  // This should print 30
console.log(getHandScore("S8 S8 C8"));  // This should print 32.5
console.log(getHandScore("SA SA CA")); // This should print 35 
console.log(getHandScore("SA SQ S10")); // This should print 31
console.log(getHandScore("SA DQ C10")); // This should print 11

