window.BubbleSort = {
    valid: (n) => {
        return true;
    },

    run: async () => {
        let l = bars.length;
        for (let i = 0; i < l; i++) {
            for (let j = 0; j < l - 1; j++) {
                if (Sorting.compare(bars[j], bars[j + 1])) {
                    if (stop) {
                        break;
                    }
                    await Sorting.swap(bars[j], bars[j + 1]);
                }
            }
        }
        return new Promise((resolve) => {
            resolve(bars);
        });
    },
};
