module.exports = function( config )
{
	config.addCollection( 'locations', collection =>
	{
		return collection.getFilteredByGlob( 'src/locations/*.md' );
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

	return {
		dir: {
			input: 'src',
			output: 'dist',
		},

		templateFormats: ['njk', 'md', 'css', 'js', 'html', 'yml'],
	};
};
