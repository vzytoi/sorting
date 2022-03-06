window.HeapSort = {
    valid: _ => {
        return true;
    },

    heapRoot: async function* (len, b, i) {
        let l = 2 * i + 1,
            r = 2 * i + 2,
            max = i;

        if (l < len && Sorting.compare(b[l], b[max])) {
            max = l;
        }

        if (r < len && Sorting.compare(b[r], b[max])) {
            max = r;
        }

        yield* Sorting.reflect_state();

        if (max != i) {
            await Sorting.swap(b[i], b[max]);
            yield* await HeapSort.heapRoot(len, b, max);
        }
    },

    run: async function* () {
        let n = bars.length;

        for (let i = Math.floor(n / 2); i >= 0; --i) {
            yield* await HeapSort.heapRoot(n, bars, i);
        }

        for (let i = n - 1; i > 0; --i) {
            n--;

            yield* Sorting.reflect_state();
            await Sorting.swap(0, i);
            yield* await HeapSort.heapRoot(n, bars, 0);
        }
        return new Promise(resolve => {
            resolve(bars);
        });
    },
};
