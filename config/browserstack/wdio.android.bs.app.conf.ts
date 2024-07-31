import { config as baseConfig } from '../wdio.shared.conf.js';

export const config: WebdriverIO.Config = {
    ...baseConfig,
    // ============
    // Specs
    // ============
    specs: [
        '../tests/specs/apptest.spec.js',
    ],
    exclude: [
        // Exclude this one because the test can only be executed on emulators/simulators
        '../tests/specs/**/app.biometric.login.spec.js',
    ],

    // =============================
    // Browserstack specific config
    // =============================
    // User configuration
    user: process.env.BROWSERSTACK_USERNAME || 'arunpandian5',
    key: process.env.BROWSERSTACK_ACCESS_KEY || 'Uhp2Xx2ThptLfDYLcF47',
    // Use browserstack service
    services: [['browserstack', {
        opts: {
            proxyHost: '',
            proxyPort: '',
            proxyUser: '',
            proxyPass: ''
        }
    }]],

    // ============
    // Capabilities
    // ============
    // For all capabilities please check
    // http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
    capabilities: [
        {
            // Set URL of the application under test
            // 'appium:app': 'bs://sample.app',

            'bstack:options': {
                // Set your BrowserStack config
                debug: true,

                // Specify device and os_version for testing
                deviceName: 'iPhone 14 Pro Max',
                osVersion: '16',
                platformName: 'ios',

                // Set other BrowserStack capabilities
                // projectName: 'wdio-test-project',
                // buildName: 'android',
                // sessionName: 'wdio-test'
            }
        },
    ] as WebdriverIO.Capabilities[]
};
