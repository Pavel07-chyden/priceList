import NavBar from './components/NavBar';
import CodeForInterview from './components/CodeForInterview';
import { BrowserRouter, Route,  Switch } from 'react-router-dom';
import NotFound from './components/NotFound';
import AllUsers from './components/AllUsers';
import AddUsers from './components/AddUsers';
import EditUser from './components/EditUser';

function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Switch>
    <Route exact path="/" component={CodeForInterview} />
        <Route exact path="/all" component={AllUsers} />
        <Route exact path="/add" component={AddUsers} />
        <Route exact path="/edit/:id" component={EditUser} />
        <Route component={NotFound} />
    </Switch>
    </BrowserRouter>

  );
}


// "json-server": "json-server --watch src/db.json --host 127.0.0.1 --port 3003",
// "dev": "concurrently \"yarn start\" \"npm run json-server\"",

export default App;
