window.addEventListener("mousemove", parallax);

function parallax(e) {

   let speed = 5;
   let x = (window.screen.width - event.pageX * speed) / 100 + 16;
   let y = (window.screen.height - event.pageY * speed) / 100 + 24;
   ig1.style.transform = `translateX(${x}px) translateY(${y}px)`;
   requestAnimationFrame(parallax);
   
   let speed1 = 7;
   let x1 = (window.screen.width - event.pageX * speed1) / 100 + 34;
   let y1 = (window.screen.height - event.pageY * speed1) / 100 + 8;
   ig2.style.transform = `translateX(${x1}px) translateY(${y1}px)`;
   requestAnimationFrame(parallax);
   
   let speed2 = -5;
   let x2 = (window.screen.width - event.pageX * speed2) / 100 + 18;
   let y2 = (window.screen.height - event.pageY * speed2) / 100 + 31;
   ig3.style.transform = `translateX(${x2}px) translateY(${y2}px)`;
   requestAnimationFrame(parallax);
   
   let speed3 = 12;
   let x3 = (window.screen.width - event.pageX * speed3) / 100 + 24;
   let y3 = (window.screen.height - event.pageY * speed3) / 100 + 15;
   ig4.style.transform = `translateX(${x3}px) translateY(${y3}px)`;
   requestAnimationFrame(parallax);
   
   let speed4 = -3;
   let x4 = (window.screen.width - event.pageX * speed4) / 100 + 20;
   let y4 = (window.screen.height - event.pageY * speed4) / 100 + 12;
   ig5.style.transform = `translateX(${x4}px) translateY(${y4}px)`;
   requestAnimationFrame(parallax);
   
   let speed5 = -7;
   let x5 = (window.screen.width - event.pageX * speed5) / 100 + 43;
   let y5 = (window.screen.height - event.pageY * speed5) / 100 + 31;
   ig6.style.transform = `translateX(${x5}px) translateY(${y5}px)`;
   requestAnimationFrame(parallax);
   
   let speed6 = 6;
   let x6 = (window.screen.width - event.pageX * speed6) / 100 + 35;
   let y6 = (window.screen.height - event.pageY * speed6) / 100 + 23;
   ig7.style.transform = `translateX(${x6}px) translateY(${y6}px)`;
   requestAnimationFrame(parallax);
}