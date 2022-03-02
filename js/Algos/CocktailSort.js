class CocktailSort {
    static valid(n) {
        return true;
    }

    static async run() {
        let start = 0,
            end = bars.length,
            swapped = true;

        while (swapped) {
            swapped = false;
            for (let i = start; i < end - 1; ++i) {
                if (Sorting.compare(bars[i], bars[i + 1])) {
                    await Sorting.swap(bars[i], bars[i + 1]);
                    swapped = true;
                    if (stop) return;
                }
            }

            end--;
            if (!swapped) break;
            if (stop) return;
            swapped = false;

            for (let i = end - 1; i > start; --i) {
                if (Sorting.compare(bars[i - 1], bars[i])) {
                    await Sorting.swap(bars[i], bars[i - 1]);
                    swapped = true;
                    if (stop) return;
                }
            }

            start++;
        }

        new Promise((resolve, reject) => {
            resolve(bars);
        });
    }
}
