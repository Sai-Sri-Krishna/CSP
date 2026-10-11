import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { pool, initDb } from './db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Initialize DB schema on startup
initDb();

// Community Service Project Data
const stats = {
  farmersSurveyed: "30+",
  awarenessSessions: 5,
  pamphletsDistributed: "100+",
  keyAwarenessTopics: 7,
  primaryGoal: "Sustainable Farming",
  location: "Satuluru Village, Guntur District, Andhra Pradesh"
};

const topics = [
  {
    id: 'fertilizer-safety',
    title: 'Fertilizer Safety',
    shortDesc: 'Use the right fertilizer, in the right amount, at the right time.',
    icon: 'bag',
    fullDetails: {
      overview: 'Proper fertilizer application ensures high crop yields while protecting soil structure and groundwater from nitrate contamination.',
      guidelines: [
        'Conduct soil testing prior to sowing to determine exact N-P-K requirements.',
        'Use split applications of Nitrogen instead of a single heavy dose.',
        'Store chemical fertilizers in dry, ventilated, and moisture-proof sheds away from food sources.',
        'Always wear gloves and masks when broadcasting urea or complex fertilizers.'
      ],
      dosageCalculator: true
    }
  },
  {
    id: 'pesticide-safety',
    title: 'Pesticide Safety',
    shortDesc: 'Protect your crops without risking your health.',
    icon: 'spray',
    fullDetails: {
      overview: 'Safe handling, mixing, and spraying of crop protection chemicals to prevent human toxicity and beneficial insect destruction.',
      guidelines: [
        'Always check label safety color codes (Red: Extremely Toxic, Yellow: Highly Toxic, Blue: Moderately Toxic, Green: Slightly Toxic).',
        'Wear full Personal Protective Equipment (PPE) - mask, goggles, boots, and long sleeves.',
        'Never spray against the wind direction or during peak afternoon temperatures.',
        'Maintain Pre-Harvest Interval (PHI) before picking produce.'
      ],
      ppeChecklist: true
    }
  },
  {
    id: 'soil-health',
    title: 'Soil Health',
    shortDesc: 'Healthy soil leads to healthy crops and a better future.',
    icon: 'plant',
    fullDetails: {
      overview: 'Regenerative practices to boost soil organic carbon, earthworm population, and moisture retention capacity.',
      guidelines: [
        'Incorporate green manure crops like Crotalaria juncea (Sunn hemp) before main crop cultivation.',
        'Apply well-decomposed Farmyard Manure (FYM) or Vermicompost (2-3 tons per acre).',
        'Practice crop rotation with leguminous crops to fix atmospheric nitrogen naturally.',
        'Avoid excessive tilling to preserve beneficial soil microbiome.'
      ]
    }
  },
  {
    id: 'farmer-health',
    title: 'Farmer Health & Safety',
    shortDesc: 'Use protective equipment and stay safe.',
    icon: 'health',
    fullDetails: {
      overview: 'Empowering agricultural workers with safety habits, heat stress management, and medical awareness.',
      guidelines: [
        'Stay hydrated with electrolytes during hot field hours.',
        'Wash hands and body thoroughly with soap immediately after chemical spray operations.',
        'Keep dedicated field clothes separate from family laundry.',
        'Know immediate first-aid steps for accidental pesticide contact or ingestion.'
      ]
    }
  },
  {
    id: 'water-conservation',
    title: 'Water Conservation',
    shortDesc: 'Save water today for a better tomorrow.',
    icon: 'droplet',
    fullDetails: {
      overview: 'Efficient irrigation techniques to maximize Water Use Efficiency (WUE) in field crops.',
      guidelines: [
        'Adopt Drip & Micro-Sprinkler irrigation to reduce water consumption by 40-50%.',
        'Apply paddy straw or organic mulching to conserve moisture in root zones.',
        'Adopt Alternate Wetting and Drying (AWD) technique for rice paddies.',
        'Construct farm ponds (Kuntas) for rainwater harvesting.'
      ]
    }
  },
  {
    id: 'fake-products',
    title: 'Fake Agricultural Products',
    shortDesc: 'Be aware. Check. Verify. Stay Safe.',
    icon: 'warning',
    fullDetails: {
      overview: 'Protecting farmers from counterfeit seeds, adulterated fertilizers, and spurious pesticides.',
      guidelines: [
        'Purchase inputs only from government-licensed agri-dealers with valid receipts.',
        'Scan QR codes and verify batch numbers on seed packets and chemical bottles.',
        'Check anti-tamper seals and holographic labels before opening.',
        'Report suspected counterfeit dealers to the District Agriculture Officer helpline.'
      ]
    }
  },
  {
    id: 'digital-agri',
    title: 'Digital Agriculture Resources',
    shortDesc: 'Use digital tools for better decisions and higher yield.',
    icon: 'mobile',
    fullDetails: {
      overview: 'Leveraging mobile apps, satellite crop monitoring, and AI advisory services for smart farming.',
      guidelines: [
        'Use e-NAM portal for direct market access and real-time mandi prices.',
        'Register on Kisan Suvidha app for weather forecasts and expert agro-advisory.',
        'Utilize AI image diagnostic tools to detect pest & disease attacks early.',
        'Join local WhatsApp farmer networks for instant community knowledge sharing.'
      ]
    }
  }
];

// Health Check
app.get('/api/health', async (req, res) => {
  try {
    const dbRes = await pool.query('SELECT NOW()');
    res.json({ success: true, status: 'Healthy', dbTime: dbRes.rows[0].now });
  } catch (err) {
    res.status(500).json({ success: false, status: 'Database disconnected', error: err.message });
  }
});

// Stats Route
app.get('/api/stats', (req, res) => {
  res.json({ success: true, data: stats });
});

// Topics Route
app.get('/api/topics', (req, res) => {
  res.json({ success: true, data: topics });
});
// Register Volunteer in PostgreSQL
app.post('/api/volunteer', async (req, res) => {
  const { name, phone, contribution } = req.body;

  if (!name || !name.trim() || !phone || !phone.trim()) {
    return res.status(400).json({
      success: false,
      message: 'Name and Mobile Number are required.'
    });
  }

  try {
    const insertQuery = `
      INSERT INTO volunteers (name, phone, contribution)
      VALUES ($1, $2, $3)
      RETURNING *;
    `;
    const values = [
      name.trim(),
      phone.trim(),
      contribution || 'Distribute Pamphlets in Satuluru'
    ];

    const result = await pool.query(insertQuery, values);
    console.log('✅ New Volunteer Saved:', result.rows[0]);

    res.status(201).json({
      success: true,
      message: 'Thank you for registering as a volunteer for KrishiRaksha360 CSP!',
      data: result.rows[0]
    });
  } catch (err) {
    console.error('❌ Database error saving volunteer:', err);
    res.status(500).json({
      success: false,
      message: 'Failed to save volunteer registration.'
    });
  }
});

// Store Contact Inquiries in PostgreSQL
app.post('/api/contact', async (req, res) => {
  const { name, phone, village, message, role } = req.body;

  if (!name || !name.trim() || !phone || !phone.trim()) {
    return res.status(400).json({
      success: false,
      message: 'Name and Phone Number are required fields.'
    });
  }

  try {
    const insertQuery = `
      INSERT INTO contacts (name, phone, village, role, message)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;
    `;
    const values = [
      name.trim(),
      phone.trim(),
      (village && village.trim()) || 'Satuluru Village, Guntur',
      role || 'Farmer',
      (message && message.trim()) || ''
    ];

    const result = await pool.query(insertQuery, values);
    const savedContact = result.rows[0];

    console.log('✅ New Contact Saved in PostgreSQL:', savedContact);

    res.status(201).json({
      success: true,
      message: 'Thank you for reaching out! Your inquiry has been saved and our Satuluru CSP field team will contact you shortly.',
      data: savedContact
    });
  } catch (err) {
    console.error('❌ Database insertion error:', err);
    res.status(500).json({
      success: false,
      message: 'Failed to save inquiry to database. Please try again or contact via phone.'
    });
  }
});

// Get All Inquiries (For Admin/Coordinators)
app.get('/api/contacts', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM contacts ORDER BY created_at DESC');
    res.json({
      success: true,
      count: result.rows.length,
      data: result.rows
    });
  } catch (err) {
    console.error('❌ Error fetching contacts:', err);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch contact inquiries.'
    });
  }
});

// Get All Registered Volunteers (For Admin/Coordinators)
app.get('/api/volunteers', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM volunteers ORDER BY created_at DESC');
    res.json({
      success: true,
      count: result.rows.length,
      data: result.rows
    });
  } catch (err) {
    console.error('❌ Error fetching volunteers:', err);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch volunteers list.'
    });
  }
});

// Farmer Survey Route
app.post('/api/survey', (req, res) => {
  const surveyData = req.body;
  console.log('Received Farmer Survey Submission:', surveyData);
  res.json({
    success: true,
    message: 'Survey response saved successfully. Thank you for contributing to Satuluru Village CSP!'
  });
});

app.listen(PORT, () => {
  console.log(`🚀 KrishiRaksha360 API Server running on port ${PORT}`);
});
