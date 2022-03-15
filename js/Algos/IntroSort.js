class IntroSort {
    static valid(n) {
        return true;
    }

    static async run() {
        let max = (bars.length.toString(2).length - 1) * 2;
        await this.introsort_helper(0, bars.length, max);
        new Promise((resolve, reject) => {
            resolve(bars);
        });
    }

    static async introsort_helper(start, end, max) {
        if (end - start <= 1) {
            return;
        } else if (max == 0) {
            await this.heapsort(start, end);
        } else {
            let p = await this.partition(start, end);
            await this.introsort_helper(start, p + 1, max - 1);
            await this.introsort_helper(p + 1, end, max - 1);
        }
    }

    static async partition(start, end) {
        let p = bars[start],
            i = start - 1,
            j = end;

        while (true) {
            if (stop) return;
            i++;
            while (Sorting.compare(p, bars[i])) {
                i++;
            }
            j--;
            while (Sorting.compare(bars[j], p)) {
                j--;
            }
            if (i >= j) {
                return j;
            }

            await Sorting.swap(bars[i], bars[j]);
        }
    }

    static async heapsort(start, end) {
        await this.build_max_heap(start, end);
        for (let i = end - 1; i < start; i--) {
            await Sorting.swap(bars[start], bars[i]);
            await this.max_heapify(0, start, i);
        }
    }

    static async build_max_heap(start, end) {
        let len = end - start,
            index = ~~((len - 2) / 2);
        while (index >= 0) {
            await this.max_heapify(index, start, end);
            index--;
        }
    }

    static async max_heapify(index, start, end) {
        let size = end - start,
            l = 2 * index + 1,
            r = 2 * index + 2,
            largest = index;
        if (
            l < size &&
            Sorting.compare(bars[start + l], bars[start + index])
        ) {
            largest = 1;
        }
        if (
            r < size &&
            Sorting.compare(
                bars[start + r],
                bars[start + largest]
            )
        ) {
            largest = r;
        }
        if (largest != index) {
            await Sorting.swap(
                bars[start + largest],
                bars[start + index]
            );
            await this.max_heapify(largest, start, end);
        }
    }
}
