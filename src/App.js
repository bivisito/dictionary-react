import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        <Dictionary defaultKeyWord="sunset" />
      </main>
      <footer className="App-footer">
        <small>Coded by Victoria T </small>
      </footer>
    </div>
  );
}
