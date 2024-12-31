import Cookies from 'js-cookie';

// Define the shape of the auth object
interface Auth {
  [key: string]: any; // Adjust this based on the actual structure of your `auth` object
}

interface Config {
  expires: number;
  domain?: string; // Optional domain if you choose to use it in the future
}

const config: Config = {
  expires: 3,
};

export function setCookieAuth(auth: Auth | undefined): void {
  let authSave: Auth = {};
  if (auth && Object.keys(auth).length) {
    authSave = auth;
  }
  Cookies.set('auth', JSON.stringify(authSave), config);
}

export function getCookieAuth(): Auth {
  const v = Cookies.get('auth');
  if (v) {
    return JSON.parse(v);
  }
  return {};
}

export function removeCookies(): void {
  Cookies.remove('auth', config);
  Cookies.remove('enums', config);
}

export function setI18nextLng(i18nextLng?: string): void {
  const lng = i18nextLng || 'en';
  Cookies.set('i18nextLng', lng, config);
}

export function getI18nextLng(): string | undefined {
  return Cookies.get('i18nextLng');
}
