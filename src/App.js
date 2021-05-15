import  {ChatEngine} from "react-chat-engine";
import ReactDOM from 'react-dom';
import ChatFeed from './Components/ChatFeed';
import LoginForm from './Components/LoginForm';
import './App.css';
const App = () => {
   if (!localStorage.getItem('username')) return <LoginForm />;

   return (
<ChatEngine
height ="100vh"
projectID="52e9eb0e-3bb4-4ca8-bcc7-5aa12a73ff1e"
userName={localStorage.getItem('username')}
userSecret={localStorage.getItem('password')}
renderChatFeed={(chatAppProps) => <ChatFeed { ...chatAppProps}/>}

/>
);
}
export default App;