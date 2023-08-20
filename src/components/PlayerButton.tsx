'use client';
import { useMutation, useQuery } from 'convex/react';
import { api } from '../../convex/_generated/api';
import { Doc, Id } from '../../convex/_generated/dataModel';
import { useEffect, useRef, useState } from 'react';
import { SelectPlayer } from './Player';
import { ViewportContext } from './Game';
import { createContext, useContext } from 'react';
import { Character } from './Character';
import { useTick } from '@pixi/react';
import { getPoseFromMotion } from '../../convex/lib/physics';
import { Pose } from '../../convex/schema';

// Inside your component

export default function PlayerButton(
  { player, 
    selectPlayer,
  }:{
    player: Doc<'players'>;
    selectPlayer: SelectPlayer;
  }) {
  const playerState = useQuery(api.players.playerState, {
    playerId: player._id,
  });
  const character = useQuery(api.players.characterData, {
    characterId: player.characterId,
  });
  const viewportRef = useContext(ViewportContext);
  const handleClick = () => {
    if (playerState) {
      selectPlayer(playerState.id);
    }
  };

  const [pose, setPose] = useState<Pose>();
  const time = useRef(0);

  return (
    <>
      <a
        className="button text-white shadow-solid text-2xl pointer-events-auto"
        onClick={handleClick}
        title="Click on a character to see what they have been talking about."
      >
        <div className="inline-block bg-clay-700">
          <span>
            <div className="inline-flex items-center gap-4">
            {playerState?.name}
            </div>
          </span>
        </div>
      </a>
    </>
  );
}

