

// Handle connection events
// client.on('connect', () => {
//     //console.log('Connected to MQTT broker');
// });
// client.on('error', (error) => {
//     console.error('MQTT error:', error);
// });


function getHeartbeatTopic(topic) {
    const regex = /\/([^/]+)$/; // Match "/" followed by any characters except "/"
    const match = topic.match(regex);
    var heartbeat = "";
    if (match) {
        heartbeat = match[1];
        //console.log(heartbeat); // Output: "heartbeat"
    } else {
        //console.log("No match found");
    }
    return heartbeat;
}

function getEuiGateway(topic) { //8CF681FFFEE92E9E
    const regex = /gw\/([^/]+)\/heartbeat/; // Match a number between two slashes followed by "/heartbeat"
    const match = topic.match(regex);
    var eui_gateway = "";
    if (match) {
        eui_gateway = match[1];
        //console.log(`Extracted number: ${eui_gateway}`); // Output: "Extracted number: 123123"
    } else {
        //console.log("No match found");
    }
    return eui_gateway;
}

var handleTopic = {
    getEuiGateway: getEuiGateway,
    getHeartbeatTopic: getHeartbeatTopic,
};

module.exports = handleTopic;

