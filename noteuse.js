// const notes = ['Do', 'Do#', 'Ré', 'Mi', 'Fa', 'Sol', 'La', 'Si'];

// const games = [
//   'C',
//   'C#',
// ];


/**
 * Inscrire une note, retrouver les gammes possible
 */

// const gammes = [{
//     name: 'C',
//     notes: [
//       notes.c, notes.d, notes.e, notes.f, notes.g, notes.a, notes.b
//     ]
//   },
//   {
//     name: 'Cmin',
//     notes: [
//       notes.c, notes.d, notes.eb, notes.f, notes.g, notes.ab, notes.bb
//     ]
//   },
//   {
//     name: 'C#',
//     notes: [
//       notes.cd, notes.rd, notes.f, notes.fd, notes.gd, notes.ab, notes.c
//     ]
//   },
//   {
//     name: 'C#min',
//     notes: [
//       notes.cd, notes.rd, notes.f, notes.fd, notes.gd, notes.ab, notes.c
//     ]
//   },


//   {
//     name: 'D',
//     notes: [
//       notes.d, notes.e, notes.fd, notes.g, notes.a, notes.b, notes.cd,
//     ]
//   },
//   {
//     name: 'Dmin',
//     notes: [
//       notes.d, notes.e, notes.f, notes.g, notes.a, notes.bb, notes.c
//     ]
//   },
//   {
//     name: 'D#',
//     notes: [
//       notes.d, notes.e, notes.f, notes.g, notes.a, notes.b, notes.c
//     ]
//   },
//   {
//     name: 'D#min',
//     notes: [
//       notes.d, notes.e, notes.f, notes.g, notes.a, notes.b, notes.c
//     ]
//   },

// ]

/**
 * 
 * Dans toutes les gammes, vérifier si elle contient les notes indiqués,
 * si tel est le cas, la renvoyer.
 */



// let gammesWithNotes = [];

// for (let gamme of gammes) {
//   let hasAllNotes = true;
//   for (let note of notes) {
//     if (!gamme.notes.includes(note)) {
//       hasAllNotes = false;
//     }
//   }
//   if (hasAllNotes)
//     gammesWithNotes.push(game);
// }

/*
const gammes = [{
    name: 'C',
    notes: [
      notes.c, notes.d, notes.e, notes.f, notes.g, notes.a, notes.b
    ]
  },
  {
    name: 'Amin',
    notes: [
      notes.c, notes.d, notes.e, notes.f, notes.g, notes.a, notes.b
    ]
  },
  // 1 # f
  {
    name: 'G',
    notes: [
      notes.c, notes.d, notes.e, notes.fd, notes.g, notes.a, notes.b
    ]
  },
  {
    name: 'Emin',
    notes: [
      notes.c, notes.d, notes.e, notes.fd, notes.g, notes.a, notes.b
    ]
  },
  // 2 # f - c
  {
    name: 'D',
    notes: [
      notes.cd, notes.d, notes.e, notes.fd, notes.g, notes.a, notes.b
    ]
  },
  {
    name: 'Bmin',
    notes: [
      notes.cd, notes.d, notes.e, notes.fd, notes.g, notes.a, notes.b
    ]
  },
  // 3 # f - c - g
  {
    name: 'A',
    notes: [
      notes.cd, notes.d, notes.e, notes.fd, notes.gd, notes.a, notes.b
    ]
  },
  {
    name: 'F#min',
    notes: [
      notes.cd, notes.d, notes.e, notes.fd, notes.gd, notes.a, notes.b
    ]
  },

  // 4 # f - c - g - d
  {
    name: 'E',
    notes: [
      notes.cd, notes.dd, notes.e, notes.fd, notes.gd, notes.a, notes.b
    ]
  },
  {
    name: 'C#min',
    notes: [
      notes.cd, notes.dd, notes.e, notes.fd, notes.gd, notes.a, notes.b
    ]
  },
  // 5 # f - c - g - d - a
  {
    name: 'B',
    notes: [
      notes.cd, notes.dd, notes.e, notes.fd, notes.gd, notes.ad, notes.b
    ]
  },
  {
    name: 'G#min',
    notes: [
      notes.cd, notes.dd, notes.e, notes.fd, notes.gd, notes.ad, notes.b
    ]
  },
  // 6 # f - c - g - d - a - e
  {
    name: 'F#',
    notes: [
      notes.cd, notes.dd, notes.ed, notes.fd, notes.gd, notes.ad, notes.b
    ]
  },
  {
    name: 'D#min',
    notes: [
      notes.cd, notes.dd, notes.ed, notes.fd, notes.gd, notes.ad, notes.b
    ]
  },
  // 7 # f - c - g - d - a - e - b
  {
    name: 'C#',
    notes: [
      notes.cd, notes.dd, notes.ed, notes.fd, notes.gd, notes.ad, notes.bd
    ]
  },
  {
    name: 'A#min',
    notes: [
      notes.cd, notes.dd, notes.ed, notes.fd, notes.gd, notes.ad, notes.bd
    ]
  }
]
*/