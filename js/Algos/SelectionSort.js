window.SelectionSort = {
    valid: _ => {
        return true;
    },

    run: async function* () {
        let m,
            n = bars.length;
        for (let i = 0; i < n; i++) {
            m = i;
            for (let j = i + 1; j < n; j++) {
                if (Sorting.compare(m, j)) {
                    m = j;
                }
                yield* Sorting.reflect_state();
            }
            await Sorting.swap(i, m);
        }
        return new Promise(resolve => {
            resolve(bars);
        });
    },
};
