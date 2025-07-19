export const specs = [
  {
    id: 'usb',
    name: 'USB-C',
    summary: 'Data transfer and power delivery.',
    description: `
      <p>Provides high-speed data transfer and power delivery.</br>
      The device can draw power from the USB-C port, but not charge. Charging circuitry is not included to save weight and space in the microrockets.</p>
    `
  },
  {
    id: 'cpu',
    name: 'ESP32-S3',
    summary: '240MHz dual core processor.',
    description: `
      <p>The <strong>ESP32-S3</strong> is a powerful microcontroller that runs the BeanOS operating system.</br>
      </p>
      <ul>
        <li>Dual-core 240MHz</li>
        <li>2.4GHz radio for WiFi, Bluetooth or ESP-NOW communication</li>
      </ul>
    `
  },
  {
    id: 'baro',
    name: 'Barometric Sensor',
    summary: 'BMP390 for barometric altitude measurement.',
    description: `
      <p>The BMP390 delivers precise pressure readings for altitude measurement and staging progression.</p>
    `
  },
  {
    id: 'imu',
    name: 'Inertial Measurement Unit',
    summary: 'BMI088 for 6-axis motion sensing.',
    description: `
      <p>A high performance Bosch 6DOF IMU.</p>
      <ul>
        <li>Acceleration measurement range up to ±24G</li>
        <li>Gyroscope measurement range up to 2000°/s</li>
      </ul>
    `
  },
  {
    id: 'ant',
    name: 'Antenna',
    summary: 'Antenna connector for 2.4GHz communication.',
    description: `
      <p>u.FL connector to connect an external antenna. </br>
      Can be used for a live downlink during flight.</p>
    `
  },
  {
    id: 'led',
    name: 'LED',
    summary: '2 status indicator LEDs.',
    description: `
      <p>Two independent RGB LEDs provide visual feedback for device status.</p>
    `
  },
  {
    id: 'bat',
    name: 'Battery',
    summary: 'Rechargeable LiPo battery.',
    description: `
      <p>This connector connects to a standard LiPo battery to power the device during flight.</br>
      The voltage is monitored by the MCU and can be logged or transmitted wirelessly.</p>
      </p>
    `
  },
  {
    id: 'pyro',
    name: 'Pyro',
    summary: '4 pyro channels.',
    description: `
      <p><strong>Pyro channels</strong> for deployment and separation events.</p>
      <ul>
        <li>4 independent outputs</li>
        <li>Rated for 1A continuously, 5A for short bursts</li>
      </ul>
    `
  },
  {
    id: 'servo',
    name: 'Servo',
    summary: '2 servo motor channels.',
    description: `
      <p><strong>Servo channels</strong> for actuating mechanical systems.</p>
      <ul>
        <li>2 independent channels</li>
        <li>Direct connection to the battery voltage</li>
        <li>PWM signal level-shifted to the battery voltage</li>
        <li>Compatible with standard servo motors</li>
      </ul>
    `
  },
  {
    id: 'buzzer',
    name: 'Buzzer',
    summary: 'Piezo buzzer acoustic feedback.',
    description: `
      <p>Buzzer that can be used for various purposes.</p>
      <ul>
        <li>User feedback</li>
        <li>Finding back the Skybean after landing</li>
      </ul>
    `
  },
  {
    id: 'mem',
    name: 'Flash',
    summary: '2MB SPI Flash memory.',
    description: `
      <p>This memory is fully available for datalogging and separate from the main firmware.</br>
      The solder DFN8 is more robust at high acceleration than SD-cards</p>
    `
  }
];
