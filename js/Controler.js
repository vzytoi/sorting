const container = document.getElementById('desc'),
    complexity = document.getElementById('complexity'),
    algos = document.getElementsByClassName('algo'),
    navbar = document.querySelectorAll('#navbar li *');

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
    reload_bars();
};
