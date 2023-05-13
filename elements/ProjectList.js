function getProjects() {
  const projectList = [
    {
      projectName: "abcd abcd 1",
      technologies: ["tech 1", "tech 2", "tech 3"],
      description: [
        "React Native React Native React Native React Native React Native React Native React Native React Native",
        "React Native React Native React Native React Native React Native React Native React Native React Native",
      ],
    },
    {
      projectName: "abcd abcd 2",
      technologies: ["tech 1", "tech 2", "tech 3"],
      description: [
        "React React React React React React React React React React React React React React React",
        " React React React React React React React React React React React React React React React React React React React React",
      ],
    },
    {
      projectName: "abcd abcd 3",
      technologies: ["tech 1", "tech 2", "tech 3"],
      description: [
        "React Native React Native React Native React Native React Native React Native React Native React Native",
        "React Native React Native React Native React Native React Native React Native React Native React Native",
      ],
    },
  ];

  projectList.map((project) => {
    var projectContainerElement = document.createElement("div");
    projectContainerElement.className = "projectContainer";

    var projectNameElement = document.createElement("div");
    projectNameElement.className = "projectName";
    projectNameElement.innerText = project.projectName;
    projectContainerElement.appendChild(projectNameElement);

    var projectTechElement = getList(project.technologies, "Technologies");
    projectContainerElement.appendChild(projectTechElement);

    var projectDescElement = getList(project.description, "Description");
    projectContainerElement.appendChild(projectDescElement);

    var gridColumnElement = document.createElement("div");
    gridColumnElement.className = "col-xs-12 col-sm-6 col-lg-4 gridColumn";
    gridColumnElement.appendChild(projectContainerElement);

    document.getElementById("projectList").appendChild(gridColumnElement);
  });
}

function getList(list, label) {
  var listElement = document.createElement("div");
  listElement.className = "topicContainer";

  var listHeaderElement = document.createElement("div");
  listHeaderElement.className = "topicHeader";
  listHeaderElement.innerText = label;

  var listBodyElement = document.createElement("div");
  listBodyElement.className = "topicBody";

  list.map((technology) => {
    var arrowRightElement = document.createElement("div");
    arrowRightElement.className = "arrowRight";

    var listDataElement = document.createElement("span");
    listDataElement.className = "topicData";
    listDataElement.innerText = technology;

    var rowElement = document.createElement("div");
    rowElement.className = "topicRow";
    rowElement.appendChild(arrowRightElement);
    rowElement.appendChild(listDataElement);
    listBodyElement.appendChild(rowElement);
  });
  listElement.appendChild(listHeaderElement);
  listElement.appendChild(listBodyElement);
  return listElement;
}
