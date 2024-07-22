import ROLES from "../config/roles";

export const AUTH = {
  BASE_PATH: "/auth",
  PAGES: {
    LOGIN: "login",
    FORGOT_PASSWORD: "forgot-password",
    RESET_PASSWORD: "reset-password",
    SUCCESS_RESET_PASSWORD: "reset-password-success",
  }
}

export const PRIVATE = {
  BASE_PATH: "/:userId",
  // ADMIN: {
  //   ADMIN_BASE_PATH: ROLES.ADMIN,
  //   SUPER_ADMIN_BASE_PATH: ROLES.SUPER_ADMIN,
  //   PAGES: {
  //     INDEX: "dashboard",
  //     DASHBOARD: "dashboard",
  //     SETTINGS: "settings",
  //     CHANGE_PASSWORD: "settings/change-password",
  //   }
  // },
  USER: {
    BASE_PATH: ROLES.ADMIN,
    PAGES: {
      INDEX: "home",
      HOME: "home",
      CART:"cart",
      PRODUCT:"product",
      SETTINGS: "settings",
    }
  }
}

export const ERROR = {
  ERROR_403: "/403",
  CATCH_ALL: "*",
};