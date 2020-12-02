/* Auth */
export interface IUserLogin {
  username: string
  password: string
}

export interface IUserRegister {
  username: string
  password: string
  repeatedPassword: string
}

/* Todos */
export interface ITodosGet {
  token: string
}

export interface ITodosAdd {
  token: string
  title: string
  description: string
}

export interface ITodosSetState {
  token: string
  id: string
  done: boolean
}

export interface ITodosDelete {
  token: string
  id: string
}

export interface ITodosDeleteDone {
  token: string
}

/* Theme */
export interface IThemeGet {
  token: string
}

export interface IThemeSetBg {
  token: string
  bg: string
}

export interface IThemeSetDarkMode {
  token: string
  darkMode: boolean
}
