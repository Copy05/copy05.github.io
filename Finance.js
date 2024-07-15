function getRawNumber(abbreviatedNumber) {
    const regex = /^(\d*[\.,]?\d*)([KMB])$/;
    const match = regex.exec(abbreviatedNumber);

    if (!match) return null;

    const numberPart = parseFloat(match[1]);
    const suffix = match[2];

    let multiplier;
    switch (suffix) {
        case 'K':
            multiplier = 1000;
            break;
        case 'M':
            multiplier = 1000000;
            break;
        case 'B':
            multiplier = 1000000000;
            break;
        default:
            return null;
    }

    return numberPart * multiplier;
}

function CalculateRevenue(views){
    const averageRPM = 4;

    const revenue = (views / 1000) * averageRPM;

    return revenue.toFixed(2);
}


document.addEventListener("DOMContentLoaded", (e) => {
    const viewcount = document.getElementById("view_count").innerText;
    const numericViewCount = getRawNumber(viewcount);
    document.getElementById("finance_revenue").innerText = new Intl.NumberFormat('en-US', { notation: "compact", compactDisplay: "short" }).format(CalculateRevenue(numericViewCount));
    document.getElementById("finance_revenue").innerText += "€"
});