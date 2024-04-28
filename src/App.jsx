import React, { useState, useEffect, lazy, Suspense } from "react";
import { BarLoader } from "react-spinners";
import AnimatedCursor from "react-animated-cursor";
import Home from "./pages/Home";

const App = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <Suspense
            fallback={
                <LoadingIndicator message="Nischal Acharya Portfolio Loading" />
            }
        >
            {loading ? (
                <LoadingIndicator message="Nischal Acharya Portfolio Loading" />
            ) : (
                <Home/>
            )}
            <div className="App">
                <AnimatedCursor/>
            </div>
        </Suspense>
    );
};

const LoadingIndicator = ({ message }) => (
    <div className="h-screen w-full flex flex-col items-center justify-center">
        <h1 className="text-2xl font-semibold mb-4">{message}</h1>
        <BarLoader color="rgb(109 40 217)" height={4} />
    </div>
);

export default App;
