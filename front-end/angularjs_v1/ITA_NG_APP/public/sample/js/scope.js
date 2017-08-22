// Sample 1
var name = 'zach';

while (true) {
    var name = 'obama';
    console.log(name);
    break
}

console.log(name);

// Sample 2
var a = [];
for (var i = 0; i < 10; i++) {
    a[i] = function () {
        console.log(i);
    };
}
a[6]();