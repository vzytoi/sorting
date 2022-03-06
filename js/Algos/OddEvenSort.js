window.OddEvenSort = {
    valid: _ => {
        return true;
    },

    run: async function* () {
        let ok = false,
            n = bars.length;

        while (!ok) {
            ok = true;

            for (let i = 1; i <= n - 2; i += 2) {
                if (Sorting.compare(i, i + 1)) {
                    await Sorting.swap(i, i + 1);
                    ok = false;
                }
                yield* Sorting.reflect_state();
            }

            for (let i = 0; i <= n - 2; i += 2) {
                if (Sorting.compare(i, i + 1)) {
                    await Sorting.swap(i, i + 1);
                    ok = false;
                }
                yield* Sorting.reflect_state();
            }
        }

        return new Promise(resolve => {
            resolve(bars);
        });
    },
};
