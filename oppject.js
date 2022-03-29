function Date(){
    this.day = 1;
    this.month = 1;
    this.year = 2022;

    this.getDay = function(){
        return this.day;
    }
}

let day1 = new Date();
console.log(day1.month)