Description:
Dans ce projet React, on dispose de trois pages : "Accueil", "Produit" et "Détail".
 La page "Accueil" sert de page d'accueil de notre application. La page "Produit" affiche une liste de tous les produits disponibles. Chaque produit est présenté avec son titre, sa description, son prix et catégorie. Sur cette page, vous avez la possibilité d'effectuer différentes actions sur chaque produit, comme la modification, la création ou la suppression. Dans le premier scénario,
lorsque vous mettez à jour la page, les données reviennent à leur format d'origine. Ce
signifie que toute modification apportée aux informations sur le produit, telles que le titre,
la description, le prix ou la catégorie ne seront pas enregistrés lorsque vous actualiserez la page.
Les données reviennent à leur état d'origine comme si aucune modification n'avait été apportée. Cependant, dans le deuxième scénario, les données restent avec les modifications que vous avez apportées.
 Ce implique que toutes les modifications que vous effectuez sur les informations sur le produit, telles que la mise à jour du titre, de la description, du prix ou de la catégorie persistera même si vous actualisez la page ou éloignez-vous. Les données conservent l'état modifié. Sur le Page "Produit", si vous cliquez sur le titre d'un produit spécifique, il
vous amènera à la page « Détail ». Ici, vous pouvez voir plus en détail
des informations sur le produit, y compris une photo et des détails supplémentaires. Pour
produits nouvellement ajoutés, puisque vous avez mentionné que vous considériez une image aléatoire,cela signifie que lors de la création d'un nouveau produit, l'application automatiquement génère ou attribue une image aléatoire pour ce produit. Cela garantit que même
si vous n'avez pas fourni d'image spécifique, le produit nouvellement ajouté a toujours une
image qui lui est associée. Le projet comprend également un système de routage, qui
vous permet de naviguer entre les différentes pages de manière transparente. Vous pouvez passer 
de la page "Accueil" à la page "Produit" puis à la Page « Détail » en suivant les liens appropriés ou en utilisant le navigation fournie. De plus, il y a un bouton « Retour »
mis en œuvre dans le projet. Ce bouton vous permet de revenir au précédent
page ou étape de votre historique de navigation. Cela aide à fournir un utilisateur fluide
expérience en permettant aux utilisateurs de revenir facilement en arrière ou de naviguer vers leur précédentemplacement dans l’application.

Lignes de commande (libraires) :
1.npx create-react-app tp2
2.npm install react-router-dom ( for handling routing,)
3-npm install bootstrap
4-Install json-server globally: npm i -g server
5- using the products.json file: json-server --watch products.json --port 5000
6.npm start
7.npm run server
8.npm run build
9.npx serve -s build -p 8080(for example)
10.npm run build
11.npm i json-server



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
