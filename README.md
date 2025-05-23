# NPM Package Installation

// For temporary allowing to installl nuget package or any new ShadCN component by turn off TLS

// Step 1: Turn off TLS
set NODE_TLS_REJECT_UNAUTHORIZED=0

// Step 2: Install or Install component
npx shadcn@latest init
or
npx shadcn@latest add accordion

// Step3: Turn on TLS
set NODE_TLS_REJECT_UNAUTHORIZED=1

# ShadCn Installation

https://ui.shadcn.com/docs/installation/vite

1. Follow the Shadcn documentation to install any shadcn components on your project.
2. Check components >> ui folder
