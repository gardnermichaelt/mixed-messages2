const robertBly = {
    ichFindeDich: [
        'I find you in all these things of the world',
        'that I love calmly, like a brother;',
        'in things no one cares for you brood like a seed;',
        'and to powerful things you give an immense power.',

        'Strength plays such a marvelous game--',
        'it moves through the things of the world like a servant,',
        'groping out in roots, tapering in trunks,',
        'and in the treetops like a rising from the dead.',

    ],
    daStiegEinBaum: [
        'A tree rising. What a pure growing!',
        'Orpheus is singing! A tree inside the ear!',
        'Silence, silence. Yet new buildings,',
        'signals, and changes went on in the silence.',

        'Animals created by silence came forward from the clear',
        'and relaxed forest where their lairs were,',
        'and it turned out the reason they were so full of silence',
        'was not cunning, and not terror,',

        'it was listening. Growling, yelping, grunting now',
        'seemed all nonsense to them. And where before',
        'there was hardly a shed where this listening could go,',

        'a rough shelter put up out of brushy longings,',
        'with an entrance gate whose poles were wobbly,',
        'you created a temple for them deep inside their ears.',
    ],
};

const stephenMitchell = {
    ichFindeDich: [
        'I find you, Lord, in all Things and in all',
        'my fellow creatures, pulsing with your life;',
        'as a tiny seed you sleep in what is small',
        'and in the vast you vastly yield yourself.',

        'The wonderous game that power plays with Things',
        'is to move in such submission through the world:',
        'groping in roots and growing thick in trunks',
        'and in treetops like a rising from the dead.',
    ],
    durchDenSich: [
        'What birds plunge through is not the intimate space',
        'in which you see all forms intensified.',
        '(Out in the Open, you would be denied',
        'your self, would disappear into that vastness.)',

        'Space reaches *from* us and construes the world:',
        'to know a tree, in its true element,',
        'throw inner space around it, from that pure',
        'abundance in you. Surround it with restaint.',
        'It has no limits. Not till it is held',
        'in your renouncing is it truly there.',
    ],
    daStiegEinBaum: [
        'A tree ascended there. Oh pure transcendence!',
        'Oh Orpheus sings! Oh tall tree in the ear!',
        'And all things hushed. Yet even in that silence',
        'a new beginning, beckoning, change appeared.',

        'Creatures of stillness crowned from the bright',
        'unbound forest, out of their lairs and nests;',
        'and it was not from any dullness, not',
        'from fear, that they wereso quiet in themselves,',

        'but from simply listening. Bellow, roar, shriek',
        'seemed small inside their hearts. And where there had been',
        'just a makeshift hut to receive the music,',

        'a shelter nailed up out of their darkest longing,',
        'with an entryway that shuddered in the wind--',
        'you built a temple deep inside their hearing.',
    ]
};
const damionSearls = {
    durchDenSich: [
        'What birds hurtle through is not the familiar sky',
        'that raises form and shape within you.',
        '(Out in the open, out there, you are denied',
        'to yourself and fade, fade farther forever.)',

        'Sky grabs out from us and translates things:',
        'that you might reach a tree in all its being',
        'fling inner sky around it, from that sky',
        'that abides in you. Ring it with measure.',
        'It will not edge itself. Only the pressure',
        'in your renouncing makes it truly tree.',
    ]
};

const poems = ['durchDenSich', 'ichFindeDich', 'daStiegEinBaum']

const poetsIch = [robertBly, stephenMitchell]

const poetsDurch = [stephenMitchell, damionSearls]

const poetsDa = [robertBly, stephenMitchell]

const getPoem = () => {
    return poems[Math.floor(Math.random() * 3)];
};

const getPoetIch = () => {
    return poetsIch[Math.floor(Math.random() * 2)];
};

const getPoetDurch = () => {
    return poetsDurch[Math.floor(Math.random() * 2)];
};

const getPoetDa = () => {
    return poetsDa[Math.floor(Math.random() * 2)];
};


const makePoem = () => {
const poem = getPoem();
    if (poem === 'durchDenSich') {
        for (let i = 0; i < 4; i++) {
            console.log(getPoetDurch().durchDenSich[i]);
        }
        console.log(' ');
        for (let i = 4; i < 10; i++) {
            console.log(getPoetDurch().durchDenSich[i]);
        }
    } else if (poem === 'ichFindeDich') {
        for (let i = 0; i < 4; i++) {
            console.log(getPoetIch().ichFindeDich[i]);
        } 
        console.log(' ');
        for (let i = 4; i < 8; i++) {
            console.log(getPoetIch().ichFindeDich[i]);
        } 
    } else if (poem === 'daStiegEinBaum') {
        for (let i = 0; i < 4; i++) {
            console.log(getPoetDa().daStiegEinBaum[i]);
        }
        console.log(' ');
        for (let i = 4; i < 8; i++) {
            console.log(getPoetDa().daStiegEinBaum[i]);
        }
        console.log(' ');
        for (let i = 8; i < 11; i++) {
            console.log(getPoetDa().daStiegEinBaum[i]);
        }
        console.log(' ');
        for (let i = 11; i < 14; i++) {
            console.log(getPoetDa().daStiegEinBaum[i]);
        }
    }

}

makePoem();