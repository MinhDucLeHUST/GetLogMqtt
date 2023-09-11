const Config = {
  GW_PORT: "1883", // MQTT Local port
  GW_ADDRESS: "192.168.88.165", // MQTT Local Address
  GW_EUI: "", // EUI Gateway
  USERNAME: "homegateway",
  PASSWORD: "vnpttechnology",
};

const Topics = {
  /*Topic communicate with Agent Process*/
  // MQTT_TOPIC_REICEVIE_MESSAGE_OUT_SIDE_AGENT_PROCESS		: "MessageOutSideAgentProcessToConnAssistant",		//MQTT Topic to receivce message from AgentProcess
  // MQTT_TOPIC_SEND_MESSAGE_OUT_SIDE_AGENT_PROCESS			: "MessageOutSideConnAssistantToAgentProcess",		//MQTT Topic to send message AgentProcess
  /*Topic communicate with zigbee-handle*/

  /*Topic communicate with Device Management*/
  // MQTT_TOPIC_REICEVIE_MESSAGE_OUT_SIDE_DEVICE_MANAGEMENT	: "MessageOutSideDeviceManagementToConnAssistant",		//MQTT Topic to receivce message from DeviceManagement
  // MQTT_TOPIC_SEND_MESSAGE_OUT_SIDE_DEVICE_MANAGEMENT		: "MessageOutSideConnAssistantToDeviceManagement",		//MQTT Topic to send message DeviceManagement
  /*Topic communicate with zigbee-handle*/
  MQTT_TOPIC_REICEVIE_MESSAGE_IN_SIDE_ZIGBEE:
    "ConnectivityAssistantInSideZigbeeHandleToCommunicate", //MQTT Topic to receivce message from zigbee-handle
  MQTT_TOPIC_SEND_MESSAGE_IN_SIDE_ZIGBEE:
    "ConnectivityAssistantInsideCommunicateToZigbeeHandle", //MQTT Topic to send message to zigbee-handle

  /*Topic communicate with BLE*/
  // MQTT_TOPIC_REICEVIE_MESSAGE_IN_SIDE_BLUETOOTH			: "ConnectivityAssistantInSideBluetoothHandleToCommunicate", //MQTT Topic to receivce message from BLE
  // MQTT_TOPIC_SEND_MESSAGE_IN_SIDE_BLUETOOTH				: "ConnectivityAssistantInsideCommunicateToBluetoothHandle",	 //MQTT Topic to send message to BLE

  /*Topic communicate with zigbee-handle*/
  // MQTT_TOPIC_REICEVIE_MESSAGE_IN_SIDE_WIFI				: "ConnectivityAssistantReceiveMessageInSideWifi", //MQTT Topic to receivce message from zigbee-handle
  // MQTT_TOPIC_SEND_MESSAGE_IN_SIDE_WIFI					: "ConnectivityAssistantSendMessageInsideWifi",	 //MQTT Topic to send message to zigbee-handle

  /*Topic Keepalive*/
  // MQTT_TOPIC_REICEVIE_MESSAGE_OUT_SIDE_KEEPALIVE 			: "keepAlive_connectivityAssistant",
  // MQTT_TOPIC_SEND_MESSAGE_OUT_SIDE_KEEPALIVE 				: "keepAlive_response_connectivityAssistant",
  // ID_KEEPALIVE 											: "connectivityAssistant",

  /* Topic in Zigbee network */
  GW_COMMANDS: "gw/" + Config.GW_EUI + "/commands",
  GW_HEART_BEAT: "gw/" + Config.GW_EUI + "/heartbeat",
  // GW_HEART_BEAT"gw/+gatewayEui/heartbeat",

  // GW_COMMANDS: "gw/" + "+gatewayEui" + "/commands",
  // GW_APS_RESPONSE: "gw/" + Config.GW_EUI + "/apsresponse",
  // GW_DEVICE_JOINED: "gw/" + Config.GW_EUI + "/devicejoined",
  // GW_DEVICE_LEFT: "gw/" + Config.GW_EUI + "/deviceleft",
  // GW_EXECUTED: "gw/" + Config.GW_EUI + "/executed",
  // GW_ZCL_RESPONSE: "gw/" + Config.GW_EUI + "/zclresponse",
};

module.exports = { Config: Config, Topics: Topics };
