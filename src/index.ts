import {NoteApplication} from './application';
import {ApplicationConfig, ExpressServer} from './server';

export {ApplicationConfig, ExpressServer, NoteApplication};

export async function main(options: ApplicationConfig = {}) {
  const server = new ExpressServer(options);
  await server.boot();
  await server.start();
  console.log('Server is running at http://127.0.0.1:3000');
}

if (require.main === module) {
  const config = {
    rest: {
      port: +(process.env.PORT ?? 3000),
      host: process.env.HOST ?? 'localhost',
      openApiSpec: {
        setServersFromRequest: true,
      },
      listenOnStart: false,
    }
  };
  main(config).catch(err => {
    console.error('Cannot start the application.', err);
    process.exit(1);
  });
}
