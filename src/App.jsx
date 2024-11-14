import SortingChart from "./components/SortingChart";
import SortingProvider from "./contexts/SortingContext";

function App() {
    return (
        <SortingProvider>
            <div className="container mx-auto px-4"
             style={{
                backgroundImage: "url('')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}>

                <SortingChart />
            </div>
        </SortingProvider>
    );
}

export default App;
