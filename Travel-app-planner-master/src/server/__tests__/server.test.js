const request = require('supertest');
const express = require('express');
const app = require('../server'); // ضبط مسار الاستيراد حسب الحاجة

describe('GET /', () => {
    it('should return status 200', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
    });
});
