import {string} from "postcss-selector-parser";

export const HISTORY_TIMESTAMP_FORMAT: string = 'MM/DD/YYYY HH:mm'

export const getDateTime = (timestamp: string | number): String => {
    const date = new Date(timestamp);
    return date.toLocaleString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
    });
}


export const getAgentName = (name: string) => {
    const newName: String = name.substring(name.lastIndexOf('-') + 1)
    if (newName === "Kate" || newName === "Myra") {
        return newName
    }
    return newName.toLowerCase()
}
export const getAgentType = (name: string) => {
    if (name?.includes('Multi-Prompt')) {
        return "Multi Prompt"
    } else if (name?.includes('Single Prompt')) {
        return "Single Prompt"
    }
    return name?.replaceAll("agent", "")
}


export const numberToMoney = (money: number, minimumFractionDigits: number = 3) => {
    return money.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: minimumFractionDigits
    })
}

export const secondsToMinutes = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds}`;
}

export function millisecondsToMinutes(milliseconds: number) {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const remainingSeconds = totalSeconds % 60;
    return `${minutes}:${remainingSeconds}`;
}


export const getCombinedCost = function (cost: number) {
    cost /= 100
    return numberToMoney(cost); // Output
}
export const getTotalSeconds = function (time: string) {
    const [minutes, seconds] = time.split(':').map(Number);
    return minutes * 60 + seconds;
}
