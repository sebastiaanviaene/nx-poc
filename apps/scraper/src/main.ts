// main.ts
import { http } from '@google-cloud/functions-framework';
import { shared } from '@nx-poc-yarn/shared';
import 'tslib'; // needed until importHelpers is set to false
http('helloGET', (req, res) => {
  res.send(shared());
});
