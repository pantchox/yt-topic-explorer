/**
 * Usage in template:
 * {{'My Text'|i18n}}
 *
 * Usage in controller/directrive/widget:
 * topicExplorerApp.filter.i18n('My Text');
 */

var lang = {
		'en' : {
			'SPANISH': "Spanish"
			,'ENGLISH': 'English'
			,'ABOUT': 'About'
			,'SOURCE_CODE': 'Source Code'
			,'LOGIN': 'Log In'
			,'LOG_OUT': 'Log Out'
			,'FETCHING_CHANNEL_INFO': 'Fetching your channel info...'
			,'HEY': 'Hey, '
			,'INTERESTED_IN': "I'm interested in..."
			,'TOPICS': 'Suggested Topics'
			,'CHANNELS': 'Channels'
			,'SUBSCRIBE': 'Subscribe'
			,'PLAYLISTS': 'Playlists'
			,'VIDEOS': 'Videos'
			,'LIKE': 'Like'
			,'FAVORITE': 'Favorite'
			,'WATCH_LATER': 'Watch Later'
			,'ADDING': 'Adding...'
			,'ADDED': 'Added'
			,'SUSCRIBING': 'Subscribing...'
			,'SUSCRIBED': 'Subscribed'
			,'YOUTUBE_RECOMMENDATIONS': 'YouTube Recommendations'
			},
		'es' : {
			'SPANISH': "Espanol"
			,'ENGLISH': 'Ingles'
			,'ABOUT': 'Acerca de'
			,'SOURCE_CODE': 'Codigo fuente'
			,'LOG_OUT': 'Salir'
			,'LOGIN': 'Ingresar'
			,'FETCHING_CHANNEL_INFO': 'Obteniendo la informacion de su canal...'
			,'HEY': 'Hola, '
			,'INTERESTED_IN': 'Estoy interesado en...'
			,'TOPICS': 'Temas sugeridos'
			,'CHANNELS': 'Canales'
			,'SUBSCRIBE': 'Suscribirme'
			,'PLAYLISTS': 'Listas de reproduccion'
			,'VIDEOS': 'Videos'
			,'LIKE': 'Me gusta'
			,'FAVORITE': 'Favorito'
			,'WATCH_LATER': 'Ver mas tarde'
			,'ADDING': 'Agregando...'
			,'ADDED': 'Agregado'
			,'SUSCRIBING': 'Suscribiendo...'
			,'SUSCRIBED': 'Suscripto'
			,'YOUTUBE_RECOMMENDATIONS': 'Recomendaciones de YouTube'
			}
		}

topicExplorerApp.filter('i18n', function($rootScope) {
	  return function(string) { 
		    var log_untranslated = false;
		    var placeholders = [];
		
		    for(var i=1; i < arguments.length; i++) {
		        if(typeof(arguments[i]) == 'object') {
		            angular.forEach(arguments[i], function(item) {
		                placeholders.push(item);
		            })
		        }
		        else {
		            placeholders.push(arguments[i]);
		        }
		    }
		    
		    currentLanguage = $rootScope.currentLanguage || 'en';
		
		    var translated = lang[currentLanguage][string]; //
		    if (translated === undefined) {
		        if (log_untranslated == true) {
		            // here we could track unreanslated strings by sending them to the server...
		        }
		        return sprintf(string, placeholders);
		    }
		    return sprintf(translated, placeholders);
	  }
});