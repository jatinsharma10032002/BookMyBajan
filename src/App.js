import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import FinalDesign from "./pages/FinalDesign";
import LiveEvent from "./pages/LiveEvent";
import PerticularEventB from "./pages/PerticularEventB";
import LandingDesign from "./pages/LandingDesign";
import PerticularEvent from "./pages/PerticularEvent";
import SpeakersPage from "./pages/SpeakersPage";
import SignIn from "./pages/SignIn";
import EventListing1 from "./pages/EventListing";
import ProfilePage from "./pages/ProfilePage";
import SearchBar from "./pages/SearchBar";
import LogIn from "./pages/LogIn";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/live-event":
        title = "";
        metaDescription = "";
        break;
      case "/perticular-event-b":
        title = "";
        metaDescription = "";
        break;
      case "/landing-design-a-2":
        title = "";
        metaDescription = "";
        break;
      case "/perticular-event-a":
        title = "";
        metaDescription = "";
        break;
      case "/categories-page":
        title = "";
        metaDescription = "";
        break;
      case "/sign-in":
        title = "";
        metaDescription = "";
        break;
      case "/event-listing":
        title = "";
        metaDescription = "";
        break;
      case "/profile-page":
        title = "";
        metaDescription = "";
        break;
      case "/search-bar":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<FinalDesign />} />
      <Route path="/live-event" element={<LiveEvent />} />
      <Route path="/perticular-event-b" element={<PerticularEventB />} />
      <Route path="/landing-design-a-2" element={<LandingDesign />} />
      <Route path="/perticular-event-a" element={<PerticularEvent />} />
      <Route path="/categories-page" element={<SpeakersPage />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/event-listing" element={<EventListing1 />} />
      <Route path="/profile-page" element={<ProfilePage />} />
      <Route path="/search-bar" element={<SearchBar />} />
      <Route path="/login" element={<LogIn />} />
    </Routes>
  );
}
export default App;
