just run: `./run`
build & run: `./build_and_run`
autorebuild front-end & run: `./auto_renew`

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

Create database

```
npm run db:create
```

Migrate database

```
npm run db:migrate
```

When docker says something does not work:

```
docker system prune
```
