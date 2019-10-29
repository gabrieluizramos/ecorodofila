const express = require('express');

const storage = require('../services/storage');
const errors = require('../middlewares/error/messages');
const auth = require('../middlewares/auth');

const router = express.Router();

router.post('/', (req, res) => {
  const { incident } = req.body;
  console.log('Received incident', incident);

  storage.saveIncident(incident);

  return res.status(200).json({ received: true });
});

router.patch('/:id', (req, res) => {
  const { observations } = req.body;
  const { id } = req.params;

  console.log('Will update incident', id);

  storage.setIncidentObservations(id, observations);

  return res.status(200).json({ received: true });
});

router.post('/assign', auth,  (req, res) => {
  const { user } = req;

  const incident = storage.getNextIncident(user);
  console.log(`Assigning incident ${incident.id} to user ${user}`);

  return res.status(200).json(incident);
});


router.get('/', auth, (req, res) => {
  const { user } = req;

  const incident = storage.getAllUserIncidents(user);

  return res.status(200).json({ incident });
});

router.get('/count', (req, res) => {
  const incidents = storage.getAllIncidents();

  console.log('all', incidents);

  return res.status(200).json({ incidents });
});

router.get('/:id', auth, (req, res) => {
  const { user } = req;
  const { id } = req.params;

  const incident = storage.getUserIncidentById(user, id);

  console.log('Incident data', incident);

  return res.status(200).json({ incident });
});

module.exports = router;
