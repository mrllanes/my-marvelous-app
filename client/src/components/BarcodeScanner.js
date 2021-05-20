import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Quagga from "quagga";
import { Fab, TextareaAutosize, Paper } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import { quaggaConfig } from "../config/quagga";
export const BarcodeScanner = () => {
    const [results, setResults] = useState([]);
    const [error, setError] = useState();
    const [scanning, setScanning] = useState(false);
    const barcodeRef = useRef(null);

    const handleDetected = (result) => {
        console.log(result);
        setResults([...result]);
    };
    const startQuagga = () => {
        Quagga.init(quaggaConfig, (err) => {
            if (err) {
                setError(err);
                return console.log(err);
            }
            setScanning(true);
            Quagga.start();
        });
        Quagga.onDetected(handleDetected);
        Quagga.offDetected(handleDetected);
    };
    return (
        <div>
            <Link to="/">
                <Fab style={{ marginRight: 10 }} color="secondary">
                    <ArrowBack />
                </Fab>
            </Link>
            <span>Barcode Scanner</span>
            <button type="button" onClick={startQuagga}>
                Scan Barcode
            </button>
            <Paper
                variant="outlined"
                style={{ marginTop: 30, width: 640, height: 320 }}
            >
                <div id="interactive" className="viewport" />
            </Paper>
            <TextareaAutosize
                style={{
                    fontSize: 32,
                    width: 320,
                    height: 100,
                    marginTop: 30,
                }}
                rowsMax={4}
                defaultValue={"No data scanned"}
                value={
                    results[0] ? results[0].codeResult.code : "No data scanned"
                }
            />
        </div>
    );
};
