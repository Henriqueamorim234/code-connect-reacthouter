import { BrowserRouter, Route, Routes } from "react-router";
import { Login } from "../pages/Login";
import { Logout } from "../pages/logout";
import { Register } from "../pages/Register";
import { BlogPost } from "../pages/BlogPost";
import { Feed } from "../pages/Feed";
import { AuthLayout } from "../layouts/Auth";
import { AppLayout } from "../layouts/App";
import { NotFound } from "../pages/NotFound";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="logout" element={<Logout />} />
        </Route>

        <Route path="/" element={<AppLayout />}>
          <Route path="blog-post/:slug" element={<BlogPost />} />
          <Route path="" element={<Feed />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
