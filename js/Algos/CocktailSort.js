window.CocktailSort = {
    valid: _ => {
        return true;
    },

    run: async function* () {
        let start = 0,
            end = bars.length,
            swapped = true;

        while (swapped) {
            swapped = false;
            for (let i = start; i < end - 1; ++i) {
                if (Sorting.compare(i, i + 1)) {
                    yield* Sorting.reflect_state();
                    await Sorting.swap(i, i + 1);
                    swapped = true;
                }
            }

            end--;
            swapped = false;

            for (let i = end - 1; i > start; --i) {
                if (Sorting.compare(bars[i - 1], i)) {
                    yield* Sorting.reflect_state();
                    await Sorting.swap(i, bars[i - 1]);
                    swapped = true;
                }
            }

            start++;
        }

        return new Promise(resolve => {
            resolve(bars);
        });
    },
};
