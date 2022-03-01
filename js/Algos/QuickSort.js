class QuickSort {
    static valid(n) {
        return true;
    }

    static async run(left = 0, right = bars.length - 1) {
        if (left < right) {
            let p = left,
                i = left,
                j = right;
            while (i < j) {
                if (stop) return;
                while (Sorting.compare(bars[p], bars[i]) && i < j) {
                    i++;
                }

                while (!Sorting.compare(bars[p], bars[j])) {
                    j--;
                }

                if (i < j) {
                    await Sorting.swap(bars[i], bars[j]);
                }
            }
            await Sorting.swap(bars[p], bars[j]);
            await this.run(left, j - 1);
            await this.run(j + 1, right);
        }
        new Promise((resolve, reject) => {
            resolve(bars);
        });
    }
}
