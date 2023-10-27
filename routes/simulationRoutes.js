const express = require('express');
const router = express.Router();
const simulationController = require('../controllers/simulationController');
const authMiddleware = require('../middleware/authMiddleware');

// Create a new simulation (POST)
router.post('/', authMiddleware, simulationController.createSimulation);

// Get all simulations (GET)
router.get('/', simulationController.getAllSimulations);

// Get a specific simulation by ID (GET)
router.get('/:id', simulationController.getSimulationById);

// Update a specific simulation by ID (PUT)
router.put('/:id', authMiddleware, simulationController.updateSimulation);

// Delete a specific simulation by ID (DELETE)
router.delete('/:id', authMiddleware, simulationController.deleteSimulation);

module.exports = router;
