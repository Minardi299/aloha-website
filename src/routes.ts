import { index, route, type RouteConfig } from "@react-router/dev/routes"

export default [
  route(":lang?", "layout.tsx", [
    index("pages/home.tsx"),
    route("menu", "pages/menu.tsx"),
    route("terms", "pages/terms.tsx"),
    route("catering", "pages/catering.tsx"),
    route("*", "pages/not-found.tsx"),
  ]),
] satisfies RouteConfig
