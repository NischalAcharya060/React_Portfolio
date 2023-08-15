import React, { useState, useEffect, lazy, Suspense } from "react";
import { BarLoader } from "react-spinners";

const Home = lazy(() => import("./pages/Home"));

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
                <div className="h-screen w-full flex flex-col items-center justify-center">
                    <h1 className="text-2xl font-semibold mb-4">
                        Nischal Acharya Portfolio Loading
                    </h1>
                    <BarLoader color="#f6c400" height={4} />
                </div>
            }
        >
            {loading ? (
                <div className="h-screen w-full flex flex-col items-center justify-center">
                    <h1 className="text-2xl font-semibold mb-4">
                        Nischal Acharya Portfolio Loading
                    </h1>
                    <BarLoader color="#f6c400" height={4} />
                </div>
            ) : (
                <Home />
            )}
        </Suspense>
    );
};

export default App;
