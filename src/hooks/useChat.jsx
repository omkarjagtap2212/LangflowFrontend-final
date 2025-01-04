
import { useState, useEffect } from "react";
import axios from "axios";

export const useChat = () => {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const MYport = import.meta.env.VITE_PORT;

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    document.body.classList.toggle("dark-mode");
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async () => {
    if (!inputValue.trim()) return;

    const userMessage = { sender: "User", text: inputValue };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setLoading(true);
    setError("");

    try {
      const { data } = await axios.post(`http://localhost:${MYport}/api/runFlow`, {
        flowIdOrName: "ff2459ad-5125-40e4-acdd-f73cf6243641",
        langflowId: "e101e404-9521-4fd8-9ed3-b54b449537b0",
        inputValue: userMessage.text,
        tweaks: {},
        stream: false,
      });

      const aiMessage = {
        sender: "AI",
        text: data.outputs[0].outputs[0].results.message.data.text,
      };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      setError(`Error occurred while fetching data. ${error}`);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  useEffect(() => {
    const inputField = document.querySelector(".input-field");
    if (inputField) {
      inputField.addEventListener("keydown", handleKeyPress);
    }
    return () => {
      if (inputField) {
        inputField.removeEventListener("keydown", handleKeyPress);
      }
    };
  }, [inputValue]);

  return {
    inputValue,
    messages,
    loading,
    error,
    darkMode,
    toggleDarkMode,
    handleInputChange,
    handleSubmit,
  };
};
