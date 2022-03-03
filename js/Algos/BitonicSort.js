window.BitonicSort = {
    valid: (n) => {
        return Number.isInteger(Math.log(n) / Math.log(2));
    },

    run: async () => {
        let n = bars.length,
            l;
        for (let k = 2; k <= n; k *= 2) {
            for (let j = Math.floor(k / 2); j > 0; j = Math.floor(j / 2)) {
                for (let i = 0; i < n; i++) {
                    if (stop) break;
                    l = i ^ j;
                    if (
                        l > i &&
                        (((i & k) == 0 && Sorting.compare(bars[i], bars[l])) ||
                            ((i & k) != 0 && !Sorting.compare(bars[i], bars[l])))
                    )
                        await Sorting.swap(bars[i], bars[l]);
                }
            }
        }
    },
};
