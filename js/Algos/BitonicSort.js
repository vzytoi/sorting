window.BitonicSort = {
    valid: n => {
        return Number.isInteger(Math.log(n) / Math.log(2));
    },

    run: async function* () {
        let n = bars.length,
            l;
        for (let k = 2; k <= n; k *= 2) {
            for (
                let j = Math.floor(k / 2);
                j > 0;
                j = Math.floor(j / 2)
            ) {
                for (let i = 0; i < n; i++) {
                    yield* Sorting.reflect_state();

                    l = i ^ j;
                    if (
                        l > i &&
                        (((i & k) == 0 &&
                            Sorting.compare(i, l)) ||
                            ((i & k) != 0 &&
                                !Sorting.compare(i, l)))
                    )
                        await Sorting.swap(i, l);
                }
            }
        }

        return new Promise(resolve => {
            resolve(bars);
        });
    },
};
