const Sorting = {
    validate_bars: (...bar) => {
        for (let b of bar) {
            if (typeof b != 'object') {
                return false;
            }
        }
        return true;
    },

    value: bar => {
        return parseFloat(window.getComputedStyle(bar).height);
    },

    color: (bar, colors) => {
        let base = 'rgb(66, 66, 66)',
            hover = 'rgb(97, 97, 97)';

        if (typeof colors == 'string') {
            colors = new Array(bar.length).fill(colors);
        } else if (!G.paused) {
            G.curr = {
                bars: bar,
                colors: colors,
            };
        }

        var tmp = bar.map(x =>
            Sorting.validate_bars(x)
                ? window.getComputedStyle(x).backgroundColor
                : null
        );

        for (let i = 0; i < bar.length; i++) {
            if (
                colors[i] != null &&
                Sorting.validate_bars(bar[i])
            ) {
                bar[i].style.background =
                    colors[i] == hover ? base : colors[i];
            }
        }

        return tmp;
    },

    sleep: () => {
        return new Promise(resolve => {
            setTimeout(
                resolve,
                Math.abs(speed.value - speed.max)
            );
        });
    },

    parse_index: args => {
        for (let i = 0; i < args.length; i++) {
            if (!Sorting.validate_bars(args[i])) {
                args[i] = bars[args[i]];
            }
        }
        return args;
    },

    complexity: (element, n) => {
        if (!G.stopped) {
            element.innerHTML = parseInt(element.innerHTML) + n;
            total.innerHTML = parseInt(total.innerHTML) + n;
        }
    },

    swap: async function (a, b, both = true) {
        [a, b] = Sorting.parse_index(Array.from(arguments));

        if (both) {
            if (Sorting.validate_bars(a, b)) {
                [a.style.height, b.style.height] = [
                    b.style.height,
                    a.style.height,
                ];
                var changed = [a, b];
            }
        } else {
            if (Sorting.validate_bars(a, b)) {
                a.style.height = b.style.height;
            } else {
                a.style.height = b + 'px';
            }
            var changed = [a];
        }

        this.complexity(replace, both ? 2 : 1);

        let colors = Sorting.color(changed, 'red');
        await Sorting.sleep();
        Sorting.color(changed, colors);
    },

    compare: function (a, b) {
        [a, b] = Sorting.parse_index(Array.from(arguments));
        if (Sorting.validate_bars(a, b)) {
            this.complexity(compare, 1);

            return Sorting.value(a) >= Sorting.value(b);
        } else return false;
    },

    reflect_state: function* () {
        pause: if (G.paused) {
            yield bars;
            break pause;
        }

        if (G.stopped) {
            throw new Error();
        }
    },
};
