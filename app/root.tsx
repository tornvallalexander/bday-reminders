import type {LoaderFunction, MetaFunction} from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration, useLoaderData,
} from "@remix-run/react";
import appStyles from "../styles/app.css"
import {getEnv} from "~/utils/env.server";
import {getDomainUrl} from "~/utils/misc";
import {json} from "@remix-run/node";

export function links() {
  return [
    {
      rel: "stylesheet",
      href: appStyles
    },
  ]
}

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Next-gen Birthday Reminders",
  viewport: "width=device-width,initial-scale=1",
});

export type LoaderData = {
  // user: User | null
  // userInfo: Await<ReturnType<typeof getUserInfo>> | null
  ENV: ReturnType<typeof getEnv>
  requestInfo: {
    origin: string
    path: string
    session: {
      email: string | undefined
      // theme: Theme | null
    }
  }
}

export const loader: LoaderFunction = ({request}) => {
  const data: LoaderData = {
    ENV: getEnv(),
    requestInfo: {
      origin: getDomainUrl(request),
      path: new URL(request.url).pathname,
      session: {
        email: undefined,
        // theme: themeSession.getTheme(),
      },
    }
  }

  return json(data)
}

export default function App() {
  const data = useLoaderData<LoaderData>()

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify(data.ENV)};`,
          }}
        />
        {ENV.NODE_ENV === 'development' ? <LiveReload /> : null}
      </body>
    </html>
  );
}
