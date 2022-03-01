class MergeSort {
    static valid() {
        return true;
    }

    static async run() {
        let g = 2,
            c = 0,
            s = false,
            n = bars.length;

        while (true) {
            while (c < n) {
                if (stop) return;
                if (bars[c + g] == undefined) {
                    await MergeSort.flatMerge(c, n);
                } else {
                    await MergeSort.flatMerge(c, c + g);
                }
                c += g;
            }

            c = 0;

            if (g * 2 > n) {
                g = n;
                if (s) break;
                s = true;
            } else {
                g *= 2;
            }
        }

        new Promise((resolve, reject) => {
            resolve(bars);
        });
    }

    static async flatMerge(low, high) {
        let seq = [...bars].slice(low, high),
            n = seq.length,
            t;

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n - 1; j++) {
                t = low + j;
                if (Sorting.compare(bars[t], bars[t + 1])) {
                    await Sorting.swap(bars[t], bars[t + 1]);
                }
                if (stop) return;
            }
        }
    }

    static desc() {
        return `
            Le Merge Sort, ou Tri fusion est un algorithme de tri inventé
            par le mathématicien américain John von Neumann en 1945.
            L'algorithme est basé sur la technique diviser pour régner
            ce qui signifie diviser un problème en sous-problèmes, les
            résoudre et combiner les résultats pour obtenir la solution au
            problème initial. Il peut être implémenté de manière itérative ou
            récursives en utilisant respectivement les algorithmes Top-Down et
            Bottom-Up. Son fonctionnement est le suivant: L'algorithme divise la structure
            de données de manière récursive jusqu'à ce que chacune des
            subdivisions obtenues ne contienne qu’un unique élément. Puis, les sous-séquences
            sont fusionnées et ordonnées séquentiellement en construisant progressivement la sous-liste
            triée en ajoutant l’élément le plus petit des deux séquences
            non triées. Le tri fusion est considéré efficace car il
            possède une complexité linéarithmique et est à l’origine de l’algorithme
            de tri Timsort qui est l’algorithme standard de tri utilisé
            par Python depuis la version 2.3.
        `;
    }

    static O() {
        return {
            'Average Complexity': 'O(n × log n)',
            'Best Case': 'O(n × log n)',
            'Worst Case': 'O(n × log n)',
            'Space Complexity': 'O(n)',
        };
    }
}
