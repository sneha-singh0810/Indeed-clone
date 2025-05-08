import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import AllPosts from './pages/AllPosts';
import { routePath } from './routes/route';

function App() {
  return (
    <Router>
        <Routes>
            <Route path={routePath.home} element={<Home/>} />
            <Route path={routePath.create} element={<CreatePost />} />
            <Route path ={routePath.posts} element={<AllPosts/>}/>
        </Routes>
    </Router>
  );
}

export default App;
