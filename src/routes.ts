import { index, layout, route, type RouteConfig } from "@react-router/dev/routes"

export default [
  layout("layout.tsx", [
    index("pages/home.tsx"),
    route("terms", "pages/terms.tsx"),
    route("catering", "pages/catering.tsx"),
    route("*", "pages/not-found.tsx"),
  ]),
] satisfies RouteConfig
