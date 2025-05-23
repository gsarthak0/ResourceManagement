# Resource Management DApp

This is a decentralized resource management application built with **Next.js**, **Hardhat**, **Drizzle ORM**, and **TailwindCSS**, featuring smart contract deployment, Web3 integration, and real-time geolocation features using Leaflet.

## ✨ Features

- Smart Contract integration with Hardhat & Ethers
- Web3 wallet authentication using Web3Auth
- Decentralized resource data storage using Drizzle ORM & PostgreSQL
- Real-time geolocation using Leaflet & Google Maps
- Cross-chain support using LayerZero
- AI integration via Google Generative AI

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/gsarthak0/ResourceManagement.git
cd ResourceManagement
2. Install Dependencies
bash
Copy
Edit
yarn install
⚠️ Make sure you're using Node.js >= 20.0.0

3. Setup Environment Variables
Create a .env.local file in the root directory:

env
Copy
Edit
# Example
DATABASE_URL=your_postgres_connection_url
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
WEB3AUTH_CLIENT_ID=your_web3auth_client_id
...
4. Push Database Schema (Drizzle ORM)
bash
Copy
Edit
yarn db:push
Optional: View DB in Drizzle Studio

bash
Copy
Edit
yarn db:studio
5. Run the Development Server
bash
Copy
Edit
yarn dev
Visit http://localhost:3000 in your browser.

📦 Project Structure
csharp
Copy
Edit
├── app/                # Next.js 14 App Router structure
├── components/         # UI components
├── contracts/          # Solidity smart contracts
├── drizzle/            # Drizzle ORM config
├── public/             # Static assets
├── styles/             # TailwindCSS and global styles
├── utils/              # Utility functions
├── package.json        
└── hardhat.config.ts   # Hardhat configuration
📜 Scripts
yarn dev — start the local dev server

yarn build — build for production

yarn start — start production server

yarn lint — run lint checks

yarn db:push — push schema using Drizzle ORM

yarn db:studio — view database in Drizzle Studio

🔐 Smart Contract Deployment
To deploy smart contracts using Hardhat:

bash
Copy
Edit
npx hardhat compile
npx hardhat run scripts/deploy.ts --network <network-name>
Configure network and private keys in hardhat.config.ts

📍 Deployment
This project is configured for seamless deployment on Vercel. Just push to main and Vercel will handle builds automatically.

📄 License
This project is licensed under the MIT License.
