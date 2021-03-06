var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var fileUpload = require('express-fileupload');
var mongoose = require("mongoose");
var mongodb = require('mongodb');
var ObjectID = require('mongodb').ObjectID;
var gridfs = require('gridfs-stream');
var fs = require('fs');

// mongodb connection
mongoose.connect("mongodb://localhost:27017/PartnerDb", (err, response) => { if (err) { return err; } });
mongoose.Promise = global.Promise;
var app = express();
var db = mongoose.connection;
gridfs.mongo = mongoose.mongo;
var Schema = mongoose.Schema;
var router = express.Router();
var tempDir = './temp/';
app.use(fileUpload());
app.use(bodyParser());
app.use(bodyParser.json({ limit: '20mb' }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS,PATCH');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-with,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

router.get("/", (req, res) => {
    res.send('Partner Portal Server')
});



// Schemas

var media = new Schema({
    userId: { type: String },
    fileId: { type: String },
    name: { type: String },
    type: { type: String },
    date: { type: Date }
});

// Models

var mediaModel = mongoose.model('media', media, 'media');
// Functions
function fetchOne(name, query, cb) {
    db.collection(name).find(query).next().then((result) => {
        cb(result);
    });
}

function fetchById(name, id, cb) {
    var id = new ObjectID(id);
    db.collection(name).find({ _id: id }).toArray((err, result) => {
        cb(result);
    });
}
function fetchAll(name, query, cb) {
    db.collection(name).find(query).toArray((err, result) => {
        cb(result);
    });
}

function createOne(name, data) {
    db.collection(name).insertOne(data);
}
function updateOne(name, data) {
    db.collection(name).updateOne(data);
}

// upload File
db.once('open', function () {
    router.post('/uploadFile', (req, res) => {
        var file = req.files.file;
        db_filename = file.name;
        localFile = tempDir + db_filename;
        file.mv(tempDir + db_filename, (err) => {
            if (err)
                return res.status(500).send(err);
        });
        var gfs = gridfs(db.db);
        var writestream = gfs.createWriteStream({ filename: db_filename });
        fs.createReadStream(localFile).pipe(writestream);

        writestream.on('close', function (file) {
            addMedia(req.body.id, req.body.type, file);
            removeFile(localFile);
            res.send({ status: 'success', message: 'File Stored', data: file });
        });
    });

    router.post('/getFile', (req, res) => {
        tempPath = path.join(__dirname, '..') + '\\app\\src\\assets\\temp\\';
        mediaModel.find({ userId: req.body.userId, type: req.body.type }, (err, data) => {
            if (err) {
                res.send(err);
            } else {
                var gfs = gridfs(db.db);
                var readstream = gfs.createReadStream({
                    _id: data[0].fileId
                });
                var bufferArray = [];
                readstream.on('data', function (chunk) {
                    bufferArray.push(chunk);
                });
                if (!fs.existsSync((tempPath + data[0].name))) {
                    readstream.on('end', function () {
                        var buffer = Buffer.concat(bufferArray);
                        fs.writeFileSync(tempPath + data[0].name, buffer, 'utf-8')
                        fs.close(1, function () {
                            console.log('wrote the file successfully');
                        });
                    })
                }
                res.send({ status: 'success', path: '/assets/temp/' + data[0].name });
            }
        });

    });

    router.post('/readFile', (req, res) => {
        console.log(req.body);
        var gfs = gridfs(db.db);
        var rstream = gfs.createReadStream({ _id: req.body.fileId });
        var bufs = [];
        rstream.on('data', function (chunk) {
            bufs.push(chunk);
        }).on('error', function () {
            res.send();
        }).on('end', function () {
            var fbuf = Buffer.concat(bufs);
            // res.writeHead(200, {
            //     'Content-Type': 'application/jpg',
            //     'Content-Disposition': 'attachment; filename=some_file.jpg',
            //     'Content-Length': fbuf.length
            // });
            var buf = new Buffer(fbuf).toString('base64');
            // var buf = 'asd';
            console.log(fbuf);
            res.end(fbuf);
        });
    });
});


function addMedia(id, type, file) {
    data = {
        userId: id,
        fileId: file._id,
        name: file.filename,
        type: type,
        date: file.uploadDate,
    }

    var Media = new mediaModel(data);
    Media.save((err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Media Created');
        }
    })
}
function removeFile(filename) {
    fs.unlink(filename, function (err) {
        if (err) throw err;
        console.log('File deleted!');
    });
}


app.use("/", router);

app.listen(3000, () => console.log('Portal listen 3000 port'))