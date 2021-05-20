export const quaggaConfig = {
    inputStream: {
        type: "LiveStream",
        constraints: {
            width: 640,
            height: 320,
            facingMode: "environment",
        },
    },
    locator: {
        halfSample: true,
        patchSize: "large", // x-small, small, medium, large, x-large
        debug: {
            showCanvas: true,
            showPatches: false,
            showFoundPatches: false,
            showSkeleton: false,
            showLabels: false,
            showPatchLabels: false,
            showRemainingPatchLabels: false,
            boxFromPatches: {
                showTransformed: true,
                showTransformedBox: true,
                showBB: true,
            },
        },
    },
    numOfWorkers: 4,
    decoder: {
        readers: ["code_128_reader"],
        debug: {
            drawBoundingBox: true,
            showFrequency: true,
            drawScanline: true,
            showPattern: true,
        },
    },
    locate: true,
};
