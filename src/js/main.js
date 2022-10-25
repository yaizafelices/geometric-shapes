'use strict';

//Code of the square

const squarePerimeter = (squareSide) => {
  return squareSide * 4;
};
const squareArea = (squareSide) => {
  return squareSide * squareSide;
};

const inputSquare = document.getElementById('inputSquare');


const calculatePerimeterSquare =() =>{
  const valueSquare = inputSquare.value;
  const perimeter = squarePerimeter(valueSquare);
  document.querySelector('.square__form-container-answer-perimeter').innerHTML = (perimeter);
};

const calculateAreaSquare =() =>{
  const valueSquare = inputSquare.value;
  const area = squareArea(valueSquare);
  document.querySelector('.square__form-container-answer-area').innerHTML = (area);
};



//Code of the triangle

const trianglePerimeter = (triangleSide1, triangleSide2,triangleBase)=>{
  return triangleSide1 + triangleSide2 + triangleBase;
};
const triangleArea =(triangleBase, triangleHeight)=> {
  return (triangleBase * triangleHeight)/2;
};

const inputSide1 = document.getElementById('inputTriangleSide1');
const inputSide2 = document.getElementById('inputTriangleSide2');
const inputBase = document.getElementById('inputTriangleBase');
const inputHeight = document.getElementById('inputTriangleHeight');


const calculatePerimeterTriangle =() =>{
  const valueSide1 = parseInt(inputSide1.value);
  const valueSide2 = parseInt(inputSide2.value);
  const valueBase = parseInt(inputBase.value);
  const perimeter = trianglePerimeter(valueSide1, valueSide2, valueBase);
  document.querySelector('.triangle__form-container-answer-perimeter').innerHTML = (perimeter);
};

const calculateAreaTriangle =() =>{
  const valueBase = parseInt(inputBase.value);
  const valueHeight = parseInt(inputHeight.value);
  const area = triangleArea(valueBase, valueHeight);
  document.querySelector('.triangle__form-container-answer-area').innerHTML = (area);
};



//Code of the Circle

const PI = Math.PI;

const circleDiameter = (circleRadius) =>{
  return circleRadius * 2;
};
const circlePerimeter = (circleRadius) =>{
  const diameter = circleDiameter(circleRadius);
  return diameter * PI;
};
const circleArea =(circleRadius) =>{
  return (circleRadius * circleRadius) * PI;
};

const inputCircle = document.getElementById('inputCircle');

const calculateDiameterCircle =() =>{
  const value = inputCircle.value;
  const diameter = circleDiameter(value);
  document.querySelector('.circle__form-container-answer-diameter').innerHTML = (diameter);
};

const calculatePerimeterCircle =() =>{
  const value = inputCircle.value;
  const perimeter = circlePerimeter(value);
  document.querySelector('.circle__form-container-answer-perimeter').innerHTML = (perimeter);
};
const calculateAreaCircle =() =>{
  const value = inputCircle.value;
  const area = circleArea(value);
  document.querySelector('.circle__form-container-answer-area').innerHTML = (area);
};
