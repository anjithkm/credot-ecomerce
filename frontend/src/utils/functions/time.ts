export function secondsDiff(d1: Date, d2: Date): number {
    let millisecondDiff = d2.getTime() - d1.getTime();
    let secDiff = Math.floor(millisecondDiff / 1000);
    return secDiff;
}

// 1 minute = 60 seconds
export function minutesDiff(d1: Date, d2: Date): number {
    let seconds = secondsDiff(d1, d2);
    let minutesDiff = Math.floor(seconds / 60);
    return minutesDiff;
}

// 1 hour = 60 minutes
export function hoursDiff(d1: Date, d2: Date): number {
    let minutes = minutesDiff(d1, d2);
    let hoursDiff = Math.floor(minutes / 60);
    return hoursDiff;
}

// 1 day = 24 hours 
export function daysDiff(d1: Date, d2: Date): number {
    let hours = hoursDiff(d1, d2);
    let daysDiff = Math.floor(hours / 24);
    return daysDiff;
}

// 1 week = 7 days
export function weeksDiff(d1: Date, d2: Date): number {
    let days = daysDiff(d1, d2);
    let weeksDiff = Math.floor(days / 7);
    return weeksDiff;
}

export function yearsDiff(d1: Date, d2: Date): number {
    let yearsDiff = d2.getFullYear() - d1.getFullYear();
    return yearsDiff;
}

// 1 month != 30 days 
// Number of days in month is not same in all months, so we need to do it differently
export function monthsDiff(d1: Date, d2: Date): number {
    let years = yearsDiff(d1, d2);
    let months = (years * 12) + (d2.getMonth() - d1.getMonth());
    return months;
}