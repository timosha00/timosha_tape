import { Routes, Route, useLocation } from 'react-router-dom'
import Navigation from '../components/Navigation'
import About from '../components/About'
import About from '../components/Home'

function AllComponents(props) {
    const location = useLocation()
    return (
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Navigation />} >
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
            </Route>
        </Routes>
    );
}

export default AllComponents;
