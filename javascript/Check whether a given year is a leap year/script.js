function leapyear(year) {
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}
console.log(leapyear(2024));    
console.log(leapyear(2000));    
console.log(leapyear(2030));    
console.log(leapyear(1800));    
console.log(leapyear(3000));     