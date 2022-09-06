# JustNotes

This command line application will allow a user to generate a team profile by answering a series of questions in the terminal. The user will be prompted to enter information about the team manager first. Then the user will have a choice to add an engineer, add an intern, or finish(write the file). After each employee added, the user will then be given the same options.

When the user selects "Finish" the file will be written and saved with a unique name referencing the team manager's name. Because of this, the application can be used to quickly create several unique team profiles.

I have included several sample files created using this generator. You can find them in the [dist](/dist/) folder.

You can find the walkthrough video [here](https://drive.google.com/file/d/19wUKvFf-UM1UpRmvmujzrjusQUalLxqe/view) 
  
This application was designed it to meet the following criteria:

* An application that took basic information about all employees(Name, Role, Email, EID) and displayed it in an easy to read layout
* An application that also got unique information from each employee depending on role(office number, GitHub username, school name) and displayed it in an easy to read layout
* An application that will allow many files unique to each team to be written and saved
* An application that is easily scaleable and expandable
* A simple and clean generated page with a responsive design that accomodates screen sizes ranging from 320px to 1920px

## Technology and Resources Used

* HTML
* Bootstrap
* Javascript
* Node.js
* Inquirer
* Chalk
* Jest
* [Miro](https://miro.com/about/): A visual colaboration and whiteboard platform for planning/wireframing. 
* [Coolors.co](https://coolors.co/): A color palatte generator.

## A look at the question flow in the terminal:

![A look at the question flow in the terminal](/imgs/terminal-question-flow.PNG)

## Generated HTML file viewed in browser at mobile size:
![Generated HTML file viewed in browser at mobile size](/imgs/application-screenshot.PNG)
