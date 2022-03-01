class InsertionSort {
    static async run() {
        let n = bars.length,
            j;
        for (let i = 1; i < n; ++i) {
            j = i;
            while (j > 0 && Sorting.compare(bars[j - 1], bars[j])) {
                await Sorting.replace(bars[j - 1], bars[j]);
                j--;
                if (stop) return;
            }
        }
        new Promise((resolve, reject) => {
            resolve(bars);
        });
    }
}
