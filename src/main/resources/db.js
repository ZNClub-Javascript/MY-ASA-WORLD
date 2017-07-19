/* MONGODB SCRIPTS */
// link for spring data queries : https://docs.spring.io/spring-data/data-mongo/docs/current/reference/html/#mongodb.repositories.queries

//connect to host
mongo "mongodb://myasaworld-shard-00-00-zadym.mongodb.net:27017,myasaworld-shard-00-01-zadym.mongodb.net:27017,myasaworld-shard-00-02-zadym.mongodb.net:27017/test?replicaSet=myasaworld-shard-0" --authenticationDatabase admin --ssl --username <USERNAME> --password <PASSWORD>

//switch database
use asa

// check current db
db

// create collection
db.createCollection(“test”)

// insert document into test collection
db.test.insert(
{'name':'ADMIN','stress':'high'}
)

// drop table
db.member.drop()

// check result of operation OR show collection
db.test.find().pretty()

// search regex
db.member.find({"name": /.*search_query.*/search_options})

// count 
count()

// load script
load("srcipt.js");


/* SCHEMA */
user{id,username,password,role}
member{id,gender,dob'yyyy-mm-dd',contact,addr,name,role,group,school}
schedule{id,class,names[],date'dd/mm/yy',time'hh:mm am',type,sign}

