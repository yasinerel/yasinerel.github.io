const terminalBody = document.getElementById("terminal-body");
const commandLine = document.getElementById("command-line");
const prompt = "> ";

commandLine.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    const command = commandLine.value.trim();
    commandLine.value = "";
    const output = handleCommand(command);
    addLine(prompt + command);
    addLine(output);
    terminalBody.scrollTop = terminalBody.scrollHeight;
  }
});

function handleCommand(command) {
  switch (command) {
    case "help":
      return "Available commands: bio, projects, skills, contact";
    case "bio":
      return "Hi, my name is John Doe and I'm a web developer.";
    case "projects":
      return "Here are some projects I've worked on: Project A, Project B, Project C.";
    case "skills":
      return "My skills include HTML, CSS, JavaScript, and PHP.";
    case "contact":
      return "You can reach me at john.doe@example.com.";
    default:
      return "Command not found: " + command;
  }
}

function addLine(text) {
  const line = document.createElement("div");
  line.classList.add("terminal-line");
  line.textContent = text;
  terminalBody.appendChild(line);
}
