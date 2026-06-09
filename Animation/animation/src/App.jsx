import React from 'react';
import { motion } from 'framer-motion';
import './App.css';
const App = () => {
  return (
      <div>
        <motion.div className="box" whileHover={{ scale: 1.2 }} drag whileTap={{ scale: 0.8 }}>
            
        </motion.div>
      </div>
  );
};

export default App;