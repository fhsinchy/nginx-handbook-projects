const crypto = require('crypto');
const express = require('express');

const app = express();
const data = {
    notes: [],
};

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'all notes',
        data: {
            notes: data.notes,
        }
    });
});

app.post('/', (req, res) => {
    const { title, text } = req.body;

    if (!title || !text) {
        res.status(400).json({
            status: 'fail',
            message: 'title and text is required'
        });
    } else {
        const note = {
            id: crypto.randomBytes(8).toString('hex'),
            title,
            text,
        };
    
        data.notes.push(note);
    
        res.status(201).json({
            status: 'success',
            message: 'note created',
            data: {
                note,
            }
        });
    }
});

app.get('/:id', (req, res) => {
    const note = data.notes.find((note) => note.id === req.params.id);

    if (!note) {
        res.status(404).json({
            status: 'fail',
            message: 'not found'
        });
    } else {
        res.status(200).json({
            status: 'success',
            message: 'single note',
            data: {
                note,
            }
        });
    }
});

app.put('/:id', (req, res) => {
    const index = data.notes.map((note) => note.id).indexOf(req.params.id);

    if (index === -1) {
        res.status(404).json({
            status: 'fail',
            message: 'not found'
        });
    } else {
        data.notes[index].title = req.body.title ? req.body.title : data.notes[index].title,
        data.notes[index].text = req.body.text ? req.body.text : data.notes[index].text,

        res.status(200).json({
            status: 'success',
            message: 'note updated',
            data: {
                note: data.notes[index],
            }
        });
    }
});

app.delete('/:id', (req, res) => {
    const index = data.notes.map((note) => note.id).indexOf(req.params.id);

    if (index === -1) {
        res.status(404).json({
            status: 'fail',
            message: 'not found'
        });
    } else {
        data.notes.splice(index, 1);


        res.status(200).json({
            status: 'success',
            message: 'note deleted',
            data: {
                note: null,
            }
        });
    }
});

app.listen(3000, () => {
    console.log('listening at http://localhost:3000');
});