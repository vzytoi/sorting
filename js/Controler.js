const algos = document.getElementsByClassName('algo'),
    navbar = document.querySelectorAll('#navbar li *'),
    container = document.getElementById('container');

for (let el of navbar) {
    window[el.id] = el;
}

const Utils = {
    get_algo: (algo = false) => {
        if (!algo) {
            algo = document.getElementById('checked');
        }
        return algo.innerHTML.replaceAll(' ', '');
    },

    reload_bars: (n = range.value) => {
        B.reload(n);
        Utils.buttons({disable: false});
        replace.innerHTML = 0;
        compare.innerHTML = 0;
    },

    buttons: ({disable = true} = {}) => {
        document.querySelectorAll('.dis').forEach((el) => {
            el.disabled = disable;
        });
        stop = !disable;
    },

    source: async (name) => {
        if (typeof name == 'object') {
            name = Utils.get_algo(name);
        }
        let inc = document.createElement('script');
        inc.src = `js/Algos/${name}.js`;
        document.body.appendChild(inc);

        return new Promise((resolve) => {
            resolve(inc);
        });
    },

    valid_range: (...ns) => {
        let algo = Utils.get_algo(),
            c = 0;
        for (let n of ns) {
            if (!window[algo].valid(n)) {
                c++;
            }
        }
        return c != ns.length;
    },

    calcSpeed: () => {
        return Math.abs(speed.value - speed.max);
    },
};

let stop = false,
    speed_value = Utils.calcSpeed(),
    count = 0;

for (let algo of algos) {
    Utils.source(algo).then(() => {
        algo.onclick = () => {
            for (let el of algos) {
                el.removeAttribute('id');
            }
            algo.setAttribute('id', 'checked');
            if (run.disabled) {
                Utils.reload_bars();
            }
        };
    });
}

run.onclick = () => {
    count++;

    if (!Utils.valid_range(range.value)) {
        let valid = (function () {
            let n = parseInt(range.value),
                r = n + 1,
                l = n - 1;
            while (!Utils.valid_range(r, l)) {
                if (n == range.max || Math.abs(n - r) >= Math.abs(n - l)) {
                    l--;
                } else r++;
            }
            return Utils.valid_range(r) ? r : l;
        })();

        range.value = valid;
        Utils.reload_bars(valid);
    }

    Utils.buttons({disable: true});
    window[Utils.get_algo()].run().then(() => {
        let current = count;
        setTimeout(() => {
            if (!stop && current == count) {
                Utils.reload_bars();
            }
        }, 1000);
    });
};

shuffle.onclick = () => {
    Utils.reload_bars();
};

speed.oninput = () => {
    speed_value = Utils.calcSpeed();
};

range.oninput = () => {
    while (range.value < bars.length) {
        container.removeChild(container.lastChild);
        container.removeChild(container.firstChild);
        sizes.splice(-2);
    }
    while (range.value > bars.length) {
        for (let i = 0; i < range.step; i++) {
            let n;
            do {
                n = B.size();
            } while (sizes.includes(n));
            B.element(n, i % 2 == 0);
        }
    }
};
