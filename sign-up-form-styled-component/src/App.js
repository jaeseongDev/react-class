import SignUpForm from './components/SignUpForm';
import SignUpContainer from './components/SignUpContainer';

function App() {
  return (
    <SignUpContainer>
      <h1>회원가입</h1>
      <SignUpForm />
    </SignUpContainer>
  );
}

export default App;
