function* fibonacci() {
    let [prev, curr] = [0, 1];
    for (;;) {
        yield curr;
        [prev, curr] = [curr, prev + curr];
    }
}

for (let n of fibonacci()) {
    if (n > 100) break;
    console.log(n);
}
