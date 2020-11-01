const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

const majorSchem = {
  notes: [0, 2, 4, 5, 7, 9, 11],
  min: [2, 4, 9],
  dim: [11]
};
const minorSchem = {
  notes: [0, 2, 3, 5, 7, 8, 10],
  min: [0, 5, 7],
  dim: [2]
}


const diezeBemol = {
  '0': {
    diese: '',
    dieseGammes: ['C', 'Amin'],
    bemol: '',
    bemolGammes: ['C', 'Amin'],
  },
  '1': {
    diese: 'F',
    dieseGammes: ['G', 'Emin'],
    bemol: 'B',
    bemolGammes: ['F', 'Dmin']
  },
  '2': {
    diese: 'C',
    dieseGammes: ['D', 'Bmin'],
    bemol: 'E',
    bemolGammes: ['Bb', 'Gmin']
  },
  '3': {
    diese: 'G',
    dieseGammes: ['A', 'F#min'],
    bemol: 'A',
    bemolGammes: ['Eb', 'Cmin']
  },
  '4': {
    diese: 'D',
    dieseGammes: ['E', 'C#min'],
    bemol: 'D',
    bemolGammes: ['Ab', 'Fmin']
  },
  '5': {
    diese: 'A',
    dieseGammes: ['B', 'G#min'],
    bemol: 'G',
    bemolGammes: ['Db', 'Bbmin']
  },
  '6': {
    diese: 'E',
    dieseGammes: ['F#', 'D#min'],
    bemol: 'C',
    bemolGammes: ['Gb', 'Ebmin']
  },
  '7': {
    diese: 'B',
    dieseGammes: ['C#', 'A#min'],
    bemol: 'F',
    bemolGammes: ['Cb', 'Abmin']
  },
};

const notesDieseBemol = [
  ['C#', 'Db'],
  ['D#', 'Eb'],
  ['F#', 'Gb'],
  ['G#', 'Ab'],
  ['A#', 'Bb'],
]

function getNotesDieseAndBemol(note) {
  for (let ndb of notesDieseBemol) {
    if (ndb.includes(note))
      return [ndb[0].split('#')[0], ndb[1].split('b')[0]];
  }
}

function findGammesWithNotes(notes) {
  let gamesSelected = [];
  let gamesSelectedFilledOnes = false;

  for (let note of notes) {
    let bemolFound = false;
    let dieseFound = false;
    let noteGammes = [];

    for (let [nb, element] of Object.entries(diezeBemol)) {
      if (note.includes('#') || note.includes('b')) {
        let [noteDiese, noteBemol] = getNotesDieseAndBemol(note);

        // console.log({e: element.diese, noteDiese});
        if (element.diese == noteDiese) {
          dieseFound = true;
        }
        if (dieseFound) {
          noteGammes = noteGammes.concat(element.dieseGammes);
        }
        if (element.bemol == noteBemol) {
          bemolFound = true;
        }
        if (bemolFound) {
          noteGammes = noteGammes.concat(element.bemolGammes);
        }
      } else {
        if (element.diese == note) {
          dieseFound = true;
        }
        if (!dieseFound) {
          noteGammes = noteGammes.concat(element.dieseGammes);
        }

        if (element.bemol == note) {
          bemolFound = true;
        }
        if (!bemolFound) {
          noteGammes = noteGammes.concat(element.bemolGammes);
        }
      }
    }

    if (!gamesSelectedFilledOnes) {
      gamesSelected = noteGammes;
      gamesSelectedFilledOnes = true;
    } else {
      gamesSelected = gamesSelected.filter(gamme => noteGammes.includes(gamme));
    }
  }

  gamesSelected = [...new Set(gamesSelected)];

  return gamesSelected;

}

function getAllNoteStartedWith(noteToStart) {
  let newNotes = [];
  let notesHere = [...notes];

  for (let note of [...notes]) {
    if (note == noteToStart) {
      return notesHere.concat(newNotes);
    } else {
      newNotes.push(note);
      notesHere.splice(notesHere.indexOf(note), 1);
    }
  }
}

function getNotesFromSchema(notes, schema) {
  let notesSelected = [];

  for (let is of schema.notes) {
    let min = schema.min.includes(is) ? 'min' : '';
    let dim = schema.dim.includes(is) ? 'dim' : '';
    notesSelected.push(notes[is] + dim + min);
  }
  return notesSelected;
}

function showNotesSelected(notesSelected) {
  document.querySelector('.notes-selected').textContent = notesSelected.join(', ');
  if (notesSelected.length > 0)
    document.querySelector('.note-selected-container').classList.add('has-notes');
  else
    document.querySelector('.note-selected-container').classList.remove('has-notes');

  for (let keyboardNote of document.querySelectorAll('.keyboard-note')) {
    if (notesSelected.includes(keyboardNote.dataset.note)) {
      keyboardNote.classList.add('selected');
    } else {
      keyboardNote.classList.remove('selected');
    }
  }


  let $gammesResults = document.querySelector('.gammes-result')
  $gammesResults.innerHTML = '';

  findGammesWithNotes(notesSelected).forEach(note => {
    let span = document.createElement('span');
    span.dataset.note = note;
    span.classList.add('gamme-to-pick')
    span.textContent = note;
    $gammesResults.appendChild(span)
  })
}

function showNotesInGame(notes, schema) {
  let gammeNotesWithMinDim = getNotesFromSchema(notes, schema);
  let gammeNotes = gammeNotesWithMinDim.map(note => {
    if (note.includes('min'))
      return note.split('min')[0];
    else if (note.includes('dim'))
      return note.split('dim')[0];
    else
      return note
  })

  // document.querySelector('.gamme-selected-notes').textContent = gammeNotesWithMinDim.join(', ');
  document.querySelector('.gamme-selected-notes').innerHTML = "";
  gammeNotesWithMinDim.forEach(accord => {
    let span = document.createElement('span');
    span.setAttribute('data-accord', accord);
    span.textContent = accord;
    span.classList.add('chord-to-pick');
    document.querySelector('.gamme-selected-notes').appendChild(span);
  })

  for (let keyboardNote of document.querySelectorAll('.keyboard-note')) {
    if (gammeNotes.includes(keyboardNote.dataset.note)) {
      keyboardNote.classList.add('in-game');
    } else {
      keyboardNote.classList.remove('in-game');
    }
  }
}

function clearNoteInGame() {
  for (let keyboardNote of document.querySelectorAll('.keyboard-note')) {
    keyboardNote.classList.remove('in-game');
  }
}

function readKeyboard() {

  let notesSelected = [];

  document.querySelector('.keyboard').addEventListener('click', event => {
    let mainTarget = event.target.classList.contains('keyboard-note') ? event.target : event.target.closest('keyboard-note');

    if (notesSelected.includes(mainTarget.dataset.note)) {
      notesSelected.splice(notesSelected.indexOf(mainTarget.dataset.note), 1);
    } else {
      notesSelected.push(mainTarget.dataset.note);
    }

    showNotesSelected(notesSelected);


  })
}

function readInput() {
  document.querySelector('.input-game').addEventListener('keyup', event => {
    showNoteInGammeFromInput(event.target)
  })
}

function showNoteInGammeFromInput(target) {
  let note = target.value.split('min')[0].toUpperCase();
  let minor = target.value.includes('min') || target.value.includes('MIN')
  let notes = getAllNoteStartedWith(note);
  let schema = minor ? minorSchem : majorSchem;

  if (note && schema && notes) {
    showNotesInGame(notes, schema)
  } else {
    document.querySelector('.gamme-selected-notes').textContent = '';
    clearNoteInGame()
  }
}

function readGammesResult() {
  document.querySelector('.gammes-result').addEventListener('click', event => {
    if (event.target.dataset && event.target.dataset.note) {
      document.querySelector('.input-game').value = event.target.dataset.note;
      showNoteInGammeFromInput(document.querySelector('.input-game'));
    }
  })
}

function readAccords(){
  document.querySelector('.gamme-selected-notes').addEventListener('click', event => {
    if(event.target.dataset.accord){
      openAccordList(event.target.dataset.accord);
    }
  })
}

async function openAccordList(accord){

  document.querySelector('.chords-container').classList.add('open');
  let accords = await fetch('https://api.uberchord.com/v1/chords?nameLike='+accord).then(data=>{
    return data.json();
  })

  document.querySelector('.chords-container table').innerHTML = "";

  for(let acc of accords){
    document.querySelector('.chords-container table').appendChild(getChordTbody(acc));
  }

}

function getChordTbody(chord){
  let tbody = document.createElement('tbody');
  tbody.innerHTML = `
    <tbody>
      <tr>
        <th>chordName</th>
        <td class="chord-name">${chord.chordName}</td>
      </tr>
      <tr>
        <th>fingering</th>
        <td class="chord-fingering">${chord.fingering}</td>
      </tr>
      <tr>
        <th>strings</th>
        <td class="chord-strings">${chord.strings}</td>
      </tr>
      <tr>
        <th>tones</th>
        <td class="chord-tones">${chord.tones}</td>
      </tr>
    </tbody>
  `;
  return tbody;
}


document.querySelector('.note-selected-clear').addEventListener('click', event => {
  showNotesSelected([]);
})

document.querySelector('.chords-container .close-chords-container').addEventListener('click', event => {
  document.querySelector('.chords-container').classList.remove('open');
})

readKeyboard();

readInput();

readGammesResult();

readAccords();