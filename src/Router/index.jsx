import { BrowserRouter, Route, Routes } from "react-router";
import { Login } from "../pages/Login";
import { Logout } from "../pages/logout";
import { Register } from "../pages/Register";
import { BlogPost } from "../pages/BlogPost";
import { ProtectedRoute } from "../components/ProtectedRoute";
import { Feed } from "../pages/Feed";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth">
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="logout" element={<Logout />} />
        </Route>

        <Route path="/">
          <Route
            path=":slug"
            element={
              <ProtectedRoute>
                <BlogPost />
              </ProtectedRoute>
            }
          />
          <Route
            path=""
            element={
              <ProtectedRoute>
                <Feed />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
