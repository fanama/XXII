# Test technique XXII - Full stack

## requirement

- nodejs
- pnpm

```sh
npm i -g pnpm
```

- mongodb

user schema

```json
{
    _id: ObjectId("62889bd3ffb0dbe322f9896a"),
    username: 'JohnDoe',
    password: 'aaa',
    isAdmin: false,
    __v: 0
  }
```
video schema 

```json
{
    _id: ObjectId("628909492e2eb53a0086e287"),
    name: 'Le.mp4',
    path: 'C:\\Users\\frako\\projet\\Node\\XXII\\backend/videos/Le.mp4',
    uploader: {
      username: 'fana',
      password: 'fana',
      isAdmin: false,
      _id: ObjectId("62889c358b163d47f4c9db89")
    },
    __v: 0
  }
```

## Installation

- 1. clone the project
- 2.  [launch the backend](./backend/README.md)
- 3. [launch the frontend](./frontend/README.md)
