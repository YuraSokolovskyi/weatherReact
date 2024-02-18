import './App.css';
import {Route, Routes} from "react-router-dom";
import News from "./pages/News";
import Weather from "./pages/Weather";
import Blog from "./pages/Blog";
import Layout from "./components/Layout";
import {AppProvider} from "./utils/context";
import NewsDetails from "./components/NewsDetails";

function App() {
    // f9393f4441314ea396fc87638e603ec7
    return (
        <AppProvider>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route path="news" element={<News/>}/>
                        <Route path="news/:title" element={<NewsDetails/>}/>
                        <Route path="weather" element={<Weather/>}/>
                        <Route path="blog" element={<Blog/>}/>
                        </Route>
                </Routes>
            </div>
        </AppProvider>
    )
}

export default App;
