const terminalBody = document.getElementById("terminal-body");
const commandLine = document.getElementById("command-line");


commandLine.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    const command = commandLine.value.trim();
    commandLine.value = "";
    const output = handleCommand(command);
    addLine(command);
    addLine(output);
    terminalBody.scrollTop = terminalBody.scrollHeight;
  }
});

function handleCommand(command) {
  switch (command) {
    case "help":
      return "available commands: info, projects, links, clear" ;
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

      const ig = '<img src="001-delete.png" alt="Image of me" style="max-width: 20px;">';
      return '<div style="display: flex; align-items: flex-start;"><div>' + image + '</div><div style="margin-left: 10px;">' + text + '<br>'  + ig+ ig+ ig+ ig+ ig+ ig+ ig+ ig+ ig+ ig+ ig+ ig+ ig+ ig+ ig+ ig+ ig+ ig+ ig+ ig+ ig+ ig+ ig+ ig+ pythonIcon + " " + javaIcon + " " + jsIcon + " " + reactIcon + " " + dbIcon + " " + linuxIcon + " "+ npmIcon + " " + gitIcon;
    case "projects":
      return "Here are some projects I've worked on: Project A, Project B, Project C.";
    case "links":
      return "social links";
    case "clear":
      return "temizlikçi";
    default:
      return "Command not found: " + command;
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




