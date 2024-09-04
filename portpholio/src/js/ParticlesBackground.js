import React from 'react';
import Particles from 'react-tsparticles';

const ParticleBackground = () => {
    return (
      <Particles
      params={{
        "particles": {
            "number": {
                "value": 50
            },
            "size": {
                "value": 3
            }
        },
        "interactivity": {
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                }
            }
        }
    }} />
    );
};

export default ParticleBackground;
