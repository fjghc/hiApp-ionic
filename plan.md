# [hiApp-ionic](http://jackey-sparrow.github.io/)

[![GitHub issues](https://img.shields.io/github/issues/Jackey-Sparrow/hiApp-ionic.svg?style=flat-square)](https://github.com/Jackey-Sparrow/hiApp-ionic/issues)

a hybrid app basic on ionic : [hiApp-ionic](http://jackey-sparrow.github.io/)

all the UI and function will follow [hiApp(written by F7)](http://hi.dearb.me/)

#schedule

- [x] login UI 
- [x] translate
- [x] need a language service
- [x] localStorage 
- [x] Tweet UI
- [x] add tweet UI
- [x] Contact UI
- [x] use gulp to Compression the code(in jackey-sparrow.github.io project)
- [x] log out function
- [x] implement the online web of this project
- [x] Setting UI
- [x] add reply comment use actionSheet
- [x] remove the edit icon on the right up corner, and add the add comment icon on the header of comments
- [x] $ionicModal hide still lost the scroll position, use no-tap-scroll='true'
- [x] make the small item to a component
- [x] add tweet comment UI
- [x] new a fold name 'app' to keep the platform code 
- [x] page num and total directive
- [x] picture browser directive
- [x] when no more data, show message
- [x] use scss(not going to use)
- [x] not goning to use loading-bar
- [x] use gulp-karma to run the test case(not going to write the test case)
- [x] ion-alert should has a icon
- [x] google map(not translate)(can not use in China)
- [x] baidu map / bing map(high)
- [x] contacts search bar need to optimize(still has some bug,may remove the title in header)(high)
- [x] use gulp to auto general index.html, no need to inject the script url by hand(gulp-inject)
- [x] translate use json file(change this tp issue)
- [x] Tweet post(including photo upload)(high)
- [ ] use lazy load to deal with the images(ocLazyLoad)
- [ ] performance optimize(including watchers / scope / digest time),should add the function at the beginning
- [ ] ionic android (not ready)
- [ ] ionic ios(ready)
- [ ] after finish the implement, add a build version


# how to run

```
npm install -g http-server
cd 'your local directory' (ps: cd to the 'www')
http-server

```
or

```
put the project to your IIS

```

or

```
use the webstorm to open the index.html

```

# use gulp
- go to your directory and download the package

```

npm install

```

- configure you gulp configurations in webstorm

  ##process :

  ```
  Run->Edit Configurations -> add a new configuration -> select gulp.js
  ```


  ##setting:


 ```
 Gulpfile: D:\Ionic\hiApp-ionic\gulpfile.js
 Node interpreter : C:\Program Files\nodejs\node.exe
 Gulp package : D:\Ionic\hiApp-ionic\node_modules\gulp
 ```
 
 
# latest ionic download
 
 [ionicframwork](http://code.ionicframework.com/#)
