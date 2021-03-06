<!DOCTYPE html>
<html lang="fr">

<head>
    <title>Cyprien Henner</title>
    <link rel="stylesheet" href="css/main.css" />
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="img/favicon.svg" />
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-M5KY37Z3X5"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());

        gtag('config', 'G-M5KY37Z3X5');
    </script>
</head>

<body>
    <nav id="global-navbar">
        <ul>
            <li>
                <button id="run" class="btn">
                    <img id="run-icon" src="img/play.svg"></img>
                </button>
            </li>
            <li>
                <button id="shuffle" class="btn">Shuffle</button>
            </li>
            <li>
                <label for="range">Size</label>
                <input min="5" type="range" value="100" step="2" max="256" class="dis" id="range" />
            </li>
            <li>
                <label for="speed">Speed</label>
                <input min="1" type="range" value="70" max="100" id="speed" />
            </li>
        </ul>
        <ul id="data">
            <li><span id="compare">0</span> Comparisons</li>
            <li><span id="replace">0</span> Swaps</li>
            <li><span id="total">0</span> Total</li>
        </ul>
    </nav>
    <nav id="navbar-algo">
        <ul>
            <li class="algo">Heap Sort</li>
            <li id="checked" class="algo">Merge Sort</li>
            <li class="algo">Bubble Sort</li>
            <li class="algo">Quick Sort</li>
            <li class="algo">Selection Sort</li>
            <li class="algo">Cocktail Sort</li>
            <li class="algo">Insertion Sort</li>
            <li class="algo">Comb Sort</li>
            <li class="algo">Bitonic Sort</li>
            <li class="algo">Odd Even Sort</li>
        </ul>
    </nav>
    <main id="container"></main>

    <script src="js/Utils/Bars.js"></script>
    <script src="js/Utils/Sorting.js"></script>
    <script src="js/Controler.js"></script>
</body>

</html>
