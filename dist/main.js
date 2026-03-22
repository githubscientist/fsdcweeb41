var Rating;
(function (Rating) {
    Rating[Rating["low"] = 1] = "low";
    Rating[Rating["good"] = 2] = "good";
    Rating[Rating["average"] = 3] = "average";
    Rating[Rating["best"] = 4] = "best";
    Rating[Rating["excellent"] = 5] = "excellent";
})(Rating || (Rating = {}));
let user_rating = Rating.excellent;
console.log(user_rating);
export {};
//# sourceMappingURL=main.js.map