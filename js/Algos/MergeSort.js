window.MergeSort = {
    valid: () => {
        return true;
    },

    run: async (start = 0, end = bars.length) => {
        if (start >= end - 1) {
            return;
        }
        let mid = start + ~~((end - start) / 2),
            cache = Array(end - start).fill(bars[0]),
            k = mid;

        await MergeSort.run(start, mid);
        await MergeSort.run(mid, end);

        for (let i = start, r = 0; i < mid; r++, i++) {
            if (stop) {
                break;
            }
            while (k < end && Sorting.compare(bars[i], bars[k])) {
                cache[r] = Sorting.value(bars[k]);
                r++;
                k++;
            }
            cache[r] = Sorting.value(bars[i]);
        }

        for (let i = 0; i < k - start; i++) {
            if (stop) {
                return;
            }
            await Sorting.swap(bars[i + start], cache[i], false);
        }

        return new Promise((resolve) => {
            resolve(bars);
        });
    },
};
