import useSound from 'use-sound';
import boopSfx from '../../sounds/backgroundSound.mp3';

const SoundBtn = () => {
  const [play] = useSound(boopSfx);
  return <button onClick={play}>Boop!</button>;
};

export default SoundBtn;