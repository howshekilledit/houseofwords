//follow the instructions in gray! 

let face = ""; /*Between the red quotation marks, 
       in something like 3-8 words, 
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

let red = ""; //repeat the instructions with the word "red" (keep in the form of a noun)

let girl = ""; //repeat the instructions with the word "girl"

let boy = ""; //repeat the instructions with the word "boy"

let law = ""; /*repeat the instructions with the word "law"

   when you have finished lines 1 - 27, 
   press the floppy disk icon on the top menu to save your project,
   then refresh the page (don't click the play button -- it's buggy)

   click the screen to the right to advance the program

   when clicking no longer does anything, 
   you've completed step 2. 
   
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

//populate madlibs using template literals
var madlibs = [];
madlibs.push(`My ${face} became ${red} as I spoke. `);
madlibs.push(`The sunset was ${red} last night. `);
madlibs.push(`Most days I don't feel like a ${girl} or a ${boy}. `);
madlibs.push(`I don't always remember the ${law}. `);

var canvas = document.getElementById("renderCanvas");

var startRenderLoop = function (engine, canvas) {
    engine.runRenderLoop(function () {
        if (sceneToRender && sceneToRender.activeCamera) {
            sceneToRender.render();
        }
    });
}

var engine = null;
var scene = null;
var sceneToRender = null;
var createDefaultEngine = function () { return new BABYLON.Engine(canvas, true, { preserveDrawingBuffer: true, stencil: true, disableWebGL2Support: false }); };


if (typeof TYPE === "undefined") {
    fauxLoad()
}

var canvas = document.getElementById("renderCanvas");
var clicks = 0;

var engine = null;
var scene = null;
var dome;
var sceneToRender = null;
var createDefaultEngine = function () { return new BABYLON.Engine(canvas, true, { preserveDrawingBuffer: true, stencil: true, disableWebGL2Support: false }); };
var camera;
BABYLON.PolygonMeshBuilder.prototype.wallBuilder = function (w0, w1) {
    var positions = [];
    var iuvs = [];
    var euvs = [];
    var icolors = [];
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

    //build material with wallpaper texture
   

    //animate camera to move from one position (dollly) and target(pivot) to another
    function animateCam(dolly1, dolly2, pivot1, pivot2) {
        function addAnim(type, coord, pos1, pos2, frameRate) {
            var anim = new BABYLON.Animation(type + "_" + coord, type + '.' + coord, frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
            var keyFrames = [];
            keyFrames.push({ frame: 0, value: pos1[coord] });
            keyFrames.push({ frame: frameRate * 2, value: pos2[coord] });
            anim.setKeys(keyFrames);
            return anim;
        }

        var anims = [];
        var frameRate = 5;
        var coords = ['x', 'y', 'z'];

        for (const coord of coords) {
            anims.push(addAnim('position', coord, dolly1, dolly2, frameRate));
            anims.push(addAnim('rotation', coord, pivot1, pivot2, frameRate));

        }

        scene.beginDirectAnimation(camera, anims, 0, 2 * frameRate, false);
        return anims;


    }



    var light = new BABYLON.HemisphericLight("hemiLight", new BABYLON.Vector3(4, 10, 0), scene);

    //start on black
    light.intensity = 0;
    //red sunset wall
    //camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 20, 10), scene); 
    camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(-1.5, 5, 8.5), scene);
    //var sunsetTarget = new BABYLON.Vector3(20, 2, 10);
    //var sunsetPos =  new BABYLON.Vector3(0, 6, 10);
    var sunsetRot = new BABYLON.Vector3(0.2, 1.6, 0);
    camera.rotation = sunsetRot;

    var wPos = new BABYLON.Vector3(-8, 5, 5); //window position
    var wRot = new BABYLON.Vector3(.2, 0, 0); //window rotation
    //bird's eye
    camera.position = new BABYLON.Vector3(0, 80, 0);
    camera.setTarget(new BABYLON.Vector3(0, 0, 0));

    var bPos = new BABYLON.Vector3(-28, 5, 8.5); //bedroom position
    var bRot = new BABYLON.Vector3(0.2, Math.PI / 2, 0);  //bedroom rotation

    var sPos = new BABYLON.Vector3(-12, 4, -10);
    var gPos = new BABYLON.Vector3(-30, 4, 0); //garage position
    var gRot = new BABYLON.Vector3(0, Math.PI, 0); //garage rotation
    //camera.rotation = gRot;
    //camera.position = bPos;

    var anims;
   let start = document.getElementById('start')
    //start.addEventListener("click", function () {
        start.style.display = 'none';
        light.intensity = 2;
    //});
    canvas.addEventListener("click", function () {
        //var anims = animateCam(camera.position, blushPos, camera.rotation, blushRot);
        if (light.intensity > 0) {
            switch (clicks) {
                case 0:
                    light.intensity = 0.7;
                    anims = animateCam(camera.position, wPos, camera.rotation, wRot);
                    clicks++;
                    break;
                case 1:
                    light.intensity = 1.5;
                    anims = animateCam(camera.position, bPos, camera.rotation, bRot);

                    clicks++;
                    break;
                case 2:
                    //ground.height = 20;
                    anims = animateCam(camera.position, bPos, camera.rotation, gRot);
                    //dome.dispose();

                    clicks++;
                    break;
                case 3:
                    anims = animateCam(camera.position, gPos, camera.rotation, gRot);

                    clicks++;
                    break;

            }
        }
    });





    //3d text
    function threeDText(str, position, rotation = new BABYLON.Vector3(0,0,0), fontSize = 0.3, cWidth = 3, cHeight = 5, scale = 1, maxWidth = 4) {
        Writer = BABYLON.MeshWriter(scene, { scale: scale });
        str = `${str.repeat(4)}`


        var text = new Writer(
            str,
            {
                "anchor": gPos,
                "letter-height": fontSize,
                "letter-thickness": fontSize / 2,
                "color": "#000080",

            }
        );

        //Text Writer create SPS with Particle for each letter
        var SPS = text.getSPS();

        /*Update animation
        SPS.updateParticle =  (particle)=> {
            particle.rotation.z -= .1;
        };
        */
        //calculate approximate characters per line, then locate line breaks based on spaces

        var roughLen = 1.8 * cWidth / (fontSize);
        var numLines = 0.7 * cHeight / fontSize;
        var cutOffs = [];
        var strPos = 0;
        for (var j = 0; j < numLines; j++) {
            thisLine = str.substr(strPos, roughLen);
            thisLine = thisLine.substring(0, thisLine.lastIndexOf(" "))
            strPos += thisLine.length;
            cutOffs.push(strPos);
        }


        var yDelta = 0;
        var xDelta = 0;
        var iDelta = 1;
        var lnPos = 0; //current line 
        for (var i = 0; i < SPS.particles.length; i++) {


            if (i + iDelta == cutOffs[lnPos]) {
                yDelta += fontSize * scale;
                xDelta -= SPS.particles[i - 1].position.x;
                lnPos++;
                if (lnPos < 2) {
                    iDelta--;
                }
            }
            SPS.particles[i].position.z -= yDelta;
            SPS.particles[i].position.x += xDelta;
            SPS.particles[i].rotation = rotation; 

            //alert(str.charAt(i));
        }
        scene.registerBeforeRender(() => {
            SPS.setParticles();
            SPS.mesh.rotation.x = Math.PI * -.5;
            SPS.mesh.position = position;
        });
        return text;
    }
    //sunset text (second click)
    var sunset = threeDText(madlibs[1], new BABYLON.Vector3(-10, 5.5, 12));

    //police text (third click)
    var pp = threeDText(madlibs[3], new BABYLON.Vector3(-26, 6, 4));

    var pp_sps = pp.getSPS();
    pp_sps.mesh.rotation.y += Math.PI;
    //fan
    BABYLON.SceneLoader.ImportMesh(
        null,
        "https://models.babylonjs.com/vintageDeskFan/",
        "vintageFan_animated.gltf",
        scene,
        function (meshes) {
            meshes[0].rotation.y += Math.PI / 2;
            var blueMat = new BABYLON.StandardMaterial('blue', scene);
            blueMat.diffuseColor = new BABYLON.Color3(165 / 255, 42 / 255, 42 / 255);
            meshes[0].material = blueMat;
            meshes[0].position = new BABYLON.Vector3(14, 0, -10);
            //meshes[0].rotation.x += MATH.PI/2; 
            meshes[0].scaling = new BABYLON.Vector3(0.06, 0.06, 0.06);

        });

    //bed
    BABYLON.SceneLoader.ImportMesh(
        null,
        "https://raw.githubusercontent.com/howshekilledit/critical_cookbook/main/",
        "bed.obj",
        scene,
        function (meshes) {

            for (const mesh of meshes) { //for each mesh ib bed object
                var blueMat = new BABYLON.StandardMaterial('blue', scene);
                var bedmat = buildMat(madlibs[2], 30, 2000, 1000, "garage", scene);
                blueMat.diffuseColor = new BABYLON.Color3(0, 1, 1);
                mesh.material = blueMat;
                mesh.position = new BABYLON.Vector3(-18, 0, 9);
                mesh.rotation.y -= 0.6 + Math.PI / 2;
                mesh.scaling = new BABYLON.Vector3(0.004, 0.004, 0.004);
            }

        });
    //chair
    BABYLON.SceneLoader.ImportMesh(
        "",
        "https://raw.githubusercontent.com/howshekilledit/critical_cookbook/main/", "chair.obj",
        scene,
        function (meshes) {
            for (const mesh of meshes) {

                var blueMat = new BABYLON.StandardMaterial('blue', scene);
                blueMat.diffuseColor = new BABYLON.Color3(0, 0, 0);
                mesh.material = blueMat;
                mesh.position = new BABYLON.Vector3(9, 0, 7);
                mesh.rotation = new BABYLON.Vector3(0, 1, 0);
                mesh.scaling = new BABYLON.Vector3(0.04, 0.04, 0.04);
            }

        });


    camera.attachControl(canvas, true);


   

    //Create dynamic texture
    var textureResolution = 512;
    var textureGround = new BABYLON.DynamicTexture("dynamic texture", { width: 2024, height: 1012 }, scene);
    var textureContext = textureGround.getContext();

    var mat = new BABYLON.StandardMaterial("Mat", scene);
    mat.diffuseTexture = textureGround;

    //add text to wallpaper
    textureGround = textTure(madlibs[0], textureGround, 48, 2024, 1012);

    var skyMaterial = new BABYLON.SkyMaterial("skyMaterial", scene);
    skyMaterial.backFaceCulling = false;

    dome = new BABYLON.PhotoDome(
        "testdome",
        "./Nebel_Schienen_Panorama.jpg",
        {
            resolution: 32,
            size: 1000,
            scale: new BABYLON.Vector3(0.5, 0.5, 0.5)
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

    let floortext = ""
    for(let x = -30; x < 30; x+=2){
        for(let z = -20; z < 20; z+=2){
        let pos = new BABYLON.Vector3(x, 5, z);
        let rot = new BABYLON.Vector3(2, 2, Math.PI/2);
        floortext += ` ${x}-${z} `

       var sphere = BABYLON.Mesh.CreateSphere("sphere1", 16, 1, scene);
            //threeDText(`${x}, ${z}`, pos, rot);
            var mat = new BABYLON.StandardMaterial("myMaterial", scene);
            if((x == 0) | z == 0){
           mat.diffuseColor = new BABYLON.Color3(0, 0, 0);
            } else {
                if((x%5 == 0) | (z%5 == 0)){
                mat.diffuseColor = new BABYLON.Color3(1, 1, 0);
                } else {
                    mat.diffuseColor = new BABYLON.Color3(1, 0, 1);
                }
            }
     
         sphere.position = pos; 
            sphere.material = mat; 
        }

     
        //floortext += `\n`

    }


      var floorTexture = new BABYLON.DynamicTexture("floor texture", { width: 2024, height: 1012 }, scene);

    
     

        //add text to wallpaper
 
    var flooring = new BABYLON.StandardMaterial("floor", scene);
    //flooring.diffuseTexture = new BABYLON.Texture("https://playground.babylonjs.com/textures/albedo.png", scene)
    
    floor.material = flooring;
    flooring.diffuseTexture = floorTexture; 
    floorTexture= textTure(floortext, floorTexture, 20, 2024, 1012);

    //create floor
    var ceilingPrint = roofprint(corners, 1, 9);
    //var ceiling = roofFloor(ceilingPrint);
    //ceiling.material = flooring;



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

    var house = buildFromPlan(walls, ply, height, { interiorUV: new BABYLON.Vector4(0.167, 0, 1, 1), exteriorUV: new BABYLON.Vector4(0, 0, 0.16, 1) }, scene, "nine");

    //mat = new BABYLON.StandardMaterial("", scene);
    //mat.diffuseTexture = new BABYLON.Texture("https://i.imgur.com/CGTCTfv.jpg", scene);


    var newmat = buildMat("house ", 30, 2000, 1000, "house", scene, "blue");
    //house.material = newmat;
    newmat.diffuseColor = new BABYLON.Color3(240 / 255, 234 / 255, 214 / 255); //eggshell paint color

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

    var garageWall = buildFromPlan(walls1, ply, height, { interiorUV: new BABYLON.Vector4(0.2, 0, 1, 1), exteriorUV: new BABYLON.Vector4(0.2, 0, 1, 1), interior: true }, scene, "one");
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

    var bathroomWall = buildFromPlan(walls2, ply, height, { interiorUV: new BABYLON.Vector4(0.2, 0, 1, 1), exteriorUV: new BABYLON.Vector4(0.2, 0, 1, 1), interior: true }, scene, "two");
    bathroomWall.material = buildMat(madlibs[2], 30, 2000, 1000, "bathroom ", scene, "navy");

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

    var masterWall = buildFromPlan(walls3, ply, height, { interiorUV: new BABYLON.Vector4(0.2, 0, 1, 1), exteriorUV: new BABYLON.Vector4(0.2, 0, 1, 1), interior: true }, scene, "three");
    masterWall.material = buildMat(madlibs[0], 30, 2000, 1000, "master ", scene, "black");

    var innerData4 = [26, 3, 31, 3];

    var corners4 = [];
    for (b = 0; b < innerData4.length / 2; b++) {
        corners4.push(new corner(innerData4[2 * b], innerData4[2 * b + 1]));
    }

    var walls4 = [];
    for (c = 0; c < corners4.length; c++) {
        walls4.push(new wall(corners4[c]));
    }

    smallWall1 = buildFromPlan(walls4, ply, height, { interiorUV: new BABYLON.Vector4(0.2, 0, 1, 1), exteriorUV: new BABYLON.Vector4(0.2, 0, 1, 1), interior: true }, scene, "four");
    smallWall1.material = buildMat("smallWall1 ", 30, 2000, 1000, "smallWall1", scene, "violet");

    var innerData5 = [24, 0, 31, 0];

    var corners5 = [];
    for (b = 0; b < innerData5.length / 2; b++) {
        corners5.push(new corner(innerData5[2 * b], innerData5[2 * b + 1]));
    }

    var walls5 = [];
    for (c = 0; c < corners5.length; c++) {
        walls5.push(new wall(corners5[c]));
    }

    smallWall2 = buildFromPlan(walls5, ply, height, { interiorUV: new BABYLON.Vector4(0.2, 0, 1, 1), exteriorUV: new BABYLON.Vector4(0.2, 0, 1, 1), interior: true }, scene, "five");
    smallWall2.material = buildMat("smallWall2 ", 30, 2000, 1000, "smallWall2", scene, "violet");;

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

    smallWall3 = buildFromPlan(walls6, ply, height, { interiorUV: new BABYLON.Vector4(0.2, 0, 1, 1), exteriorUV: new BABYLON.Vector4(0.2, 0, 1, 1), interior: true }, scene, "six");
    smallWall3.material = buildMat("smallWall3 ", 30, 2000, 1000, "smallWall3", scene, "violet");
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

    smallWall4 = buildFromPlan(walls7, ply, height, { interiorUV: new BABYLON.Vector4(0.2, 0, 1, 1), exteriorUV: new BABYLON.Vector4(0.2, 0, 1, 1), interior: true }, scene, "seven");
    smallWall4.material = mat;

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
    smallWall5.material = mat;

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