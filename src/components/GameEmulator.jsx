"use client";

import React, { useEffect } from "react";

export default function GameEmulator({ game }) {
  useEffect(() => {
    // Set up EmulatorJS variables
    window.EJS_player = "#game";
    window.EJS_gameUrl = `/${game.game_url.trim()}`; // Trim extra spaces if any
    window.EJS_core = `${game.categories[0]?.core}`;
    window.EJS_pathtodata = "https://cdn.emulatorjs.org/stable/data/";

    // Load the emulator script
    const script = document.createElement("script");
    script.src = "https://cdn.emulatorjs.org/stable/data/loader.js";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, [game]);

  return (
    <div className="bg-main flex justify-center rounded-xl">
      <div style={{ width: "640px", height: "480px", maxWidth: "100%" }}>
        <div id="game"></div>
      </div>
    </div>
  );
}
