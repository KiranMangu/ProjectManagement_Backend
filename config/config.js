import * as config from './config.json'

var env = process.env.NODE_ENV || 'Serverconfig'; //MyComments: value is getting conveted to Key for json opeartion else it is taking as string
var envConfig = config[env];
Object.keys(envConfig).forEach(key => process.env[key] = envConfig[key]);
// console.log('env:' + env);

// MyComments: Not working as json is still considering as string and above work around helps to pull the information fron config.json
// var mapdata = config[Serverconfig];
// console.log(mapdata);
// Object.keys(config)
// Object.keys(mapdata).forEach(key => process.env[key] = mapdata[key]);