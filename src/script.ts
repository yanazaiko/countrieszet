class Country {
    constructor(
        private name: string,
        private area: number,
        private population: number
    ) {}


    public getArea(): number {
        return this.area;
    }

    public getPopulation(): number {
        return this.population;
    }

    public showCountry(): string {
        return `Країна: ${this.name}, Площа: ${this.area} км², Населення: ${this.population}`;
    }
}


const countries: Country[] = [
    new Country("Замбія", 752618, 18383955),
    new Country("Зімбабве", 390757, 15092171),
    new Country("Західна Сахара", 266000, 597339),
    new Country("Зеландія Нова", 268021, 5084300),
    new Country("Зайчикова Долина", 540000, 1200000)
];

const processButton = document.getElementById("processButton") as HTMLButtonElement;
const minPopulationButton = document.getElementById("minPopulation") as HTMLButtonElement;
const maxSquareButton = document.getElementById("maxSquare") as HTMLButtonElement;
const sortBySquareButton = document.getElementById("sortBySquare") as HTMLButtonElement;
const outputDiv = document.getElementById("output") as HTMLDivElement;
const outputDiv2 = document.getElementById("output2") as HTMLDivElement;

processButton.addEventListener("click", () => {
    const result = countries.map(country => country.showCountry()).join("<br>");
    outputDiv.innerHTML = `<strong>Країни з першою літерою "З":</strong><br>${result}`;
});


minPopulationButton.addEventListener("click", () => {
    const minPopulationCountry = countries.reduce((min, country) =>
        country.getPopulation() < min.getPopulation() ? country : min
    );
    outputDiv2.textContent = `Країна з мінімальним населенням: ${minPopulationCountry.showCountry()}`;
});


maxSquareButton.addEventListener("click", () => {
    const maxSquareCountry = countries.reduce((max, country) =>
        country.getArea() > max.getArea() ? country : max
    );
    outputDiv2.textContent = `Країна з максимальною площею: ${maxSquareCountry.showCountry()}`;
});


sortBySquareButton.addEventListener("click", () => {
    const sortedCountries = countries.sort((a, b) => a.getArea() - b.getArea());
    const result = sortedCountries.map(country => country.showCountry()).join("<br>");
    outputDiv2.innerHTML = `<strong>Країни, відсортовані за площею:</strong><br>${result}`;
}
);
