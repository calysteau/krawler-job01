import path from 'path'
import { fileURLToPath } from 'url'

console.log( "job_01");

const __dirname = path.dirname(fileURLToPath(import.meta.url))
console.log( __dirname);

export default {
  id: 'codespostaux',
  store: 'mem',
  tasks: [{
    store:'file',
    id: 'codes_postaux_region.geojson',
    type: 'http',
    options: {
        url: 'https://www.calysteau.fr/data/CodesPostauxFrance/codes_postaux_region.geojson'
    }
  }],
  hooks: {
    tasks: {
      after: {
        readJson: {
          match: { id: 'codes_postaux_region.geojson' },
          features: true
        }
      }
    },
    jobs: {
      before: {
	  createStores: [
          { id: 'mem', type: 'memory' },
          { id: 'file', type: 'fs', options: { path: __dirname } }
        ]
      },
      after: {
        writeJson: { store: 'mem' },
        clearOutputs: {},
        removeStores: ['mem', 'file']
      }
    }
  }
}
