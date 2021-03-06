# riot-todo

##What?
A simple to do app built using riot.js, redis, and socket.io. What can we do in a day?

##Why?
To learn how to use riot, redis and socket.io together.

###To run locally:
* ```git clone ``` and ```cd riot-todo```
* ```npm install```
* ```npm run watch``` will compile all tags & start server, while watching tags & api directories for changes and recompiling on save
* visit ```localhost:8000 ```

##To-do list
- [x] Skeleton setup including HTML
- [x] Get socket.io working server => client
- [x] Get socket.io working client => server
- [x] Save all new incoming tasks to redis
- [x] Render all tasks to the main page from redis
- [x] Add riot functionality
- [x] Mark item as checked on click
- [x] Enable cross browser automatic re rendering
- [x] Add categories when adding a task
- [ ] Sort task list by something (category, time added, alphabetically)

##Biggest bugs
- [x] Remove setTimeout from `redis.js`
- [x] When we add a new task, they are all re-rendered

##Stretch and to-dos
- [x] Sort out file structure
- [x] Add CSS
- [x] Add categories
- [x] Push to heroku

Where we wanted to get to as a stretch goal for the day:
![img_4175](https://cloud.githubusercontent.com/assets/4185328/8679333/ff3d96d8-2a51-11e5-827a-535d97aafa51.jpg)
