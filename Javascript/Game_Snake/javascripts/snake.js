const cvs = document.getElementById("snake")
const ctx = cvs.getContext("2d")

//criando unidade box:
const box = 32

//carregando imagens
const ground = new Image()
ground.src