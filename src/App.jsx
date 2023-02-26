import { useState } from "react";
import "./App.css";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function App() {
  const [amount, setAmount] = useState(2000);

  return (
    <div className="App">
      <h1>BUDGET RULE</h1>
      <Income amount={amount} setAmount={setAmount} />
      <div className="component">
        <Needs amount={amount} setAmount={setAmount} />
        <Wants amount={amount} setAmount={setAmount} />
        <Savings amount={amount} setAmount={setAmount} />
      </div>
    </div>
  );
}

export default App;

function Income({ amount, setAmount }) {
  return (
    <div className="income">
      <div>
        <h3>Enter your income in numbers</h3>
        <TextField
          id="standard-basic"
          variant="standard"
          color="warning"
          defaultValue={amount}
          focused
          onChange={(event) => setAmount(event.target.value)}
        />
      </div>
    </div>
  );
}

function Needs({ amount}) {
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5WcPKRfz4ZBpYamRQ_eX9ZdA-lILn75GtDQ&usqp=CAU"
          title="needs"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            NEEDS
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Income:{amount}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            50% of income:{(amount * 50) / 100}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}

function Wants({ amount}) {
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://thumbs.dreamstime.com/z/illustration-people-consumer-needs-wants-27368663.jpg"
          title="wants"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            WANTS
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Income:{amount}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            30% of income:{(amount * 30) / 100}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}

function Savings({ amount}) {
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://media.istockphoto.com/id/1301055567/vector/big-piggy-bank-woman-is-sitting-with-laptop-graph-up-stack-of-gold-coins-bank-budget-finance.jpg?s=612x612&w=0&k=20&c=7s2eUoeMBSENqnq5MZqFLAxf-uqfQRJoBew7-qdVL3Y="
          title="savings"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            SAVINGS
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Income:{amount}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            20% of income:{(amount * 20) / 100}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}
