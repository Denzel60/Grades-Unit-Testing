import {sciences, socialsciences, languages, calculateGradesAndAverage} from './grades.js';

describe("sciences", () => {
    test('science for 80 should return "A"', () => {
        expect(sciences(80)).toBe("A")
    })
    test('science for 65 should return "B"', () => {
        expect(sciences(65)).toBe("B")
    })
    test('science for 55 should return "C"', () => {
        expect(sciences(55)).toBe("C")
    })
    test('science for 45 should return "Pass"', () => {
        expect(sciences(45)).toBe("Pass")
    })
    test('science for 39 should return "Sup"', () => {
        expect(sciences(39)).toBe("Sup")
    })
});

describe("socialsciences", () => {
    test('socialsciences for 80 should return "A"', () => {
        expect(socialsciences(80)).toBe("A")
    })
    test('socialsciences for 75 should return "B"', () => {
        expect(socialsciences(75)).toBe("B")
    })
    test('socialsciences for 65 should return "C"', () => {
        expect(socialsciences(65)).toBe("C")
    })
    test('socialsciences for 55 should return "Pass"', () => {
        expect(socialsciences(55)).toBe("Pass")
    })
    test('socialsciences for 49 should return "Sup"', () => {
        expect(socialsciences(49)).toBe("Sup")
    })
});

describe("languages", () => {
    test('languages for 75 should return "A"', () => {
        expect(languages(75)).toBe("A")
    })
    test('languages for 65 should return "B"', () => {
        expect(languages(65)).toBe("B")
    })
    test('languages for 64 should return "C"', () => {
        expect(languages(64)).toBe("C")
    })
    test('languages for 54 should return "Pass"', () => {
        expect(languages(54)).toBe("Pass")
    })
    test('languages for 44 should return "Sup"', () => {
        expect(languages(44)).toBe("Sup")
    })
});

describe ("calculateGradesAndAverage", ()=> {
    test("should return an object with the grades and average", ()=> {
        expect(calculateGradesAndAverage({
            name: "Dennis Doe", 
            math: 80, 
            eng: 65, 
            kis: 48, 
            phy: 67, 
            che: 56, 
            re:89, 
            comp: 82
        })).toEqual(
            {
                name: 'Dennis Doe',
                math: 'A',
                eng: 'B',
                kis: 'Pass',
                phy: 'B',
                che: 'C',
                re: 'A',
                comp: 'A',
                avgPts: 69
            }
        )
    })
});

