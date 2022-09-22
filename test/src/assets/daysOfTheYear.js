const createDaysFunction = (givenMonth, givenYear) => {
    let daysForMonth = []
    switch (givenMonth) {
        case "January":
        case "March":
        case "May":
        case "July":
        case "August":
        case "October":
        case "December":
            for (let i = 1; i <= 31; i++) {
                daysForMonth.push(i)
            }
            break
        case "April":
        case "June":
        case "September":
        case "November":
            for (let i = 1; i <= 30; i++) {
                daysForMonth.push(i)
            }
            break
        case "February":
            let thisYearsDays = null;
            if(givenYear % 4 === 0){
                thisYearsDays = 29
            } else {
                thisYearsDays = 28
            }
            for (let i = 1; i <= thisYearsDays; i++) {
                daysForMonth.push(i)                
            }
            break
        default:
            console.log("This is not a month");
            break;
    }
    return daysForMonth
}
export default createDaysFunction;