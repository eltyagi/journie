# Journie

Journie, a productivity and habit tracking cross-platform application bring together the power of productivity tracking through technology along with the support of journaling under the umbrella of a single platform. From the user’s perspective, Journie possess the following features:
  • Modern UI following minimal design principles and ease of use.
  • Features to add, track, and delete a variety of events, tasks and upcoming points of
  interest.
  • An interactive dashboard for visualization of productivity in real time based on user
  data.
  • A flexible, easy to use word editor allowing users to personalize their journal.
  • Cross-platform compatibility.
  • A multi-node user productivity tracking engine to provide users with a productivity
  score.
  • An accurate sentiment analysis model to measure sentiment and polarity of user journal
  entries.
The culmination of all these features is a modern, easy to use application which allows user to capture, track and therefore improve their day-to-day lives.

![](https://github.com/Lakshya3190/journie/blob/master/UI.png)

### Electron-React File Structure and Design

Electron is not compatible with React out-of-the-box. While create-react-app sets-up a development ready React application, a suitable file-structure is essential to protect the application from ejecting and to enable its communication with electron. The following are major considerations when integrating electronJS with reactJS:
- Changing development server port from localhost:3000 to electronJS chromium browser. 
- Adding electron-start and electron-build scripts to package.json. 
- Creating a “shared” folder for react-electron communication within the “Src” folder to ensure that it is packaged as a static file when building the react application.

![](https://github.com/Lakshya3190/journie/blob/master/electron.png)

### Multi-Node User Behavior Tracking Engine

A major feature of Journie is its ability to provide users with real-time insights about their activity. One enabler in this regard is the feature of user behavior tracking and sentiment analysis.
For this purpose, a multi-node user behavior tracking engine is developed. This engine utilizes a combination of fuzzy-logic units, and machine learning models to output a productivity score for the user. This productivity score is stored in the database and is visible to the user on Journie’s dashboard.

![](https://github.com/Lakshya3190/journie/blob/master/NODES.png)


