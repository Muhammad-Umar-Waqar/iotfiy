'use client'

import { useEffect, useRef } from 'react';
import Editor from "@monaco-editor/react";

export default function CodeEditor() {
  return (
    <>
      {/* <div className='ml-[50%] h-[100vh] max-w-[33.33%]'>
<h2>CODE EDITOR</h2>
    
    <Editor
      defaultLanguage="cpp" // C++ is close to Arduino syntax
      defaultValue={`void setup() {\n  // put your setup code here, to run once:\n}\n\nvoid loop() {\n  // put your main code here, to run repeatedly:\n}`}
      theme="vs-dark"
      options={{
        minimap: {
          enabled: false, // Disable the minimap
        }
      }}
    />
    
    </div> */}
    </>
  );
}
