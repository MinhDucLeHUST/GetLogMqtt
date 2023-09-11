const mqtt = require("mqtt");
var config = require("./config.js");
var handle_topic = require("./test.js");
const fs = require("fs");
const { kill } = require("process");
var kill_process = false;
// const test1 = require("./lib1.js")
/**
 * Set up prequisites for connection
 */
const timestamp = Date.now();
const dateFormat = new Date(timestamp);
const LOG_FILE = `./log/logGW_${dateFormat.getHours()}h${dateFormat.getMinutes()}m(${dateFormat.getDate()}thang${dateFormat.getMonth() + 1}).json`;

const HOST = config.Config.GW_ADDRESS;
const PORT = config.Config.GW_PORT;
const CLIENT_ID = "ThirdParty";

const connectUrl = `mqtt://${HOST}:${PORT}`;
const client = mqtt.connect(connectUrl, {
  clientId: CLIENT_ID,
  clean: true,
  connectTimeout: 4000,
  username: config.Config.USERNAME,
  password: config.Config.PASSWORD,
  reconnectPeriod: 1000,
});

// if (!kill_process) {
client.subscribe('#');

// Handle incoming messages
client.on('message', (topic, message) => {
  // console.log(`Received message on topic: ${topic}, Message: ${message.toString()}`);
  var get_topic = handle_topic.getHeartbeatTopic(topic);
  if (get_topic == "heartbeat") {
    var eui_gateway = handle_topic.getEuiGateway(topic);
    console.log("eui_gateway: ", eui_gateway);
    config.Config.GW_EUI = eui_gateway;
    kill_process = true;
    // console.log("Eui: ", config.Config.GW_EUI);
    client.unsubscribe('#');
  }
});
// }
// if (kill_process) {
/**
* Set up write the ']' to file on SIGINT
*/

process.on("SIGINT", () => {
  fs.appendFileSync(LOG_FILE, "]");

  // Exit the Node.js process gracefully
  process.exit(0);
});

/**
 * Subcribe topic (can add or remove listened topic in ./config.js)
 */
const listenedTopics = Object.values(config.Topics);
// async function subTopicAfterDelay(deplayInSeconds) {

// }
client.on("connect", () => {
  console.log(">> Connected");
  for (let topic of listenedTopics) {
    client.subscribe([topic], () => {
      console.log(`->> Subscribe to topic '${topic}'`);
    });
  }
});

/**
 * Event handle: write to file (name file format: logGW_<time>.json)
 */
var countMessage = 0; // index the message
fs.appendFile(LOG_FILE, "[", (err) => { });
client.on("message", (topic, payload) => {
  var content = `// ${countMessage}. ${topic}:\n${payload},\n\n`;
  fs.appendFile(LOG_FILE, content, (err) => {
    if (err) {
      console.error(err);
    }
    countMessage += 1;
  });
});
// }



