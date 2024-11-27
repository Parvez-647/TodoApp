import { useState } from 'react';
import { TextField, Button, List, ListItem, ListItemText, IconButton, Typography, Container } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';

function App() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');
    const [isEditing, setIsEditing] = useState(null);
    const [editInput, setEditInput] = useState('');

    const addTodo = (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        setTodos([...todos, input]);
        setInput('');
    };

    const removeTodo = (index) => {
        setTodos(todos.filter((_, i) => i !== index));
    };

    const startEditing = (index) => {
        setIsEditing(index);
        setEditInput(todos[index]);
    };

    const saveEdit = (index) => {
        const updatedTodos = [...todos];
        updatedTodos[index] = editInput;
        setTodos(updatedTodos);
        setIsEditing(null);
        setEditInput('');
    };

    return (
        <Container maxWidth="sm" style={{ marginTop: '2em', textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom>
                Simple To-Do App
            </Typography>
            <form onSubmit={addTodo} style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                <TextField
                    label="Add a new to-do"
                    variant="outlined"
                    fullWidth
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <Button variant="contained" color="primary" type="submit">
                    Add
                </Button>
            </form>
            <List>
                {todos.map((todo, index) => (
                    <ListItem
                        key={index}
                        style={{ backgroundColor: '#f9f9f9', marginBottom: '10px', borderRadius: '5px' }}
                    >
                        {isEditing === index ? (
                            <TextField
                                value={editInput}
                                onChange={(e) => setEditInput(e.target.value)}
                                fullWidth
                            />
                        ) : (
                            <ListItemText primary={todo} />
                        )}
                        {isEditing === index ? (
                            <IconButton edge="end" color="primary" onClick={() => saveEdit(index)}>
                                <CheckIcon />
                            </IconButton>
                        ) : (
                            <IconButton edge="end" color="default" onClick={() => startEditing(index)}>
                                <EditIcon />
                            </IconButton>
                        )}
                        <IconButton edge="end" color="secondary" onClick={() => removeTodo(index)}>
                            <DeleteIcon />
                        </IconButton>
                    </ListItem>
                ))}
            </List>
        </Container>
    );
}

export default App;




