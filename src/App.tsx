import './App.css'
import { ThemeProvider } from "@/components/ui/ThemeProvider"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/pages/MainPage/MainPage';
function App() {

  return (
    <>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
    </>
  )
}

export default App
