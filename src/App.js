import './App.css';

import { Header } from './components/Header';
import { Form } from './components/form/Form';

function App() {
  return (
    <div style={styles.app}>
      <Header />
      <Form />
    </div>
  );
}


const styles = {
  app: {
    width: "100%",
    height: "100vh",
    minWidth: "320px",
    backgroundColor: "yellow"
  }
}

export default App;
