# Crypto Web App

A cryptocurrency web app that provides real-time market data, historical charts, and detailed asset information. Built with a focus on performance and seamless user experience, this app integrates real-time APIs to fetch cryptocurrency data and display them in an intuitive interface.

## Screenshots

### Home Screen and Demo GIF
<div style="display: flex; justify-content: space-around;">
  <img src="public/assets/demo.gif" width="640" height="auto" />
</div>

## Features

- **Real-time Cryptocurrency Data**: Get the latest prices, market cap, 24-hour change, and other details of cryptocurrencies.
- **Asset List**: View a list of cryptocurrencies with detailed information such as price, value, and market trends.
- **Interactive Charts**: Visualize price trends over time with interactive line charts.
- **Search Functionality**: Easily search for a specific cryptocurrency with a smooth and animated search bar.
- **Custom UI Components**: A set of custom-designed components for displaying data and improving UI/UX.

## Tech Stack

- **Frontend**: React.js, HTML5, CSS3, JavaScript
- **State Management**: Redux (or GetX, based on your choice)
- **Charts**: `react-chartjs-2`, `chart.js` (for price chart visualizations)
- **API Integration**: CoinGecko API (or another crypto API provider)
- **Styling**: Styled-components, SCSS, or Tailwind CSS for custom UI elements
- **Version Control**: Git/GitHub

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/crypto-web-app.git
    cd crypto-web-app
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm start
    ```

4. Open your browser and go to `http://localhost:3000`.

## Usage

- **View Assets**: The homepage displays a list of popular cryptocurrencies with their current prices, 24-hour changes, and market caps.
- **Search**: Use the search bar to find specific cryptocurrencies by name or symbol.
- **Charts**: Click on any asset to view its historical price data over different time intervals (1 Day, 1 Week, 1 Month, etc.).
- **Customize**: The app is fully customizable. Feel free to modify the components or styling to fit your needs.

## Contribution

Contributions are welcome! Please feel free to fork the repository, create a branch, and submit a pull request. 

To contribute:
1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Make your changes
4. Commit and push (`git push origin feature-branch`)
5. Submit a pull request with a detailed description of the changes

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Acknowledgements

- [CoinGecko API](https://www.coingecko.com/en/api) for providing real-time cryptocurrency data
- [React.js](https://reactjs.org/) for the component-based structure
- [chart.js](https://www.chartjs.org/) for price chart visualizations
- [Styled Components](https://styled-components.com/) for styling

---

*Feel free to modify this readme according to the actual technologies you’re using or additional features you’ve added!*
