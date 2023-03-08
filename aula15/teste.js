let num = [5,8,4]
console.log(num)
num[3] = 6
console.log(num)
num.push(7)
num.sort()
num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)

for (var pos=0;pos<num.length;pos++) {
    console.log(num[pos])
}

var pos = 0
while (pos<num.length) {
    console.log(num[pos])
    pos++
}