import type {ReminderRequest, ReminderResponse, UserRequest, UserResponse} from "~/types";
import {getEnv} from "~/utils/env.server";

const ENV = getEnv()

const getUser = async (input: UserRequest): Promise<UserResponse> => {
  const url = `${ENV.API_URL}/users/${input.id}`
  const res = await fetch(url)
  return res.json()
}

const getReminder = async (input: ReminderRequest): Promise<ReminderResponse> => {
  const url = `${ENV.API_URL}/reminders/${input.id}`
  const res = await fetch(url)
  return {
    ...await res.json(),
    status: res.status
  }
}

export {
  getUser,
  getReminder,
}