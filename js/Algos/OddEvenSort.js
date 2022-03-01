class OddEvenSort {
    static valid(n) {
        return true;
    }

    static async run() {
        let ok = false,
            n = bars.length;

        while (!ok) {
            ok = true;

            for (let i = 1; i <= n - 2; i += 2) {
                if (Sorting.compare(bars[i], bars[i + 1])) {
                    await Sorting.swap(bars[i], bars[i + 1]);
                    ok = false;
                }
                if (stop) return;
            }

            for (let i = 0; i <= n - 2; i += 2) {
                if (Sorting.compare(bars[i], bars[i + 1])) {
                    await Sorting.swap(bars[i], bars[i + 1]);
                    ok = false;
                }
                if (stop) return;
            }
        }

        new Promise((resolve, reject) => {
            resolve(bars);
        });
    }
}
