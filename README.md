# 🏏 BPL Dream 11

A Dream 11 style cricket team builder web app — assemble your ultimate fantasy cricket team by choosing players within a limited coin budget.

## 🚀 Tech Stack

- **React 19** + **TypeScript**
- **Vite** — build tool
- **Tailwind CSS 4** + **daisyUI** — styling
- **React Icons** — icons
- **React Toastify** — toast notifications
- **Oxlint** — linting

## ✨ Features

### Navbar
- Logo and navigation links (Home, Fixture, Teams, Schedules)
- Live **coin balance** display with coin icon
- Responsive mobile dropdown menu

### Hero Banner
- Eye-catching banner section with background image, heading, and call-to-action button
- Fully responsive layout across mobile, tablet, and desktop

### Player Selection System
- **Available Players** — grid of all players fetched from `data.json`, each card shows:
  - Player photo, name, playing role (Batsman/Bowler/All-rounder/Wicket-keeper)
  - Country of origin
  - Batting and bowling style
  - Price
- **Choose Player** button to add a player to your team
- **Coin deduction** — selecting a player deducts their price from your coin balance
- **Insufficient coin validation** — blocks selection and shows an error toast if you don't have enough coins
- **Duplicate selection prevention** — a player already selected can't be selected again (button shows "Selected" and is disabled)
- **Team size limit** — maximum of **13 players** can be selected; button shows "Team Full" and disables once the limit is reached
- **Toast notifications** — success toast on purchase, error toast on insufficient coins or team full

### Selected Players
- Toggle between **Available** and **Selected** views
- Selected players list showing photo, name, and role
- **Selected players count** shown at the top of the list
- **Remove player** — remove any selected player from your team
- **Coin refund** — removing a player refunds their price back to your coin balance
- **Empty state** — friendly message shown when no players are selected yet

### Footer
- Newsletter subscription form (floating card design)
- About Us, Quick Links, and a second subscribe form
- Copyright section

## 📂 Project Structure

```
src/
├── assets/              # Images (logo, banner, footer logo, etc.)
├── components/
│   ├── Navber.tsx        # Navbar with logo, menu, coin balance
│   ├── Banner.tsx         # Hero banner section
│   ├── Footer.tsx         # Footer section
│   └── players/
│       ├── Players.tsx            # Available/Selected toggle container
│       ├── Available.tsx          # Available players grid
│       ├── AvailablePlayerCard.tsx # Single available player card
│       ├── Selected.tsx           # Selected players wrapper
│       └── SelectedPlayerCard.tsx # Selected players list with remove
├── types/
│   └── player.ts          # IPlayer interface
├── App.tsx
├── main.tsx
└── index.css
public/
└── data.json               # Player data source
```

## 🛠️ Getting Started

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Lint the project:

```bash
npm run lint
```

## 💰 How It Works

1. You start with **15,000 coins**.
2. Browse the **Available Players** list.
3. Click **Choose Player** to add a player to your team — their price is deducted from your coins.
4. Switch to the **Selected** tab to view your team.
5. Remove a player anytime — their price is refunded to your coin balance.
6. Build your team of up to **13 players** within your coin budget!