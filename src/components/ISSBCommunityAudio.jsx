
import React, { useEffect, useRef, useState } from "react";
import {
  FiHeadphones,
  FiPlay,
  FiPause,
  FiVolume2,
  FiVolumeX,
} from "react-icons/fi";

const formatTime = (time) => {
  if (!Number.isFinite(time) || time < 0) return "0:00";

  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);

  return `${minutes}:${String(seconds).padStart(2, "0")}`;
};

export default function ISSBCommunityAudio() {
  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => {
      if (Number.isFinite(audio.duration)) {
        setDuration(audio.duration);
      }
    };
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("durationchange", updateDuration);
    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("ended", handleEnded);

    updateDuration();

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("durationchange", updateDuration);
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  const togglePlayback = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
      } catch (error) {
        console.error("Unable to play ISSB announcement:", error);
      }
    } else {
      audio.pause();
    }
  };

  const handleSeek = (event) => {
    const audio = audioRef.current;
    const nextTime = Number(event.target.value);

    if (!audio || !Number.isFinite(nextTime)) return;

    audio.currentTime = nextTime;
    setCurrentTime(nextTime);
  };

  const handleVolume = (event) => {
    const nextVolume = Number(event.target.value);
    const audio = audioRef.current;

    setVolume(nextVolume);
    setIsMuted(nextVolume === 0);

    if (audio) {
      audio.volume = nextVolume;
      audio.muted = nextVolume === 0;
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.muted || isMuted) {
      audio.muted = false;
      audio.volume = volume > 0 ? volume : 0.8;
      setVolume(volume > 0 ? volume : 0.8);
      setIsMuted(false);
    } else {
      audio.muted = true;
      setIsMuted(true);
    }
  };

  const progress =
    duration > 0 ? Math.min((currentTime / duration) * 100, 100) : 0;

  return (
    <section
      className="issb-audio-section"
      aria-labelledby="issb-audio-title"
    >
      <div className="issb-audio-card">
        <div className="issb-audio-header">
          <div className="issb-audio-header-icon">
            <FiHeadphones />
          </div>

          <div className="issb-audio-heading">
            <span className="issb-audio-eyebrow">
              EXAMITICS COMMUNITY ANNOUNCEMENT
            </span>

            <h2 id="issb-audio-title">ISSB Preparation Guide</h2>

            <p>
              Discover how practising together can improve your confidence
              and leadership skills.
            </p>
          </div>

          <span className="issb-audio-badge">AUDIO</span>
        </div>

        <div className="issb-audio-player">
          <div className="issb-audio-track-info">
            <div className="issb-audio-track-icon">
              <FiHeadphones />
            </div>

            <div className="issb-audio-track-text">
              <h3>Hear Our Announcement</h3>
              <p>English voice announcement</p>
            </div>
          </div>

          <audio
            ref={audioRef}
            src="/audio/issb-community-intro.mp3"
            preload="metadata"
            onVolumeChange={(event) => {
              setIsMuted(event.currentTarget.muted);
            }}
            onError={() => setIsPlaying(false)}
          >
            Your browser does not support audio playback.
          </audio>

          <div className="issb-audio-controls">
            <button
              type="button"
              className="issb-audio-play"
              onClick={togglePlayback}
              aria-label={
                isPlaying
                  ? "Pause ISSB announcement"
                  : "Play ISSB announcement"
              }
            >
              {isPlaying ? <FiPause /> : <FiPlay />}
            </button>

            <div className="issb-audio-timeline">
              <input
                type="range"
                className="issb-audio-progress"
                min="0"
                max={duration || 0}
                step="0.1"
                value={Math.min(currentTime, duration || 0)}
                onChange={handleSeek}
                style={{
                  "--audio-progress": `${progress}%`,
                }}
                aria-label="Audio playback position"
                disabled={!duration}
              />

              <div className="issb-audio-time">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            <button
              type="button"
              className="issb-audio-volume-button"
              onClick={toggleMute}
              aria-label={isMuted ? "Unmute audio" : "Mute audio"}
            >
              {isMuted || volume === 0 ? <FiVolumeX /> : <FiVolume2 />}
            </button>

            <input
              type="range"
              className="issb-audio-volume"
              min="0"
              max="1"
              step="0.05"
              value={isMuted ? 0 : volume}
              onChange={handleVolume}
              aria-label="Audio volume"
            />
          </div>

          <p className="issb-audio-caption">
            Listen, learn, and prepare with confidence.
          </p>
        </div>
      </div>
    </section>
  );
}
