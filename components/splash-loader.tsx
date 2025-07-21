import React, { useState, useEffect } from "react";

// Array of funny and technological messages to display during loading
const messages = [
  "OOpenchain Technologies #The Home Of Technologies...",
  "WWebsite designers and Software...",
  "EElectronic engineers and Robotics experts...",
  "MMaking beautiful things with code...",
  "FFuturistic dream weavers at work...",
  "BBuilding the future, one line of code at a time...",
];

export const SplashRoboticLoader: React.FC = () => {
  const [isTyping, setIsTyping] = useState(true);
  const [displayedMessage, setDisplayedMessage] = useState(
    "Openchains Technologies"
  );
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  useEffect(() => {
    let charIndex = 0;
    let typingInterval: NodeJS.Timeout;
    let messageCycleTimeout: NodeJS.Timeout;

    const typeMessage = () => {
      if (currentMessageIndex >= messages.length) {
        clearInterval(typingInterval);
        return;
      }
      if (charIndex < messages[currentMessageIndex].length) {
        setDisplayedMessage(
          (prev) => prev + messages[currentMessageIndex].charAt(charIndex)
        );
        charIndex++;
      } else {
        setIsTyping(false); // Update isTyping
        clearInterval(typingInterval);
        messageCycleTimeout = setTimeout(() => {
          setDisplayedMessage("");
          charIndex = 0;
          setIsTyping(true); // Update isTyping
          setCurrentMessageIndex(
            (prevIndex) => (prevIndex + 1) % messages.length
          );
        }, 1000); // Wait 1 second before starting the next message
      }
    };
    setDisplayedMessage("");
    // Start typing the current message
    typingInterval = setInterval(typeMessage, 70);

    return () => {
      clearInterval(typingInterval);
      clearTimeout(messageCycleTimeout);
    };
  }, [currentMessageIndex, messages]);
  return (
    <div className="tw:min-h-screen! tw:flex! tw:items-center! tw:justify-center! tw:bg-gradient-to-br! tw:from-gray-900! tw:to-black! tw:text-white! tw:overflow-hidden! tw:font-inter! tw:relative! tw:p-4!">
      <div className="tw:absolute tw:inset-0 tw:flex tw:items-center tw:justify-center">
        <div className="tw:absolute! tw:w-full! tw:h-full! tw:border! tw:border-purple-800! tw:opacity-10! tw:rounded-full! tw:animate-pulse!"></div>
        <div className="tw:absolute tw:w-3/4 tw:h-3/4 tw:border tw:border-blue-700 tw:opacity-10 tw:rounded-full tw:animate-pulse"></div>
        <div className="tw:absolute tw:w-1/2 tw:h-1/2 tw:border tw:border-green-600 tw:opacity-10 tw:rounded-full tw:animate-pulse"></div>
      </div>

      {/* Main loader content container */}
      <div className="tw:relative! tw:w-80! tw:h-80! tw:sm:w-96! tw:sm:h-96! tw:flex! tw:flex-col! tw:items-center! tw:justify-center! tw:z-10!">
        {/* Central processing unit / core */}
        {/* Uses `animate-pulse` for a subtle "breathing" effect on the core's opacity. */}
        <div className="tw:relative tw:w-40 tw:h-40 tw:sm:w-48 tw:sm:h-48 tw:rounded-full tw:flex tw:items-center tw:justify-center tw:shadow-lg tw:animate-pulse">
          {/* Inner glow: uses `animate-ping` for a quick, expanding pulse effect,
              simulating energy bursts within the core. */}
          <div className="tw:absolute! tw:inset-0 tw:rounded-full tw:bg-gradient-to-br tw:from-purple-500 tw:to-blue-600 tw:opacity-50 tw:blur-xl tw:animate-ping"></div>

          {/* Robot character: uses `animate-bounce` for a subtle up-and-down movement,
              giving it a lively and funny feel. */}
          <div className="tw:relative! tw:z-10! tw:text-5xl! tw:sm:text-6xl! tw:animate-bounce!">
            🤖
            {/* Robot eyes for funny effect: small divs with `animate-pulse` for a blinking/shifting look.
                `delay-100` might not work directly with `animate-pulse` in standard Tailwind,
                but is included for potential custom Tailwind configurations. */}
            <div className="tw:absolute tw:top-1/3 tw:left-1/2 tw:-translate-x-1/2 tw:w-14 h-7 tw:sm:w-16 tw:sm:h-8 tw:flex tw:justify-between tw:items-center">
              <div className="tw:w-5 tw:h-5 tw:sm:w-6 tw:sm:h-6 tw:bg-white tw:rounded-full tw:flex tw:items-center tw:justify-center tw:overflow-hidden">
                <div className="tw:w-2 tw:h-2 tw:sm:w-3 tw:sm:h-3 tw:bg-gray-900 tw:rounded-full tw:animate-pulse"></div>
              </div>
              <div className="tw:w-5 tw:h-5 tw:sm:w-6 tw:sm:h-6 tw:bg-white tw:rounded-full tw:flex tw:items-center tw:justify-center tw:overflow-hidden">
                <div className="tw:w-2 tw:h-2 tw:sm:w-3 tw:sm:h-3 tw:bg-gray-900 tw:rounded-full tw:animate-pulse tw:delay-100"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="tw:absolute tw:w-56 tw:h-56 tw:sm:w-64 tw:sm:h-64 tw:rounded-full tw:border-4 tw:border-t-4 tw:border-purple-500 tw:border-opacity-70 tw:animate-spin"></div>

        {/* Loading text: dynamically updated by JavaScript for a typing effect,
            with a blinking cursor (`animate-pulse` on the pipe character). */}
        <div className="tw:absolute! tw:bottom-4! tw:sm:bottom-16! tw:text-lg! tw:sm:text-xl! tw:font-mono! tw:text-gray-400! tw:mt-8!">
          <p className="tw:text-center">
            {displayedMessage}
            {isTyping && <span className="tw:animate-pulse">|</span>}{" "}
            {/* Blinking cursor */}
          </p>
        </div>
      </div>
    </div>
  );
};
