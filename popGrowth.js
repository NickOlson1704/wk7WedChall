function nbYear(pO, percent, aug, p) {
    let population = pO
    let years = 0

    while (population < p) {
        population += population * (percent / 100) + aug
        years++
    }

    return years
}

const yearsNeeded = nbYear(1500, 5, 100, 5000)
console.log(yearsNeeded)


function nbYear(p0, percent, aug, p) {
    for (var y = 0; p0 < p; y++) {
        p0 = p0 * (1 + percent / 100) + aug;
    }
    return y;
  }

console.log(nbYear(1500000, 2.5, 10000, 2000000))  