import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing, Register, Error, ProtectedRoute } from "./pages";
import {
  AllMedicines,
  AddMedicine,
  SharedLayout,
  Profile,
  Stats,
  Apointment,
} from "./pages/dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Stats />} />
          <Route path="appointment" element={<Apointment />} />
          <Route path="add-medicine" element={<AddMedicine />} />
          <Route path="all-medicines" element={<AllMedicines />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
