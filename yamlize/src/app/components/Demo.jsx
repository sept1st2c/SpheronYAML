"use client";
import { useState } from "react";
import Link from "next/link";

export default function Demo() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     // This is where you'd integrate with your YAML generation logic
  //     setOutput(
  //       `# Generated YAML for: ${input}\n\nservice:\n  name: example-service\n  runtime: nodejs\n  memory: 1GB\n  auto-scaling: true`
  //     );
  //   };

  return (
    <section id="demo" className="demo">
      <div className="container">
        <Link href="/clone">
          <h2 className="text-center">Try It Out</h2>
        </Link>
        {/* <div className="demo-card">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Describe your service (e.g., 'Node.js service with auto-scaling and 1 GB of memory')"
            />
            <button type="submit" className="button">
              Generate YAML
            </button>
          </form>
          {output && (
            <pre className="output">
              <code>{output}</code>
            </pre>
          )}
        </div> */}
      </div>
    </section>
  );
}
