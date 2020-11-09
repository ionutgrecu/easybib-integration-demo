import { EventEmitter } from 'fbemitter'
import axios from 'axios'
const SERVER_URL = 'http://localhost:8080'

class PublicationStore {
    constructor() {
        this.publications = []
        this.emitter = new EventEmitter()
    }

    async getPublications(){
        try {
            const response=await axios.get(`${SERVER_URL}/publications`)
            this.publications=response.data
            this.emitter.emit('GET_PUBLICATIONS_SUCCESS')
        } catch (error) {
            this.emitter.emit('GET_PUBLICATIONS_ERROR')
        }
    }
} export default PublicationStore