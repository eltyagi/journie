# Journie

Journie, a cross-platform artificial intelligence powered productivity tracking application is developed in this project. With a plethora of modern and interactive features, Journie aims to provide a smooth and seamless productivity tracking and journaling experience. Journie features a modern user-interface following the principles of minimalism and user comfort. Furthermore, Journie features a sentiment analysis model, and a multi-node user behavior tracking engine which aim to come together and offer users a personalized and easy-to-use way of tracking their productivity. All user data can be viewed from an interactive dashboard. As a multi-tenant application, all user data from Journie is stored in a single database, this allows for consolidated security, easier maintenance, and an optimized update cycle. Journie has been developed as a go-to application for all productivity needs and will continue to evolve with improved personalization and features.

![](https://github.com/Lakshya3190/journie/blob/master/UI.png)

### Electron-React File Structure and Design

Electron is not compatible with React out-of-the-box. While create-react-app sets-up a development ready React application, a suitable file-structure is essential to protect the application from ejecting and to enable its communication with electron. The following are major considerations when integrating electronJS with reactJS:
- Changing development server port from localhost:3000 to electronJS chromium browser. 
- Adding electron-start and electron-build scripts to package.json. 
- Creating a “shared” folder for react-electron communication within the “Src” folder to ensure that it is packaged as a static file when building the react application.

![](https://github.com/Lakshya3190/journie/blob/master/NODES.png)

### Multi-Node User Behavior Tracking Engine

A major feature of Journie is its ability to provide users with real-time insights about their activity. One enabler in this regard is the feature of user behavior tracking and sentiment analysis.
For this purpose, a multi-node user behavior tracking engine is developed. This engine utilizes a combination of fuzzy-logic units, and machine learning models to output a productivity score for the user. This productivity score is stored in the database and is visible to the user on Journie’s dashboard.

![](https://github.com/Lakshya3190/journie/blob/master/electron.png)


