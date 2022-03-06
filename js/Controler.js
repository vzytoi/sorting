'use strict';

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
        Utils.buttons({disable: false});
        __Bars.reload(n);
        delete G.generator;
    },

    buttons: ({disable = true} = {}) => {
        document.querySelectorAll('.dis').forEach(el => {
            el.disabled = disable;
        });
        G.stopped = !disable;
        G.paused = disable;
        [...document.getElementById('data').children].forEach(el => {
            el.firstChild.innerHTML = 0;
        });
        document.getElementById('run-icon').src = 'img/play.svg';
    },

    source: async name => {
        if (typeof name == 'object') {
            name = Utils.get_algo(name);
        }

        let inc = document.createElement('script');
        inc.src = `js/Algos/${name}.js`;
        document.body.appendChild(inc);

        return new Promise(resolve => {
            resolve();
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

let G = {
    stopped: false,
    paused: true,
    speed: Utils.calcSpeed(),
    count: 0,
    curr: {},
    generator: null,
};

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
    G.count++;

    if (G.generator == null) {
        if (!Utils.valid_range(range.value)) {
            const valid = (function () {
                let n = parseInt(range.value),
                    r = n + 1,
                    l = n - 1;
                while (!Utils.valid_range(r, l)) {
                    if (
                        n == range.max ||
                        Math.abs(n - r) >= Math.abs(n - l)
                    ) {
                        l--;
                    } else r++;
                }
                return Utils.valid_range(r) ? r : l;
            })();
            range.value = valid;
            Utils.reload_bars(valid);
        }

        Utils.buttons({disable: true});
    }

    if (G.paused) {
        if (G.generator != null) {
            Sorting.color(G.curr.bars, G.curr.colors);
        }

        G.generator ||= window[Utils.get_algo()].run();
        G.paused = false;

        G.generator
            .next()
            .then(status => {
                let current = G.count;
                setTimeout(() => {
                    if (
                        status.done &&
                        !G.stopped &&
                        current == G.count
                    ) {
                        Utils.reload_bars();
                    }
                }, 1000);
            })
            .catch(_ => {});
    } else {
        G.paused = true;
        Sorting.color(G.curr.bars, 'red');
    }

    document.getElementById('run-icon').src = `img/${
        G.paused ? 'play' : 'pause'
    }.svg`;
};

shuffle.onclick = () => {
    Utils.reload_bars();
};

speed.oninput = () => {
    G.speed = Utils.calcSpeed();
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
                n = __Bars.size();
            } while (sizes.includes(n));
            __Bars.element(n, !+(i % 2));
        }
    }
};
