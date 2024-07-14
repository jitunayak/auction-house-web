import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import "@/index.css";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import React, { Suspense } from "react";

export const Route = createRootRoute({
  component: () => {
    const TanStackRouterDevtools =
      process.env.NODE_ENV === "production"
        ? () => null // Render nothing in production
        : React.lazy(() =>
            // Lazy load in development
            import("@tanstack/router-devtools").then((res) => ({
              default: res.TanStackRouterDevtools,
              // For Embedded Mode
              // default: res.TanStackRouterDevtoolsPanel
            }))
          );

    return (
      <>
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
          <Outlet />
          <Toaster />
          <Suspense>
            <TanStackRouterDevtools />
          </Suspense>
        </ThemeProvider>
      </>
    );
  },
});
