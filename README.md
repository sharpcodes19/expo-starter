## Installation

This project is using [`expo-dev-client`](https://docs.expo.dev/develop/development-builds/introduction/).

If you are using a device, you need to enable the device's `Development Mode > USB debugging`.
If you are using an emulator, just open the emulator.

Then proceed...

If you are running for the first time:

```bash
yarn install
yarn expo prebuild --clean
yarn expo android
```

If the project already have a prebuild `android` folder:

```bash
yarn dev
```
