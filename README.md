Development

```
cd app/

npm run dev
```

Build production image

```
./build
```

running the production image

```
./run
```

or build and run

```
./build_and_run
```

Migrate database

```
DATABSE_URL=postgresql://postgres:postgres@localhost/letter-friend npx migrate dev --name [name]

```

When docker says something does not work:

```
docker system prune
```
