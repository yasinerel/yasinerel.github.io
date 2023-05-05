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
      const text = "Hi, my name is yasinerel and I'm a software developer. Hi, my name is yasinerel and I'm a software developer.Hi, my name is yasinerel and I'm a software developer.Hi, my name is yasinerel and I'm a software developer.Hi, my name is yasinerel and I'm a software developer.Hi, my name is yasinerel and I'm a software developer.Hi, my name is yasinerel and I'm a software developer.Hi, my name is yasinerel and I'm a software developer.";
      return '<div style="display: flex; align-items: flex-start;"><div>' + image + '</div><div style="margin-left: 10px;">' + text + '</div></div>';
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




