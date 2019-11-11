## node-red-contrib-mongodb-variable

A [Node-RED](http://nodered.org) node to query [MongoDB](https://www.mongodb.com/).

    Edited by Andrii Lototskyi

### Install

Run the following command in the root directory of your Node-RED install

    npm install node-red-contrib-mongodb-variable

 MongoDB node driver 3.1.13 interface for Node-RED
 based on [node-red-bluemix-nodes](https://github.com/node-red/node-red-bluemix-nodes/tree/master/mongo) and [MongoDB 3 Driver](http://mongodb.github.io/node-mongodb-native/3.0)
 Please refer to the [mongoDB node driver 'Collection' documentation](http://mongodb.github.io/node-mongodb-native/3.0/api/Collection.html) to read about each operation.

### Set Credentials

   add data to settings.js

    mongoConnects:
    {
       uri: "mongodb://login:password@host:27017/dbName"
    },


### Example For Request

   set data in function node

    msg.payload = {"login": "login"};
    return msg;


### Example node-red flowgit 

Import the flow below in an empty sheet in nodered

    [{"id":"f40a8af5.55fed8","type":"mongodb-var in","z":"1797a27a.5d0c6e","service":"_ext_","configNode":"49d0a8a1.8be078","name":"MongoDB","collection":"","operation":"find.toArray","x":464.5,"y":262,"wires":[["de8e6bf4.a24618"]]},{"id":"5c17003c.47d0d","type":"inject","z":"1797a27a.5d0c6e","name":"Start","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"onceDelay":0.1,"x":143.5,"y":262,"wires":[["ced363e1.72367"]]},{"id":"ced363e1.72367","type":"function","z":"1797a27a.5d0c6e","name":"Request","func":"msg.payload = {};\nmsg.collection = 'collection_name';\nreturn msg;","outputs":1,"noerr":0,"x":294.5,"y":262,"wires":[["f40a8af5.55fed8"]]},{"id":"de8e6bf4.a24618","type":"debug","z":"1797a27a.5d0c6e","name":"Log Out","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"true","x":635.5,"y":262,"wires":[]},{"id":"49d0a8a1.8be078","type":"mongodb-var","z":"","uri":"mongodb://localhost:27017/dbName","name":"connect","options":"","parallelism":"-1"}]
