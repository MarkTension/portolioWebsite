// var pixels = []
// var gridSize = 32
// var egoSize = 31
// var halfEgoSize = Math.floor(egoSize*0.5)
// var agentPosition = [randomInteger(0,self.gridSize), randomInteger(0,self.gridSize)]

// const MODEL_URL = '/tensorflow/model.json';

// // import * as tf from '@tensorflow/tfjs';
// // import {loadGraphModel} from '@tensorflow/tfjs-converter';
// // async function  loadtf() {
// //     return tf.loadGraphModel(MODEL_URL);
// // }

// // var model = loadtf();


// function randomInteger(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }


// function make2D(array) {
// 	for (var i = 0; i < array.length; i++) {
//         array[i] = new Array(gridSize).fill(0);;
//     }
// }

// // // instantiate arrays
// // // state
// var gridState = new Array(gridSize)
// make2D(gridState)
// // objective
// var gridState_objective = new Array(gridSize)
// make2D(gridState_objective)

// // target
// var gridState_target = new Array(gridSize)
// make2D(gridState_target)

// var agentEgoViewOneHot = new Array(egoSize)
// make2D(agentEgoViewOneHot)


// // instantiate 


// function setup() {
// 	createCanvas(400, 400);
//     // self.worldSize = 32;
//     self.timer = 0;
//     frameRate(20);
//     drawGrid();

    
// }

// function draw() {
    
//     background(220);
//     noStroke();
//     self.timer ++;
//     pixels.forEach(pix => {
//         pix.display()
//     });
    
//     pixels[timer % (32*32 - 1)].setState(true);
// }

// class Pix {
// //  main pixel class.   
// // 
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//         this.diameter = width/gridSize;
//         this.color= color("white");
//         this.display()
        
//     }
  
//     display() {
//         rect(this.x, this.y, this.diameter, this.diameter);
//         fill(this.color)
//     }

//     setState(pixState) {
//         if (pixState){
//             this.color = color(50, 55, 100)
//         }
//         else {
//             this.color = color("black")
//         }
//       }
//   }

// function drawGrid(){

//     for (var y = 0; y < width; y += width / gridSize) {
// 		for (var x = 0; x < height; x += height / gridSize) {

//             pixels.push(new Pix(x,y));
//         }
// 	}
// }