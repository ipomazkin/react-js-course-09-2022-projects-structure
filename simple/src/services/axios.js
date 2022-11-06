import axiosLib from "axios";
import { appConfig } from "../config";

export const axios = axiosLib.create({
  baseURL: appConfig.api.baseUrl,
})

