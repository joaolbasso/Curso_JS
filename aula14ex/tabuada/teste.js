var tab = []
var i = 0
while (tab.length <= 10) {
    tab.push(2 * i)
    i++
}

for (var pos in tab) {
    console.log(tab[pos])
}

