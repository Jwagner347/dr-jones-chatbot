"use client";

import { useChat } from "ai/react";
import ReactMarkdown from "react-markdown";
import { useState } from "react";

enum DocumentType {
  NextGen = "Next Gen",
  LegacySS = "Legacy SwipeSense",
}

export default function Chat() {
  const [selectedType, setSelectedType] = useState<DocumentType>(
    DocumentType.LegacySS
  );

  const documentType = selectedType == DocumentType.LegacySS ? "LegacySwipesense" : "NextGen";

  const handleDocTypeChange = (type: DocumentType) => {
    setSelectedType(type);
    // You can also add logic to fetch data based on the selected type here
  };
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    body: {
      documentType,
    },
    api: '/api/' + documentType,
  });

  return (
    <div className="mx-auto w-full max-w-md py-24 flex flex-col stretch">
      <div className="flex space-x-1 p-1 bg-gray-300 rounded-full">
        {Object.values(DocumentType).map((type) => (
          <button
            key={type}
            className={`flex-1 text-sm py-2 rounded-full ${
              selectedType === type
                ? "bg-blue-500 text-white"
                : "bg-white text-gray-800"
            }`}
            onClick={() => handleDocTypeChange(type)}
          >
            {type}
          </button>
        ))}
      </div>
      {messages.length > 0
        ? messages.map((m) => (
            <div key={m.id} className="whitespace-pre-wrap">
              {m.role === "user" ? "User: " : "AI: "}
              <ReactMarkdown>{m.content}</ReactMarkdown>
            </div>
          ))
        : null}

      <form onSubmit={handleSubmit}>
        <input
          className="fixed w-full max-w-md bottom-0 border border-gray-300 rounded mb-8 shadow-xl p-2"
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
