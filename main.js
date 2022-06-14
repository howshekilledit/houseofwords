//READ ON FOR INSTRUCTIONS!

var face = ""; /*Between the quotation marks,
       describe what "face" means to you.
       See if you can avoid using the word or its synonyms
       in your description -- if you can't, that's okay.

       Keep your description in noun form so that it can
       be swapped out into a sentence.

       EXAMPLE: for cheese, a possible description would be
       "milk that has been left sitting out for a long time."
       You could swap the word "cheese" with
       this phrase in a sentence,
       and the sentence would still make sense.

       Don't use any additional quotation
       marks ("") in your description. */

var red = ""; //repeat the instructions with the word "red" (keep in the form of a noun)

var brain = ""; //repeat the instructions for the word "brain"

var masculine = ""; //define 'masculine' in ADJECCTIVE form, so
//you could sub it into a sentence that uses the word as an ADJECTIVE

var think = ""; //define 'think' in VERB form,
//so you could sub it into a sentence that uses the word as a VERB

/*
   when you have finished lines 1 - 30,
    save your works
    by hitting CMND+S or CTRL+S, or by clicking
    the icon on the very top left of the screen and
    selecting File>Save
    If it doesnt' show up automatically,
    refresh the browser to see your output!

   refresh to register your changes.

   click the screen to the right to advance the program

   when clicking no longer does anything,
   you've completed this exercise!

   DON'T SCROLL DOWN
   until you've finished clicking through!

   once you've finished,
   you can explore the source code if you like.
   or you can move on to steps 3 and 4 in the PDF

       .
       .
       .
       .
       .

       .
       .
       .
       .
       .
       .
       .

       */

//SPEED POPULATE (REMOVE FROM FINAL)
face = "most expressive body part";
red = "the color of passion and blood";
brain = "cogitating organ";
masculine = "possessing qualities that people think men have";
think = "process information";


//attempt to adjust pronouns to fit sentences
function possesiveNoun(word) {
    if (word.indexOf('the') == 0) {
        word = word.slice(4);
    }

    if (word.indexOf('my') == 0) {
        word = word.slice(3);
    }

    if (word.indexOf('your') == 0) {
        word = word.slice(5);
    }

    word = word.replace("your", "my");
    return word;
}

brain = possesiveNoun(brain);
face = possesiveNoun(face);

if (red.indexOf('color') == 0) {
    red = 'the ' + red;
}

//populate madlibs using string literals
var madlibs = [];
madlibs.push(`My ${face} became ${red} as I spoke. `);
madlibs.push(`The sunset was ${red} last night. `);
madlibs.push(`I ${think} therefore I ${think}. `);
madlibs.push(`My ${brain} hurts when I ${think} this much. `);
madlibs.push(`${red}. `)
madlibs.push(`Today I'll dress more ${masculine} than usual. `);

var words = [face, red, brain, masculine, think];

var clicks = 0;
var camera;
var canvas = document.getElementById("renderCanvas");
var engine = null;
var scene = null;
var sceneToRender = null;

//initialize render and object variables (populated in housebuild.js)

let rendset = [];


var startRenderLoop = function (engine, canvas) {
    engine.runRenderLoop(function () {
        if (sceneToRender && sceneToRender.activeCamera) {
            sceneToRender.render();
        }
    });
}


var createDefaultEngine = function () { return new BABYLON.Engine(canvas, true, { preserveDrawingBuffer: true, stencil: true, disableWebGL2Support: false }); };


if (typeof TYPE === "undefined") {
    fauxLoad()
}

//build house
BABYLON.PolygonMeshBuilder.prototype.wallBuilder = function (w0, w1) {
    var positions = [];
    var iuvs = [];
    var euvs = [];
    var icolors = []; var flooring = new BABYLON.StandardMaterial("floor", scene);

    var ecolors = [];
    var direction = w1.corner.subtract(w0.corner).normalize();
    var angle = Math.acos(direction.x);
    if (direction.z != 0) {
        angle *= direction.z / Math.abs(direction.z);
    }
    this._points.elements.forEach(function (p) {
        positions.push(p.x * Math.cos(angle) + w0.corner.x, p.y, p.x * Math.sin(angle) + w0.corner.z);
    });
    var indices = [];
    var res = earcut(this._epoints, this._eholes, 2);
    for (var i = res.length; i > 0; i--) {
        indices.push(res[i - 1]);
    };
    return { positions: positions, indices: indices };
};




var createScene = function () {
    var scene = new BABYLON.Scene(engine);


    var light = new BABYLON.HemisphericLight("hemiLight", new BABYLON.Vector3(4, 10, 0), scene);

    //start on black
    light.intensity = 0;

    //create camera
    camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(12, 6.5, -10), scene);

    //if variables have been populated, reveal scen



    var wPos = new BABYLON.Vector3(-8, 5, 5); //window position
    var wRot = new BABYLON.Vector3(.2, 0, 0); //window rotation


    var bPos = new BABYLON.Vector3(-28, 5, 8.5); //bedroom position
    var bRot = new BABYLON.Vector3(0.2, Math.PI / 2, 0);  //bedroom rotation

    var sPos = new BABYLON.Vector3(-12, 4, -10);
    var gPos = new BABYLON.Vector3(-30, 4, 0); //garage position
    var gRot = new BABYLON.Vector3(0, Math.PI, 0); //garage rotation


    //adjust instructions based on whether rooms are populated
    var start = document.getElementById('start')
    start.addEventListener("click", function () {
        roomclick(clicks);
        clicks++;
    });

    // initialize light variables
    var pointlight;
    var blue_pointlight;
    var bulb_pointlight;


    //initialize object variables for placement

    var glass;
    var table;
    var coke;
    var blue_table;
    var blue_coke
    var text_sculpt;
    var text_material;




    //place objects

    //first room (red coke)
    placeObject('https://howshekilledit.github.io/how_models/Side_Table_04_OBJ/', 'Side_Table_04.obj', new BABYLON.Vector3(11, 0, -21), scene, scale = 0.065, obj_name = "table1");
    placeObject('https://howshekilledit.github.io/how_models/', 'Coca_Cola_Bottle_Turbosquid_2012.obj', new BABYLON.Vector3(11, 3.5, -21), scene, 0.1, 'coke1', new BABYLON.Vector3(0, 0, 0), new BABYLON.Color3(1, 0, 0), 0.3);
    //prepare glass variable
    glass = BABYLON.MeshBuilder.CreatePlane("glass", { width: 4, height: 7 }, scene);

    scene.executeWhenReady(() => {
        //second room (blue coke)
        placeObject('https://howshekilledit.github.io/how_models/Side_Table_04_OBJ/', 'Side_Table_04.obj', new BABYLON.Vector3(14, 0, -10), scene, scale = 0.065, 'table2');
        placeObject('https://howshekilledit.github.io/how_models/', 'Coca_Cola_Bottle_Turbosquid_2012.obj', new BABYLON.Vector3(14, 3.5, -10), scene, 0.1, 'coke2', new BABYLON.Vector3(0, 0, 0), new BABYLON.Color3(0, 0, 1), 0.7);

        // //stage objects for mirror room

        glass.position = new BABYLON.Vector3(30, 3, -9);
        glass.rotation = new BABYLON.Vector3(0.1, Math.PI / 2, 0);

        //stage rack
        placeObject('https://howshekilledit.github.io/how_models/clothes_rack_with_hangers/',
            'clothes rack with hangers obj.obj', new BABYLON.Vector3(23, 0, -4.5), scene, 0.0065, 'rack',
            new BABYLON.Vector3(0, 0, 0), new BABYLON.Color3(0.5, 0.5, 0.5));
        renderList = rendset;

        //stage desk & computer
        placeObject('../how_models/antique_wooden_desk/', 'desk.obj', new BABYLON.Vector3(3, 0, -2), scene, 3, 'rack',
        new BABYLON.Vector3(0, 0, 0), false);

        placeObject('../how_models/retro_computer/', 'compu.obj', new BABYLON.Vector3(3, 3, -2), scene, 1, 'rack',
        new BABYLON.Vector3(0, 0, 0), false);

    });


    //array of procedures for each room as user progresses through
    function roomclick(clicks) {
        start = document.getElementById('start');
        start.textContent = ""
        //error handlign in case variables are not populated
        if (words.indexOf("") > -1) {
            start.textContent = "Please define all words, per instructions at the top of main.js. Hit save before you click again. "

        } else {
            var rooms = [

                function () {

                    start.textContent = "";

                    //BEGIN RED COKE ROOM ({red})
                    pointlight = new BABYLON.PointLight("pointLight", new BABYLON.Vector3(16, 5, 26), scene);
                    pointlight.diffuse = new BABYLON.Color3(1, 0, 0);
                    pointlight.specular = new BABYLON.Color3(0, 1, 0);
                    pointlight.intensity = 0;
                    var campos = new BABYLON.Vector3(12, 6, -12.9);
                    //camera.setTarget(new BABYLON.Vector3(11, 2, -25));
                    var camrot = new BABYLON.Vector3(0.2908470948675594, 3.2, 0);

                    camera.position = campos;
                    camera.rotation = camrot;
                    //grid();
                    var anims = animate([{
                        obj: light, prop: 'intensity',
                        val: 1
                    }, {
                        obj: pointlight, prop: 'intensity',
                        val: 1.5
                    }], scene, 5);
                    //END RED COKE ROOM
                },
                function () {
                    //BEGIN BLUE COKE ROOM
                    //show wall
                    bathroomWall.setEnabled(true);


                    //light
                    // blue_pointlight = new BABYLON.PointLight("pointLight", new BABYLON.Vector3(14, 3.5, -10), scene);
                    // blue_pointlight.diffuse = new BABYLON.Color3(0, 0, 1);
                    // blue_pointlight.specular = new BABYLON.Color3(0, 0, 1);
                    // blue_pointlight.intensity = 1;
                    //pointlight.intensity = 1;

                    //camera
                    //var campos = new BABYLON.Vector3(30, 6.5, -11);
                    var campos = new BABYLON.Vector3(11.5, 6.5, -17.5);
                    //camera.setTarget(new BABYLON.Vector3(20, 4, -11));
                    //var camrot = new BABYLON.Vector3(0.24497866312686414, -1.7, 0);
                    var camrot = new BABYLON.Vector3(0.3, 2 * Math.PI + 0.4, 0);
                    var anims = animate([{ obj: camera, prop: 'position', val: campos, dims: ['x', 'y', 'z'] },
                    { obj: camera, prop: 'rotation', dims: ['x', 'y', 'z'], val: camrot },
                    { obj: light, prop: 'intensity', dims: false, val: 1.5 },
                    { obj: pointlight, prop: 'intensity', dims: false, val: 0 }
                    ], scene);


                    //END BLUE COKE ROOM
                },
                function () {
                    //BEGIN MIDDLE ROOM
                    var campos = new BABYLON.Vector3(15, 6, -10);
                    var camrot = new BABYLON.Vector3(0.24497866312686414, 2 * Math.PI - 1.7, 0);
                    var campos_2 = new BABYLON.Vector3(30, 6.5, -11);

                    var anims = [{ obj: camera, prop: 'position', val: [campos, campos_2], dims: ['x', 'y', 'z'] },
                    { obj: camera, prop: 'rotation', dims: ['x', 'y', 'z'], val: [camrot] }];

                    animate(anims, scene);
                    //trigger next movement


                },
                function () {
                    //BEGIN MIRROR ROOM

                    var campos = new BABYLON.Vector3(18, 5, -10);
                    //camera.setTarget(new BABYLON.Vector3(26, 2.5, -15.5));
                    var camrot = new BABYLON.Vector3(0.10946081002134, Math.PI / 2, 0);

                    house.material = buildMat(madlibs[0], 18, 3000, 1000, "house", scene, "red", true);


                    //Ensure working with new values for glass by computing and obtaining its worldMatrix
                    glass.computeWorldMatrix(true);
                    var glass_worldMatrix = glass.getWorldMatrix();

                    //Obtain normals for plane and assign one of them as the normal
                    var glass_vertexData = glass.getVerticesData("normal");
                    var glassNormal = new BABYLON.Vector3(glass_vertexData[0], glass_vertexData[1], glass_vertexData[2]);
                    //Use worldMatrix to transform normal into its current value
                    glassNormal = new BABYLON.Vector3.TransformNormal(glassNormal, glass_worldMatrix)

                    //Create reflecting surface for mirror surface
                    var reflector = new BABYLON.Plane.FromPositionAndNormal(glass.position, glassNormal.scale(-1));

                    //Create the mirror material
                    var mirrorMaterial = new BABYLON.StandardMaterial("mirror", scene);
                    mirrorMaterial.reflectionTexture = new BABYLON.MirrorTexture("mirror", 1024, scene, true);
                    mirrorMaterial.reflectionTexture.mirrorPlane = reflector;
                    mirrorMaterial.reflectionTexture.renderList = [house, smallWall1, smallWall2, floor, masterWall, bathroomWall];
                    //console.log('mirror', rendset);
                    mirrorMaterial.reflectionTexture.renderList = mirrorMaterial.reflectionTexture.renderList.concat(rendset);

                    mirrorMaterial.reflectionTexture.level = 0.2;


                    glass.material = mirrorMaterial;

                    var anims = [{ obj: camera, prop: 'position', val: campos, dims: ['x', 'y', 'z'] },
                    { obj: camera, prop: 'rotation', dims: ['x', 'y', 'z'], val: camrot }];
                    animate(anims, scene);



                    //END MIRROR ROOM
                },
                function(){
                    var campos1 = new BABYLON.Vector3(23, 5, -10);
                    //push in and morph coke
                    var anims = [{ obj: camera, prop: 'position', val: campos1, dims: ['x', 'y', 'z'] }];
                    var blue_coke_meshes = getMeshes('coke2', rendset);
                    for (var mesh of blue_coke_meshes) {
                        console.log(mesh);
                        anims.push({
                            obj: mesh.material, prop: 'diffuseColor',
                            dims: ['r', 'g', 'b'], val: new BABYLON.Color3(1, 0, 0)
                        })
                    }

                    animate(anims, scene);
                },
                function(){
                    //mirror disappears
                    var campos = new BABYLON.Vector3(23, 6.5, -10);
                    var anims = [{ obj: glass.material, prop: 'alpha', dims: false, val: 0 },
                    { obj: camera, prop: 'position', val: campos, dims: ['x', 'y', 'z'] }
                    ];
                    animate(anims, scene);
                },
                function () {

                    // masculinity room + tracking out

                    var campos2 = new BABYLON.Vector3(26, 7, -14);
                    var campos2_1 = new BABYLON.Vector3(26, 7, -12);

                    //var campos5 = new BABYLON.Vector3(10, 7, 4);

                    var camrot = new BABYLON.Vector3(0.35576149251471497, 0.3, 0);
                    var camrot2 = new BABYLON.Vector3(0.2, -1.5, 0);
                    var camrot3 = new BABYLON.Vector3(0, Math.PI, 0);
                    pointlight.diffuse = new BABYLON.Color3(1, 1, 1);


                    var anims = [{ obj: camera, prop: 'position', val: [campos2_1], dims: ['x', 'y', 'z'] },
                    { obj: camera, prop: 'rotation', dims: ['x', 'y', 'z'], val: [camrot] },


                    ];


                    //camera.setTarget(new BABYLON.Vector3(11, 3, -6));


                    animate(anims, scene, 4);
                },
                function(){
                    //descartes
                    var campos3 = new BABYLON.Vector3(26, 5, -4);
                    var campos4 = new BABYLON.Vector3(11, 6, -4);

                    var camrot2 = new BABYLON.Vector3(0.2, -1.5, 0);
                    var camrot3 = new BABYLON.Vector3(0.35576149251471497, 0.3, 0);
                    var anims = [{ obj: camera, prop: 'position', val: [campos3, campos4], dims: ['x', 'y', 'z'] },
                    { obj: camera, prop: 'rotation', dims: ['x', 'y', 'z'], val: [camrot2] }];
                    animate(anims, scene, 4);
                },
                function () {
                    //brain room
                    bathroomWall.material = buildMat(madlibs[3], 35, 2000, 800, "brain  ", scene, "black", false);
                    var bulb = placeObject('../models/Bulb/',
                        'Bulb.obj', new BABYLON.Vector3(11, 6.75, -1), scene, 0.25,
                        new BABYLON.Vector3(0, 0, Math.PI), new BABYLON.Color3(0.9, 0.9, 1), 0.7);
                    // var bulb = placeObject('https://howshekilledit.github.io/how_models/',
                    //     'Bulbul_(OBJ).obj', new BABYLON.Vector3(11, 5, -1), scene, 0.01,
                    //     new BABYLON.Vector3(0, 0, Math.PI / 2), new BABYLON.Color4(0.8, 0.8, 0.8, 0.2));
                    // bulb_pointlight = new BABYLON.PointLight("pointLight", new BABYLON.Vector3(11, 6.5, -1), scene);
                    // bulb_pointlight.diffuse = new BABYLON.Color3(0, 0, 1);
                    // bulb_pointlight.specular = new BABYLON.Color3(0, 1, 1);
                    // bulb_pointlight.intensity = 2;

                    var campos = new BABYLON.Vector3(10, 6, 4);
                    //camera.setTarget(new BABYLON.Vector3(11, 3, -6));
                    var camrot = new BABYLON.Vector3(0.29009034157436236, 2.8, 0);
                    var anims = animate([{ obj: camera, prop: 'position', val: campos, dims: ['x', 'y', 'z'] },
                    { obj: camera, prop: 'rotation', dims: ['x', 'y', 'z'], val: camrot },

                    ], scene);
                },
                function () {
                    light.intensity = 1;
                    var campos = new BABYLON.Vector3(10, 6, 4);
                    //camera.position = campos;

                    var newscale = new BABYLON.Vector3(0.1, 0.1, 0.1);

                    var anims = animate([/*{ obj: bulb_pointlight, prop: 'intensity', val: 0, dims: false},*/
                        { obj: camera, prop: 'rotation', val: new BABYLON.Vector3(0.23794112936628264, 3.3, 0), dims: ['x', 'y', 'z'] }
                    ], scene, 2);

                    //camera.setTarget(new BABYLON.Vector3(7, 3, -8));
                    console.log(camera.rotation);
                    text_material = new BABYLON.StandardMaterial('text material', scene);
                    text_material.diffuseColor = new BABYLON.Color3(1, 1, 1);
                    text_material.alpha = 0;
                    text_sculpt = threeDText(madlibs[4], new BABYLON.Vector3(8.5, 6, -3), scene,
                        new BABYLON.Vector3(Math.PI, Math.PI, Math.PI));
                    text_sculpt.material = text_material;
                },

                function () {
                    var light_anim = { obj: light, prop: 'intensity', val: 0, dims: false };
                    var text_appear = { obj: text_material, prop: 'alpha', val: 1, dims: false };
                    var housemat = house.material;
                    var house_fade = { obj: house.material, prop: 'alpha', val: 0, dims: false };
                    var anims = animate([light_anim, text_appear, house_fade], scene);
                },
                function () {
                    var anims = animate([{ obj: blue_pointlight, prop: 'intensity', val: 0, dims: false }], scene);
                    start.textContent = "You've reached the end! Time to reflect on what you've created, and perhaps to make your own room."
                }

            ];
            //grid();

            rooms[clicks]();
        }
    }





    //sky

    var skyMaterial = new BABYLON.SkyMaterial("skyMaterial", scene);
    skyMaterial.backFaceCulling = false;

    dome = new BABYLON.PhotoDome(
        "testdome",
        "https://howshekilledit.github.io/how_models/sunset.jpg",
        {
            resolution: 32,
            size: 1000,
            scale: new BABYLON.Vector3(0.25, 0.25, 0.25)
        },
        scene
    );

    //house source: https://doc.babylonjs.com/guidedLearning/workshop/House_Use

    var corner = function (x, y) {
        return new BABYLON.Vector3(x, 0, y);
    }



    var door = function (width, height) {
        this.width = width;
        this.height = height;
        this.left = 0;
    }

    var doorSpace = function (door, left) {
        this.door = door;
        this.left = left;
    }

    var window = function (width, height) {
        this.wirswidth;
        this.height = height;
        this.left = 0;
        this.bottom = 0;
    }

    var windowSpace = function (window, left, top) {
        this.window = window;
        this.left = left;
        this.top = top;
    }

    var wall = function (corner, doorSpaces, windowSpaces) {
        this.corner = corner;
        this.doorSpaces = doorSpaces || [];
        this.windowSpaces = windowSpaces || [];
    }

    var baseData = [
        -32, -7.5,
        -12, -7.5,
        -12, -10.5,
        9, -10.5,
        9, -24,
        21, -24,
        21, -14,
        31, -14,
        31, 16,
        0, 16,
        0, 20.5,
        -12, 20.5,
        -12, 16,
        -32, 16
    ];

    var corners = [];
    for (b = 0; b < baseData.length / 2; b++) {
        corners.push(new corner(baseData[2 * b], baseData[2 * b + 1]));
    }

    //create floor
    var floorprint = roofprint(corners, 0, 0);
    var floor = roofFloor(floorprint);
    function grid() {
        var floortext = ""
        camera.position = new BABYLON.Vector3(0, 61, 0);
        camera.setTarget(new BABYLON.Vector3(0, 0, 0));
        //add grid of spheres for reference
        for (var x = -30; x < 30; x += 2) {
            for (var z = -20; z < 20; z += 2) {
                var pos = new BABYLON.Vector3(x, 5, z);
                var rot = new BABYLON.Vector3(2, 2, Math.PI / 2);
                floortext += ` ${x}-${z} `

                var sphere = BABYLON.Mesh.CreateSphere("sphere1", 16, 0.4, scene);
                //threeDText(`${x}, ${z}`, pos, rot);
                var mat = new BABYLON.StandardMaterial("myMaterial", scene);
                if ((x == 0) | z == 0) {
                    mat.diffuseColor = new BABYLON.Color3(0, 0, 0);
                } else {
                    if ((x % 5 == 0) | (z % 5 == 0)) {
                        mat.diffuseColor = new BABYLON.Color3(1, 1, 0);
                    } else {
                        mat.diffuseColor = new BABYLON.Color3(1, 0, 1);
                    }
                }

                sphere.position = pos;
                sphere.material = mat;
            }
            //add grid of camera positions
            cps = [new BABYLON.Vector3(12, 6.5, -10), new BABYLON.Vector3(12, 6.5, -10), BABYLON.Vector3(30, 6, -2), new BABYLON.Vector3(26, 7, -14), new BABYLON.Vector3(10, 6, 4), BABYLON.Vector3(10, 6, 4)];

            //floortext += `\n`

        }

    }


    var floorTexture = new BABYLON.DynamicTexture("floor texture", { width: 2024, height: 1012 }, scene);




    //add text to wallpaper

    var flooring = new BABYLON.StandardMaterial("floor", scene);
    flooring.diffuseTexture = new BABYLON.Texture("https://howshekilledit.github.io/how_models/floor.jpg", scene)

    floor.material = flooring;
    //flooring.diffuseTexture = floorTexture;
    //floorTexture = textTure(floortext, floorTexture, 20, 2024, 1012);

    //create ceiling
    var ceilingPrint = roofprint(corners, 1, 9);
    // var ceiling = roofFloor(ceilingPrint);
    // ceiling.material = flooring;



    var door0 = new door(18, 8);
    var doorSpace0 = new doorSpace(door0, 1);

    var door2 = new door(3, 6.6);
    var doorSpace2 = new doorSpace(door2, 13.5);
    var doorSpace9 = new doorSpace(door2, 0.5);
    var doorSpace13 = new doorSpace(door2, 1);

    var window = new window(4.5, 5.5);

    var windowSpace2 = new windowSpace(window, 3.2, 0.5);
    var windowSpace4 = new windowSpace(window, 3.75, 0.5);
    var windowSpace6 = new windowSpace(window, 2.75, 0.5);
    var windowSpace8_0 = new windowSpace(window, 6, 0.5);
    var windowSpace8_1 = new windowSpace(window, 19, 0.5);
    var windowSpace8_2 = new windowSpace(window, 25, 0.5);
    var windowSpace10 = new windowSpace(window, 3.75, 0.5);
    var windowSpace12 = new windowSpace(window, 7.75, 0.5);

    var walls = [];
    for (c = 0; c < corners.length; c++) {
        walls.push(new wall(corners[c]));
    }

    walls[2].windowSpaces = [windowSpace2];
    walls[4].windowSpaces = [windowSpace4];
    walls[6].windowSpaces = [windowSpace6];
    walls[8].windowSpaces = [windowSpace8_0, windowSpace8_1, windowSpace8_2];
    walls[10].windowSpaces = [windowSpace10];
    walls[12].windowSpaces = [windowSpace12];

    walls[0].doorSpaces = [doorSpace0];
    walls[2].doorSpaces = [doorSpace2];
    walls[9].doorSpaces = [doorSpace9];
    walls[13].doorSpaces = [doorSpace13];


    var ply = 0.5;
    var height = 9;

    var house = buildFromPlan(walls, ply, height, { interiorUV: new BABYLON.Vector4(0.167, 0, 1, 1), exteriorUV: new BABYLON.Vector4(0, 0, 0.16, 1) }, scene, "house", 'green');

    //mat = new BABYLON.StandardMaterial("", scene);
    //mat.diffuseTexture = new BABYLON.Texture("https://i.imgur.com/CGTCTfv.jpg", scene);


    var newmat = buildMat(madlibs[4], 32, 3000, 1000, "house", scene, "red");
    house.material = newmat;

    var innerData1 = [-12, 16, -12, -7.5];

    var corners1 = [];
    for (b = 0; b < innerData1.length / 2; b++) {
        corners1.push(new corner(innerData1[2 * b], innerData1[2 * b + 1]));
    }

    var walls1 = [];
    for (c = 0; c < corners1.length; c++) {
        walls1.push(new wall(corners1[c]));
    }

    gDoorSpace = new doorSpace(door2, 19);
    walls1[0].doorSpaces = [gDoorSpace]

    var garageWall = buildFromPlan(walls1, ply, height, { interiorUV: new BABYLON.Vector4(0.2, 0, 1, 1), exteriorUV: new BABYLON.Vector4(0.2, 0, 1, 1), interior: true }, scene, "garage Wall", 'green');
    garageWall.material = buildMat(madlibs[2], 30, 2000, 1000, "garage", scene);
    var innerData2 = [9, -13.5, 21, -13.5, 21, -7.5, 9, -7.5, 9, -10.5];

    var corners2 = [];
    for (b = 0; b < innerData2.length / 2; b++) {
        corners2.push(new corner(innerData2[2 * b], innerData2[2 * b + 1]));
    }

    var walls2 = [];
    for (c = 0; c < corners2.length; c++) {
        walls2.push(new wall(corners2[c]));
    }

    bDoorSpace = new doorSpace(door2, 1.5);
    walls2[0].doorSpaces = [bDoorSpace]
    walls2[1].doorSpaces = [bDoorSpace];
    var bathroomWall = buildFromPlan(walls2, ply, height, { interiorUV: new BABYLON.Vector4(0.2, 0, 1, 1), exteriorUV: new BABYLON.Vector4(0.2, 0, 1, 1), interior: true }, scene, madlibs[4]);
    //bathroomWall.material = buildMat(madlibs[0], 35, 3800, 1800, "bathroom ", scene, "blue", false, '#ffff00');
    //bathroomWall.material.alpha = 0.5;
    //bathroomWall.setEnabled(false);
    var innerData3 = [15, 16, 15, 0, 24, 0, 26, 3, 26, 16];

    var corners3 = [];
    for (b = 0; b < innerData3.length / 2; b++) {
        corners3.push(new corner(innerData3[2 * b], innerData3[2 * b + 1]));
    }

    var walls3 = [];
    for (c = 0; c < corners3.length; c++) {
        walls3.push(new wall(corners3[c]));
    }

    mDoorSpace1 = new doorSpace(door2, 2.4);
    mDoorSpace2 = new doorSpace(door2, 0.2);
    mDoorSpace3 = new doorSpace(door2, 0.2);
    walls3[1].doorSpaces = [mDoorSpace1]
    walls3[2].doorSpaces = [mDoorSpace2];
    walls3[3].doorSpaces = [mDoorSpace3];

    //material for masculinity madlib
    var mascmat1 = buildMat(madlibs[5], 20, 1500, 1000, "masterWall", scene, "black", false, 'pink');
    var mascmat2 = buildMat(madlibs[5], 40, 1800, 1500, "smallWall2", scene, "black", false, 'pink');

    var masterWall = buildFromPlan(walls3, ply, height, { interiorUV: new BABYLON.Vector4(0.2, 0, 1, 1), exteriorUV: new BABYLON.Vector4(0.2, 0, 1, 1), interior: true }, scene, madlibs[5]);
    //masterWall.material = buildMat(madlibs[0], 30, 2000, 1000, "master ", scene, "black", true, 'purple');
    masterWall.material = mascmat1;


    var innerData4 = [26, 3, 31, 3];

    var corners4 = [];
    for (b = 0; b < innerData4.length / 2; b++) {
        corners4.push(new corner(innerData4[2 * b], innerData4[2 * b + 1]));
    }

    var walls4 = [];
    for (c = 0; c < corners4.length; c++) {
        walls4.push(new wall(corners4[c]));
    }

    smallWall1 = buildFromPlan(walls4, ply, height, { interiorUV: new BABYLON.Vector4(0.2, 0, 1, 1), exteriorUV: new BABYLON.Vector4(0.2, 0, 1, 1), interior: true }, scene, "smallWall1", 'orange');
    smallWall1.material = buildMat("My face become red as I spoke", 30, 2000, 1000, "smallWall1", scene, "black");

    var innerData5 = [24, 0, 31, 0];

    var corners5 = [];
    for (b = 0; b < innerData5.length / 2; b++) {
        corners5.push(new corner(innerData5[2 * b], innerData5[2 * b + 1]));
    }

    var walls5 = [];
    for (c = 0; c < corners5.length; c++) {
        walls5.push(new wall(corners5[c]));
    }

    smallWall2 = buildFromPlan(walls5, ply, height, { interiorUV: new BABYLON.Vector4(0.2, 0, 1, 1), exteriorUV: new BABYLON.Vector4(0.2, 0, 1, 1), interior: true }, scene, madlibs[5]);
    smallWall2.material = mascmat2;
    var innerData6 = [21, -7.5, 21, 0];

    var corners6 = [];
    for (b = 0; b < innerData6.length / 2; b++) {
        corners6.push(new corner(innerData6[2 * b], innerData6[2 * b + 1]));
    }

    var walls6 = [];
    for (c = 0; c < corners6.length; c++) {
        walls6.push(new wall(corners6[c]));
    }

    cDoorSpace = new doorSpace(door2, 2.25);
    walls6[0].doorSpaces = [cDoorSpace]

    smallWall3 = buildFromPlan(walls6, ply, height, {
        interiorUV: new BABYLON.Vector4(0.2, 0, 1, 1),
        exteriorUV: new BABYLON.Vector4(0.2, 0, 1, 1), interior: true
    }, scene, madlibs[0]);
    //smallWall3.material = buildMat("smallWall3 ", 30, 2000, 1000, "smallWall3", scene, "viovar");
    ;

    var innerData7 = [0, -10.5, 0, 3];

    var corners7 = [];
    for (b = 0; b < innerData7.length / 2; b++) {
        corners7.push(new corner(innerData7[2 * b], innerData7[2 * b + 1]));
    }

    var walls7 = [];
    for (c = 0; c < corners7.length; c++) {
        walls7.push(new wall(corners7[c]));
    }

    smallWall4 = buildFromPlan(walls7, ply, height, { interiorUV: new BABYLON.Vector4(0.2, 0, 1, 1), exteriorUV: new BABYLON.Vector4(0.2, 0, 1, 1), interior: true }, scene, madlibs[2]);
    //smallWall4.material = mat;

    var innerData8 = [0, -2, -12, -2];

    var corners8 = [];
    for (b = 0; b < innerData8.length / 2; b++) {
        corners8.push(new corner(innerData8[2 * b], innerData8[2 * b + 1]));
    }

    var walls8 = [];
    for (c = 0; c < corners8.length; c++) {
        walls8.push(new wall(corners8[c]));
    }

    oDoorSpace = new doorSpace(door2, 8.5);
    walls8[0].doorSpaces = [oDoorSpace]

    smallWall5 = buildFromPlan(walls8, ply, height, { interiorUV: new BABYLON.Vector4(0.2, 0, 1, 1), exteriorUV: new BABYLON.Vector4(0.2, 0, 1, 1), interior: true }, scene, "eight");


    //Position Animation"
    var frameRate = 10;
    var dolly = new BABYLON.Animation("dolly", "position.y", frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);

    var keyFramesP = [];

    keyFramesP.push({
        frame: 0,
        value: 5
    });

    keyFramesP.push({
        frame: frameRate,
        value: 10

    });




    dolly.setKeys(keyFramesP);

    canvas.addEventListener("click", function () {
        roomclick(clicks);
        clicks++;
    });

    //roll to desired room
    if (words.indexOf("") == -1) {
        var room = 1;
        (function () {
            for (var i = 0; i < room; i++) {
                roomclick(i);
                clicks++;
            }
        })();
    }
    /*Rotation Animation
    var yRot = new BABYLON.Animation("yRot", "rotation.y", frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);

    var keyFramesR = [];

    keyFramesR.push({
        frame: 0,
        value: 0
    });

    keyFramesR.push({
        frame: frameRate,
        value: Math.PI
    });

    keyFramesR.push({
        frame: 2 * frameRate,
        value: 2 * Math.PI
    });


    yRot.setKeys(keyFramesR);
    */
    //scene.beginDirectAnimation(camera, [dolly], 0, 2 * frameRate, false);


    document.getElementById("renderCanvas").addEventListener("keydown", event => {
        console.debug("Position before : " + camera.position);
        var callBack = () => console.debug("Position after : " + camera.position);
        if (event.keyCode === 90) { //z
            scene.beginDirectAnimation(camera, [dolly], 0, 2 * frameRate, false);

        } else if (event.keyCode === 83) { //s
            BABYLON.Animation.CreateAndStartAnimation("slideCam+", camera, "beta", 30, 60, camera.beta, camera.beta + 0.54, 0, undefined, callBack);
        }
    });

    return scene;
};


window.initFunction = async function () {


    var asyncEngineCreation = async function () {
        try {
            return createDefaultEngine();
        } catch (e) {
            console.log("the available createEngine function failed. Creating the default engine instead");
            return createDefaultEngine();
        }
    }

    window.engine = await asyncEngineCreation();
    if (!engine) throw 'engine should not be null.';
    startRenderLoop(engine, canvas);
    window.scene = createScene();
};
initFunction().then(() => {
    sceneToRender = scene
});

// Resize
window.addEventListener("resize", function () {
    engine.resize();
});
