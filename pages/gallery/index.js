import React, { useEffect,useRef } from 'react'
import styles from '../../styles/Gallery.module.css'
import Frame from '../../components/Frame'

function useHorizontalScroll() {
    const elRef = useRef();
    useEffect(() => {
      const el = elRef.current;
      if (el) {
        const onWheel = e => {
          if (e.deltaY == 0) return;
          e.preventDefault();
          el.scrollTo({
            left: el.scrollLeft + e.deltaY,
            behavior: "smooth"
          });
        };
        el.addEventListener("scroll", onWheel);
        console.log(el.deltaY)
        return () => el.removeEventListener("scroll", onWheel);
      }
    }, []);
    return elRef;
}
export default function index() {
    const scrollRef = useHorizontalScroll();
    let images=[0,0,0,0,0,0,0,0,0,0,0,0,]
  return (
    <div className={styles.background} >
        <div className={styles.backdrop}>
            {images.map((image,index)=>{
                return <Frame key={index} image={image} title= {"title of Project "}description={'Joshua Immordino'}/>
            })}
        </div>
        <a className={styles.att}  href="https://www.vecteezy.com/free-vector/jungle-background">Jungle Background Vectors by Vecteezy</a>
    </div>
  )
}

