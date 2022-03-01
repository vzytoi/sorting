class HeapSort {
    static async heapRoot(len, b, i) {
        let l = 2 * i + 1,
            r = 2 * i + 2,
            max = i;

        if (l < len && Sorting.compare(b[l], b[max], true)) {
            max = l;
        }

        if (r < len && Sorting.compare(b[r], b[max], true)) {
            max = r;
        }

        if (max != i) {
            await Sorting.replace(b[i], b[max], true);
            await this.heapRoot(len, b, max);
        }
        return bars;
    }

    static async run() {
        let n = bars.length;

        for (let i = Math.floor(n / 2); i >= 0; --i) {
            if (stop) return;
            await this.heapRoot(n, bars, i);
        }

        for (let i = n - 1; i > 0; --i) {
            await Sorting.replace(bars[0], bars[i], true);
            n--;
            await this.heapRoot(n, bars, 0);
            if (stop) {
                return;
            }
        }
        new Promise((resolve, reject) => {
            resolve(bars);
        });
    }
}
