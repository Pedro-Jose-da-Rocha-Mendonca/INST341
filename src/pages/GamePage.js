import { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { getGameById } from '../utils/gameData';
import Layout from '../components/Layout';
import GameDetails from '../components/Games/GameDetails';

export default function GamePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [game, setGame] = useState(null);
  
  useEffect(() => {
    const foundGame = getGameById(id);
    if (foundGame) {
      setGame(foundGame);
    }
  }, [id]);

  if (!game) {
    return (
      <Layout title="Game Not Found">
        <div className="max-w-4xl mx-auto p-6 text-center">
          <h1 className="text-3xl font-bold mb-6">Game Not Found</h1>
          <p className="mb-6">Sorry, but the game you're looking for doesn't exist in our database.</p>
          <Link to="/" className="text-blue-600 hover:underline">
            Return to Home
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title={`${game.title} | Game Collection Hub`}>
      <div className="content-container">
        <Link to="/" className="mb-6 block">
          &larr; Back to Home
        </Link>
        
        <GameDetails game={game} />
      </div>
    </Layout>
  );
}
