export function formatDate(date){
    return date.toLocaleDateString("uk-UA", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    })
}

export function formatTime(date){
    return date.toLocaleTimeString([], {
        hour: "numeric",
        minute: "2-digit",
    })
}