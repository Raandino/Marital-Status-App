# Marital Status App

## Overview

This project was developed as a technical test for a React-native FrontEnd position. The main goal was to retrieve and display a list of \"Marital Status\" records from a bank's database. This application was built using **React Native** v0.74.5 and utilizes **Expo** for development.

## Features

- **Splash Screen**: A welcoming screen that appears when the app launches.
- **Sign-In Screen**: This screen allows users to authenticate with the backend and securely save the token.
  - **Test Credentials**:
    - Username: `admin`
    - Password: `password`
- **Marital Status List**: Once authenticated, the app fetches the marital status records from the backend.
- **Navigation**: Users can select an option from the list, which navigates them to a dedicated end screen.

## Technical Details

- The application retrieves data from the backend once the user is signed in.
- On selecting a marital status option, the app navigates to an end screen to display the selection.
- The design adheres to specified spacing and design guidelines, ensuring a clean and user-friendly interface.

## Testing

- Test files were not completed due to time constraints; however, the core functionality of the app has been implemented and tested.
- The app works on both Android and iOS devices,** but it was optimized for IOS devices due to time and hardware constrains**.

## Installation and Setup

To run the app, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/Raandino/Marital-Status-App/tree/main
cd Marital-Status-App
```

2. Install dependencies:

```bash
npm install
```

3. Start the Expo project:

```bash
expo start
```

4. Scan the QR code with the Expo Go app on your mobile device, or run the app on an emulator.

## Specific Configurations

- **Expo** was used to streamline the development process and facilitate easy testing on both Android and iOS platforms.

## Acknowledgments

If you have any questions or require further assistance, please feel free to reach out at aandino186@gmail.com.
