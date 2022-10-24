'use strict';

//Code of the square

const squarePerimeter = (squareSide) => {
  return squareSide * 4;
};
const squareArea = (squareSide) => {
  return squareSide * squareSide;
};


const calculatePerimeterSquare =() =>{
  const input = document.getElementById('inputSquare');
  const value = input.value;
  const perimeter = squarePerimeter(value);
  document.querySelector('.figures__square-form-answerPerimeter').innerHTML = (perimeter);
};
const calculateAreaSquare =() =>{
  const input = document.getElementById('inputSquare');
  const value = input.value;
  const area = squareArea(value);
  document.querySelector('.figures__square-form-answerArea').innerHTML = (area);
};



//Code of the triangle

/*const trianglePerimeter = (triangleSide1, triangleSide2,triangleBase)=>{
  return triangleSide1 + triangleSide2 + triangleBase;
};
const triangleArea =(triangleBase, triangleHeight)=> {
  return (triangleBase * triangleHeight)/2;
};


const calculatePerimeterTriangle =() =>{
  const input = document.getElementById('inputTriangle');
  const value = input.value;
  const perimeter = trianglePerimeter(value);
  alert(perimeter);
};
const calculateAreaTriangle =() =>{
  const input = document.getElementById('inputTriangle');
  const value = input.value;
  const area = triangleArea(value);
  alert(area);
};



//Code of the Circle

const PI = Math.PI;

const circleDiameter = (circleRadius) =>{
  return circleRadius * 2;
};
const CirclePerimeter = (circleRadius) =>{
  const diameter = circleDiameter(circleRadius);
  return diameter * PI;
};
const CircleArea =(circleRadius) =>{
  return (circleRadius * circleRadius) * PI;
};


const calculatePerimeterCircle =() =>{
  const input = document.getElementById('inputCircle');
  const value = input.value;
  const perimeter = circlePerimeter(value);
  alert(perimeter);
};
const calculateAreaCircle =() =>{
  const input = document.getElementById('inputCircle');
  const value = input.value;
  const area = circleArea(value);
  alert(area);
};*/
