import { useState } from "react";
import "./App.css";
import Editor from "./Components/Editor";

function App() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");

  const srcDoc = `<html>
<body>${html}</body>
<style>${css}</style>
<script>${js}</script>
</html>`;

  return (
    <div className="pane">
      <div className="editor-pane top-pane">
        <Editor name="HTML" language="xml" value={html} onChange={setHtml} />
        <Editor name="CSS" language="css" value={css} onChange={setCss} />
        <Editor name="JS" language="javascript" value={js} onChange={setJs} />
      </div>
      <div className="editor-pane">
        <iframe
          title="output"
          width="100%"
          height="100%"
          sandbox="allow-scripts"
          srcDoc={srcDoc}
        />
      </div>
    </div>
  );
}

export default App;
