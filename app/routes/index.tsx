import type {UserResponse} from "~/types";
import type {LoaderFunction} from "@remix-run/node";
import {getUser} from "~/utils/session.server";
import {useLoaderData} from "@remix-run/react";
import {json} from "@remix-run/node";


type LoaderData = {
  user: UserResponse | undefined;
}

export const loader: LoaderFunction = async ({request}) => {
  const user = await getUser({ id: 1 })

  const data: LoaderData = {
    user: user
  }

  return json(data)
}

export default function Index() {
  const data = useLoaderData<LoaderData>()
  console.log(data)
  return (
    <div>
      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
