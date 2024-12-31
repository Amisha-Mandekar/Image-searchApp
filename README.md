# Image-searchApp

Step-by-Step Instruction
1. Install Node.js and npm
Download and install Node.js from Node.js Official Website.
Confirm installation by running in the terminal:
bash
node -v
npm -v
2. Set up VS Code
Download and install VS Code from VS Code Official Website.
Install Angular Essentials extension pack in VS Code for better Angular development support.
3. Install Angular CLI
Open VS Code and the terminal (Ctrl+` ).
Run the following command to install Angular CLI globally:
bash
npm install -g @angular/cli
4. Create Angular Project
Run the following command to create the project:
bash
ng new image-search-app
Follow the prompts and choose:
CSS for styling.
Accept other default options.
5. Open Project in VS Code
Navigate to the project directory:
bash
cd image-search-app
Open the project in VS Code:
bash

6. Install Axios
Install Axios for API requests:
bash

npm install axios
7. Create Components and Services
Generate components and services from the VS Code terminal:
bash

ng generate component search
ng generate service image-search
8. Add the Code
Replace the contents of the files with the provided code:
src/app/image-search.service.ts
src/app/search/search.component.html
src/app/search/search.component.ts
src/app/search/search.component.css
9. Configure Unsplash API Key
Get your API key from Unsplash Developers.
Replace YOUR_UNSPLASH_ACCESS_KEY in image-search.service.ts with your actual API key.
10. Run the Project
Start the Angular development server:
bash

ng serve
Open the app in your browser at http://localhost:4200.
11. Debugging in VS Code
Add a breakpoint in your search.component.ts file.
Use the "Debug" tab in VS Code to start debugging.
12. Test and Iterate
Use the app to search for images and verify the functionality.
Test pagination and thumbnail click functionality.
