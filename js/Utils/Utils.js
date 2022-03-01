/*
 * Retourne une chaine de caractère de l'algorithme
 * séléctionné
 */
function get_algo() {
    let algo = document.getElementsByClassName('checked')[0];
    return algo.innerHTML.replaceAll(' ', '');
}

/*
 * Récupère la description et complexité associé
 * à l'algorithme séléctionné et l'affiche dans container;
 */
function load_desc() {
    container.innerHTML = eval(`${get_algo()}.desc()`);
    let O = eval(`${get_algo()}.O()`);
    complexity.innerHTML = '';
    for (let el in O) {
        complexity.innerHTML += `
            <tr>
                <th>${el}</th>
                <td>${O[el]}</td>
            </tr>
        `;
    }
}

/*
 * - Réactive les bouttons
 * - Recharge les barres
 * - réinitialise les compteurs
 */
function reload_bars() {
    buttons({disable: false});
    B.reload();
    compare.innerHTML = 0;
    replace.innerHTML = 0;
}

/*
 * Active le bouton donnée en argument,
 * donne la classe checked
 */
function trigger_btn(btn) {
    for (let el of algos) {
        el.classList.remove('checked');
    }

    btn.classList.add('checked');
}

/*
 * Permet d'activer et désactiver les
 * bouttons de réglages (nombre de barres etc)
 */
function buttons({disable = true} = {}) {
    document.querySelectorAll('.dis').forEach((el) => {
        el.disabled = disable;
    });
    stop = !disable;
}

/*
 * Permet de sourcer un algorithme donné
 * ex: source(get_algo());
 */
function source(name) {
    let inc = document.createElement('script');
    inc.src = `js/Algos/${name}.js`;
    document.body.appendChild(inc);
}
