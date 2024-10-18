# CryptoHub- Explore the World of Cryptocurrency

Crypto Hub is a cutting-edge web application designed to be your one-stop destination for everything related to cryptocurrencies. Whether you're a seasoned trader, a casual investor, or a curious newcomer, Crypto Hub provides comprehensive and up-to-date information to help you navigate the dynamic world of digital currencies.

**The application is built utilizing advanced React best practices, with state management handled by Redux Toolkit. The user interface is developed using Ant Design, while data visualization is achieved through Chart.js. Additionally, data is seamlessly fetched from multiple sources via RapidAPI integration.**

<img width="1680" alt="image" src="https://github.com/user-attachments/assets/03033127-fb5c-475c-8f5e-2b7df9ee2044">
# Cryptocurrency Dashboard

## Project Overview

**Objective**: To build a comprehensive cryptocurrency dashboard that provides real-time data on cryptocurrencies, including market prices, exchange information, news, blogs, and detailed cryptocurrency insights.

**Target Audience**: Crypto enthusiasts, investors, analysts, and traders seeking up-to-date information on the global cryptocurrency market.

## Features

### 1. Dashboard Overview
- Summary of major cryptocurrencies (e.g., Bitcoin, Ethereum) with key statistics like price, market capitalization, volume, and percentage change.
- Global market overview with total market capitalization and overall market performance.
- Real-time price tracking of cryptocurrencies.

### 2. Cryptocurrency Listings
- List all available cryptocurrencies with:
  - Current price (USD and other major fiat currencies).
  - Market capitalization.
  - 24-hour trading volume.
  - Percentage change (24h, 7d, 30d).
- Sort and filter cryptocurrencies by different metrics (e.g., price, market cap, volume).

### 3. Cryptocurrency Details
- Historical price charts (using `Chart.js`).
- Description and overview (purpose, founders, technology).
- All-time high/low prices.
- Links to official website, whitepaper, and social media.
- Exchange availability with volume and liquidity data.

### 4. News & Blogs Integration
- Display the latest news articles from reliable sources via APIs (e.g., RapidAPI).
- Blogs and opinion pieces relevant to the cryptocurrency market.
- Filter news by cryptocurrency or topic (e.g., market analysis, regulations).

### 5. Exchange Listings
- List of cryptocurrency exchanges with:
  - Trading pairs.
  - Trading fees.
  - 24-hour trading volume.
  - Supported cryptocurrencies.
- Compare exchanges based on trading volume, supported currencies, and fees.

### 6. User Authentication (Optional)
- Sign-up and login for personalized experience.
- “Watchlist” feature for tracking favorite cryptocurrencies.
- Email notifications for price changes, market news, or updates for tracked currencies.

### 7. Search and Filter
- Global search to find specific cryptocurrencies, news, blogs, and exchanges.
- Advanced filtering options by price, market cap, trading volume, and more.

### 8. Data Refresh and Real-Time Updates
- Real-time data fetched via APIs, with updates at regular intervals (e.g., 30 seconds for price).
- Use WebSockets for real-time price updates.

## Non-Functional Requirements

### 1. Performance
- Load time within 3 seconds for all users.
- Real-time data updates with minimal latency.
- Handle at least 1,000 concurrent users.

### 2. Security
- HTTPS for data transmission.
- Securely store API keys and sensitive data.
- JWT (JSON Web Token) for session management.

### 3. Usability
- Intuitive UI for both novice and advanced users.
- Responsive design across mobile, tablet, and desktop devices.

### 4. Availability
- 99.9% uptime.
- Use AWS/Azure for deployment and scalability.

### 5. Scalability
- Horizontal scaling to handle traffic spikes.
- Efficient management of growing cryptocurrency data.

## Technical Requirements

### Frontend
- **Framework**: React.js.
- **State Management**: Redux Toolkit.
- **UI Framework**: Ant Design.
- **Charts**: Chart.js for cryptocurrency trends and price data.
- **Real-Time Data**: WebSockets for live price updates.
- **API Calls**: Axios (or Fetch API).

### Backend
- **Framework**: Node.js with Express.
- **Database**: PostgreSQL for user data (watchlists, authentication).
- **Data Fetching**: RapidAPI for cryptocurrency prices, market data, news, and blogs.
- **Real-Time Updates**: WebSockets for pushing price updates.

### Security
- **Authentication**: JWT-based authentication for user login.
- **Encryption**: Encrypt sensitive data.
- **Rate Limiting**: Prevent API call abuse.

### Hosting & Deployment
- **Cloud Platform**: AWS for hosting.
- **Continuous Deployment**: CI/CD pipeline with GitHub Actions, CircleCI, or Jenkins.
- **Containerization**: Docker for containerizing the application.

## Setup and Installation

### Prerequisites
- Node.js
- PostgreSQL
- Docker (for containerization)

### Frontend Setup
```bash
# Clone the repository
# Install dependencies
npm install

# Start the development server
npm start