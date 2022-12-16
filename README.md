# About
> #### Extensive template for NEXT.js with redux and redux-toolkit already set up.
> #### Bootstrap and bootstrap-icons are already included in the project.
> #### A separate bonus for beginners is that the project has examples of using redux and redux-toolkit in asynchronous mode.
> #### The project was created so that developers do not waste their time on pre-configuration, and it will be useful for beginners to see examples of a real project.

# Usage

> Clone the repository

```
gh repo clone titsex/next-extensive-template
```

> Installing dependencies

```
npm install
yarn install
pnpm install
```

> Build

```
npm build
yarn build
pnpm build
```

> Running

```
npm start
yarn start
pnpm start
```

# Why does authorization not work?
> Because local variables are empty

> #### Create .env file in the root folder of the project where you deployed the template
> #### Add http://localhost:3000 to the NEXTAUTH_URL variable in .env
> #### The code contains an example of authorization via github.
> #### For authorization to work, we need to create an OAuth App
> #### In order to create an OAuth App, go to the page: https://github.com/settings/developers
> #### After you have created the application, you need to copy the client ID and paste it into the GITHUB_ID variable in .env
> #### After that, on the page of your OAuth App, click "Generate a new client secret", copy the secret and paste it into the GITHUB_SECRET variable in .env
> #### Then go to the page: https://generate-secret.vercel.app/32, copy a random secret key and paste it into the SECRET field in .env
> #### And finally, JWT_SIGNING_PRIVATE_KEY. We advise you to install the node-jose-tools package globally (npm install node-jose-tools -g) and write the command ```jose newkey -s 256 -t oct -a HS512```, then copy the resulting object and paste it into JWT_SIGNING_PRIVATE_KEY in .env
