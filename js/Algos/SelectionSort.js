window.SelectionSort = {
    valid: (n) => {
        return true;
    },

    run: async () => {
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
            await Sorting.swap(bars[i], bars[m], true);
        }
        return new Promise((resolve) => {
            resolve(bars);
        });
    },
};
