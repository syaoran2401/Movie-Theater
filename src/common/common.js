import moment from "moment";

export const dateDiff = (startDate, endDate) => {
    var startDateF = moment(startDate, "DD.MM.YYYY");
    var endDateF = moment(endDate, "DD.MM.YYYY");

    console.log(startDateF, endDateF);

    var duration = endDateF.diff(startDateF, 'days');
    return duration;
}