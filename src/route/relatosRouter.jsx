import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "../views/Home"
import Landing from "../views/Landing"
import BookDescription from "../components/BookDescription/BookDescription"
import BookPage from "../views/BookPage"
import Checkout from "../views/Checkout"

function relatosRouter()  {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/home" element={<Home />} />
                <Route path="/book/:isbn" element={<BookPage />} />
                <Route path="/checkout" element={<Checkout />} />
            </Routes>
        </BrowserRouter>
    )
}

export default relatosRouter