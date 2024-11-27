import { useState } from "react";
import { Typography, Container, Button, List, ListItem, TextField, IconButton, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function TodoMaterial() {
    const [todo, setTodo] = useState([]);
    const [input, setInput] = useState('');
    const [edit, setEdit] = useState(null);
    const [editInput, setEditInput] = useState("");

    const addItem = (e) => {
        e.preventDefault();


        setTodo([...todo, input]);
        setInput('');
    };
    const removeItem = (index) => {
        setTodo(todo.filter((_, i) => i !== index));
    };

    const updateItem = (index) => {
        setEdit(index);
        setEditInput(todo[index]);
    }

    const saveEdit = (index) => {
        const updatedTodos = [...todo];
        updatedTodos[index] = editInput;
        setTodo(updatedTodos);
        setEdit(null);
        setEditInput('');
    };
    return (


        <div
            style={{
                backgroundImage: 'url("chris-boland-95Zfx5Hu_RA-unsplash.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh',
                paddingTop: '2em',
            }}
        >

            <Container maxwidth="sm" style={{ marginTop: '2em' }}>
                <Typography variant="h3" align="center" >
                    To Do App
                </Typography>
                <form onSubmit={addItem} style={{ display: "flex", alignItems: "center", flexDirection: "column", gap: "10px", marginTop: "20px" }}>
                    <TextField
                        type="text"

                        value={input}
                        variant="outlined"
                        onChange={(e) => setInput(e.target.value)}
                        label="Add a new to-do"

                    />
                    <Button variant="contained" color="primary" type="submit">Add</Button>
                </form>
                <List>
                    {todo.map((todo, index) => (
                        <ListItem
                            key={index}
                            secondaryAction=
                            <IconButton color="primary" edge="start" onClick={() => removeItem(index)}><DeleteIcon /> </IconButton>
                            style={{
                                backgroundColor: 'white',
                                marginBottom: '5px',
                                borderRadius: '6px',
                                maxWidth: '50%',
                                margin: '10px auto',
                            }}>
                            <ListItemText primary={todo} />
                        </ListItem>
                    ))}
                </List>
            </Container>
        </div>
    );

}

export default TodoMaterial

