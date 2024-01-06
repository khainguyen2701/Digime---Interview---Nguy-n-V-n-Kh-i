 // CONSTRUCT VARIABLE
 const coordinates = [
    [708, 23.000000000000004],
    [708, 257],
    [970, 257],
    [970, 23.000000000000004]
];

const RED_COLOR = "red";
const BLUE_COLOR = "blue";
const SIZE_SMALL = "18px Arial";
const SIZE_MEDIUM = "26px Arial";
const LOCATION_TEXT_X = 725
const LOCATION_TEXT_Y = 100

const coordinatesQChars = [[765, 65], [780, 65], [760, 55]]
const coordinatesUChars = [[785, 35], [785, 65], [810, 65], [810, 35]]
const coordinatesYChars = [[820, 35], [830, 55], [840, 35], [830, 65], [825, 30], [830, 40]]
const coordinatesNChars = [[855, 35], [855, 65], [885, 65], [885, 35]]
const coordinatesHChars = [[900, 35], [900, 65], [900, 50], [930, 50], [930, 35], [930, 65]]


// get references into canvas
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Draw the frame
ctx.beginPath();
ctx.moveTo(coordinates[0][0], coordinates[0][1]);
for (let i = 1; i < coordinates.length; i++) {
    ctx.lineTo(coordinates[i][0], coordinates[i][1]);
}
ctx.closePath();
ctx.stroke();
ctx.lineWidth = 3

//Q character
ctx.beginPath();
ctx.arc(760, 50, 15, 0, Math.PI * 2, true);
ctx.closePath();
ctx.moveTo(coordinatesQChars[0][0], coordinatesQChars[0][1]);
ctx.lineTo(coordinatesQChars[1][0], coordinatesQChars[1][1]);
ctx.moveTo(coordinatesQChars[0][0], coordinatesQChars[0][1]);
ctx.lineTo(coordinatesQChars[2][0], coordinatesQChars[2][1]);
ctx.stroke();

//U characters
ctx.beginPath();
ctx.moveTo(coordinatesUChars[0][0], coordinatesUChars[0][1]);
ctx.lineTo(coordinatesUChars[1][0], coordinatesUChars[1][1]);
ctx.lineTo(coordinatesUChars[2][0], coordinatesUChars[2][1]);
ctx.lineTo(coordinatesUChars[2][0], coordinatesUChars[3][1]);
ctx.stroke();
//Ỳ characters
ctx.beginPath();
ctx.moveTo(coordinatesYChars[0][0], coordinatesYChars[0][1]);
ctx.lineTo(coordinatesYChars[1][0], coordinatesYChars[1][1]);
ctx.lineTo(coordinatesYChars[2][0], coordinatesYChars[2][1]);
ctx.moveTo(coordinatesYChars[1][0], coordinatesYChars[1][1]);
ctx.lineTo(coordinatesYChars[3][0], coordinatesYChars[3][1]);
ctx.moveTo(coordinatesYChars[4][0], coordinatesYChars[4][1]);
ctx.lineTo(coordinatesYChars[5][0], coordinatesYChars[5][1]);
ctx.stroke();
//N characters
ctx.beginPath();
ctx.moveTo(coordinatesNChars[0][0], coordinatesNChars[0][1]);
ctx.lineTo(coordinatesNChars[1][0], coordinatesNChars[1][1]);
ctx.moveTo(coordinatesNChars[0][0], coordinatesNChars[0][1]);
ctx.lineTo(coordinatesNChars[2][0], coordinatesNChars[2][1]);
ctx.lineTo(coordinatesNChars[3][0], coordinatesNChars[3][1]);
ctx.stroke();
//H characters
ctx.beginPath();
ctx.moveTo(coordinatesHChars[0][0], coordinatesHChars[0][1]);
ctx.lineTo(coordinatesHChars[1][0], coordinatesHChars[1][1]);
ctx.moveTo(coordinatesHChars[2][0], coordinatesHChars[2][1]);
ctx.lineTo(coordinatesHChars[3][0], coordinatesHChars[3][1]);
ctx.moveTo(coordinatesHChars[4][0], coordinatesHChars[4][1]);
ctx.lineTo(coordinatesHChars[5][0], coordinatesHChars[5][1]);
ctx.stroke();

//H characters
ctx.font = SIZE_MEDIUM;
ctx.fillStyle = RED_COLOR
ctx.fillText('Nhận:', LOCATION_TEXT_X, LOCATION_TEXT_Y);
ctx.font = SIZE_MEDIUM;
ctx.fillText('Thi công, sửa chữa', LOCATION_TEXT_X, LOCATION_TEXT_Y + 35);
ctx.font = SIZE_MEDIUM;
ctx.fillText('Điện nước', LOCATION_TEXT_X + 50, LOCATION_TEXT_Y + 70);
ctx.font = SIZE_SMALL;
ctx.fillStyle = BLUE_COLOR
ctx.fillText('Nước uống đóng bình mặt trời', 715, LOCATION_TEXT_Y * 2);
ctx.font = SIZE_MEDIUM;
ctx.fillStyle = RED_COLOR
ctx.fillText('ĐT: 0123456789', LOCATION_TEXT_X + 5, LOCATION_TEXT_Y + 135);