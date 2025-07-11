const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const wilayahRoutes = require('./routes/wilayah');
const logger = require('./utils/logger');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet()); // Security headers
app.use(cors()); // Enable CORS for all origins
app.use(compression()); // Compress responses
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Request logging middleware
app.use((req, res, next) => {
  const clientIP = req.ip || req.connection.remoteAddress || 'unknown';
  logger.info(`${req.method} ${req.originalUrl} from IP: ${clientIP}`);
  next();
});

// API Routes
app.use('/api/wilayah', wilayahRoutes);

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'API Wilayah Indonesia',
    version: '1.0.0',
    description: 'API untuk mengakses data wilayah Indonesia (Provinsi, Kabupaten/Kota, Kecamatan, Desa/Kelurahan)',
    endpoints: {
      provinces: {
        'GET /api/wilayah/provinces': 'Mendapatkan semua provinsi',
        'GET /api/wilayah/provinces/:id': 'Mendapatkan provinsi berdasarkan ID'
      },
      regencies: {
        'GET /api/wilayah/provinces/:province_id/regencies': 'Mendapatkan kabupaten/kota berdasarkan ID provinsi'
      },
      districts: {
        'GET /api/wilayah/regencies/:regency_id/districts': 'Mendapatkan kecamatan berdasarkan ID kabupaten/kota'
      },
      villages: {
        'GET /api/wilayah/districts/:district_id/villages': 'Mendapatkan desa/kelurahan berdasarkan ID kecamatan'
      }
    },
    usage: {
      base_url: `http://localhost:${PORT}`,
      example: `http://localhost:${PORT}/api/wilayah/provinces`
    }
  });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    code: '404',
    message: 'Endpoint tidak ditemukan',
    error: 'Not Found'
  });
});

// Error handler
app.use((error, req, res, next) => {
  logger.error('Unhandled error:', error);
  res.status(500).json({
    code: '500',
    message: 'Terjadi kesalahan server',
    error: 'Internal Server Error'
  });
});

// Start server
app.listen(PORT, () => {
  logger.info(`🚀 API Wilayah Indonesia berjalan di port ${PORT}`);
  logger.info(`📖 Dokumentasi API: http://localhost:${PORT}`);
  logger.info(`🏥 Health check: http://localhost:${PORT}/health`);
});

module.exports = app;