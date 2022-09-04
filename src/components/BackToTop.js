import React from 'react';
import '../styles/BackToTop.css';

function BackToTop() {
    let calcScrollValue = () => {
        let scrollProgress = document.getElementById("bck-top-progress");
        let progressValue = document.getElementById("bck-top-progress-value");
        let pos = document.documentElement.scrollTop;
        let calcHeight =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight;
        let scrollValue = Math.round((pos * 100) / calcHeight);
        if (pos > 100) {
          scrollProgress.style.display = "grid";
        } else {
          scrollProgress.style.display = "none";
        }
        scrollProgress.addEventListener("click", () => {
          document.documentElement.scrollTop = 0;
        });
        scrollProgress.style.background = `conic-gradient(#03cc65 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
      };
      
      window.onscroll = calcScrollValue;
      window.onload = calcScrollValue;
  return (
    <div id='bck-top-progress'>
        <span id='bck-top-progress-value'>&#x1F815;</span>
    </div>
  )
}

export default BackToTop