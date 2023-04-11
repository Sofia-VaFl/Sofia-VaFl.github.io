let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #c5448f;"> Actualmente estoy en el trayecto para ser ingeniera.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
