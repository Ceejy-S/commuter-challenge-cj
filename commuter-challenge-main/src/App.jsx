import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Page2 from './components/Page2';
import Form from './components/Form'

function App() {
return (
<Router>
<NavBar />
<Routes>
<Route path="/" element={<div>Home Page</div>} />
<Route path="/page2" element={<Page2 />} />
<Route path="/form" element={<Form/>} />
</Routes>
</Router>
);
}

export default App;
