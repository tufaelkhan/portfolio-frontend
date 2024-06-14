
import AOS from 'aos';
import 'aos/dist/aos.css';

export const initAOS = () => {
  AOS.init({
    offset: 200,  
    delay: 0,          
    duration: 1000,    
    easing: 'ease-in-out', 
    once: true,        
    mirror: false,     
  });
};
