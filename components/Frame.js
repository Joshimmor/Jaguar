import React from 'react'
import styles from '../styles/Gallery.module.css'
export default function Frame({title,description,image}) {
  return (
    <div style={{"margin":"10px"}}>
      <div className={styles.frame}></div>
      <div>
        <h3 style={{"margin":"0px","padding":"0px"}}>{title}</h3>
        <p style={{"color":"rgb(237, 168, 40)","margin":"0px","padding":"0px"}}>{description}</p>
      </div>
    </div>
  )
}
