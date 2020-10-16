import { createConnection } from 'typeorm';

createConnection();
//yarn typeorm migration:create -n create_orphanages -d src/dtabase/migrations