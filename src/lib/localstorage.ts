const expireDay = 1;

// Define types for the baseData and config
interface BaseData {
  settingTheme: object; // You can specify a more precise type for settingTheme if needed
}

interface ConfigData {
  [key: string]: any; // This is a generic type, modify it as necessary based on the structure of your config
}

function setLocalExpire(key: string, value: any, day: number): void {
  const now = new Date();
  const item = {
    value: JSON.stringify(value),
    expiry: now.getTime() + day * 86400000, // Expiry time in milliseconds
  };
  localStorage.setItem(key, JSON.stringify(item));
}

function getLocalExpire(key: string): any | null {
  const itemStr = localStorage.getItem(key);
  if (!itemStr) return null;
  if (key === 'baseData' && expireToken()) return null;
  const item = JSON.parse(itemStr);
  return item.value;
}

export function setBaseDataLocal(baseData: BaseData): void {
  setLocalExpire('baseData', baseData, expireDay);
}

function expireToken(): boolean {
  const itemStr = localStorage.getItem('baseData');
  if (!itemStr) return true;
  const item = JSON.parse(itemStr);
  const now = new Date();
  if (now.getTime() > item.expiry) {
    localStorage.removeItem('location');
    localStorage.removeItem('baseData');
    return true;
  }
  return false;
}

export function getBaseDataLocal(): BaseData {
  const baseData = getLocalExpire('baseData');
  if (baseData) {
    return JSON.parse(baseData);
  } else {
    return {
      settingTheme: {},
    };
  }
}

export function removeAuthLocal(): void {
  const itemStr = getBaseDataLocal();
  setBaseDataLocal({ settingTheme: itemStr.settingTheme });
  localStorage.removeItem('location');
}

export function setConfig(type: string, data: ConfigData): void {
  localStorage.setItem(type, JSON.stringify(data));
}

export function getConfig(type: string): ConfigData[] {
  const data = localStorage.getItem(type);
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
}
