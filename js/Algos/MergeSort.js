window.MergeSort = {
    valid: () => {
        return true;
    },

    run: async function* (start = 0, end = bars.length) {
        if (start >= end - 1) {
            return;
        }

        let mid = start + ~~((end - start) / 2);
        yield* await MergeSort.run(start, mid);
        yield* await MergeSort.run(mid, end);

        let m;

        for (let i = start; i < end; i++) {
            m = i;
            for (let j = i + 1; j < end; j++) {
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
