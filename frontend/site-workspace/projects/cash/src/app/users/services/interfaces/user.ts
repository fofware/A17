
export interface account {
  id: string;
  logo: string;
  name: string;
  wapp: string;
  site?: string;
}

export interface ResponseUser {
  url: string;
  limit: number;
  offset: number;
  nextOffset: number | boolean;
  sort: {};
  count: number;
  apiTime: number;
  filter: {};
  message: string;
  rows?: User[];
}

export interface logInUser {
  email: string;
  password: string;
}

export interface User {
  id?: string;
  email?: string;
  emailvalidated?: boolean;
  nickname?: string;
  showname: string;
  image: string;
  nombre?: string;
  apellido?: string;
  exp?: number;
  iat?: number;
  roles: string[];
  subType?: string;
  type?: string;
  accounts: account[];
  selAccount?: number;
}
export const defAccount: account = {
  id: 'asdfasdfadfasf',
  logo: '/assets/images/logo2.png',
  name: 'NutriPet',
  wapp: ''
}
export const unknowUser: User = {
  showname: 'Visitante',
  image: '/assets/images/defuser.png',
  roles: [],
  accounts: [defAccount],
  selAccount: 0
}
