import { MainProvider } from './providers';
import { AppRoutes } from './routes';

function App() {
  return (
    <MainProvider>
      <AppRoutes />
    </MainProvider>
  );
}

export default App;
