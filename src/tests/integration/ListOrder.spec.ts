import request from 'supertest';
import createConnection from '@database/index';

import { getConnection, Connection } from "typeorm";

import app from '../../app';

let connection: Connection;

describe('GET /orders', () => {
  beforeAll(async () => {
    connection = await createConnection();
  });

  afterAll(async () => {
    const entities = getConnection().entityMetadatas;

    for (const entity of entities) {
      const repository = await getConnection().getRepository(entity.name);
      await repository.clear();
    }

    const myConnection = getConnection();
    await connection.close();
    await myConnection.close();
  });

  describe('when try to get orders but there is no orders created', () => {
    it('should return an empty array', async () => {
      const reseller = await request(app)
        .post('/resellers')
        .send({
          name: 'List Order Reseller',
          document: '72878069080',
          email: 'listorder@gmail.com',
          password: '123456'
        });

      const session = await request(app)
        .post('/sessions')
        .send({
          email: reseller.body.email,
          password: '123456'
        });

      const orders = await request(app)
        .get('/orders')
        .set('Authorization', `Bearer ${session.body.token}`);


      expect(orders.body).toEqual([]);
    });
  });

  describe('when try to get orders', () => {
    it('should be able to get orders', async () => {
      const reseller = await request(app)
        .post('/resellers')
        .send({
          name: 'List Order Reseller 2',
          document: '12022020049',
          email: 'listorder2@gmail.com',
          password: '123456'
        });

      const session = await request(app)
        .post('/sessions')
        .send({
          email: reseller.body.email,
          password: '123456'
        });

      await request(app)
        .post('/orders')
        .send({
          code: '2345',
          value: 1399,
          resellerDocument: '12022020049'
        });

      const orders = await request(app)
        .get('/orders')
        .set('Authorization', `Bearer ${session.body.token}`);


      const createdOrderDate = orders.body[0].date;

      expect(orders.body).toEqual(
        expect.arrayContaining([
          {
            cashbackValue: '209.85',
            code: '2345',
            date: createdOrderDate,
            status: 'Em validação',
            value: '1399',
          }
        ])
      );
    });
  });
});