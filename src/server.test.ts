import { describe, test, expect } from 'bun:test';
import request from 'supertest';
import app from './server';

describe('API Endpoints', () => {
  test('GET / should return welcome message', async () => {
    const response = await request(app).get('/').expect(200);

    expect(response.text).toContain('Welcome to Zenith E-commerce API!');
  });
});
