import React, { useState,useRef,useEffect } from 'react'
import {  animated, useSpringRef, useTransition } from '@react-spring/web'
import styles from '../styles/Projects.module.css'
import { AnimatePresence, motion } from "framer-motion";

export default function MusicPlayer({ProjectName,visible}) {
  const [shouldRender, setRender] = useState(false);
  useEffect(() => {
    if (visible){ setRender(true);}
    else{setRender(false)}
  }, [visible]);
  const defaultState = {
    opacity: 0,
    transform:"translateY(200px)"
  };

  // style={{ animation: {show ? styles.fadeIn : styles.fadeOut}}
  return (
    <AnimatePresence>
      { shouldRender && (
         <motion.div   
             initial={defaultState}
             exit={defaultState}
             animate={{
              opacity: 1,
              boxShadow: "1px 1px 10px rgba(0, 0, 0, 0.3)",
              transform:"translateY(0px)"
            }}
              className={styles.player}
            >
            <Songs ProjectName={ProjectName}/>
          </motion.div>)}
    </AnimatePresence>

  )
}

 function Songs({ProjectName}) {
  const [songs,setSongs] = useState(["../YingYang/Boy Jesus day 1.m4a","../YingYang/nikita.m4a","../YingYang/Boy Jesus day 1.m4a","../YingYang/nikita.m4a"])
  const tempNames = ["Boy Jesus day 1.m4a","nikita.m4a","Boy Jesus day 1.m4a","nikita.m4a"]
  const [selectedSong,selectNewSong] = useState()
  useEffect(()=>{
    selectNewSong(0)
  },[])

    const nextSong = () =>{
      if(selectedSong < songs.length-1){
        selectNewSong(selectedSong + 1)
      }else{
        selectNewSong(0)
      }
    }
    const prevSong = () =>{
      if(selectedSong > 0){
        selectNewSong(selectedSong - 1)
      }else{
        selectNewSong(songs.length - 1)
      }
    }
    const chooseSong=(index)=>{
      selectNewSong(index)
    }
  return (
    <div>
        <AudioVisualizer next={nextSong} prev={prevSong} link={songs[selectedSong]}/>
        <h3>{ProjectName}</h3>
        {songs.map((song,index) =>
            <div onClick={()=>chooseSong(index)} key={index}>
              <p className={index == selectedSong? styles.selectedTrack:styles.track}>{tempNames[index]}</p>
            </div>
        )}
    </div>
  )
}

import { BsSkipStart} from "react-icons/bs"
import { BsSkipEnd } from "react-icons/bs"
import { FaPlay } from "react-icons/fa"
import { FaPause } from "react-icons/fa"


const AudioVisualizer = (props) => {

const audioRef = useRef(null);
 const [isPlaying, setIsPlaying] = useState(false);
 const [duration, setDuration] = useState(0);
 const [currentTime, setCurrentTime] = useState(0);

// refs
const audioPlayer = useRef();   // reference our audio component
const progressBar = useRef();   // reference our progress bar
const animationRef = useRef();

useEffect(() => {
  const seconds = Math.floor(audioPlayer.current.duration);
  setDuration(seconds);
  progressBar.current.max = seconds;
  progressBar.current.value = 0
  setIsPlaying(true)
}, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState, props.link]);


//functionality 
const calculateTime = (secs) => {
  const minutes = Math.floor(secs / 60);
  const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const seconds = Math.floor(secs % 60);
  const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  return `${returnedMinutes}:${returnedSeconds}`;
}

const togglePlayPause = () => {
  const prevValue = isPlaying;
  setIsPlaying(!prevValue);
  if (!prevValue) {
    audioPlayer.current.play();
    animationRef.current = requestAnimationFrame(whilePlaying)
  } else {
    audioPlayer.current.pause();
    cancelAnimationFrame(animationRef.current);
  }
}
const whilePlaying = () => {
  progressBar.current.value = audioPlayer.current.currentTime;
  changePlayerCurrentTime();
  animationRef.current = requestAnimationFrame(whilePlaying);
}

const changeRange = () => {
  audioPlayer.current.currentTime = progressBar.current.value;
  changePlayerCurrentTime();
}

const changePlayerCurrentTime = () => {
  progressBar.current.style.setProperty('--seek-before-width', (progressBar.current.value / duration) * 100)
  setCurrentTime(progressBar.current.value);
}

const backThirty = () => {
  progressBar.current.value = Number(progressBar.current.value - 30);
  changeRange();
}

const forwardThirty = () => {
  progressBar.current.value = Number(progressBar.current.value + 30);
  changeRange();
}
  return( 
    
    <div className={styles.audioPlayer}>


        {/* progress bar */}
   
          <input type="range" className={styles.progressBar} defaultValue="0" ref={progressBar} onChange={changeRange} />
        
        <div className={styles.timeBar}>
        {/* <div className={styles.currentTime}>{calculateTime(currentTime)}</div>
   
        <div className={styles.duration}>{(duration && !isNaN(duration)) && calculateTime(duration)}</div> */}
        </div>
        {/* current time */}
        <div className={styles.controls}>
            <audio ref={audioPlayer} src={props.link} autoPlay preload="metadata"></audio>
            <button className={styles.forwardBackward} onClick={props.prev}><BsSkipStart/></button>
            <button onClick={togglePlayPause} className={styles.playPause}>
              {isPlaying ? <FaPause /> : <FaPlay className={styles.play} />}
            </button>
            <button className={styles.forwardBackward} onClick={props.next}> <BsSkipEnd /></button>
        </div>
    </div>
  )
}