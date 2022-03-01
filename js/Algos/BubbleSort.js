class BubbleSort {
    static valid(n) {
        return true;
    }

    static async run() {
        let l = bars.length;
        for (let i = 0; i < l; i++) {
            for (let j = 0; j < l - 1; j++) {
                if (Sorting.compare(bars[j], bars[j + 1])) {
                    if (stop) {
                        break;
                    }
                    await Sorting.replace(bars[j], bars[j + 1]);
                }
            }
        }
        new Promise((resolve, reject) => {
            resolve(bars);
        });
    }

    static desc() {
        return `
            Bubble Sort est un algorithme de tri itératif qui tient son nom
            du mouvement des boulles dans de l'eau. Les plus grosses bulles qui
            sont ici les élément de donnés atteignent en premier la surface.
            L'algorithme conciste à comparer répétitivement les éléments consécutifs
            d'une structure de donnée et à les permutter lorsque ceux-ci sont mal ordonnés.
            Le Bubble Sort (ou Tri à bulles) est l'algorithme de tri le plus connu car l'un
            des plus simples mais est très lent, il n'est donc jamais utilisé en pratique.
        `;
    }

    static O() {
        return {
            'Average Complexity': 'O(n²)',
            'Best Case': 'O(n)',
            'Worst Case': 'O(n²)',
            'Space Complexity': 'O(1)',
        };
    }
}
