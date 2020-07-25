const cvs = document.getElementById("snake")
const ctx = cvs.getContext("2d")

//criando unidade box:
const box = 32

//carregando imagens
const ground = new Image()
ground.src = "img/ground.png"

const food = new Image()
food.src = "img/food.png"

//carregando arquivos de audio

const dead = new Audio()
const down = new Audio()
const eat = new Audio()
const left = new Audio()
const right = new Audio()
const up = new Audio()

dead.src = "audio/dead.mp3"
down.src = "audio/down.mp3"
eat.src = "audio/eat.mp3"
left.src = "audio/left.mp3"
right.src = "audio/right.mp3"
up.src = "audio/up.mp3"

//criando a cobra

