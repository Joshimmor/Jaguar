import React,{useRef, useState} from 'react'
import styles from '../../styles/Projects.module.css'
import MusicPlayer from '../../components/MusicPlayer';
import { useSpring, animated } from '@react-spring/web'
export default function index() {
    const [player,setPlayers] = useState([0,0,0])
    const displayPlayer = (index) =>{
        let newVal = [0,0,0]
        for(let i = 0; i < player.length; i++){
            if(i == index){
                newVal[index] = Number(!player[index])
            }
        }
        setPlayers(newVal)
    }
    const props = useSpring({
        from: { opacity: 0 ,transform: "translateY(-200px)" },
        to: { opacity: 1,transform: "translateY(0)" },
      })
  return (

        <div className={styles.background}>
            <section className={styles.projects}>
                <animated.span onClick={()=>displayPlayer(0)} style={props} className={styles.dot}></animated.span>
                <MusicPlayer visible={player[0]}ProjectName={"YingYang"}/>
            </section>
            <section className={styles.projects}>
                <span onClick={()=>displayPlayer(1)} className={styles.dot}></span>
                <MusicPlayer visible={player[1]}ProjectName={"YingYang"}/>
            </section>
            <section className={styles.projects}>
                <span onClick={()=>displayPlayer(2)}  className={styles.dot}></span>
                <MusicPlayer visible={player[2]}ProjectName={"YingYang"}/>
            </section>
        </div>


  )
}
