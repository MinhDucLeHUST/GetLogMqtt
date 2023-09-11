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

// Create an async function to listen to MQTT topics after a delay
async function subscribeToTopicAfterDelay(topic, delayInSeconds) {
    // Create a promise that resolves after the specified delay
    const delayPromise = (delay) =>
        new Promise((resolve) => setTimeout(resolve, delay));

    console.log(`Waiting for ${delayInSeconds} seconds...`);
    await delayPromise(delayInSeconds * 1000);

    // Create an MQTT client
    const client = mqtt.connect(connectUrl);

    // Promisify the 'connect' event
    const connectPromise = new Promise((resolve, reject) => {
        client.on('connect', () => {
            resolve();
        });

        client.on('error', (err) => {
            reject(err);
        });
    });

    // Promisify the 'message' event
    const messagePromise = new Promise((resolve) => {
        client.on('message', (receivedTopic, message) => {
            // Check if the received topic matches the desired topic
            if (receivedTopic === topic) {
                resolve(message.toString());
            }
        });
    });

    // Subscribe to the specified topic
    client.subscribe(topic);

    // Wait for the MQTT client to connect
    await connectPromise;

    console.log(`Subscribed to topic: ${topic}`);

    try {
        // Wait for a message on the specified topic
        const message = await messagePromise;
        console.log(`Received message: ${message}`);
    } catch (err) {
        console.error('Error:', err);
    } finally {
        // Disconnect the MQTT client when done
        client.end();
    }
}

// Call the async function to subscribe to a topic after 10 seconds
subscribeToTopicAfterDelay('#', 10);
