"use client";
import { useState } from "react";
import Editor from "@monaco-editor/react";

const YamlEditor = () => {
  const [yaml, setYaml] = useState(`---
    # Welcome to the Spheron Network! 🚀☁
# This file is called a Infrastructure Composition Language (ICL)
# ICL is a human friendly data standard for declaring deployment 
attributes.
# The ICL file is a "form" to request resources from the Network.
# ICL is compatible with the YAML standard and similar to Docker 
Compose files.

---
# Indicates version of Spheron configuration file. Currently only "1.0" 
is accepted.`);

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
      <Editor
        height="700px"
        width="700px"
        defaultLanguage="yaml"
        value={yaml}
        onChange={(value) => setYaml(value || "")}
        theme="vs-light"
        options={{ minimap: { enabled: false } }}
      />
    </div>
  );
};

export default YamlEditor;
