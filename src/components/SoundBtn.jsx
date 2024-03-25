// import useSound from 'use-sound';
import musicTrack from '../../assets/backgroundSound.mp3';
import { useState, useEffect } from "react";
import styled from '../stylesheets/SoundBtn.module.css'

const SoundBtn = () => {
    const [audio, setAudio] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const audioElement = new Audio(musicTrack);
        audioElement.autoplay = true;
        audioElement.loop = true;
        setAudio(audioElement);
    
        return () => {
          audioElement.pause();
        };
      }, []);

      const handlePausePlay = () => {
        if (audio) {
          if (isPlaying) {
            audio.pause();
          } else {
            audio.play();
          }
          setIsPlaying(!isPlaying);
        }
      };
      
      return (
        <div>
          <button className={styled.soundBtn} onClick={handlePausePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
        </div>
      );
};

export default SoundBtn;