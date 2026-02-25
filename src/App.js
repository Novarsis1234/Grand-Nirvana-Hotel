import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactCreate from "./pages/contact/ContactCreate";
import HomeSection from "./pages/home/HomeSection";
import About from "./pages/about/About";
import AllRooms from "./pages/rooms/AllRooms";
import Parking from "./pages/parking/Parking";
import SwimmingPool from "./pages/swimmingpool/SwimmingPool";
import Banquet from "./pages/banquet/Banquet";
import Wedding from "./pages/wedding/Wedding";
import Restaurant from "./pages/restaurant/Restaurant";
import Staff from "./pages/staff/Staff";

import Gallery from "./pages/gallery/Gallery";
import RoomBookingForm from "./pages/rooms/RoomBookingForm";
import ScrollToTop from "./components/ScrollToTop";
import BanquetBookingForm from "./pages/banquet/BanquetBookingForm";
import WeddingBookingForm from "./pages/wedding/WeddingBookingForm";
import OrderParcel from "./pages/restaurant/OrderParcel";
import PrivacyPolicy from "./pages/termandcondition/PrivacyPolicy";
import RefundCancellationPolicy from "./pages/termandcondition/RefundCancellationPolicy";
import TermsAndConditions from "./pages/termandcondition/TermsAndConditions";
import Travel from "./pages/travel/Travel";


function App(){
  return(
    <BrowserRouter>
       <Navbar/>
       <ScrollToTop/>
      <Routes>
        <Route path="/" element={<HomeSection/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<ContactCreate/>}/>
        <Route path="/rooms" element={<AllRooms/>}/>
        <Route path="/parking" element={<Parking/>}/>
        <Route path="/swimmingpool" element={<SwimmingPool/>}/>
        <Route path="/banquet" element={<Banquet/>}/>
        <Route path="/wedding" element={<Wedding/>}/>
        <Route path="/restaurant" element={<Restaurant/>}/>
        <Route path="/staff" element={<Staff/>}/>
        <Route path="/tour" element={<Travel/>}/>
        <Route path="/booking" element={<RoomBookingForm/>}/>
        <Route path="/banquetbooking" element={<BanquetBookingForm/>}/>
        <Route path="/weddingbooking" element={<WeddingBookingForm/>}/>
        <Route path="/order-parcel" element={<OrderParcel/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
        <Route path="/refund-cancellation-policy" element={<RefundCancellationPolicy/>}/>
        <Route path="/terms-and-conditions" element={<TermsAndConditions/>}/>
        
        
      
      </Routes>
     <Footer/>
    </BrowserRouter>
  )
}

export default App;
