class Sorting {
    static validBar(bar) {
        return typeof bar == 'object' && 'style' in bar;
    }

    static value(bar) {
        return parseFloat(window.getComputedStyle(bar).height);
    }

    static color(bars, color) {
        for (let b of bars) {
            if (b != undefined && this.validBar(b)) {
                b.style.background = color;
            }
        }
    }

    static calcSpeed() {
        return Math.abs(speed.value - speed.max);
    }

    static sleep(ms = null) {
        return new Promise((resolve) => {
            setTimeout(resolve, ms === null ? this.calcSpeed() : ms);
        });
    }

    static async swap(a, b, both = true) {
        if (a == undefined || b == undefined) {
            return false;
        }

        let changed;

        if (both) {
            if (this.validBar(a) && this.validBar(b)) {
                [a.style.height, b.style.height] = [b.style.height, a.style.height];
                changed = [a, b];
            }
        } else {
            if (this.validBar(b)) {
                a.style.height = b.style.height;
                changed = [a];
            } else {
                a.style.height = b;
                changed = [a];
            }
        }

        this.color(changed, 'red');
        await this.sleep();
        this.color(changed, 'grey');

        replace.innerHTML = parseInt(replace.innerHTML) + (both ? 2 : 1);
    }

    static compare(a, b) {
        if (a == undefined || b == undefined) return false;

        compare.innerHTML = parseInt(compare.innerHTML) + 1;
        return this.value(a) >= this.value(b);
    }
}
