const algos = document.getElementsByClassName('algo'),
    navbar = document.querySelectorAll('#navbar li *'),
    container = document.getElementById('container');

let stop = false,
    speed_value = calcSpeed(),
    count = 0;

for (let el of navbar) {
    window[el.id] = el;
}

for (let algo of algos) {
    source(algo.innerHTML.replaceAll(' ', ''));
}

window.onload = () => {
    // load_desc();
    for (let algo of algos) {
        algo.onclick = () => {
            trigger_btn(algo);
            // load_desc();
            if (run.disabled) reload_bars();
        };
    }
};

run.onclick = () => {
    count++;

    if (!valid_range(range.value)) {
        let valid = search_valid_range();

        range.value = valid;
        reload_bars(valid);
    }

    buttons({disable: true});
    eval(get_algo() + '.run()').then(() => {
        let current = count;
        setTimeout(() => {
            if (!stop && current == count) {
                reload_bars();
            }
        }, 1000);
    });
};

shuffle.onclick = () => {
    reload_bars();
};

speed.oninput = () => {
    speed_value = calcSpeed();
};

range.oninput = () => {
    while (range.value < container.childElementCount) {
        container.removeChild(container.lastChild);
        container.removeChild(container.firstChild);
        sizes.splice(-2);
    }
    if (range.value > container.childElementCount) {
        while (range.value > container.childElementCount) {
            for (let i = 0; i < parseInt(range.step); i++) {
                let n;
                do {
                    n = parseFloat((Math.random() * 100).toFixed(2));
                } while (sizes.includes(n));
                sizes.push(n);
                B.element(n, i % 2 == 0);
            }
        }
    }
};
