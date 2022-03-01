class CombSort {
    static async run() {
        let gap = bars.length,
            n = bars.length,
            swapped = true;

        while (gap != 1 || swapped) {
            gap = parseInt((gap * 10) / 13, 10);
            gap = gap < 1 ? 1 : gap;
            swapped = false;
            for (let i = 0; i < n - gap; ++i) {
                if (Sorting.compare(bars[i], bars[i + gap])) {
                    await Sorting.replace(bars[i], bars[i + gap]);
                    swapped = true;
                }
                if (stop) return;
            }
        }

        new Promise((resolve, reject) => {
            resolve(bars);
        });
    }
}
