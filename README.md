## Getting Started

This course repository requires Node version 20+ and a [TursoDB account](https://turso.tech/). More details can be found in [the course notes](https://clumsy-humor-894.notion.site/Client-side-GraphQL-with-React-4248372d51604858aaf9eeb9127b6433).

1. Fork/Clone [the repo](https://github.com/Hendrixer/clientside-gql)
2. Install the Dependencies with `npm install`
3. Create a [Turso](https://turso.tech/) DB account (free)
   - Follow the instructions to make a new DB (you don’t need a replica)
   - Follow instructions to download the CLI and authenticate
   - Using the CLI, generate a token for your db with this command `turso db tokens create [your db name]`
4. Create a `.env` file on the root and add these environment variables:

```bash
TURSO_CONNECTION_URL="your turso db url"
TURSO_AUTH_TOKEN="your db token"
```

5. Push the schema to your Turso DB with this command `npm run db:push`
