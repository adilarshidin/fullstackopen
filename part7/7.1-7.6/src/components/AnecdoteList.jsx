import { TableContainer, Paper, Table, TableBody, TableRow, TableCell } from '@mui/material';
import { Link } from 'react-router-dom';


const AnecdoteList = ({ anecdotes }) => (
  <div>
    <h2>Anecdotes</h2>
    <TableContainer component={Paper}>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>
              Content
            </TableCell>
            <TableCell>
              Author
            </TableCell>
            <TableCell>
              Votes
            </TableCell>
          </TableRow>
          {anecdotes.map(anecdote =>
            <TableRow key={anecdote.id}>
              <TableCell>
                <Link to={`/anecdotes/${anecdote.id}`}>{anecdote.content}</Link>
              </TableCell>
              <TableCell>
                {anecdote.author}
              </TableCell>
              <TableCell>
                {anecdote.votes}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  </div>
);

export default AnecdoteList;
