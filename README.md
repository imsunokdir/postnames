# Pincode Lookup App

A web application that allows users to look up details associated with Indian postal codes using the Indian Postal Pincode API. The app provides an intuitive interface to enter a 6-digit postal code and fetches relevant details.

## Features
- Input field to enter a 6-digit Indian Postal Code.
- "Lookup" button to fetch details from the API.
- Displays the following details:
  - Post office name
  - Pincode
  - District
  - State
- Real-time filtering of post office names based on user input.
- Loader displayed while fetching data from the API.
- Error handling for invalid input and API response errors.

## How It Works
1. Enter a 6-digit postal code in the input field.
2. Click the **Lookup** button to fetch the corresponding data.
3. If the input is valid, the app makes a GET request to the API to retrieve details.
4. The fetched details are displayed on the page.
5. The user can filter the displayed results by typing in the filter input field.

### Error Handling
- Displays an alert if the entered postal code is not 6 digits.
- Shows error messages for any API response errors.
- Notifies the user if no postal data matches the filter criteria.

## Demo
[Check out the live app here!](https://postnames-git-main-imsunokdirs-projects.vercel.app/)

## Built With
- **HTML** for structure.
- **CSS** for styling.
- **JavaScript** for functionality and API interactions.

