import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from "./layouts/Main";
import { Search, Saved } from "./pages";
import { BarcodeScanner } from "./components/BarcodeScanner";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route element={<Main />}>
                        <Route path="/" element={<Search />} />
                        <Route
                            path="/barcode_scanner"
                            element={<BarcodeScanner />}
                        />
                        <Route path="/search" element={<Search />} />
                        <Route path="/saved" element={<Saved />} />
                        <Route path="*" element={<Search />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
