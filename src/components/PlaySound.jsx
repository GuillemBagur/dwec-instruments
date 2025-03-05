import { Volume2 } from "lucide-react";
import React from "react";
import "./PlaySound.css";

export default function PlaySound({sound}) {
  let isPlaying = false;
  let audio = new Audio(sound);

  function handlePlay() {
    isPlaying = !isPlaying;

    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }

  audio.onended = function () {
    isPlaying = false;
  };

  return (
    <button
      className={`play-sound ${!sound && "disabled"}`}
      onClick={handlePlay}
    >
      <Volume2 />
    </button>
  );
}
