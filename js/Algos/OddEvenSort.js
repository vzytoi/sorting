window.OddEvenSort = {
    valid: (n) => {
        return true;
    },

    run: async () => {
        let ok = false,
            n = bars.length;

        while (!ok) {
            ok = true;

            for (let i = 1; i <= n - 2; i += 2) {
                if (Sorting.compare(bars[i], bars[i + 1])) {
                    await Sorting.swap(bars[i], bars[i + 1]);
                    ok = false;
                }
                if (stop) return;
            }

            for (let i = 0; i <= n - 2; i += 2) {
                if (Sorting.compare(bars[i], bars[i + 1])) {
                    await Sorting.swap(bars[i], bars[i + 1]);
                    ok = false;
                }
                if (stop) return;
            }
        }

        return new Promise((resolve) => {
            resolve(bars);
        });
    },
};
