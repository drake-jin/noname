# noname
무제

# Development
#### client
localhost:3000

#### server
localhost:4000

# Requirements
- node 12.16.1

```
npm install -g @nestjs/cli lerna ts-node yarn
```

# lerna cheatsheet

#### add dependnecies to specific repository
```
lerna add react-google-button --scope=@noname/web
```

#### To do with yarn

```
lerna run test:watch --scope @noname/api
```