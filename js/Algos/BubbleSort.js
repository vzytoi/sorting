window.BubbleSort = {
    valid: _ => {
        return true;
    },

    run: async function* () {
        let l = bars.length;
        for (var i = 0; i < l; i++) {
            for (var j = 0; j < l - 1; j++) {
                if (Sorting.compare(j, j + 1)) {
                    yield* Sorting.reflect_state();
                    await Sorting.swap(j, j + 1);
                }
            }
        }
        return new Promise(resolve => {
            resolve(bars);
        });
    },
};
