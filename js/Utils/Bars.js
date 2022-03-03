class Bars {
    constructor(container, nb) {
        this.container = container;
        this.nb = nb;
    }

    element(height, append = true) {
        let div = document.createElement('div');
        div.style.height = height + '%';
        if (append) {
            this.container.append(div);
        } else this.container.prepend(div);
        sizes.push(height);
    }

    size() {
        return (Math.random() * 100).toFixed(2);
    }

    set(nb) {
        let n;
        for (let i = 0; i < nb; ++i) {
            do {
                n = this.size();
            } while (sizes.includes(n));
            this.element(n);
        }

        return this.container.children;
    }

    clear() {
        while (this.container.hasChildNodes()) {
            this.container.firstChild.remove();
        }
    }

    reload(nb) {
        sizes = [];
        this.clear();
        this.set(nb);
    }
}

let B = new Bars(container, range.value),
    sizes = [],
    bars = B.set(range.value);
