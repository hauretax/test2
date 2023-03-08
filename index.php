<!DOCTYPE html>
<html>

<head>
    <link rel="apple-touch-icon" sizes="180x180" href="/public/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/public/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/public/favicon-16x16.png">
    <link rel="manifest" href="/public/site.webmanifest">
    <link rel="stylesheet" href="style/canvas.css">
</head>

<body>

    <div id='canvadiv'>
        <canvas id='warzone' width='1000' height='500'>

        </canvas>
    </div>
    <div class="option">
        <div class="range-slider">
            <span id="rs-bullet" class="rs-label">0</span>
            <input id="rs-range-line" class="rs-range" type="range" value="0" min="0" max="200">
        </div>
        <input type="button" value='reset' class='greenButton' id="resetButton" />
    </div>
    <div id='result'>
    </div>


    <script src='script/Canvahandler.js'></script>
    <script src='script/Circle.js'></script>
    <script src='script/slider.js'></script>
    <script src='script/clickGame.js'></script>