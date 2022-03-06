window.CombSort = {
    valid: _ => {
        return true;
    },

    run: async function* () {
        let gap = bars.length,
            n = bars.length,
            swapped = true;

        while (gap != 1 || swapped) {
            gap = parseInt((gap * 10) / 13, 10);
            gap = gap < 1 ? 1 : gap;

            swapped = false;
            for (let i = 0; i < n - gap; ++i) {
                if (Sorting.compare(i, i + gap)) {
                    await Sorting.swap(i, i + gap);
                    swapped = true;
                }
                yield* Sorting.reflect_state();
            }
        }

        return new Promise(resolve => {
            resolve(bars);
        });
    },
};
