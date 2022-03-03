window.InsertionSort = {
    valid: (n) => {
        return true;
    },

    run: async () => {
        let n = bars.length,
            j;
        for (let i = 1; i < n; ++i) {
            j = i;
            while (j > 0 && Sorting.compare(bars[j - 1], bars[j])) {
                await Sorting.swap(bars[j - 1], bars[j]);
                j--;
                if (stop) return;
            }
        }
        return new Promise((resolve) => {
            resolve(bars);
        });
    },
};
