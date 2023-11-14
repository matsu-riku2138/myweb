let timestamp = 0;
let isMove = false;//動いてるいるとtrue;
let title_size = 16;
let direction = 8;
let field
function setup(){//初期化
    let canvas
    let button1
    let button2
    let button3
    if(windowWidth <= 576){
        canvas = createCanvas(360, 420);
        title_size = 24;
        field = [
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
            [0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,],
            [0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,],
            [0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,],
            [0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,],
            [0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,],
            [0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,],
            [0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,],
            [0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,],
            [0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
        ];
        button1=createButton("動かす")
        .class(`btn btn-md btn-secondary text-white`)
        .position(windowWidth / 2 - 124,580);
        button1.mousePressed(startgame)
        button2=createButton("止める")
        .class(`btn btn-md btn-secondary text-white`)
        .position(windowWidth / 2 - 38,580);
        button2.mousePressed(stopgame)
        button3=createButton("クリア")
        .class(`btn btn-md btn-secondary text-white`)
        .position(windowWidth / 2 + 48,580);
        button3.mousePressed(clearField)
    }else{
        canvas = createCanvas(640, 380);
        field = [
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1, 0,0,],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,],
            [0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
            [0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,],
            [0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
        ];
        button1=createButton("動かす")
        .class(`btn btn-md btn-secondary text-white`)
        .position(windowWidth / 2 - 145,550);
        button1.mousePressed(startgame)
        button2=createButton("止める")
        .class(`btn btn-md btn-secondary text-white`)
        .position(windowWidth / 2 - 45,550);
        button2.mousePressed(stopgame)
        button3=createButton("クリア")
        .class(`btn btn-md btn-secondary text-white`)
        .position(windowWidth / 2 + 45,550);
        button3.mousePressed(clearField)
    }
    canvas.parent('lifegame');
}
function startgame(){
    isMove = true;
}
function stopgame(){
    isMove = false;
}
function clearField(){
    for(let y = 0;y < field.length;y++){
        for(let x = 0;x < field[y].length;x++){
            field[y][x] = 0;
        }
    }
    isMove = false;
}
function Createglider() {
    for(let y = 0;y < field.length;y++){
        for(let x = 0;x < field[y].length;x++){
            field[y][x] = 0;
        }
    }
    field[1][2] = 1;
    field[2][3] = 1;
    field[3][1] = 1;
    field[3][2] = 1;
    field[3][3] = 1;
}
function drawField(field){//フィールドを描画
    for(let y = 0;y < field.length;y++){
        for(let x = 0;x < field[y].length;x++){
            if(field[y][x]==1){
                fill(0,0,0);
                rect(x*title_size, y * title_size, title_size, title_size);
            }else{
                fill(255,255,255);
                rect(x*title_size, y * title_size, title_size, title_size);
            }
        }
    }
}
function Sort_Field(field,x,y)
{
    let direction_x = [x + 1,x - 1,    x,    x,x + 1,x + 1,x - 1,x - 1];
    let direction_y = [    y,    y,y + 1,y - 1,y + 1,y - 1,y + 1,y - 1];
    let c = 0;
    for(let i = 0;i < direction;i++){
        if(direction_x[i]>=0 && direction_x[i] < field[0].length && direction_y[i]>=0 && direction_y[i] < field.length && field[direction_y[i]][direction_x[i]] == 1){
            c++;
        }
    }
    if(field[y][x] == 0 && c == 3){//生まれる
        return (0);
    }else if(c == 2 || c == 3){//そのまま
        return (-1);
    }else if(c < 2 || c > 3){//死滅
        return (1);
    }else{//そのまま
        return (-1);
    }
}
function draw(){//ゲームループ
    background(255);
      //500ミリ秒おきに
    if (millis() - timestamp > 150) {
        timestamp = millis();
        if(isMove){
            let b1 = 0;
            let d1 = 0;
            let born_x = new Array(field.length*field[0].length);
            let born_y = new Array(field.length*field[0].length);
            let died_x = new Array(field.length*field[0].length);
            let died_y = new Array(field.length*field[0].length);
            for(let y = 0;y < field.length;y++){
                for(let x = 0;x < field[y].length;x++){
                    let n = Sort_Field(field,x,y);
                    if(n==0){
                        born_x[b1]=x;
                        born_y[b1]=y;
                        b1++;
                    }else if(n==1){
                        died_x[d1]=x;
                        died_y[d1]=y;
                        d1++;
                    }
                }
            }
            for(let i = 0;i < b1;i++){
                field[born_y[i]][born_x[i]] = 1;
            }
            for(let i = 0;i < d1;i++){
                field[died_y[i]][died_x[i]] = 0;
            }
        }
    }
    drawField(field);
}
function mouseClicked(){
    field[floor(mouseY/title_size)][floor(mouseX/title_size)] = field[floor(mouseY/title_size)][floor(mouseX/title_size)] == 0 ? 1:0;
    console.log("タッチ");
}
