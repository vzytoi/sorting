window.InsertionSort = {
    valid: _ => {
        return true;
    },

    run: async function* () {
        let n = bars.length,
            j;
        for (let i = 1; i < n; ++i) {
            j = i;
            while (j > 0 && Sorting.compare(j - 1, j)) {
                yield* Sorting.reflect_state();
                await Sorting.swap(j - 1, j);
                j--;
            }
        }
        return new Promise(resolve => {
            resolve(bars);
        });
    },
};
