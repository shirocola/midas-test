function getQuestionPart(phrases: string[]): string[] {
    // This function takes two words and returns the common part
    const getCommonPart = (a: string, b: string): string => {
        for (let i = 0; i < a.length; i++) {
            if (b.includes(a.substring(i))) {
                return a.substring(i);
            }
        }
        return "";
    };

    let common = getCommonPart(phrases[0], phrases[1]);
    
    // In case the common word isn't found between the first and second phrases, we try between the second and third
    if(!common) {
        common = getCommonPart(phrases[1], phrases[2]);
    }
    
    // Extract the non-common parts
    return phrases.map(phrase => phrase.replace(common, ''));
}

// Test cases
console.log(getQuestionPart(["BATHROOM", "BATHSALTS", "BATHBLOOD"]));  // Expected output: ["ROOM", "SALATS", "BLOOD"]
console.log(getQuestionPart(["BEFRIEND", "GIRLFRIEND", "FRIENDSHIP"]));  // Expected output: ["BE", "GIRL", "SHIP"]
console.log(getQuestionPart(["MOTOR", "MOTORBIKE", "MOTORCYCLE"])); // Expected output: ["", "BIKE", "CYCLE"]
console.log(getQuestionPart(["JAVASCRIPT", "TYPESCRIPT", "NOSCRIPT"])); // Expected output: ["", "BIKE", "CYCLE"]