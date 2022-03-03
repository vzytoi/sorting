class Sorting {
    static validate_bars(...bar) {
        for (let b of bar) {
            if (typeof b != 'object') {
                return false;
            }
        }
        return true;
    }

    static value(bar) {
        return parseFloat(window.getComputedStyle(bar).height);
    }

    static color(bar, colors) {
        if (typeof colors == 'string') {
            colors = new Array(bar.length).fill(colors);
            var tmp = bar.map((x) => window.getComputedStyle(x).backgroundColor);
        }

        for (let i = 0; i < bar.length; i++) {
            bar[i].style.background = colors[i];
        }

        if (tmp != undefined) {
            return tmp;
        }
    }

    static sleep() {
        return new Promise((resolve) => {
            setTimeout(resolve, speed_value);
        });
    }

    static async swap(a, b, both = true) {
        if (both) {
            if (this.validate_bars(a, b)) {
                [a.style.height, b.style.height] = [b.style.height, a.style.height];
                var changed = [a, b];
            }
        } else {
            if (this.validate_bars(a, b)) {
                a.style.height = b.style.height;
                var changed = [a];
            } else {
                a.style.height = b + 'px';
                var changed = [a];
            }
        }

        replace.innerHTML = parseInt(replace.innerHTML) + (both ? 2 : 1);

        let colors = this.color(changed, 'red');
        await this.sleep();
        this.color(changed, colors);
    }

    static compare(a, b) {
        compare.innerHTML = parseInt(compare.innerHTML) + 1;

        return this.value(a) >= this.value(b);
    }
}
