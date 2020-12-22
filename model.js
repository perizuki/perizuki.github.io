var loader = new THREE.ObjectLoader();
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 10000 );

var controls = new THREE.OrbitControls( camera );


loader.load(
	"scene.json",

	function ( obj ) {
		scene.add( obj );
	},

	function ( xhr ) {
		console.log( (xhr.loaded / xhr.total * 100) + '% téléchargés' );
	},

	function ( err ) {
		console.error( 'aïe ça marche pas' );
	}
);

function animate() {

	requestAnimationFrame( animate );

	// required if controls.enableDamping or controls.autoRotate are set to true
	controls.update();

	renderer.render( scene, camera );

}

var object = loader.parse( a_json_object );

scene.add( object );