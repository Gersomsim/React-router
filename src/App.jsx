import {HashRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import {HomePage} from "./HomePage.jsx";
import {BlogPage} from "./BlogPage.jsx";
import {ProfilePage} from "./ProfilePage.jsx";
import {Menu} from "./Menu.jsx";

function App() {

  return (
    <>
      <HashRouter>
          <Menu />
          <Routes>
              <Route path="/" element={<HomePage/>} />
              <Route path="/blog" element={<BlogPage/>} />
              <Route path="/profile" element={<ProfilePage/>} />
              <Route path="*" element={<p>Not Found</p>} />
          </Routes>
      </HashRouter>
    </>
  )
}

export default App
