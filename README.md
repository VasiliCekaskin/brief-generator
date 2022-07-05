Run project

```
npm run dev
```

or production ready:

```
./bin/run.sh
```

Migrate database

```
DATABSE_URL=postgresql://postgres:postgres@localhost/letter-friend npx migrate dev --name [name]
```
