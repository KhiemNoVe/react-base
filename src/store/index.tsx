import {
  useReducer,
  useMemo,
  createContext,
  useContext,
  ReactNode,
} from 'react';
import {
  getBaseDataLocal,
  removeAuthLocal,
  setBaseDataLocal,
} from '../lib/localstorage';
import { removeCookies } from '../lib/cookie';
import { Key } from '../utils/enum';

// Define types for state
interface State {
  locale: string;
  [key: string]: any; // This allows other properties to be added dynamically from baseData
}

// Define types for actions
interface Action {
  type: string;
  value?: any;
}

// Initialize state using local storage
function initialState(): State {
  const baseData = getBaseDataLocal();
  return {
    locale: 'vi',
    ...baseData,
  };
}

// Reducer function
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case Key.SET_AUTH:
      return { ...state, ...action.value };
    case Key.SET_LOCALE:
      return { ...state, locale: action.value };
    case Key.LOG_OUT:
      removeCookies();
      removeAuthLocal();
      return initialState();
    default:
      throw new Error('Unhandled action type');
  }
}

// Define context type
interface StoreContext extends State {
  setAuthStore: (value: any) => void;
  logOut: () => void;
  setLocale: (value: string) => void;
}

const MyContext = createContext<StoreContext | undefined>(undefined);
MyContext.displayName = 'MyContext';

// StoreProvider component
interface StoreProviderProps {
  children: ReactNode;
}

export function StoreProvider({ children }: StoreProviderProps): JSX.Element {
  const [state, dispatch] = useReducer(reducer, initialState());

  const setAuthStore = (value: any): void => {
    const currentBaseData = getBaseDataLocal();
    const newValue = { ...currentBaseData, ...value };
    setBaseDataLocal(newValue);
    dispatch({ type: Key.SET_AUTH, value });
  };

  const logOut = (): void => {
    dispatch({ type: Key.LOG_OUT });
  };

  const setLocale = (value: string): void => {
    dispatch({ type: Key.SET_LOCALE, value });
  };

  const value = useMemo<StoreContext>(
    () => ({
      ...state,
      setAuthStore,
      logOut,
      setLocale,
    }),
    [state]
  );

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
}

// Custom hook to use the store context
const useStore = (): StoreContext => {
  const context = useContext(MyContext);
  if (context === undefined) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};

export default useStore;
