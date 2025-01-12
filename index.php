<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Doğum Günün Kutlu Olsun, RootChem!</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <div class="cake">
            <div id="flame-1" class="flame"></div>
            <div id="flame-2" class="flame"></div>
            <div id="flame-3" class="flame"></div>
            <div class="cake-buttons">
                <button onclick="blowCandles()">Üfle</button>
                <button onclick="lightCandles()">Yak</button>
            </div>
        </div>
        <h1>Doğum Günün Kutlu Olsun, RootChem! 🎉</h1>
        <p>Nice mutlu, sağlıklı ve başarılı yıllara! 🥳</p>
        <div class="buttons">
            <button onclick="openWishBox()">Dilek Tut 🎂</button>
            <button id="replay-button" onclick="replay()">Tekrar Kutla 🎉</button>
        </div>
    </div>

    <!-- Dilek Kutusu -->
    <div id="wish-box" class="wish-box hidden">
        <h2>Dilek Tut 🪄</h2>
        <textarea id="wish-input" placeholder="Dileğini buraya yaz..."></textarea>
        <div class="wish-buttons">
            <button onclick="saveWish()">Dileği Kaydet</button>
            <button onclick="closeWishBox()">Vazgeç</button>
        </div>
        <p id="wish-display"></p>
    </div>

    <!-- Konfeti Canvas -->
    <canvas id="confetti-canvas"></canvas>

    <script src="script.js"></script>
</body>
</html>
