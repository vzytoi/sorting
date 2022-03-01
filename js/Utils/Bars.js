class Bars {
    constructor(container, nb) {
        this.container = container;
        this.nb = nb;
    }

    element(height, bnb) {
        let div = document.createElement('div');
        div.style.height = (height * 100) / bnb + '%';
        this.container.appendChild(div);
    }

    set(nb) {
        let h = [],
            n;
        for (let i = 0; i < nb; ++i) {
            do {
                n = Math.random() * nb + 1;
            } while (h.includes(n));
            h.push(n);
            this.element(n, range.value);
        }
        return this.container.children;
    }

    clear() {
        while (this.container.firstChild) {
            this.container.firstChild.remove();
        }
    }

    reload(nb = range.value) {
        this.clear();
        this.set(nb);
    }
}

let B = new Bars(container, range.value),
    bars = B.set(range.value);
