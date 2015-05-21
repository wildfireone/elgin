var cube1;
var cube2;
var cube3;
var cube4;

function getContent(id){

    var htmlString = "";
    switch(id) {
        case 1:
            htmlString = "<h3>St Giles Church</h3>" +
            "<p>St Giles' Church is one of Elgin's most striking landmarks and is located in the heart of the town centre, in the middle of High Street. The church we see today is not the original on the site, the history of which stretches back to the medieval period. The present building was constructed in the 1820s in an elegant Greek style and it led to a 19th century revival of the High Street and an attempt to modernise the town centre from its medieval layout and appearance. The church is quite a large building and dominates the High Street, rising above the enclosing buildings. There are no grounds to the church as such - the pedestrianised street abutts the church walls and steps.</p>"+
            "<p>The medieval church which was demolished to make way for the new building, was known as the Muckle Kirk and had a tower and side aisles, along with a very small graveyard alongside to the west. Its poor state of repair and the town's desire to modernise led to it being pulled down, although at the time there was a debate about it and many locals wanted the old church to stay and be repaired.</p>" +
            "<img src='../img/513_23.jpg'/>"+"<img src='../img/513_26.jpg'/>"+
            "<p>More information is available <a href='http://www.scottishchurches.org.uk/sites/site/id/513/name/St+Giles%27+Church%2C+Elgin+Elgin+Grampian'> here</a> </p>";
            break;
        case 2:
            htmlString = "<h3>The Tower</h3>" +
            "<p>The building known as the Tower was originally a much large property, the original deeds of the building have been lost, but it is said to have been built by the Knights of St. John. Possibly as long ago as the early 1200s.</p>" +
            "<p>In 1634 the property was remodeled and the Tower was built. It is the oldest building in the High Street and bears the arms of Leslie and Abernethy, initials A.L. and I.B. for Andrew Leslie and Jean Bonyman. The next occupier was David Stewart and his son James Stewart represented the burgh in the Scotch Parliament.</p>" +
            "<p>In 1744 the property passed to Mr. Alexander Forsyth and in 1811 to his son Isaac Forsyth who created a bookshop and the first public circulating library. In 1859 the building was remodeled by Dr. Mackay and became the Tower Hotel and at one stage became a Temperance Hotel. It was known as the Tower Hotel for a100 years or more until the 1980s when it became offices.</p>"+
            "<p>Information and images at <a href='http://www.elginstreetparade.org/ehdescriptionsandbibliography.html'> The Elgin Street Parade </a> </p>";
            break;
        case 3:
            htmlString = "<h3>Braco's Banking House</h3>" +
            "<p>Built or embellished 1684 by John Duncan and Margaret Innes, occupied by William Duff of Dipple and Braco, 1703-22. After falling into decay, restored later 20th century.</p>"+
            "<p>Unpretentious principal survivor of Elgin's arcaded buildings. Principal storey above sturdy restored arcades, with an attic storey of five decorated dormer windows above. Crowstep gables. Red-tinted harling.</p>"+
            "<p>William Duff profited by lending money to the Jacobites. His cousin became Lord Braco and Earl of Fife, client for Duff House. One of his descendants built Mar Lodge.</p>"+
            "<p>Information and images at <a href='http://www.scran.ac.uk/database/record.php?usi=000-000-111-472-C'> SCRAN </a> </p>";
            break;
        case 4:
            htmlString = "<h3>Sheriff Court</h3>" +
            "<p>A. and W Reid, 1864-66 </p>"+
            "<p>Although elsewhere in Scotland such Courts were gooing baronial in style, neo-classicism still ruled in Elgin.</p>"+
            "<p>Elgin Sheriff Court building sits at the corner of High Street and Glover Street and opened in 1866. The interior was extensively renovated in 2006 to accommodate the Justice of the Peace Court.</p>"+
            "<img src='../img/elg.jpg'/>";
            break;
        default:


    }

    return htmlString;
}

function addBoxes(scene){
    var geometry = new THREE.SphereGeometry(30, 1, 1);
    var material = new THREE.MeshBasicMaterial({color: 0xfff00, wireframe: true});
    cube1 = new THREE.Mesh(geometry, material);
    cube1.position.x =  160;
    cube1.position.y =  50;
    cube1.position.z = -109;
    //scene.add(cube1);

    geometry = new THREE.SphereGeometry(5, 5, 5, 1, 1, 1);
    material = new THREE.MeshBasicMaterial({color: 0x00fff, wireframe: true});
    cube2 = new THREE.Mesh(geometry, material);
    //scene.add(cube2);

    geometry = new THREE.SphereGeometry(1, 1, 1, 1, 1, 1);
    material = new THREE.MeshBasicMaterial({color: 0xff00f, wireframe: true});
    cube3 = new THREE.Mesh(geometry, material);
    //scene.add(cube3);

    geometry = new THREE.SphereGeometry(20, 20, 20, 1, 1, 1);
    material = new THREE.MeshBasicMaterial({color: 0xfff00, wireframe: true});
    cube4 = new THREE.Mesh(geometry, material);
    //scene.add(cube4);
}

function checkBoxes(point){

    var distance = cube1.position.distanceToSquared(point.position);
    console.log(cube1.position);
    console.log(point.position);
    console.log("dis:"+distance+" d:"+cube1.radius);
    if( distance < (800)){
        console.log("cube1");
    }
    distance = cube2.position.distanceToSquared(point);
    if( distance < (cube2.width/2) && distance < (cube2.height/2) && distance < (cube2.length/2)){
        console.log("cube2");
    }
    distance = cube3.position.distanceToSquared(point);
    if( distance < (cube3.width/2) && distance < (cube3.height/2) && distance < (cube3.length/2)){
        console.log("cube3");
    }
    distance = cube4.position.distanceToSquared(point);
    if( distance < (cube4.width/2) && distance < (cube4.height/2) && distance < (cube4.length/2)){
        console.log("cube4");
    }
}