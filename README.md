# Overview
This is the official website of Sanatan Students' Society at the University of Calgary. The website serves a purpose to provide information and updates regarding our events, initiatives, and opportunities to be involved with the club.

# Features
- Interactive listing of upcoming and past events
- Volunteer opportunities
- Photos and community highlights
- Responsive design that is compatible with devices such as phones as small as 320px, ranging all the way up until 8k ultra wide displays (7680px+)

# Tech Stack
- React.js: frontend framework
- JavaScript: core language
- CSS: styling
- GitHub Pages: hosting environment

# Project Structure
```plaintext
website/
├── public/               # Static assets (images, icons, etc.)
├── src/                  # Main source code
│   ├── components/       # Reusable UI components
│   ├── data/             # Event and volunteer info (JS files)
│   ├── App.js            # Root React component
│   └── index.js          # Entry point
├── package.json          # Project dependencies & scripts
├── README.md             # Project documentation
└── .gitignore            # Ignored files/folders ```
# Setup and Development
1. Clone the repo using the following commands:
    git clone https://github.com/shivanshiv/Sanatan-Students-Society-Website.git
    cd Sanatan-Students-Society-Website
2. Install the dependencies:
    npm install
3. Start local development server:
    npm start
4. Build for production:
    npm run build
5. Deploy to Github Pages:
    npm run deploy

# Live Website
https://sanatanstudentssocietyucalgary.ca/

# Updating Website Files
Run the following commands in order to update files on the website:
cd website              # Or whichever directory you desire to use
git add .               # Can specify the folder or file you desire to add
git commit -m "Update website content"
git push origin main
npm run deploy

