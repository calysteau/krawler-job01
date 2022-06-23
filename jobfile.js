import { hooks } from '@kalisio/krawler'
import path from 'path'
import { fileURLToPath } from 'url'

console.log( "job_01");

const __dirname = path.dirname(fileURLToPath(import.meta.url))
console.log( __dirname);

export default {
  id: 'codespostaux',
  store: 'mem',
  tasks: [{
    id: 'codes_postaux_region',
    type: 'http',
    options: {
        url: 'https://www.calysteau.fr/data/CodesPostauxFrance/codes_postaux_region.geojson'
    }
  }],
  hooks: {
    tasks: {
      after: {
        readJson: {
          store: 'mem',
          match: { id: 'codes_postaux_region' },
          features: true
        }
      }
    },
    jobs: {
      before: {
	  createStores: [
          { id: 'mem', type: 'memory' }
        ]
      },
      after: {
        writeJson: { store: 'mem' },
        clearOutputs: {},
        removeStores: ['mem']
      }
    }
  }
}