import React, { useState } from "react";
import BarcodeReader from "react-barcode-reader";

export const BarcodeScanner = () => {
    const [result, setResult] = useState([]);
    const [error, setError] = useState(false);
    const handleScan = (data) => {
        setResult(data);
    };
    const handleError = (err) => {
        console.error(err);
        setError(err);
    };
    return (
        <>
            {error}
            <div>
                <BarcodeReader onError={handleError} onScan={handleScan} />
                <p>{result}</p>
            </div>
        </>
    );
};
