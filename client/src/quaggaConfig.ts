const QuaggaConfig = {
    inputStream: {
        type: 'LiveStream',
        constraints: {
        width: 640,
        height: 480,
        facingMode: 'environment', // or 'user' for front camera
        },
    },
    decoder: {
      readers: ['ean_reader', 'upc_reader', 'code_128_reader'], // Specify the barcode formats you want to scan
    },
};

export default QuaggaConfig;