// Initialize QuaggaJS
Quagga.init({
    inputStream: {
        name: "Live",
        type: "LiveStream",
        target: document.querySelector("#qr-scanner"),
        constraints: {
            width: 640,
            height: 480,
            facingMode: "environment",
        },
    },
    decoder: {
        readers: ["code_128_reader", "ean_reader", "ean_8_reader", "code_39_reader", "code_39_vin_reader", "codabar_reader", "upc_reader", "upc_e_reader", "i2of5_reader", "2of5_reader", "code_93_reader"],
    },
}, function (err) {
    if (err) {
        console.error("Error initializing Quagga:", err);
        return;
    }
    Quagga.start();
});
