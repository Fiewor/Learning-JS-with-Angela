function main(){
   threeBoxes();
   rightCorner();
   twoBoxes();
   leftCorner();
   threeBoxes();
   rightCorner();
   twoBoxes();
   leftCorner();
   threeBoxes();
}
function threeBoxes(){
   putBeeper();
   move();
   move();
   putBeeper();
   move();
   move();
   putBeeper();
}
function twoBoxes(){
   move();
   putBeeper();
   move();
   move();
   putBeeper();
   move();
}
function rightCorner() {
   turnLeft();
   move();
   turnLeft();
}
function leftCorner() {
   turnRight();
   move();
   turnRight();
}
