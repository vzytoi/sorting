class SelectionSort {
    static async run() {
        let m,
            n = bars.length;
        for (let i = 0; i < n; i++) {
            m = i;
            for (let j = i + 1; j < n; j++) {
                if (Sorting.compare(bars[m], bars[j], true)) {
                    m = j;
                }
                if (stop) {
                    return;
                }
            }
            await Sorting.replace(bars[i], bars[m], true);
        }
        new Promise((resolve, reject) => {
            resolve(bars);
        });
    }
}
