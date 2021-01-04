"use strict";
// Enum
// Numeric enums
var Months;
(function (Months) {
    Months[Months["JAN"] = 1] = "JAN";
    Months[Months["FEB"] = 2] = "FEB";
    Months[Months["MAR"] = 3] = "MAR";
    Months[Months["APR"] = 4] = "APR";
    Months[Months["MAY"] = 5] = "MAY";
})(Months || (Months = {}));
console.log(Months);
console.log(Months.MAR);
// String enums
var Month;
(function (Month) {
    Month["JAN"] = "Januari";
    Month["FEB"] = "Februari";
    Month["MAR"] = "Maret";
    Month["APR"] = "April";
    Month["MAY"] = "Mei";
})(Month || (Month = {}));
console.log(Month);
console.log(Month.MAY);
