const smartquotes = require( 'smartquotes' );

module.exports = function( config )
{
	config.addCollection( 'locations', collection =>
	{
		return collection
			.getFilteredByGlob( 'src/locations/*.md' )
			.filter( location => !location.data.hidden );
	});

	config.addFilter( 'classify', string =>
	{
		let neighborhoods = string.split( ',' );
		let classes = neighborhoods.map( neighborhood =>
		{
			return `nbh-${neighborhood.toLowerCase()}`;
		});

		return classes.join( ' ' );
	});

	config.addFilter( 'list', array =>
	{
		return array
			.join( ", " );
	});

	config.addFilter( 'smartquotes', string =>
	{
		return smartquotes( string );
	});

	return {
		dir: {
			input: 'src',
			output: 'dist',
		},

		templateFormats: ['njk', 'md', 'css', 'js', 'html', 'yml'],
	};
};
