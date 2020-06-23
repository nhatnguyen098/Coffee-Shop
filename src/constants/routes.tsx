import React, { lazy, Suspense } from "react";
import Loading from '../components/atoms/loading'
const HomePage = lazy(() => import("../containers/home"));
const LoginPage = lazy(() => import("../containers/login"));
const AboutPage = lazy(() => import("../containers/about"));
const ProductList = lazy(() => import("../containers/productList"));
const ProductDetail = lazy(() => import("../containers/productDetail"));
const NotFound = lazy(() => import("../containers/notFound"));
const UserProfile = lazy(() => import("../containers/userProfile"));
const ServicesCoffee = lazy(() => import("../containers/serviceCoffee"));
const Contact = lazy(() => import("../containers/contact"));
const SignUp = lazy(() => import("../containers/signUp"));
interface IRoutes {
  match: any;
  history: any;
}
export const NavbarMenu = [
  {
    id: 1,
    path: "/",
    label: "Home",
    exact: true,
    children: [],
    private:false,
    main: () => (
      <Suspense fallback={<Loading/>}>
        <HomePage />
      </Suspense>
    ),
  },
  {
    id: 2,
    path: "/product",
    label: "Coffee",
    exact: true,
    children: [],
    private:false,
    main: (routes: IRoutes) => (
      <Suspense fallback={<Loading/>}>
        <ProductList  />
      </Suspense>
    ),
  },
  {
    id: 3,
    label:'Service',
    path: "/services",
    exact: true,
    children: [],
    private:false,
    main: (routes: IRoutes) => (
      <Suspense fallback={<Loading/>}>
        <ServicesCoffee />
      </Suspense>
    ),
  },
  {
    id: 4,
    path: "/about",
    label: "About",
    exact: true,
    children: [],
    private:false,
    main: (routes: IRoutes) => (
      <Suspense fallback={<Loading/>}>
        <AboutPage />
      </Suspense>
    ),
  },
  {
    id: 5,
    path: "/contact",
    label: "Contact",
    exact: true,
    children: [],
    private:false,
    main: (routes: IRoutes) => (
      <Suspense fallback={<Loading/>}>
        <Contact />
      </Suspense>
    ),
  },
  {
    id: 6,
    label:'Login',
    path: "/login",
    exact: true,
    children: [],
    private:false,
    main: (routes: IRoutes) => (
      <Suspense fallback={<Loading/>}>
        <LoginPage match={routes.match} history={routes.history} />
      </Suspense>
    ),
  },
  {
    id: 7,
    path: "/product/:id",
    exact: true,
    children: [],
    private:false,
    main: (routes: IRoutes) => (
      <Suspense fallback={<Loading/>}>
        <ProductDetail />
      </Suspense>
    ),
  },
  {
    id: 8,
    path: "/userProfile",
    exact: true,
    children: [],
    private:true,
    main: (routes: IRoutes) => (
      <Suspense fallback={<Loading/>}>
        <UserProfile match = {routes.match} history = {routes.history}/>
      </Suspense>
    ),
  },
  {
    id: 9,
    path: "/SignUp",
    label: 'SignUp',
    exact: true,
    children: [],
    private:false,
    main: (routes: IRoutes) => (
      <Suspense fallback={<Loading/>}>
        <SignUp/>
      </Suspense>
    ),
  },
  {
    id: -1,
    path: "",
    exact: false,
    children: [],
    private:false,
    main: () => (
      <Suspense fallback={<Loading/>}>
        <NotFound />
      </Suspense>
    ),
  },
];