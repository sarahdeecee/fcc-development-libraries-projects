import * as React from 'react';
import {useState, useEffect} from 'react';
import Quote from './Quote';
import { Button, Card, CardActions, IconButton, Box, Skeleton } from '@mui/material';
import { Twitter } from '@mui/icons-material'

function QuoteBox() {
  const [quote, setQuotes] = useState({});
  const [newQuote, setNewQuote] = useState(true);

  useEffect(() => {
    if (newQuote) {
      setNewQuote(false);
      fetch("https://animechan.vercel.app/api/random")
        .then(res => res.json())
        .then(
          (result) => {
            setQuotes(result);
            console.log(result);
          },
          (error) => {
            console.log('Error >>>>> ',error);
          }
        )
    }
  }, [newQuote])

  const handleNewQuote = () => {
    setNewQuote(true);
  }

  const TWITTER_URL = 'https://twitter.com/intent/tweet?hashtags=quotes,anime,freeCodeCamp&text=' + encodeURIComponent(`"${quote.quote} - ${quote.character} (${quote.anime})`);

  return (
    <>
      {quote.quote ?
        <Card id="quote-box">
          <Quote quote={quote} />
          <CardActions sx={{display: 'flex', justifyContent: 'space-between'}}>
            <Box>
              Share: <a href={TWITTER_URL}>
                <IconButton color="primary" id="tweet-quote" component="span" aria-label="Post on Twitter" variant="contained">
                  <Twitter />
                </IconButton>
              </a>
            </Box>
            <Button id="new-quote" variant="contained"
              onClick={handleNewQuote}
              style={{
                backgroundColor: "#203A43",
                fontWeight: "700"
            }}>New Quote</Button>
          </CardActions>
        </Card>
      : <Skeleton sx={{ bgcolor: 'white.900' }} variant="rectangular" id="quote-load" />
      }
      </>
  );
}

export default QuoteBox;