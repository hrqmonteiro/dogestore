<img src="https://github.com/hrqmonteiro/dogestore/assets/17055027/03addcbf-59ac-4420-a2a5-a450c6d35858" width="200">
<img src="https://github.com/hrqmonteiro/dogestore/assets/17055027/dd830302-9dad-4b36-bdfe-c24588fde5dd" width="200">
<img src="https://github.com/hrqmonteiro/dogestore/assets/17055027/6d88b6d1-acec-4322-8a6d-1d2152f93dcd" width="200">
<img src="https://github.com/hrqmonteiro/dogestore/assets/17055027/2e6cc107-a34e-43ea-bc4b-373260820696" width="200">
<img src="https://github.com/hrqmonteiro/dogestore/assets/17055027/c225f506-557b-4da3-a8a1-d887fe7e4ee3" width="200">

<br/>
<br/>
<br/>

Aplicação DogeMart feita para processo seletivo da Hiskek.

# Stack

- React Native
- Expo
- TypeScript
- Jotai
- GraphQL
- AWS Amplify

# Instalação e execução

## Executando localmente

- Instalar os pacotes:

```
yarn
```

- Rodar em Expo Go:

```
yarn start
```

- Rodar em Expo modo Development Build (recomendado):

```
yarn android
```

ou

```
yarn ios
```

**Obs**: no iOS, instalar primeiro os `CocoaPods` com o comando `npx pod-install`

# Amplify

- Instalar e configurar a AWS através do [awscli](https://aws.amazon.com/pt/cli/)
- Instalar o [Amplify CLI](https://docs.amplify.aws/javascript/tools/cli/start/set-up-cli/)

- Configure seu usuário com o comando:

```
amplify configure
```

- Inicie uma aplicação amplify com o comando:

```
amplify init
```

- Adicione autenticação através do Cognito com o comando:

```
amplify add auth
```

- Adicione uma api GraphQL (AppSync) com o comando:

```
amplify add api
```

- Deploy nas mudanças feitas no amplify para o CloudFormation com o comando:

```
amplify push -y
```
