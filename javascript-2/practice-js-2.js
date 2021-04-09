/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE
let gitDefinition = 'Git is a tool used by developers within the command line interface which is used to save changes made to files, commit them, and then push the files to a repository on github.'
//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE
let gitHubDefinition = 'Github is a way for developers to keep track of changes made to their files. Github is especially useful for tracking changes made to large repositories along with allowing other people to view a persons published code and make changes without editing the master.'
//////////////////PROBLEMS 3 - 9////////////////////
/*
    For the next several problems you will be creating objects containing information about different git 
    commands.  Each object should contain 'description' and 'code' properties.  The 'description' property 
    will be a string with a description of what that git command does.  The 'code' property should be a 
    string of the actual command (what you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' properties 
    following the guidelines above to describe the init command.
*/

//CODE HERE
let init = {
    description:'Git init will initialize a repository for you. This command does not need to be performed on cloned repositories.',
    code: 'git init repository.name'
}
//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties 
    following the guidelines above to describe the clone command.
*/

//CODE HERE
let clone = {
    description:'Git clone is useful for when you have forked a repository from github. Its name is self explanatory. It clones a repository so that you can make edits without changing another persons code. After forking the repository, simply copy the url for the repository you are cloning, use terminal or whichever CLI you use to cd to your directory you would like the repository to be cloned to, and type',
    code: 'git clone url'
}
//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties 
    following the guidelines above to describe the status command.
*/

//CODE HERE
let status = {
    description: 'Status is a useful tool for seeing the status of files within you present working directory. Status will show you whether or not a file has been saved or committed. If you run this command and see that files are red, use git add . to tell git to save them.',
    code: 'git status'
}
//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties 
    following the guidelines above to describe the add command.
*/

//CODE HERE
let add = {
    description: 'Add is a command that will tell git to start saving the files that are in your present working directory.',
    code: 'git add .'
}
//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

//CODE HERE
let commit = {
    description:'commit will stage your changes to github and commit them. This is the final step before pushing your files to github.' ,
    code:'git commit -m "comment about your code and changes made to it"'
}
//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'addRemote' with 'description' and 'code' properties
    following the guidelines above to describe the command to add a remote location to your git repository.
*/

//CODE HERE
let addRemote = {
    description:'The git remote command lets you create, view, and delete connections to other repositories. Remote connections are more like bookmarks rather than direct links into other repositories. Instead of providing real-time access to another repository, they serve as convenient names that can be used to reference a not-so-convenient URL.' ,
    code:'git remote add origin'
}
//////////////////PROBLEM 9////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties 
    following the guidelines above to describe the push command.
*/

//CODE HERE
let push = {
    description:'The git push command is used to upload local repository content to a remote repository. Pushing is how you transfer commits from your local repository to a remote repo.' ,
    code:'git push master origin'
}