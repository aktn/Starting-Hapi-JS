import Hapi from 'hapi';

const server = new Hapi.Server();

server.connection( {
    port: 8080
} );

server.route( {
    method: 'GET',
    path: '/hello',
    handler: ( request, reply ) => {
        reply( 'Hello World!' );
    }
} );

server.start( err => {
    if( err ) {
        console.error( 'Error!' );
        console.error( err );
    }
    console.log( `Server running on ${ server.info.uri }` );
});
