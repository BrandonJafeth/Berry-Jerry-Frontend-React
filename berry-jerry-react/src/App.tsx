
import { QueryClient, QueryClientProvider } from 'react-query';
import './index.css'
import Landing from './pages/LandingBerryJerry/Landing';


const queryClient = new QueryClient();


function App() {


  return (
    <QueryClientProvider client={queryClient}>


  <Landing/>

   </QueryClientProvider>
  );
}

export default App
