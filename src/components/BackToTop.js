import React, {useEffect, useState} from 'react';
import '../styles/BackToTop.css';

function BackToTop() {

     const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);
  return (
    <div id='bck-top-progress'>
        <span id='bck-top-progress-value' onClick={scrollToTop}>&#x1F815;</span>
    </div>
  )
}

export default BackToTop