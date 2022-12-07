
module.exports.getDate = getDate;

function getDate (){

var date = new Date();

    var dateOptions = {
        weekday: "long",
        day: "numeric",
        month: "long",
}

    var today = date.toLocaleDateString("en-US", dateOptions);

    return today;
}

module.exports.getDay = getDay;

function getDay (){

var date = new Date();

    var dateOptions = {
        weekday: "long",
}

    var today = date.toLocaleDateString("en-US", dateOptions);

    return today;
}