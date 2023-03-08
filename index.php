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
    <?php

    $url = $_SERVER['REQUEST_URI'];
    // var_dump($url);
    if ($url == '/click') {
        require('./pages/click.php');
        die();
    }
    ?>
    <a href='/click'>
        <div>
            game click
        </div>
    </a>
</body>