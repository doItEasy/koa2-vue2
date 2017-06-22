import axios from 'axios';

const remoteHost = process.env.NODE_ENV=="production"?"http://localhost:8888":"http://localhost:8888";



export default {
	getNews() {
		return axios.get( remoteHost.concat('/api/4/news/latest') )
	},
	getNewsById( id ) {
		return axios.get( remoteHost.concat('/api/4/news/') + id )
	},
	getNewsByDate( date ) {
		return axios.get( remoteHost.concat('/api/4/news/before/')+ date )
	},
	getNewsInfoById( id ) {
		return axios.get( remoteHost.concat('/api/4/story-extra'), {
			params: {
				id: id
			}
		} )
	},
	getTopics() {
		return axios.get( remoteHost.concat('/api/4/themes') )
	},
	getTopicsById( topicid ) {
		return axios.get( remoteHost.concat('/api/4/theme/') + topicid )
	},
	getSections() {
		return axios.get( remoteHost.concat('/api/3/sections') )
	},
	getSectionsById( sectionid ) {
		return axios.get( remoteHost.concat('/api/3/section'), {
			params: {
				sectionid: sectionid
			}
		} )
	}
}
