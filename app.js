const terminalBody = document.getElementById("terminal-body");
const commandLine = document.getElementById("command-line");


commandLine.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    const command = commandLine.value.trim();
    commandLine.value = "";
    const output = handleCommand(command);
    addLine(output);
    terminalBody.scrollTop = terminalBody.scrollHeight;
  }
});

function handleCommand(command) {
  switch (command) {
    case "help":
      const helpIcon = '<i class="fa-solid fa-question fa-lg" style="color: #b3b9c5;"></i>';
      const infoIcon = '<i class="fa-solid fa-circle-info fa-lg" style="color: #b3b9c5;"></i>';
      const projectsIcon = '<i class="fa-solid fa-gears fa-lg" style="color: #b3b9c5;"></i>';
      const linksIcon = '<i class="fa-solid fa-link fa-lg" style="color: #b3b9c5;"></i>';
      const clearIcon = '<i class="fa-solid fa-eraser fa-lg" style="color: #b3b9c5;"></i>';


      
      const help= "<span style='color: #92d192;  padding-left: 9px;'> help</span> list down all available commands";
      const info= "<span style='color: #92d192;  padding-left: 3px;'> info</span> show information about me";
      const projects= "<span style='color: #92d192;'> projects</span> display a list of my major projects";
      const links= "<span style='color: #92d192;'> links</span> get all my important links and socials" ;
      const clear= "<span style='color: #92d192;'> clear</span> clear terminal screen";
      
      return '<span style="color: #92d192;">' + command + '</span><br>' + '<br>' + helpIcon + help + '<br>' +
      '<br>' + infoIcon + info+'<br>' +
      '<br>' + projectsIcon + projects+'<br>' +
      '<br>' + linksIcon + links+'<br>' +
      '<br>' + clearIcon + clear+'<br>';

    case "info":
      const image = '<img src="avtr.png" alt="Image of me" style="max-width: 200px;">';
      const text = "Yo! It is Yasin. I am a third-year computer engineering student with full scholarship at Koç University with a passion for software development. With a strong foundation in <span style='color: #f89820;'>Java, Python, C, and Assembly</span>. I have already developed several object-oriented programming projects. My skills extend beyond programming languages, with experience developing both frontend and backend applications using <span style='color: #f89820;'>React, Node.js, and Next.js.</span> Additionally,I am currently writing a mobile application with Flutter and is eager to expand their knowledge of databases. Not content to simply learn, I am actively developing a project in the field of image processing that has been accepted by Koç University's entrepreneurship institution(KWORKS). With my talent and drive, I am sure to make waves in the world of software development.";
      const pythonIcon = '<i class="fa-brands fa-python fa-lg" style="color: #ced5de;"></i>';
      const javaIcon = '<i class="fa-brands fa-java fa-lg" style="color: #b2bac7;"></i>';
      const jsIcon = '<i class="fa-brands fa-square-js fa-lg" style="color: #737a87;"></i>';
      const reactIcon = '<i class="fa-brands fa-react fa-lg" style="color: #a2acbe;"></i>';
      const dbIcon = '<i class="fa-solid fa-database fa-lg" style="color: #b1bdd3;"></i>';
      const linuxIcon = '<i class="fa-brands fa-linux fa-lg" style="color: #979ca5;"></i>';
      const npmIcon = '<i class="fa-brands fa-npm fa-lg" style="color: #828a97;"></i>';
      const gitIcon = '<i class="fa-brands fa-git-alt fa-lg" style="color: #9cabc4;"></i>';
      const ig = '<img src="dash.png" alt="Image of me" style="max-width: 20px;">';
      return '<span style="color: #92d192;">' + command + '</span><br>' + '<div style="display: flex; align-items: flex-start;"><div>' + 
      image + '</div><div style="margin-left: 10px;">' + 
      text + '<br>'  + ig+ ig+ ig+ ig+ ig+ ig+ ig+ ig+ ig+ ig+ ig+ ig+ ig+ ig+ ig+ ig+ ig+ ig+ ig+ ig+ ig+ ig+ ig+ ig+ 
      pythonIcon + " " + javaIcon + " " + jsIcon + " " + 
      reactIcon + " " + dbIcon + " " + linuxIcon + " "+ npmIcon + " " + gitIcon;
    case "projects":
      const githubIcon = '';
      
      const javaOOP= "<span style='color: #ff294d;'> java oop</span> games developed with Java Swing GUI with OOP Principles";
      const numValid= "<span style='color: #ff294d;'> number validator</span> app developed by using React-Native and npm libraries to check the number";
      const weatherApi= "<span style='color: #ff294d;'> weather api</span> website to check the weather by usin API services";
      const sozluku= "<span style='color: #ff294d;'> sozluku</span> kind of twitter app developed for my friends using Flutter, Appwrite, Docker" ;
      const contaclessPay= "<span style='color: #ff294d;'> contaclessPay</span> application that allows contactless payment with image recognition";
      const parkDetect= "<span style='color: #ff294d;'> parkDetect</span> application that allows finding suitable parking spaces with image recognition";

      return '<span style="color: #92d192;">' + command + '</span><br>' + '<br>' + githubIcon + javaOOP + '<br>' +
      '<br>' + githubIcon + numValid+'<br>' +
      '<br>' + githubIcon + weatherApi+'<br>' +
      '<br>' + githubIcon + sozluku+'<br>' +
      '<br>' + githubIcon + contaclessPay+'<br>' +
      '<br>' + githubIcon + parkDetect;

    case "links":
        const githubProfile = '<a href="https://github.com/yasinerel"><i class="fa-brands fa-github fa-lg" style="color: #8b928f;"></i></a>';
        const email = '<a href="mailto:terel19@ku.edu.tr"><i class="fa-solid fa-envelope fa-lg" style="color: #8b928f;"></i></a>';
        const phone = '<a href="tel:+905382802703"><i class="fa-brands fa-whatsapp fa-lg" style="color: #8b928f;"></i></a>';
        const addrs = '<a href="https://goo.gl/maps/UTpuCQw9dhRejeYW8?coh=178571&entry=tt"><i class="fa-solid fa-map-pin fa-lg" style="color: #8b928f;"></i></a>';
        return '<span style="color: #92d192;">' + command + '</span><br><br>' +
          githubProfile + ' <span style="color: #76D4D6;"><a href="https://github.com/yasinerel" style="color: #76D4D6; text-decoration: none;">github</a></span>  my profile on github' + '<br>' +'<br>' +
          email + ' <span style="color: #76D4D6;"><a href="mailto:terel19@ku.edu.tr" style="color: #76D4D6; text-decoration: none;">mail</a></span> lets get in touch!' + '<br>' +'<br>' +
          phone + ' <span style="color: #76D4D6;"><a href="tel:+905382802703" style="color: #76D4D6; text-decoration: none;">phone</a></span> make a voice call!' + '<br>' +'<br>' +
          addrs + ' <span style="color: #76D4D6;"><a href="https://goo.gl/maps/UTpuCQw9dhRejeYW8?coh=178571&entry=tt" style="color: #76D4D6; text-decoration: none;">home</a></span> located here';
      
    case "clear":
        location.reload();
        break;
    default:
      return "command not found: " + command;
  }
}



function addLine(text) {
  const line = document.createElement("div");
  line.classList.add("terminal-line");
  line.innerHTML = '<span style="color: #6ab0f3;">yasinerel</span>@<span style="color: #ffeea6;">me</span>:~$ ' + text;

  terminalBody.insertBefore(line, commandLine.parentNode);
  terminalBody.scrollTop = terminalBody.scrollHeight;
  
  commandLine.value = "";
  commandLine.focus();
}




