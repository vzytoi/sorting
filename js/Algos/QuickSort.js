window.QuickSort = {
    valid: _ => {
        return true;
    },

    run: async function* (left = 0, right = bars.length - 1) {
        if (left < right) {
            let p = left,
                i = left,
                j = right;
            while (i < j) {
                yield* Sorting.reflect_state();
                while (Sorting.compare(p, i) && i < j) {
                    i++;
                }

                while (!Sorting.compare(p, j)) {
                    j--;
                }

                if (i < j) {
                    await Sorting.swap(i, j);
                }
            }
            await Sorting.swap(p, j);
            yield* await QuickSort.run(left, j - 1);
            yield* await QuickSort.run(j + 1, right);
        }
        new Promise(resolve => {
            resolve(bars);
        });
    },
};
