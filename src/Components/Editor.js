import React, { useState } from "react";
import 'codemirror/addon/edit/closebrackets.js';
import 'codemirror/addon/edit/closetag.js';
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/css/css";
import "codemirror/mode/javascript/javascript";
import { Controlled } from "react-codemirror2";
import { FaCompressAlt, FaExpandAlt } from "react-icons/fa"

function Editor({ name, language, value, onChange }) {
    const [open, setOpen] = useState(true);
  const handleChange = (editor, data, value) => {
    onChange(value);
  };
  return (
    <div className={`editor ${open ? "" : "collapsed"}`}>
      <div className="editor-name">
        {name}
        <button type="button" className="icon" onClick={()=>{setOpen(open=>!open)}}>{open ? <FaCompressAlt /> : <FaExpandAlt />}</button>
      </div>
      <Controlled
      className ="code-mirror-controlled"
        value={value}
        onBeforeChange={handleChange}
        options={{
          lineWrapping: true,
          lint: true,
          theme:'material',
          mode: { language },
          autoCloseBrackets: true,
          lineNumbers: true,
        }}
      />
    </div>
  );
}

export default Editor;
