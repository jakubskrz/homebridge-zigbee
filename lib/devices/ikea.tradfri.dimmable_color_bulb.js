const HomeKitDevice = require('../HomeKitDevice')

class IkeaTradfriDimmableColorBulb extends HomeKitDevice {
  static get description() {
    return {
      model: [
        'TRADFRI bulb E27 CWS opal 600lm',
      ],
      manufacturer: 'IKEA of Sweden',
      name: 'IKEA TRADFRI',
    }
  }

  getAvailbleServices() {
    return [{
      name: 'Bulb',
      type: 'Lightbulb',
    }]
  }

  onDeviceReady() {
    this.mountServiceCharacteristic({
      endpoint: 1,
      cluster: 'genOnOff',
      service: 'Bulb',
      characteristic: 'On',
      reportMinInt: 1,
      reportMaxInt: 300,
      reportChange: 1,
      parser: 'onOff',
    })
    this.mountServiceCharacteristic({
      endpoint: 1,
      cluster: 'genLevelCtrl',
      service: 'Bulb',
      characteristic: 'Brightness',
      reportMinInt: 1,
      reportMaxInt: 300,
      reportChange: 1,
      parser: 'dim',
    })
  }
}

module.exports = IkeaTradfriDimmableBulb
