'use client';
import { SignedIn, SignedOut, UserButton, auth } from '@clerk/nextjs';
import GameWrapper from '@/components/GameWrapper';
import FreezeButton from '@/components/FreezeButton';
import PlayerButton from '@/components/PlayerButton';
import LoginButton from '@/components/LoginButton';
import { useState } from 'react';
import { ConvexProvider, useConvex, useMutation, useQuery } from 'convex/react';
import { Id } from '../../convex/_generated/dataModel';
import { api } from '../../convex/_generated/api';



export default function Home() {
  const [selectedPlayer, setSelectedPlayer] = useState<Id<'players'>>();
  const worldState = useQuery(api.players.getWorld, {});
  if (!worldState) return null;
  const { players } = worldState;


  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between font-body game-background">
      <div className="p-6 absolute top-0 right-0 z-10 text-2xl">
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>

        <SignedOut>
          <LoginButton />
        </SignedOut>
        
      </div>

      <div className="w-full min-h-screen relative isolate overflow-hidden p-6 lg:p-8 shadow-2xl flex flex-col justify-center">
        <h1 className="mx-auto text-center text-6xl sm:text-8xl lg:text-9xl font-bold font-display leading-none tracking-wide game-title">
          AI Office
        </h1>

        <p className="mx-auto my-4 text-center text-xl sm:text-2xl text-white leading-tight shadow-solid">
          A virtual office with some familiar characters...
        </p>

        <GameWrapper selectedPlayer={selectedPlayer} setSelectedPlayer={setSelectedPlayer} />

        <footer className="absolute bottom-0 left-0 w-full flex items-center mt-4 gap-6 p-6 flex-wrap pointer-events-none">
          <div className="flex gap-4 flex-grow pointer-events-none justify-center">
            {players.map((player) => (
              <PlayerButton 
                player={player} selectPlayer={setSelectedPlayer}
                />
            ))}
            
          </div>
        </footer>
      </div>
    </main>
  );
}
