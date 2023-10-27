const Simulation = require('../models/Simulation');

// Create a new simulation
exports.createSimulation = async (req, res) => {
  try {
    const { name, description } = req.body;
    const createdBy = req.user._id; // Assuming you have a user ID in the request

    const simulation = new Simulation({
      name,
      description,
      createdBy,
    });

    const savedSimulation = await simulation.save();
    res.status(201).json(savedSimulation);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create the simulation' });
  }
};

// Get all simulations
exports.getAllSimulations = async (req, res) => {
  try {
    const simulations = await Simulation.find();
    res.status(200).json(simulations);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch simulations' });
  }
};

// Get a single simulation by ID
exports.getSimulationById = async (req, res) => {
  try {
    const simulation = await Simulation.findById(req.params.id);
    if (!simulation) {
      return res.status(404).json({ error: 'Simulation not found' });
    }
    res.status(200).json(simulation);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch the simulation' });
  }
};

// Update a simulation by ID
exports.updateSimulation = async (req, res) => {
  try {
    const { name, description } = req.body;
    const simulation = await Simulation.findByIdAndUpdate(
      req.params.id,
      { name, description },
      { new: true }
    );

    if (!simulation) {
      return res.status(404).json({ error: 'Simulation not found' });
    }

    res.status(200).json(simulation);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update the simulation' });
  }
};

// Delete a simulation by ID
exports.deleteSimulation = async (req, res) => {
  try {
    const simulation = await Simulation.findByIdAndRemove(req.params.id);

    if (!simulation) {
      return res.status(404).json({ error: 'Simulation not found' });
    }

    res.status(204).json(); // No content (successful deletion)
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete the simulation' });
  }
};
