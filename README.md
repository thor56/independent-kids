# Independent Kids

## Project Setup

This project is a Next.js application designed to help parents set up carpooling profiles and match with other parents for carpooling purposes. It leverages modern web development technologies and follows best practices for structuring and configuring a Next.js application.

### Prerequisites

- Node.js (version 20.11.1 or later)
- npm (version 6.14.4 or later)
- Docker (optional, for containerized deployment)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/independent-kids.git
   cd independent-kids
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env.local` file in the root directory and add the following environment variables:

   ```bash
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

### Development

To start the development server, run:

```bash
npm run dev
```

This will start the Next.js development server on `http://localhost:3000`.


### Docker

To run the application in a Docker container:

1. **Build the Docker image:**

   ```bash
   docker build -t independent-kids .
   ```

2. **Run the Docker container:**

   ```bash
   docker run -p 8080:8080 independent-kids
   ```

This will start the application in a Docker container and make it accessible at `http://localhost:8080`.

### Project Structure

```
independent-kids
├─ .dockerignore
├─ .eslintrc.json
├─ .gitignore
├─ Dockerfile
├─ next.config.ts
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ public
│  ├─ file.svg
│  ├─ globe.svg
│  ├─ images
│  │  ├─ hero-bg.png
│  │  └─ onBoardingScreen1.png
│  ├─ next.svg
│  ├─ onBoardingScreen1.png
│  ├─ vercel.svg
│  └─ window.svg
├─ README.md
├─ src
│  ├─ app
│  │  ├─ Components
│  │  │  ├─ Alert.tsx
│  │  │  ├─ ChatInterface.tsx
│  │  │  ├─ common
│  │  │  │  └─ Button
│  │  │  │     └─ Button.tsx
│  │  │  ├─ home
│  │  │  │  └─ Hero
│  │  │  │     ├─ Hero.tsx
│  │  │  │     ├─ HeroContent.tsx
│  │  │  │     └─ HeroImage.tsx
│  │  │  ├─ layout
│  │  │  │  └─ Sidebar.tsx
│  │  │  └─ RegisterForm
│  │  │     ├─ common
│  │  │     │  └─ Button
│  │  │     │     └─ Button.tsx
│  │  │     └─ RegisterForm.tsx
│  │  ├─ favicon.ico
│  │  ├─ fonts
│  │  │  ├─ GeistMonoVF.woff
│  │  │  └─ GeistVF.woff
│  │  ├─ globals.css
│  │  ├─ icons
│  │  │  ├─ calendar.svg
│  │  │  ├─ chatbot.svg
│  │  │  ├─ drivers.svg
│  │  │  ├─ home.svg
│  │  │  ├─ index.ts
│  │  │  ├─ locations.svg
│  │  │  ├─ profile.svg
│  │  │  ├─ riders.svg
│  │  │  ├─ rides.svg
│  │  │  └─ svgs.ts
│  │  ├─ layout.tsx
│  │  ├─ onboarding
│  │  │  ├─ components
│  │  │  │  ├─ ChatInterface.tsx
│  │  │  │  ├─ ProfileScreen.tsx
│  │  │  │  ├─ ProgressIndicator.tsx
│  │  │  │  └─ WelcomeScreen.tsx
│  │  │  ├─ config
│  │  │  │  └─ steps.ts
│  │  │  ├─ hooks
│  │  │  ├─ layout.tsx
│  │  │  └─ page.tsx
│  │  └─ page.tsx
│  ├─ hooks
│  │  └─ useOnboarding.ts
│  ├─ lib
│  │  └─ styles
│  │     └─ constants.ts
│  └─ types
│     └─ svg.d.ts
├─ tailwind.config.ts
└─ tsconfig.json

```

### License

This project is licensed under the MIT License.
