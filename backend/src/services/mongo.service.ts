import mongoose, { ConnectOptions } from 'mongoose';


class MongoService {
    
  private INITIAL : boolean;
  private MONGO_URI: String;
  private REPLICA_NAME : String;
  private REPLICA_PORTS : Array<number>


  constructor() {

    this.INITIAL = true
    this.MONGO_URI = `${ process.env.NODE_ENV === 'development' ? process.env.MONGO_LOCAL_URI : process.env.MONGO_REMOTE_URI }`
    this.REPLICA_NAME = '';
    this.REPLICA_PORTS = [];

    mongoose.connection.on('connected', () =>  console.log("MongoDB connection established..."));
    mongoose.connection.on('disconnected', () => {
        if(this.INITIAL){
        console.log('MongoDB connecting...')
        }else{
        console.log('MongoDB disconnected, connecting...')
        }
        return setTimeout(() => this.connect(this.MONGO_URI), 3000);
    });
    }

    public start(){
        console.log("Mongo URI=",this.MONGO_URI)
        this.connect(`${this.MONGO_URI}`)
        // mongod --dbpath ~/data/db --logpath ~/data/log/mongodb/mongo.log --fork
        // sudo mongod --port 27017 --dbpath /var/lib/mongodb --logpath /var/log/mongodb/mongod.log --fork

    }

    public connect ( MONGO_URI: String = "" ) : Promise<unknown> {

    return new Promise((resolve,reject)=>{

        const options: ConnectOptions = {
        serverSelectionTimeoutMS: 3000,
        autoCreate:true,
        maxConnecting: Number.MAX_VALUE
        };
        
        return mongoose.connect(`${MONGO_URI}`, options ).then(
        () => { /** ready to use. The `mongoose.connect()` promise resolves to mongoose instance. */

            this.INITIAL = false
            return resolve(true)
        },
            (err:any) => { /** handle INITIAL connection error */ 
            if(this.INITIAL){
                console.log("MongoDB connection failed...")
                this.connect(MONGO_URI)
            }
        }
        );

    //  mongoose.connection.on('open', () => console.log('open'));
    //  mongoose.connection.on('reconnected', () => console.log('reconnected..'));
    //  mongoose.connection.on('disconnecting', () => console.log('disconnecting..'));
    //  mongoose.connection.on('close', () => console.log('closed...'));
    //  mongoose.connection.on('connected', () => console.log('connected'));

    })

    }

}

export default MongoService;