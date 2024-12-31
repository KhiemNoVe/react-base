import './i18n';
import './App.css';
import { StoreProvider } from './store';

function App() {
  return (
    <StoreProvider>
      <div className="text-primary-700">dss</div>
    </StoreProvider>
  );
}

export default App;
