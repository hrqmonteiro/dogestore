![![alt text](image-1.png)](image.png)

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

- Instalar e configurar a AWS através do [awscli](https://aws.amazon.com/pt/
  cli/)
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
