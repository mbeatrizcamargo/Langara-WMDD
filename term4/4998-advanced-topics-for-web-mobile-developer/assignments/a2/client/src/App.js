import './App.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Index from './components/pages/Index';
import Error from './components/pages/Error';
import PersonShow from './components/pages/PersonShow';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    errorElement: <Error />
  },
  {
    path: "people/:personId",
    element: <PersonShow />,
  },
]);

function App() {
  return (
    <ApolloProvider client={client} >
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </ApolloProvider>
  );
}

export default App;
