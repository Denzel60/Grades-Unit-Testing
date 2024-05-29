export function sciences(marks){
    if (marks >=70 && marks <= 100) {
        return "A";
    } else if (marks >=60 && marks <= 69){
        return "B"; 
    } else if (marks >=50 && marks <= 59){
        return "C"; 
    } else if (marks >=40 && marks <= 49){
        return "Pass"; 
    } else if (marks >= 0 && marks <= 39){
        return "Sup"; 
    } else {
        return "Invalid Marks";
    }
}

export function socialsciences(marks){
    if (marks >=80 && marks <= 100) {
        return "A";
    } else if (marks >=70 && marks <= 79){
        return "B"; 
    } else if (marks >=60 && marks <= 69){
        return "C"; 
    } else if (marks >=50 && marks <= 59){
        return "Pass"; 
    } else if (marks >= 0 && marks <= 49){
        return "Sup"; 
    } else {
        return "Invalid Marks";
    }
}

export function languages(marks){
    if (marks >=75 && marks <= 100) {
        return "A";
    } else if (marks >=65 && marks <= 74){
        return "B";
    } else if (marks >=55 && marks <= 64){
        return "C"; 
    } else if (marks >= 45 && marks <= 54){
        return "Pass"; 
    } else if (marks >= 0 && marks < 45){
        return "Sup"; 
    } else {
        return "Invalid Marks";
    }
}

// let student = {
//     name: "Dennis Doe", 
//     math: 80, 
//     eng: 65, 
//     kis: 48, 
//     phy: 67, 
//     che: 56, 
//     re:89, 
//     comp: 82
// }

export function calculateGradesAndAverage(student){ 
    let avgPts = Math.floor((student.math + student.eng + student.kis + student.phy + student.che + student.re + student.comp)/ 7); 

    return {
        name: student.name,
        math: sciences(student.math),
        eng: languages(student.eng),
        kis: languages(student.kis),
        phy: sciences(student.phy),
        che: sciences(student.che),
        re: socialsciences(student.re),
        comp: languages(student.comp),
        avgPts: avgPts
    }
}

// console.log(calculateGradesAndAverage())
