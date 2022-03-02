class MergeSort {
    static valid() {
        return true;
    }

    static async run(start = 0, end = bars.length) {
        if (start >= end - 1) return;
        var mid = start + ~~((end - start) / 2);

        await this.run(start, mid);
        await this.run(mid, end);

        var cache = Array(end - start).fill(bars[0]);
        var k = mid;

        for (var i = start, r = 0; i < mid; r++, i++) {
            if (stop) return;
            while (k < end && Sorting.compare(bars[i], bars[k])) {
                cache[r] = Sorting.value(bars[k]);
                r++;
                k++;
            }
            cache[r] = Sorting.value(bars[i]);
        }

        for (var i = 0; i < k - start; i++) {
            if (stop) return;
            await Sorting.swap(bars[i + start], cache[i], false);
        }

        new Promise((resolve, reject) => {
            resolve(bars);
        });
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
