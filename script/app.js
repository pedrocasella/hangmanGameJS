const play = document.getElementById('play-button')
const form = document.getElementById('config-form')
const configDisplay = document.getElementById('config-game')
const gameDisplay = document.getElementById('game-display')

if(localStorage.getItem('word') != null){
    configDisplay.style.display = 'none'
    gameDisplay.style.display = "block"
} 

play.addEventListener('click', ()=>{

    if( document.getElementById('word-input').value == ''){
        document.getElementById('label-word').style.animation = 'lose .5s ease-in'
        alert('Escreva uma frase ou uma palavra para começar o jogo')
        
    }else{
            document.getElementById('word-input').value = document.getElementById('word-input').value.toLowerCase()
            document.getElementById('word-input').value = document.getElementById('word-input').value.replace(/á/g, 'a').replace(/é/g, 'e').replace(/ó/g, 'o').replace(/í/g, 'i').replace(/ú/g, 'u').replace(/ç/g, 'c').replace(/ã/g, 'a').replace(/õ/g, 'o').replace(/ô/g, 'o').replace(/ê/g, 'e')


            const word = document.getElementById('word-input').value
            const tip = document.getElementById('tip-input').value
            const configDisplay = document.getElementById('config-game')

            localStorage.setItem('word', word)
            localStorage.setItem('tip', tip)

            window.location.reload()
        }
    
    

    //if the input is empty
    
})
document.addEventListener('DOMContentLoaded', ()=>{

    //tip system
    const tip = document.getElementById('tip-area')
    tip.innerText = localStorage.getItem('tip')
    
    //convert word to lines
    const wordDisplay = document.getElementById('word-write')
    wordDisplay.innerText = localStorage.getItem('word').replace(/a/g , ' _ ').replace(/b/g , ' _ ').replace(/c/g , ' _ ').replace(/d/g , ' _ ').replace(/e/g , ' _ ').replace(/f/g , ' _ ').replace(/g/g , ' _ ').replace(/h/g , ' _ ').replace(/i/g , ' _ ').replace(/j/g , ' _ ').replace(/k/g , ' _ ').replace(/l/g , ' _ ').replace(/m/g , ' _ ').replace(/n/g , ' _ ').replace(/o/g , ' _ ').replace(/p/g , ' _ ').replace(/q/g , ' _ ').replace(/r/g , ' _ ').replace(/s/g , ' _ ').replace(/t/g , ' _ ').replace(/u/g , ' _ ').replace(/v/g , ' _ ').replace(/w/g , ' _ ').replace(/x/g , ' _ ').replace(/y/g , ' _ ').replace(/z/g , ' _ ')

    const letters = document.getElementsByClassName('letter')
    
    //Alphabet

    const alphabet = document.getElementById('alphabet')

    const a = document.getElementById('a')
    const b = document.getElementById('b')
    const c = document.getElementById('c')
    const d = document.getElementById('d')
    const e = document.getElementById('e')
    const f = document.getElementById('f')
    const g = document.getElementById('g')
    const h = document.getElementById('h')
    const i = document.getElementById('i')
    const j = document.getElementById('j')
    const k = document.getElementById('k')
    const l = document.getElementById('l')
    const m = document.getElementById('m')
    const n = document.getElementById('n')
    const o = document.getElementById('o')
    const p = document.getElementById('p')
    const q = document.getElementById('q')
    const r = document.getElementById('r')
    const s = document.getElementById('s')
    const t = document.getElementById('t')
    const u = document.getElementById('u')
    const v = document.getElementById('v')
    const w = document.getElementById('w')
    const x = document.getElementById('x')
    const y = document.getElementById('y')
    const z = document.getElementById('z')

    //set letter value

    a.addEventListener('click', ()=>{localStorage.setItem('value', a.children[0].innerText)})
    b.addEventListener('click', ()=>{localStorage.setItem('value', b.children[0].innerText)})
    c.addEventListener('click', ()=>{localStorage.setItem('value', c.children[0].innerText)})
    d.addEventListener('click', ()=>{localStorage.setItem('value', d.children[0].innerText)})
    e.addEventListener('click', ()=>{localStorage.setItem('value', e.children[0].innerText)})
    f.addEventListener('click', ()=>{localStorage.setItem('value', f.children[0].innerText)})
    g.addEventListener('click', ()=>{localStorage.setItem('value', g.children[0].innerText)})
    h.addEventListener('click', ()=>{localStorage.setItem('value', h.children[0].innerText)})
    i.addEventListener('click', ()=>{localStorage.setItem('value', i.children[0].innerText)})
    j.addEventListener('click', ()=>{localStorage.setItem('value', j.children[0].innerText)})
    k.addEventListener('click', ()=>{localStorage.setItem('value', k.children[0].innerText)})
    l.addEventListener('click', ()=>{localStorage.setItem('value', l.children[0].innerText)})
    m.addEventListener('click', ()=>{localStorage.setItem('value', m.children[0].innerText)})
    n.addEventListener('click', ()=>{localStorage.setItem('value', n.children[0].innerText)})
    o.addEventListener('click', ()=>{localStorage.setItem('value', o.children[0].innerText)})
    p.addEventListener('click', ()=>{localStorage.setItem('value', p.children[0].innerText)})
    q.addEventListener('click', ()=>{localStorage.setItem('value', q.children[0].innerText)})
    r.addEventListener('click', ()=>{localStorage.setItem('value', r.children[0].innerText)})
    s.addEventListener('click', ()=>{localStorage.setItem('value', s.children[0].innerText)})
    t.addEventListener('click', ()=>{localStorage.setItem('value', t.children[0].innerText)})
    u.addEventListener('click', ()=>{localStorage.setItem('value', u.children[0].innerText)})
    v.addEventListener('click', ()=>{localStorage.setItem('value', v.children[0].innerText)})
    w.addEventListener('click', ()=>{localStorage.setItem('value', w.children[0].innerText)})
    x.addEventListener('click', ()=>{localStorage.setItem('value', x.children[0].innerText)})
    y.addEventListener('click', ()=>{localStorage.setItem('value', y.children[0].innerText)})
    z.addEventListener('click', ()=>{localStorage.setItem('value', z.children[0].innerText)})

    //game system
    var failsCount = 0
    localStorage.setItem('failCount', failsCount)
    
    alphabet.addEventListener('click', ()=>{

        const wordDisplay = document.getElementById('word-write')
        const value = localStorage.getItem('value')
        const gibbet = document.getElementById('gibbet')
        
        

        if(localStorage.getItem('word').indexOf(value) != -1){
            console.log('correto')
            const position = localStorage.getItem('word').indexOf(value)
            localStorage.setItem('word', localStorage.getItem('word').replace(value, value.toUpperCase()))
            wordDisplay.innerText = localStorage.getItem('word').replace(/a/g , ' _ ').replace(/b/g , ' _ ').replace(/c/g , ' _ ').replace(/d/g , ' _ ').replace(/e/g , ' _ ').replace(/f/g , ' _ ').replace(/g/g , ' _ ').replace(/h/g , ' _ ').replace(/i/g , ' _ ').replace(/j/g , ' _ ').replace(/k/g , ' _ ').replace(/l/g , ' _ ').replace(/m/g , ' _ ').replace(/n/g , ' _ ').replace(/o/g , ' _ ').replace(/p/g , ' _ ').replace(/q/g , ' _ ').replace(/r/g , ' _ ').replace(/s/g , ' _ ').replace(/t/g , ' _ ').replace(/u/g , ' _ ').replace(/v/g , ' _ ').replace(/w/g , ' _ ').replace(/x/g , ' _ ').replace(/y/g , ' _ ').replace(/z/g , ' _ ')
        }else{
            const head = document.getElementById('head')
            const body = document.getElementById('body')
            const armLeft = document.getElementById('arm-left')
            const armRight = document.getElementById('arm-right')
            const legLeft = document.getElementById('leg-left')
            const legRight = document.getElementById('leg-right')

            failsCount = parseInt(localStorage.getItem('failCount')) + 1

            localStorage.setItem('failCount', failsCount)

            if(localStorage.getItem('failCount') == 1){
                head.style.display = 'block'
            }0

            if(localStorage.getItem('failCount') == 2){
                body.style.display = 'block'
            }

            if(localStorage.getItem('failCount') == 3){
                armLeft.style.display = 'block'
            }

            if(localStorage.getItem('failCount') == 4){
                armRight.style.display = 'block'
            }

            if(localStorage.getItem('failCount') == 5){
                legRight.style.display = 'block'
            }


            if(localStorage.getItem('failCount') == 6){
                legLeft.style.display = 'block'
            }
        }

        if(localStorage.getItem('failCount') == 6){
            wordDisplay.innerText = localStorage.getItem('word').toUpperCase()

            setTimeout(()=>{
                localStorage.clear()
                window.location.reload()
            }, 1000*4)
            
        }


        //Win Animation

        if(document.getElementById('word-write').innerText.indexOf('_') == -1 && localStorage.getItem('failCount') < 6){
            wordDisplay.style.animation = 'win .5s ease-in'
        }

        //Lose Animation
        if(document.getElementById('word-write').innerText.indexOf('_') == -1 && localStorage.getItem('failCount') == 6){
            wordDisplay.style.animation = 'lose .5s ease-in'
        }

    })
    
})

//Solo mode
const soloBtn = document.getElementById('solo-mode')

soloBtn.addEventListener('click', ()=>{
    const films = ['pantera negra', 'homem de ferro', 'velozes e furiosos', 'harry potter', 'viuva negra', 'marley e eu', 'carros', 'senhor dos aneis', 'as cronicas de narnia', 'stardust']
    const anime = ['tokyo goul', 'naruto', 'sword art online', 'jujutsu kaisen', 'one piece', 'black clover', 'dragon ball', 'full metal alchemist', 'boku no hero', 'boruto']
    const cartoon = ['hora de aventura', 'steven universo', 'apenas um show', 'looney tunes', 'max steel', 'jovens titans', 'billy e mandy', 'meninas super poderosas', 'as aventuras de flapjack', 'johnny test']
    const personFilms = ['tony stark', 'thanos', 'hermione granger', 'aslan', 'stephen strange', 'tristan thorn', 'thor', 'odin', 'tchala', 'frodo baggins' ]
    const personAnime = ['midoryia', 'robin', 'kirito', 'yami sukehiro', 'julius novachrono', 'bakugou', 'hinata', 'winry', 'edward', 'shikamaru']

    //wordlist separete for themes
    const wordlist = [films, anime, cartoon, personFilms, personAnime]
    //capture wordlist lenght
    const wordListLenght = wordlist.length
    //select the list after capture the length of wordlist
    const wordListPosition = Math.floor(Math.random() * wordListLenght)
    const listSelector = wordlist[wordListPosition]
    //capture the lenght of list selected
    const listSelectorLenght = listSelector.length
    //select one word of list selected
    localStorage.setItem('word', listSelector[Math.floor(Math.random() * listSelectorLenght)])

    //create tip

    if(wordListPosition == 0){
        localStorage.setItem('tip', 'Um filme')
    }
    if(wordListPosition == 1){
        localStorage.setItem('tip', 'Nome de Anime')
    }
    if(wordListPosition == 2){
        localStorage.setItem('tip', 'Nome de algum desenho animado')
    }
    if(wordListPosition == 3){
        localStorage.setItem('tip', 'Personagem de filme')
    }
    if(wordListPosition == 4){
        localStorage.setItem('tip', 'Personagem de Anime')
    }
    
    window.location.reload()
})

//Quit game

const quitBtn = document.getElementById('quit')

quitBtn.addEventListener('click', ()=>{
    localStorage.clear()
    window.location.reload()
})