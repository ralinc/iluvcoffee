import { Flavor } from 'src/coffees/entities/flavor.entity';
import { Coffee } from 'src/coffees/entities/coffee.entity';
import { DataSource } from 'typeorm';
import { CoffeeRefactor1668346491583 } from './src/migrations/1668346491583-CoffeeRefactor';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5433,
  username: 'postgres',
  password: 'pass123',
  database: 'postgres',
  entities: [Coffee, Flavor],
  migrations: [CoffeeRefactor1668346491583],
});
