window.HeapSort = {
    valid: (n) => {
        return true;
    },

    heapRoot: async (len, b, i) => {
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
            await Sorting.swap(b[i], b[max], true);
            await HeapSort.heapRoot(len, b, max);
        }
        return bars;
    },

    run: async () => {
        let n = bars.length;

        for (let i = Math.floor(n / 2); i >= 0; --i) {
            if (stop) return;
            await HeapSort.heapRoot(n, bars, i);
        }

        for (let i = n - 1; i > 0; --i) {
            await Sorting.swap(bars[0], bars[i], true);
            n--;
            await HeapSort.heapRoot(n, bars, 0);
            if (stop) {
                return;
            }
        }
        return new Promise((resolve) => {
            resolve(bars);
        });
    },
};
