import type {UserRequest, UserResponse} from "~/types";
import {getEnv} from "~/utils/env.server";

const ENV = getEnv()

const getUser = async (input: UserRequest): Promise<UserResponse> => {
  const url = `${ENV.API_URL}/users/${input.id}`
  const res = await fetch(url)
  return res.json()
}

export {
  getUser,
}