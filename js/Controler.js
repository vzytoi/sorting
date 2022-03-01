const desc = document.getElementById('desc'),
    complexity = document.getElementById('complexity'),
    algos = document.getElementsByClassName('algo'),
    navbar = document.querySelectorAll('#navbar li *'),
    container = document.getElementById('container');

let stop = false;

for (let el of navbar) window[el.id] = el;

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
    if (!valid_range(parseInt(range.value))) {
        range.value = search_valid_range();
        reload_bars(search_valid_range());
    }

    buttons({disable: true});
    eval(get_algo() + '.run()').then((val) => {
        let breaked = false;
        shuffle.addEventListener('click', () => {
            breaked = true;
        });
        setTimeout(() => {
            if (!breaked) {
                reload_bars();
            }
        }, 2500);
    });
};

shuffle.onclick = () => {
    reload_bars();
};

range.oninput = () => {
    while (range.value < container.childElementCount) {
        container.removeChild(container.lastChild);
    }
    if (range.value > container.childElementCount) {
        let sizes = [...container.children].map((x) => {
            parseFloat(x.style.height.slice(0, -1));
        });
        while (range.value > container.childElementCount) {
            let n;
            do {
                n = Math.random() * 100;
            } while (sizes.includes(n));
            sizes.push(n);
            B.element(n);
        }
    }
};
