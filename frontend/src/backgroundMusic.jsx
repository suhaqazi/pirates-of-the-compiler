import { useEffect, useRef } from "react";

const BackgroundMusic = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.play().catch((error) => console.log("Autoplay prevented:", error));
    }
  }, []);

  return (
    <audio ref={audioRef}>
      <source src="/music.mp3" type="audio/mpeg" />
      Your browser does not support the audio tag.
    </audio>
  );
};

export default BackgroundMusic;
