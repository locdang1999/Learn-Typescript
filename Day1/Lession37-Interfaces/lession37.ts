interface IPerson {
    readonly firstNm: string;
    lastNm: string;
    address?:string;
}

// giống định nghĩa 1 type
// Link so sánh https://stackoverflow.com/questions/37233735/interfaces-vs-types-in-typescript

type personOld = {
    firstNm: string;
    lastNm: string;
}

function getFullNm(person: IPerson) {
    return `${person.firstNm} ${person.lastNm}`;
}

let person = {
    firstNm: "Loc",
    lastNm: "Dang",
    address: "HCM",
}

console.log(getFullNm(person));