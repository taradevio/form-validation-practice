function submission() {
    const meetingName = document.getElementById("meeting-name").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    console.log(meetingName, date, time, allDay, repeat);
}

document.addEventListener("DOMContentLoaded", function() {
    submission();
})