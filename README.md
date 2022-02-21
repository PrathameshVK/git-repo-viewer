# git-repo-viewer
Task for Fyle internship

Link to live app : https://gitrepo-viewer.netlify.app/

This is a simple github repo viewer app.
Just enter a valid github username in the search field and click on search button. It will show the repositories of that user.

# Features
- search by username<br><br>
  <img src="https://raw.githubusercontent.com/PrathameshVK/git-repo-viewer/main/frontend/screenshots/main_page.png" height="300" width="600" alt="main_page"><br><br>
  - search string must be a valid github username otherwise you will get user not found error page.<br><br>
  <img src="https://raw.githubusercontent.com/PrathameshVK/git-repo-viewer/main/frontend/screenshots/error_page.png" height="300" width="600" alt="main_page"><br><br>
- Upon entering valid username, it will fetch repo information of that user and present it in the form of cards.<br><br>
  <img src="https://raw.githubusercontent.com/PrathameshVK/git-repo-viewer/main/frontend/screenshots/repos.png" height="300" width="600" alt="main_page"><br><br>
- User page has some basic information of the user, like profile image, name, bio, location, and github profile link of that user. Clicking on link in the user info will take you directly to the user profile on github.
- Each repo card has information as follows -
  - Repo name
  - Last updated time of the repo
  - Number of stars, if have any
  - Description of the repo
  - Tags for topics of the repo
- Clicking on the repo name in the card will take you directly to the github link of that repo
- This page also has a search repo feature, which can be used to search among the available repos. We can search for repo name, description or topic name. Entered search string will be searched among all three and matching repos will be returned.
- Basic paginator is there to help you navigate among the repos. We can set limit of repos to be displayed at a time.<br><br>
  <img src="https://raw.githubusercontent.com/PrathameshVK/git-repo-viewer/main/frontend/screenshots/repo_limits.png" height="300" width="600" alt="main_page"><br><br>
- Currently, this app consumes basic version of free github api and the repo limit for any user is 30. So it will always return first 30 repos of the user😅
