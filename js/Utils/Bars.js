class Bars {
    constructor(container, nb) {
        this.container = container;
        this.nb = nb;
    }

    element(height) {
        let div = document.createElement('div');
        div.style.height = height + '%';
        this.container.appendChild(div);
    }

    set(nb) {
        let h = [],
            n;
        for (let i = 0; i < nb; ++i) {
            do {
                n = Math.random() * 100;
            } while (h.includes(n));
            h.push(n);
            this.element(n);
        }
        return this.container.children;
    }

    clear() {
        while (this.container.firstChild) {
            this.container.firstChild.remove();
        }
    }

    reload(nb) {
        this.clear();
        this.set(nb);
    }
}

let B = new Bars(container, range.value),
    bars = B.set(range.value);
