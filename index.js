const monthNameEl = document.getElementById("month-name")

const dayNameEl = document.getElementById("day-name")

const dayNumEL = document.getElementById("day-number")

const yearEL = document.getElementById("year")

const date = new Date();

const month = date.getMonth();

monthNameEl.innerText = date.toLocaleDateString("en", {
    month:"long"
})

dayNameEl.innerText = date.toLocaleString("en", {
    weekday: "long"
})

dayNumEL.innerText = date.getDate()

yearEL.innerText = date.getFullYear()