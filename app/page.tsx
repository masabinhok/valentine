'use client';

import happyCat1 from '@/public/happycat1.png';
import questionCat from '@/public/questioncat.png';
import cryCat from '@/public/crycat.png';
import sadCat from '@/public/sadcat.png';
import chocolate from '@/public/chocolate.png';
import flower from '@/public/flower.png';
import bracelet from '@/public/bracelet.png';
import teaseCat from '@/public/teasecat.png';
import teddy from '@/public/teddy.png';
import letter from '@/public/letter.png';
import Image from 'next/image';
import { useState } from 'react';
import DraggableGift from '@/components/DraggableGift';
type cursorType = 'default' | 'yes' | 'no';
import Link from 'next/link';

const questions: string[] = [
  "Will you be my valentine?",
  "What if I give you a chocolate?",
  "What if I give you a flower?",
  "What if I give you this bracelet?",
  "What if I give you this teddy?",
  "Even if I write you this beautiful letter?",
]

export default function Home() {
  const [cursor, setCursor] = useState<cursorType>('default');
  const [rejectionCount, setRejectionCount] = useState(0);

  const handleRejection = () => {
    const noButton = document.getElementById('noButton');
    if (noButton && rejectionCount < 69) {
      setRejectionCount((prev) => prev + 10);
      noButton.style.position = 'absolute';
      noButton.style.top = `${Math.random() * 50}vh`;
      noButton.style.left = `${Math.random() * 50}vw`;
    }
  }

  return (
    <main className="bg-cotton text-grape flex flex-col items-center justify-center  min-h-screen w-full p-5">

      <Image className="aspect-square w-48 rounded-xl mb-5 object-cover"
        src={
          rejectionCount == 69 ? teaseCat :
            cursor === 'yes' ? happyCat1 :
              cursor === 'no' ? cryCat :
                rejectionCount >= questions.length * 10 ? sadCat : questionCat
        }
        alt='happycat' />
      <h1 className="text-2xl  text-center font-bold">
        {rejectionCount > 68 ? 'Fine, I will ask someone elseee!' : rejectionCount >= questions.length * 10 ? 'Please say yesss' : `${questions[Math.floor(rejectionCount / 10)]}`}
      </h1>
      {rejectionCount >= 10 && (
        <DraggableGift giftProp={chocolate} />
      )}
      {rejectionCount >= 20 && (
        <DraggableGift giftProp={flower} />
      )}
      {rejectionCount >= 30 && (
        <DraggableGift giftProp={bracelet} />
      )}
      {rejectionCount >= 40 && (
        <DraggableGift giftProp={teddy} />
      )}
      {rejectionCount >= 50 && (
        <DraggableGift giftProp={letter} opens={true} />
      )}
      <div className="flex flex-row gap-10">

        <button
          className={` ${rejectionCount > 0 ? 'px-20' : 'px-10'
            } py-2 rounded-lg text-white mt-5 bg-candy hover:bg-candy/70 border-2 z-10`}
          onMouseEnter={() => setCursor('yes')}
          onMouseLeave={() => setCursor('default')
          }
        >
          <Link href="/wifey">
            {rejectionCount > 68 ? "I wass kiddinggg, it's a yesssssssssss ml!" : "Yesss"}
          </Link>
        </button>
        <Link href="/sad">
          <button
            id='noButton'
            onMouseEnter={() => {
              setCursor('no');
              handleRejection();
            }}
            className="bg-blue px-10 py-2 rounded-lg text-white mt-5 border-2 z-10 hover:bg-blue/70  ">
            {rejectionCount > 68 ? "Go for it, it's still a no." : "No wayyy"}
          </button></Link>
      </div>
      <div id="messageBox" className='flex flex-col items-center justify-center mt-10'>
        {rejectionCount > 0 && <h2 className="text-sm ">You've tried to reject me {rejectionCount} time{rejectionCount === 1 ? '' : 's'}!</h2>}
      </div>
      <div className='size-48 flex items-center justify-center text-center text-sm border-2 rounded-xl fixed bottom-10 right-10 border-grape p-5'>
        Drag your gifts here to claim them!
      </div>
    </main >
  );
}
